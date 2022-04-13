<?php

namespace App\Http\Livewire\Backend;

use App\Models\Member;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;
use Spatie\Permission\Traits\HasRoles;

/**
 * Class RolesTable.
 */
class MemberTable extends DataTableComponent
{
    public array $sortNames = [
        'email_verified_at' => 'Verified',
        'two_factor_secret' => '2FA',
    ];

    public array $filterNames = [];

    public array $bulkActions = [
        'exportSelected' => 'Export',
    ];

    public array $perPageAccepted = [10, 20, 50, 100];
    public bool $perPageAll = false;

    public string $defaultSortColumn = 'id';
    public string $defaultSortDirection = 'desc';

    protected string $pageName = 'Member';
    protected string $tableName = 'Member';



    public function exportSelected()
    {
        // if ($this->selectedRowsQuery->count() > 0) {
        //   return (new CategoryExport($this->selectedRowsQuery))->download($this->tableName . '.xlsx');
        // }
        //   // Not included in package, just an example.
        // $this->notify(__('You did not select any users to export.'), 'danger');
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        // $logged_in_user = Auth::user();
        // if ($logged_in_user->HasRoles('Agent')) {
        // }
        return Member::with('user');
    }

    /**
     * @return array
     */
    public function columns(): array
    {

        return [
            Column::make(__('Id.'), 'id')
                ->sortable()
                ->searchable()
                ->addClass('text-center'),
            // Column::make(__('Name'), 'user.name')
            //   ->searchable(),
            Column::make(__('Email'), 'user.email')
                ->addClass('text-center')
                ->searchable(),
            Column::make(__('Phone'), 'user.phone')
                ->addClass('text-center')
                ->searchable(),
            Column::make(__('Experience'), 'experience')
                ->addClass('text-center')
                ->searchable(),
            Column::make(__('City'), 'city_address')
                ->addClass('text-center')
                ->searchable(),
            Column::make('Actions')
                ->addClass('text-center')
                ->format(function ($value, $column, $row) {
                    return view('backend.content.member.includes.actions')->with(['member' => $row]);
                }),
        ];
    }

    public function setTableDataClass($attribute, $value): ?string
    {
        $array = ['user:email', 'user:name'];
        if (in_array($attribute->column, $array)) {
            return 'text-left';
        }
        return 'text-center';
    }


    public function setTableRowClass($value)
    {
        return $value->id;
    }

    public function setTableRowId($value)
    {
        return $value->id;
    }
}
