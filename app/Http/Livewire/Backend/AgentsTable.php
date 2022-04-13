<?php

namespace App\Http\Livewire\Backend;

use App\Models\Agent;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

/**
 * Class RolesTable.
 */
class AgentsTable extends DataTableComponent
{
    public array $sortNames = [
        'email_verified_at' => 'Verified',
        'two_factor_secret' => '2FA',
    ];

    public array $bulkActions = [
        'exportSelected' => 'Export',
    ];

    public array $perPageAccepted = [10, 20, 50, 100];
    public bool $perPageAll = false;
    public string $defaultSortColumn = 'id';
    public string $defaultSortDirection = 'desc';

    protected string $pageName = 'Agent';
    protected string $tableName = 'Agent';

    public bool $showFilters = true;


    public array $filtersName = [
        'district' => 'Present Districts',
        'position' => 'Desire Position',
        'gender' => 'Gender',
    ];

    public function filters(): array
    {
        return [
            'district_permanent' => Filter::make('District')
                ->select([
                    '' => 'Any',
                    'yes' => 'Yes',
                    'no' => 'No',
                ]),
            'position_desierd' => Filter::make('Position')
                ->select([
                    '' => 'Any',
                    'yes' => 'Yes',
                    'no' => 'No',
                ]),
            'gender' => Filter::make('Gender')
                ->select([
                    'male' => 'Male',
                    'female' => 'Female',
                ]),
        ];
    }


    public function exportSelected()
    {
        // if ($this->selectedRowsQuery->count() > 0) {
        //   return (new CategoryExport($this->selectedRowsQuery))->download($this->tableName . '.xlsx');
        // }
        //   // Not included in package, just an example.
        // $this->notify(__('You did not select any users to export.'), 'danger');
    }

    public function query(): Builder
    {
        return Agent::query()->when($this->getFilter('district_permanent'), fn ($query, $district_permanent) => $query->where('district_permanent', $district_permanent))
            ->when($this->getFilter('position_desierd'), fn ($query, $position_desierd) => $query->where('position_desierd_desierd', $position_desierd))
            ->when($this->getFilter('gender'), fn ($query, $gender) => $query->where('gender', $gender));
    }


    public function columns(): array
    {
        // id, user_id, position_desierd, gender, image, city_address, provisional_address, telephone, dob, dob_place, civil_status, citizenship, height, weight, religion, spouse_name, spouse_occupation, children_name, children_date_of_birth, fathers_name, father_occupation, mothers_name, mother_occupation, language, emergency_contact_person, emergency_person_address_tel, elementary, elementary_passing_year, high_school, high_school_passing_year, college, college_passing_year, degree_name, special_skills, company_name_1, position_1, from_1, to_1, company_name_2, position_2, from_2, to_2, character_refer_name_1, character_refer_company_name_1, character_refer_position_1, character_refer_phone_1, character_refer_name_2, character_refer_company_name_2, character_refer_position_2, character_refer_phone_2, village_permanent, post_office_permanent, police_station_permanent, district_permanent, village_present, post_office_present, police_station_present, district_present, dhaka_address, passport_no, passport_issue_date, passport_expiry_date, nid_no, experience, present_appointment, case_civil_court, technical_qualification_institute_name, other_qualification_institute_name, job_preference_country, medical_fitness, created_at, updated_at
        return [
            Column::make(__('Id.'), 'id')
                ->sortable()
                ->searchable()
                ->addClass('text-center'),
            Column::make(__('Name'), 'user.name')
                ->searchable(),
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

    public function setTableRowClass($value)
    {
        return $value->id;
    }

    public function setTableRowId($value)
    {
        return $value->id;
    }
}
