<?php

use App\Http\Controllers\Backend\AccountController;
use App\Http\Controllers\Backend\AgentTransectionController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\TaxonomyController;
use App\Http\Controllers\Backend\DistrictController;
use App\Http\Controllers\Backend\ExpenseController;
use App\Http\Controllers\Backend\IncomeController;
use App\Http\Controllers\Backend\ManageCompaneController;
use App\Http\Controllers\Backend\PayerController;
use App\Http\Controllers\Backend\PaymentController;
use App\Http\Controllers\Backend\PositionController;
use App\Http\Controllers\Backend\ReportController;
use App\Http\Controllers\Backend\SettingController;
use App\Http\Controllers\Backend\StatusController;
use App\Http\Controllers\Backend\SubscriptionController;
use App\Http\Controllers\Backend\TransectionController;
use Illuminate\Support\Facades\Route;
use Tabuna\Breadcrumbs\Trail;
use App\Http\Controllers\Frontend\AgentController;
use App\Http\Controllers\Backend\MemberController;
use App\Http\Controllers\Backend\UpazillaController;
use App\Http\Controllers\Backend\ZipController;

// All route names are prefixed with 'admin.'.
Route::redirect('/', '/admin/dashboard', 301);

Route::get('dashboard', [DashboardController::class, 'index'])
  ->name('dashboard')
  ->breadcrumbs(function (Trail $trail) {
    $trail->push(__('Dashboard'), route('admin.dashboard'));
  });


Route::put("/agent/update/{id}", [AgentController::class, "update"])->name("agent.update");
Route::resource("zip", ZipController::class);

Route::resource("member", MemberController::class);
Route::get("/member-find", [MemberController::class, "search"])->name("member.search");
Route::get('/member/download/{id}/', [MemberController::class, 'exportPDF'])->name("member.pdf");
Route::post('/member/status', [MemberController::class, 'statusUpdate'])->name("update.status");

// email sending by ajax
Route::post('/member/generate-email', [MemberController::class, 'generateEmail']);
Route::post('/member/submit-generated-email', [MemberController::class, 'submitGeneratedEmail'])->name('member.submit.generated');

Route::resource("agent", AgentController::class);
Route::get("/agent-find", [AgentController::class, 'search'])->name('agent.search');
Route::post("/agent/search/", [AgentController::class, "searchResult"])->name("agent.result");
Route::post('/agent/status', [AgentController::class, 'statusUpdate'])->name("update.agentstatus");
Route::get('/agent/download/{id}/', [AgentController::class, 'exportPDF'])->name("agent.pdf");

Route::resource("district", DistrictController::class);
Route::resource("upazilla", UpazillaController::class);
Route::resource('category', TaxonomyController::class)->except('show');
Route::resource('position', PositionController::class);

Route::resource("agent-transection", AgentTransectionController::class);
Route::get("/transection-agent/commission", [AgentTransectionController::class, 'agentCommission'])->name('agent.transection.commission');
Route::get("agent-transection-list/{id}/", [AgentTransectionController::class, 'transect_list'])->name('agent.transection.list');

Route::resource("transection", TransectionController::class);
Route::get("transection-list/{id}/", [TransectionController::class, 'transect_list'])->name('transection.list');
Route::get("/transection-member/commission", [TransectionController::class, 'agentCommission'])->name('member.transection.commission');
Route::post('/transection/status', [TransectionController::class, 'statusUpdate'])->name("update.transectionstatus");

Route::resource("company", ManageCompaneController::class);
Route::post("/company-select", [ManageCompaneController::class, 'selectCompany'])->name('company.select');

Route::resource('site_settings', SettingController::class);
Route::resource('/site_settings-status/', SettingController::class);
Route::resource('status', StatusController::class);

Route::resource("transection-accounts", AccountController::class);
// Route::get("transection-accounts-balancesheet", [AccountController::class, 'balanceSheet'])->name('account.balance.sheet');
Route::get("transection-accounts-balance", [AccountController::class, 'balance'])->name('account.balance');

Route::resource("transection-expense", ExpenseController::class);
Route::resource("income", IncomeController::class);
Route::resource("payment", PaymentController::class);
Route::resource("payer", PayerController::class);
Route::resource("subscription", SubscriptionController::class);

Route::get("transection-expense-option", [ExpenseController::class, 'expenseOptionIndex'])->name('expanse.option.index');
Route::get("transection-expense-create", [ExpenseController::class, 'expenseOptionCreate'])->name('expanse.option.create');
Route::post("transection-expense-store", [ExpenseController::class, 'expenseOptionStore'])->name('expanse.option.store');
Route::post("transection-expense-edit/{id}", [ExpenseController::class, 'expenseOptionEdit'])->name('expanse.option.edit');
Route::post("transection-expense-update/{id}", [ExpenseController::class, 'expenseOptionUpdate'])->name('expanse.option.update');
Route::delete("transection-expense-destroy/{id}", [ExpenseController::class, 'expenseOptionDestroy'])->name('expanse.option.destroy');

Route::get("donation", [IncomeController::class, "donation_index"])->name("donation.index");
Route::get("donation-create", [IncomeController::class, "donation_create"])->name("donation.create");
Route::post("donation-store", [IncomeController::class, "donation_store"])->name("donation.store");
Route::get("donation-edit/{id}", [IncomeController::class, "donation_edit"])->name("donation.edit");
Route::PUT("donation-update/{id}", [IncomeController::class, "donation_update"])->name("donation.update");
Route::delete("donation-delete/{id}", [IncomeController::class, "donation_destroy"])->name("donation.destroy");

Route::group(['prefix' => 'reports'], function () {
  Route::get('/accounts', [ReportController::class, 'account_statement'])->name('account.statement');
  Route::get('/transfer', [ReportController::class, 'transfer_statement'])->name('transfer.statement');
  Route::get('/income', [ReportController::class, 'income_statement'])->name('income.statement');
  Route::get('/expense', [ReportController::class, 'expense_statement'])->name('expense.statement');
  Route::get('/income_expense', [ReportController::class, 'income_vs_expense_statement'])->name('income.expense');
  Route::get('/payer_report', [ReportController::class, 'payer_statement'])->name('payer.statement');
  Route::get('/payee_report', [ReportController::class, 'payee_statement'])->name('payee.statement');
});
