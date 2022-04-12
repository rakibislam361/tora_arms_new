<?php

namespace App\Http\Livewire\Backend;

use App\Models\Backend\IncomeExpense;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

/**
 * Class RolesTable.
 */
class ExpenseTable extends DataTableComponent
{

    public array $perPageAccepted = [10, 20, 50, 100];
    public bool $perPageAll = false;
    public string $defaultSortColumn = 'id';
    public string $defaultSortDirection = 'desc';

    protected string $pageName = 'Expense';
    protected string $tableName = 'Expense';

    public function query(): Builder
    {
        return IncomeExpense::with('account', 'payment', 'payerGet', 'user')->where('expense_type', 'expense');
    }

    public function columns(): array
    {
        $this->index = $this->page > 1 ? ($this->page - 1) * $this->perPage : 0;
        return [
            Column::make(__('NO.'), 'no')
                ->addClass('text-left')
                ->format(function () {
                    return ++$this->index;
                }),
            Column::make(__('Expanse Date'), 'expense_date')
                ->searchable()
                ->format(function ($value) {
                    return date('d-m-Y', strtotime($value));
                }),
            Column::make(__('Ac No'), 'account.account_number')
                ->searchable()
                ->format(function ($row, $value) {
                    return '<a href="' . route('admin.transection-accounts.show', $row->account_id) . '">' . $value . '</a>';
                })
                ->asHtml(),
            Column::make(__('Amount'), 'amount')
                ->searchable()
                ->format(function ($value) {
                    return number_format($value, 2, '.', ',');
                }),
            Column::make(__('Payment Method'), 'payment_method')
                ->searchable(),
            Column::make(__('Payer'), 'payerGet.name')
                ->searchable(),
            Column::make(__('Reference'), 'reference')
                ->searchable()->format(function ($value) {
                    if (!$value) {
                        return '<span>N/A</span>';;
                    }
                    return $value;
                })
                ->asHtml(),
            Column::make(__('Attachment'), 'voucher')
                ->searchable()
                ->format(function ($value) {
                    if ($value) {
                        return '<a href="' . asset('uploads/users/' . $value) . '"><i class="fas fa-file-alt" style="font-size:24px" aria-hidden="true"></i></a>';
                    }
                    return '<span>No File</span>';
                })
                ->asHtml(),
            Column::make('Actions')
                ->addClass('text-center')
                ->format(function ($row) {
                    return view('backend.content.expense.includes.actions')->with(['expense' => $row]);
                }),
        ];
    }
}
