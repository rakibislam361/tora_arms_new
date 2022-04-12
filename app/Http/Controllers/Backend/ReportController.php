<?php

namespace App\Http\Controllers\Backend;

use App\Models\Backend\Account;
use App\Models\Backend\AccountHistory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Backend\IncomeExpense;
use App\Models\Backend\Payer;

class ReportController extends Controller
{

    public function account_statement(Request $request)
    {
        $account  = Account::get()->pluck('account_title', 'id') ?? [];
        $account_id = $request->account_id;
        $from_date = $request->frdate;
        $end_date = $request->erdate;

        if ($end_date) {
            if ($end_date === date('Y-m-d')) {
                $end_date = date('Y-m-d', strtotime($end_date . ' +1 day'));
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
        return view('backend.content.reports.balanceSheet', compact('account', 'account_details', 'from_date', 'end_date'));
    }

    public function transfer_statement(Request $request)
    {
        $account  = Account::get()->pluck('account_title', 'id') ?? [];
        $account_id = $request->account_id;
        $from_date = $request->frdate;
        $end_date = $request->erdate;

        if ($end_date) {
            if ($end_date === date('Y-m-d')) {
                $end_date = date('Y-m-d', strtotime($end_date . ' +1 day'));
            }
        }

        $expense_type = $request->expense_type;
        $income_expense = AccountHistory::with('user', 'expense', 'income_expense', 'account');

        if ($account_id || $from_date || $end_date || $expense_type) {
            if ($account_id) {
                $income_expense = $income_expense->where('account_id', $account_id);
            }

            if ($from_date || $end_date) {
                $income_expense = $income_expense->whereBetween('created_at', [$from_date, $end_date]);
            }

            if ($expense_type) {
                $income_expense = $income_expense->where('expense_type', $expense_type);
            }
        } else {
            $income_expense = $income_expense->where('status', 50);
        }

        $income_expense = $income_expense->orderByDesc('id')->get();
        return view('backend.content.reports.transfer_statement', compact('account', 'account_details', 'from_date', 'end_date'));
    }

    public function income_statement(Request $request)
    {
        $account  = Account::get()->pluck('account_title', 'id') ?? [];
        $account_id = $request->account_id;
        $from_date = $request->frdate;
        $end_date = $request->erdate;

        if ($end_date) {
            if ($end_date === date('Y-m-d')) {
                $end_date = date('Y-m-d', strtotime($end_date . ' +1 day'));
            }
        }

        $income_details = IncomeExpense::with('user', 'expense', 'payment', 'account', 'payerGet');

        if ($account_id || $from_date || $end_date) {
            if ($account_id) {
                $income_details = $income_details->where('account_id', $account_id);
            }

            if ($from_date || $end_date) {
                $income_details = $income_details->whereBetween('created_at', [$from_date, $end_date]);
            }
        } else {
            $income_details = $income_details->where('status', 50);
        }

        $income_details = $income_details->whereIn('expense_type', ["income", "donation", "subscription"])->orderByDesc('id')->get();
        return view('backend.content.reports.income_statement', compact('account', 'income_details', 'from_date', 'end_date'));
    }

    public function expense_statement(Request $request)
    {

        $account  = Account::get()->pluck('account_title', 'id') ?? [];
        $account_id = $request->account_id;
        $from_date = $request->frdate;
        $end_date = $request->erdate;

        if ($end_date) {
            if ($end_date === date('Y-m-d')) {
                $end_date = date('Y-m-d', strtotime($end_date . ' +1 day'));
            }
        }

        $expense_details = IncomeExpense::with('user', 'expense', 'payment', 'account', 'payerGet');

        if ($account_id || $from_date || $end_date) {
            if ($account_id) {
                $expense_details = $expense_details->where('account_id', $account_id);
            }

            if ($from_date || $end_date) {
                $expense_details = $expense_details->whereBetween('created_at', [$from_date, $end_date]);
            }
        } else {
            $expense_details = $expense_details->where('status', 50);
        }

        $expense_details = $expense_details->whereIn('expense_type', ["expense"])->orderByDesc('id')->get();
        return view('backend.content.reports.expense_statement', compact('account', 'expense_details', 'from_date', 'end_date'));
    }

    public function income_vs_expense_statement(Request $request)
    {
        $from_date = $request->frdate;
        $end_date = $request->erdate;

        if ($end_date) {
            if ($end_date === date('Y-m-d')) {
                $end_date = date('Y-m-d', strtotime($end_date . ' +1 day'));
            }
        }

        $income_expense = IncomeExpense::with('user', 'expense', 'payment', 'account', 'payerGet');

        if ($from_date || $end_date) {

            if ($from_date || $end_date) {
                $income_expense = $income_expense->whereBetween('created_at', [$from_date, $end_date]);
            }
        } else {
            $income_expense = $income_expense->where('status', 50);
        }

        $income_expense = $income_expense->orderByDesc('id')->get();

        return view('backend.content.reports.income_vs_expense', compact('income_expense', 'from_date', 'end_date'));
    }

    public function payer_statement(Request $request)
    {
        $account  = Account::get()->pluck('account_title', 'id') ?? [];
        $payer_id = $request->payer;
        $from_date = $request->frdate;
        $end_date = $request->erdate;

        if ($end_date) {
            if ($end_date === date('Y-m-d')) {
                $end_date = date('Y-m-d', strtotime($end_date . ' +1 day'));
            }
        }

        $payer_details = IncomeExpense::with('user', 'expense', 'payment', 'account', 'payerGet');
        $payers = Payer::get()->pluck('name', 'id');

        if ($payer_id || $from_date || $end_date) {
            if ($payer_id) {
                $payer_details = $payer_details->where('payer', $payer_id);
            }

            if ($from_date || $end_date) {
                $payer_details = $payer_details->whereBetween('created_at', [$from_date, $end_date]);
            }
        } else {
            $payer_details = $payer_details->where('status', 50);
        }

        $payer_details = $payer_details->where('expense_type', "income")->orderByDesc('id')->get();
        return view('backend.content.reports.payer_statement', compact('account', 'payer_details', 'from_date', 'end_date', 'payers'));
    }

    public function payee_statement(Request $request)
    {
        $account  = Account::get()->pluck('account_title', 'id') ?? [];
        $payer_id = $request->payer;
        $from_date = $request->frdate;
        $end_date = $request->erdate;

        if ($end_date) {
            if ($end_date === date('Y-m-d')) {
                $end_date = date('Y-m-d', strtotime($end_date . ' +1 day'));
            }
        }

        $payee_statement = IncomeExpense::with('user', 'expense', 'payment', 'account', 'payerGet');
        $payers = Payer::get()->pluck('name', 'id');

        if ($payer_id || $from_date || $end_date) {
            if ($payer_id) {
                $payee_statement = $payee_statement->where('payer', $payer_id);
            }

            if ($from_date || $end_date) {
                $payee_statement = $payee_statement->whereBetween('created_at', [$from_date, $end_date]);
            }
        } else {
            $payee_statement = $payee_statement->where('status', 50);
        }

        $payee_statement = $payee_statement->where('expense_type', "expense")->orderByDesc('id')->get();
        return view('backend.content.reports.payee_statement', compact('account', 'payee_statement', 'from_date', 'end_date', 'payers'));
    }

    // public function index()
    // {
    //     $dt = Carbon::now();
    //     $orders = DB::table('orders')->select('*')->where('created_at', $dt->toDateString())->paginate(5);
    //     return view('admin.pages.report.order-report')->with('orders', $orders);
    // }

    // public function invoice_pdf()
    // {

    //     $dt = Carbon::now();
    //     $orders = DB::table('orders')->select('*')->where('created_at', $dt->toDateString())->get();
    //     //return view('admin.pages.report.invoice', compact('orders'));
    //     $pdf = PDF::loadView('admin.pages.report.invoice', compact('orders'));
    //     return $pdf->stream('invoice.pdf');
    // }
    // public function invoice_pdf_large()
    // {

    //     $dt = Carbon::now();
    //     $orders = DB::table('orders')->select('*')->where('created_at', $dt->toDateString())->get();
    //     //return view('admin.pages.report.invoice', compact('orders'));
    //     $pdf = PDF::loadView('admin.pages.report.invoice-large', compact('orders'));
    //     return $pdf->stream('invoice.pdf');
    // }
    // public function invoice_pdf_download()
    // {
    //     $dt = Carbon::now();
    //     $orders = DB::table('orders')->select('*')->where('created_at', $dt->toDateString())->get();
    //     $filename = 'invoice_' . date('m-d-Y') . '.pdf';
    //     $dompdf = PDF::loadView('admin.pages.report.invoice', compact('orders'));
    //     return $dompdf->download($filename);
    // }
}
