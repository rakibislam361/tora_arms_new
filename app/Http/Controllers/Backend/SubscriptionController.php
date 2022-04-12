<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Account;
use App\Models\Backend\AccountHistory;
use App\Models\Backend\ExpenseList;
use App\Models\Backend\IncomeExpense;
use App\Models\Backend\Payment;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backend.content.subscription.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $account = Account::get()->pluck('account_title', 'id');
        $expense = ExpenseList::where('expanse_type', 'subscription')->get()->pluck('expanse_name', 'id');
        $payer = Member::orderBy('id', 'desc')->get()->pluck('record_id', 'id');
        $payment = Payment::get()->pluck('payment_name', 'payment_name');
        return view('backend.content.subscription.create', compact('account', 'expense', 'payer', 'payment'));
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
        $data['expense_type'] = 'subscription';

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
                'expense_type' => 'subscription',
                'expense_id' => $request->expense_id,
                'amount' => $amount,
                'payment_method' => $request->payment_method,
                'user_id' => auth()->user()->id,
                'transection_date' => $request->expense_date,
            ]);

            return redirect()->back()->withFlashSuccess("Expanse added successfully");
        } else {
            return redirect()->back()->withFlashDanger("Your account balance is low, can't process this Transection");
        }

        return redirect()->back()->withFlashDanger("Something went wrong");
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
        $expense = ExpenseList::where('expanse_type', 'subscription')->get()->pluck('expanse_name', 'id');
        $payer = Member::orderby('id', 'desc')->get()->pluck('record_id', 'id');
        $payment = Payment::get()->pluck('payment_name', 'payment_name');
        return view('backend.content.subscription.edit', compact('expense_details', 'account', 'expense', 'payer', 'payment'));
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
            return redirect()->back()->withFlashSuccess("Record Updated successfully");
        } else {
            return redirect()->back()->withFlashWarning("Something went wrong");
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
            return redirect()->back()->withFlashSuccess("Subscription deleted successfully");
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
