<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Backend\Account;
use App\Models\Backend\AccountHistory;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backend.content.accounts.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.content.accounts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $this->accountInformationValidation();
        $data['balance'] = $request->opening_balance;
        $create_account = Account::insertGetId($data);

        if ($create_account) {
            if ($request->ajax()) {
                return response(["value" => $request->account_title]);
            }
            return redirect()->back()->withFlashSuccess('Account created successfully');
        }

        // return response(["value", ])
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $account = Account::findOrFail($id);
        return view('backend.content.accounts.show', compact('account'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $account_information = Account::findOrFail($id);
        return view('backend.content.accounts.edit', compact('account_information'));
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
        $data = $this->accountInformationValidation();
        $update_account = Account::find($id)->update($data);

        if ($update_account) {
            return redirect()->back()->withFlashSuccess("Account Update successfully");
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
        $data = Account::destroy($id);
        if ($data) {
            return redirect()->back()->withFlashSuccess("Account deleted successfully");
        }
    }

    // public function balanceSheet()
    // {
    //     $from_date = "";
    //     $end_date = "";
    //     $account_details = [];
    //     $account  = Account::get()->pluck('account_title', 'id') ?? [];
    //     return view('backend.content.accounts.balanceSheet', compact('account', 'account_details', 'from_date', 'end_date'));
    // }

    public function balance(Request $request)
    {
        $account  = Account::get()->pluck('account_title', 'id') ?? [];
        $account_id = $request->account_id;
        $from_date = $request->frdate;
        $end_date = $request->erdate;

        if ($end_date) {
            if ($end_date === date('Y-m-d')) {
                $end_date = date('Y-m-d', strtotime($end_date . '+1 day'));
            }
        }

        $expense_type = $request->expense_type;
        $account_details = AccountHistory::with('user', 'expense', 'income_expense', 'account');

        if ($account_id || $from_date || $end_date || $expense_type) {
            if ($account_id) {
                $account_details = $account_details->where('account_id', $account_id);
            }

            if ($from_date || $end_date) {
                $account_details = $account_details->whereBetween('created_at', [$from_date, $end_date]);
            }

            if ($expense_type) {
                $account_details = $account_details->where('expense_type', $expense_type);
            }
        } else {
            $account_details = $account_details->where('status', 50);
        }

        $account_details = $account_details->orderByDesc('id')->get();
        return view('backend.content.accounts.balanceSheet', compact('account', 'account_details', 'from_date', 'end_date'));
    }


    public function accountInformationValidation()
    {
        $data = request()->validate([
            'account_title' => 'required|max:100',
            'account_number' => 'nullable|max:100',
            'opening_date' => 'required|date',
            'opening_balance' => 'nullable',
            'note' => 'nullable'
        ]);

        return $data;
    }
}
