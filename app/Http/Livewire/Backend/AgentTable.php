<?php

namespace App\Http\Livewire\Backend;

use App\Models\Agent;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

/**
 * Class RolesTable.
 */
class AgentTable extends DataTableComponent
{
    public array $sortNames = [
        'email_verified_at' => 'Verified',
        'two_factor_secret' => '2FA',
    ];


    public array $perPageAccepted = [10, 20, 50, 100];
    public bool $perPageAll = false;
    public string $defaultSortColumn = 'id';
    public string $defaultSortDirection = 'desc';

    protected string $pageName = 'Agent';
    protected string $tableName = 'Agent';

    public bool $showFilter = true;


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
        return Agent::with('user', 'statusGet');
    }

    /**
     * @return array
     */

    public function columns(): array
    {
        $this->index = $this->page > 1 ? ($this->page - 1) * $this->perPage : 0;
        return [
            Column::make(__('NO.'), 'no')
                ->addClass('text-center')
                ->format(function () {
                    return ++$this->index;
                }),
            Column::make(__('Agent'), 'record_id')
                ->searchable()
                ->format(function ($row) {
                    $agent_id = $row->id;
                    if ($agent_id) {
                        return '<span><a href="' . route("admin.agent.show", $agent_id) . '">' . $row->record_id . '</span>';
                    }
                })
                ->asHtml(),
            Column::make(__('Name'), 'user.name')
                ->addClass('text-center')
                ->searchable(),
            Column::make(__('Email'), 'user.email')
                ->addClass('text-center')
                ->searchable(),
            Column::make(__('District'), 'district.name')
                ->addClass('text-center')
                ->searchable(),
            Column::make(__('Status'), 'status')
                ->addClass('text-center')
                ->searchable()
                ->format(function ($value, $column, $row) {
                    if ($row->statusGet) {
                        return '<span class="badge badge-primary">' . $row->statusGet->name . '</span>';
                    }
                    return '<span class="badge badge-primary">N/A</span>';
                })
                ->asHtml(),
            Column::make('Actions')
                ->addClass('text-center')
                ->format(function ($value, $column, $row) {
                    return view('backend.content.agent.includes.actions')->with(['agent' => $row]);
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


    // public function setTableRowClass($value)
    // {
    //     return $value->id;
    // }

    public function setTableRowId($value)
    {
        return $value->id;
    }
}
