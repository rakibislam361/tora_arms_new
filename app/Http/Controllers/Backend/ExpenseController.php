<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Backend\Account;
use App\Models\Backend\AccountHistory;
use App\Models\Backend\IncomeExpense;
use App\Models\Backend\ExpenseList;
use App\Models\Backend\Payer;
use App\Models\Backend\Payment;
use Illuminate\Support\Facades\Auth;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backend.content.expense.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $account = Account::get()->pluck('account_title', 'id');
        $expense = ExpenseList::where('expanse_type', 'expense')->get()->pluck('expanse_name', 'id');
        $payer = Payer::get()->pluck('phone', 'id');
        $payment = Payment::get()->pluck('payment_name', 'payment_name');
        return view('backend.content.expense.create', compact('account', 'expense', 'payer', 'payment'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $this->expanseFormValidation();
        if (!empty($request->file('voucher'))) {
            $attachment = uniqid() . '.' . $request->voucher->getClientOriginalExtension();
            $request->voucher->move(public_path('uploads/users'), $attachment);
            $data['voucher'] = $attachment;
        }

        $data['user_id'] = Auth::user()->id;
        $data['expense_type'] = 'expense';

        $amount = $request->amount;
        $account = Account::find($request->account_id);
        $acc_balance = (int)$account->balance;

        if ($amount <= $acc_balance) {
            $account->balance = $acc_balance - $amount;
            $account->save();
            $income_expense_id = IncomeExpense::insertGetId($data);

            AccountHistory::create([
                'account_id' => $account->id,
                'income_expense_id' => $income_expense_id,
                'expense_type' => 'expense',
                'expense_id' => $request->expense_id,
                'amount' => $amount,
                'payment_method' => $request->payment_method,
                'user_id' => auth()->user()->id,
                'transection_date' => $request->expense_date,
            ]);

            return response(["message", "Expanse added successfully"]);
        } else {
            return response(["message", "Your account balance is low, can't process this Transection"]);
        }

        return response(["message", "Something went wrong"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $expense_details = IncomeExpense::find($id);
        $account = Account::get()->pluck('account_title', 'id');
        $expense = ExpenseList::where('expanse_type', 'expense')->get()->pluck('expanse_name', 'id');
        $payer = Payer::get()->pluck('phone', 'id');
        $payment = Payment::get()->pluck('payment_name', 'payment_name');
        return view('backend.content.expense.edit', compact('expense_details', 'account', 'expense', 'payer', 'payment'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $this->expanseFormValidation();
        if (!empty($request->file('voucher'))) {
            $attachment = uniqid() . '.' . $request->voucher->getClientOriginalExtension();
            $request->voucher->move(public_path('uploads/users'), $attachment);
            $data['voucher'] = $attachment;
        }

        $account = Account::with('accountHistory')->where('id', $request->account_id)->first();
        $account_balance = get_account_balance($account);

        if ($account_balance >= $request->amount) {
            if (IncomeExpense::find($id)->update($data)) {
                AccountHistory::where('income_expense_id', $id)->update(['amount' => $request->amount]);
                return redirect()->back()->withFlashSuccess("Expenses Updated successfully");
            }
        } else {
            return redirect()->back()->withFlashWarning("Account doesn't have enough money");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (IncomeExpense::destroy($id)) {
            AccountHistory::where('income_expense_id', $id)->delete();
            return redirect()->back()->withFlashSuccess("Record deleted successfully");
        }
    }


    public function expenseOptionIndex()
    {
        return view('backend.content.expensehead.index');
    }

    public function expenseOptionCreate()
    {
    }

    public function expenseOptionStore(Request $request)
    {
        $date = $request->validate([
            'expanse_name' => 'required|max:200',
            'expanse_type' => 'required|max:200',
        ]);

        $date['user_id'] = auth()->user()->id;
        $expanse_option = ExpenseList::create($date);

        if (!$expanse_option) {
            return response(["Something went wrong !"]);
        }

        return response(["value" => $request->expanse_name, "Option created successfully"]);
    }
    public function expenseOptionEdit()
    {
    }

    public function expenseOptionUpdate()
    {
    }
    public function expenseOptionDestroy($id)
    {
        if (ExpenseList::destroy($id)) {
            return redirect()->back()->withFlashSuccess("Record deleted successfully");
        }
    }

    public function expanseFormValidation()
    {
        $data = request()->validate([
            'expense_date' => 'required|date',
            'amount' => 'required|numeric',
            'account_id' => 'nullable|string',
            'expense_id' => 'nullable|numeric',
            'payment_method' => 'nullable|string',
            'payer' => 'nullable|string|max:100',
            'reference' => 'nullable|string',
            'voucher' => 'nullable|file',
            'extra_note' => 'nullable|string',
        ]);
        return $data;
    }
}
