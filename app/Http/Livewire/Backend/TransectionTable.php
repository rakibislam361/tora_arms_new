<?php

namespace App\Http\Livewire\Backend;

use App\Models\Agent;
use App\Models\Member;
use App\Models\TransectionModel;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;


/**
 * Class RolesTable.
 */
class TransectionTable extends DataTableComponent
{

    public array $sortNames = [
        'email_verified_at' => 'Verified',
        'two_factor_secret' => '2FA',
    ];

    protected string $pageName = 'Member';
    protected string $tableName = 'Member';
    public $status = 'Status';

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
        $member = TransectionModel::with('user')->get();
        $auth_agent = Agent::select('id')->where('user_id', Auth::user()->id)->first();

        if (Auth::user()->can('agent.access.member.list') && !empty($auth_agent)) {
            $member = TransectionModel::with('user')->get();
        } else {
            $member = Member::with('user', 'districtPresent', 'position', 'statusGet', 'agentGet')
                ->orderBy('id', 'desc');
        }
        return $member;
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
            Column::make(__('TR ID'), 'transection_id')
                ->addClass('text-center')
                ->searchable()
                ->format(function ($row) {
                    return '<span><a href="' . route("admin.agent.show", $row->id) . '">' . $row->transection_id . '</a></span>';
                })
                ->asHtml(),
            Column::make(__('ID'), 'record_id')
                ->addClass('text-center')
                ->searchable()
                ->format(function ($row) {
                    $role = $row->role;
                    if ($role != 'admin') {
                        $record_id = $row->agentGet->record_id;
                        return '<span><a href="' . route("admin.agent.show", $row->user_id) . '">' . $row->name . '<a/></span>';
                    }
                    return '<span>Admin</span>';
                }),
            Column::make(__('Date'), 'created_at')
                ->addClass('text-center')
                ->searchable(),
            Column::make(__('Amount'), 'amount')
                ->addClass('text-center')
                ->searchable(),
            Column::make(__('District'), 'districtPresent.name')
                ->addClass('text-center')
                ->searchable(),
            Column::make(__('Status'), 'status')
                ->addClass('text-center')
                ->searchable()
                ->format(function ($row) {
                    if ($row->statusGet) {
                        return '<span class="badge badge-primary">' . $row->statusGet->name . '</span>';
                    }
                    return '<span class="badge badge-primary">N/A</span>';
                })
                ->asHtml(),
            Column::make('Actions')
                ->addClass('text-center')
                ->format(function ($row) {
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
