<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Backend\Account;
use App\Models\Backend\AccountHistory;
use App\Models\Backend\ExpenseList;
use App\Models\Backend\IncomeExpense;
use App\Models\Backend\Payer;
use App\Models\Backend\Payment;
use Illuminate\Support\Facades\Auth;

class IncomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backend.content.income.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $account = Account::get()->pluck('account_title', 'id');
        $income = ExpenseList::where('expanse_type', 'income')->get()->pluck('expanse_name', 'id');
        $payer = Payer::get()->pluck('phone', 'id');
        $payment = Payment::get()->pluck('payment_name', 'payment_name');
        return view('backend.content.income.create', compact('account', 'income', 'payer', 'payment'));
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
        $data['expense_type'] = 'income';

        $account = Account::find($request->account_id);
        $acc_balance = (int)$account->balance;
        $account->balance = $acc_balance + $request->amount;
        $account->save();

        $income_expense_id = IncomeExpense::insertGetId($data);
        AccountHistory::create([
            'account_id' => $account->id,
            'income_expense_id' => $income_expense_id,
            'expense_type' => 'income',
            'expense_id' => $request->expense_id,
            'amount' => $request->amount,
            'payment_method' => $request->payment_method,
            'user_id' => auth()->user()->id,
            'transection_date' => $request->expense_date,
        ]);

        if ($income_expense_id) {
            return  response(["message", "Income added successfully"]);
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
        $income_details = IncomeExpense::find($id);
        $account = Account::get()->pluck('account_title', 'id');
        $expense = ExpenseList::where('expanse_type', 'income')->get()->pluck('expanse_name', 'id');
        $payer = Payer::get()->pluck('phone', 'id');
        $payment = Payment::get()->pluck('payment_name', 'payment_name');
        return view('backend.content.income.edit', compact('income_details', 'account', 'expense', 'payer', 'payment'));
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

        if (IncomeExpense::find($id)->update($data)) {
            AccountHistory::where('income_expense_id', $id)->update(['amount' => $request->amount]);
            return redirect()->back()->withFlashSuccess("Income Updated successfully");
        } else {
            return redirect()->back()->withFlashWarning("Cant't update, Something went wrong !");
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



    public function donation_index(Request $request)
    {
        return view('backend.content.donation.index');
    }

    public function donation_create()
    {
        $account = Account::get()->pluck('account_title', 'id');
        $income = ExpenseList::where('expanse_type', 'donation')->get()->pluck('expanse_name', 'id');
        $payer = Payer::get()->pluck('phone', 'id');
        $payment = Payment::get()->pluck('payment_name', 'payment_name');
        return view('backend.content.donation.create', compact('account', 'income', 'payer', 'payment'));
    }

    public function donation_store(Request $request)
    {
        $data = $this->expanseFormValidation();
        if (!empty($request->file('voucher'))) {
            $attachment = uniqid() . '.' . $request->voucher->getClientOriginalExtension();
            $request->voucher->move(public_path('uploads/users'), $attachment);
            $data['voucher'] = $attachment;
        }

        $data['user_id'] = Auth::user()->id;
        $data['expense_type'] = 'donation';

        $account = Account::find($request->account_id);
        $acc_balance = (int)$account->balance;
        $account->balance = $acc_balance + $request->amount;
        $account->save();

        $income_expense_id = IncomeExpense::insertGetId($data);
        AccountHistory::create([
            'account_id' => $account->id,
            'income_expense_id' => $income_expense_id,
            'expense_type' => 'donation',
            'expense_id' => $request->expense_id,
            'amount' => $request->amount,
            'payment_method' => $request->payment_method,
            'user_id' => auth()->user()->id,
            'transection_date' => $request->expense_date,
        ]);

        if ($income_expense_id) {
            return redirect()->back()->withFlashSuccess("Donation added successfully");
        }

        return redirect()->back()->withFlashDanger("Something went wrong !");
    }

    public function donation_edit($id)
    {
        $income_details = IncomeExpense::find($id);
        $account = Account::get()->pluck('account_title', 'id');
        $expense = ExpenseList::where('expanse_type', 'donation')->get()->pluck('expanse_name', 'id');
        $payer = Payer::get()->pluck('phone', 'id');
        $payment = Payment::get()->pluck('payment_name', 'payment_name');
        return view('backend.content.donation.edit', compact('income_details', 'account', 'expense', 'payer', 'payment'));
    }

    public function donation_update(Request $request, $id)
    {
        $data = $this->expanseFormValidation();
        if (!empty($request->file('voucher'))) {
            $attachment = uniqid() . '.' . $request->voucher->getClientOriginalExtension();
            $request->voucher->move(public_path('uploads/users'), $attachment);
            $data['voucher'] = $attachment;
        }

        if (IncomeExpense::find($id)->update($data)) {
            AccountHistory::where('income_expense_id', $id)->update(['amount' => $request->amount]);
            return redirect()->back()->withFlashSuccess("Record updated successfully");
        } else {
            return redirect()->back()->withFlashWarning("Cant't update, Something went wrong !");
        }
    }

    public function donation_destroy($id)
    {
        if (IncomeExpense::destroy($id)) {
            AccountHistory::where('income_expense_id', $id)->delete();
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
