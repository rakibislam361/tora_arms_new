<?php

namespace App\Http\Livewire\Backend;

use App\Models\Backend\Account;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

/**
 * Class RolesTable.
 */
class TransectionaccountTable extends DataTableComponent
{
    public array $perPageAccepted = [10, 20, 50, 100];
    public string $defaultSortColumn = 'id';
    public string $defaultSortDirection = 'desc';

    protected string $pageName = 'Agent';
    protected string $tableName = 'Agent';

    public function query(): Builder
    {
        return Account::with('accountHistory');
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
            Column::make(__('AC Title'), 'account_title')
                ->addClass('text-left')
                ->searchable(),
            Column::make(__('AC Number'), 'account_number')
                ->addClass('text-left')
                ->searchable()
                ->format(function ($row, $value) {
                    return '<a href="' . route('admin.transection-accounts.show', $row->id) . '">' . $value . '</a>';
                })
                ->asHtml(),
            Column::make(__('Opening Date '), 'opening_date')
                ->addClass('text-left')
                ->searchable()
                ->format(function ($value) {
                    return date('d-m-Y', strtotime($value));
                }),
            Column::make(__('Current Balance '), 'opening_balance')
                ->addClass('text-left')
                ->searchable()
                ->format(function ($row, $value) {
                    $current_balance = get_account_balance($row);
                    return number_format($current_balance, 2, '.', ',');
                }),
            // Column::make(__('Note'), 'note')
            //     ->addClass('text-left')
            //     ->searchable()
            //     ->asHtml(),
            Column::make('Actions')
                ->addClass('text-left')
                ->format(function ($value, $column, $row) {
                    return view('backend.content.accounts.includes.actions')->with(['account' => $row]);
                }),
        ];
    }
}
