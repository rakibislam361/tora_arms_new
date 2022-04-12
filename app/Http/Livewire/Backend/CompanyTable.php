<?php

namespace App\Http\Livewire\Backend;

use App\Models\Backend\Company;
use App\Models\District;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

/**
 * Class RolesTable.
 */
class CompanyTable extends DataTableComponent
{
  public array $sortNames = [
    'email_verified_at' => 'Verified',
    'two_factor_secret' => '2FA',
  ];

  public array $perPageAccepted = [10, 20, 50, 100];
  public bool $perPageAll = false;

  public string $defaultSortColumn = 'id';
  public string $defaultSortDirection = 'desc';

  protected string $pageName = 'District';
  protected string $tableName = 'District';

  /**
   * @return Builder
   */
  public function query(): Builder
  {
    return Company::with('user');
  }

  /**
   * @return array
   */
  public function columns(): array
  {
    $this->index = $this->page > 1 ? ($this->page - 1) * $this->perPage : 0;
    return [
      Column::make(__('NO.'), 'no')
        ->addClass('text-left')
        ->format(function () {
          return ++$this->index;
        }),
      Column::make(__('Company'), 'company_name')
        ->searchable(),
      Column::make(__('Country'), 'country')
        ->searchable(),
      Column::make(__('Email'), 'company_email')
        ->searchable(),
      Column::make('Actions')
        ->addClass('text-center')
        ->format(function ($value, $column, $row) {
          return view('backend.content.company.includes.actions')->with(['company' => $row]);
        }),
    ];
  }

  // public function setTableDataClass($attribute, $value): ?string
  // {
  //   $array = ['user:email', 'user:name'];
  //   if (in_array($attribute->column, $array)) {
  //     return 'text-left';
  //   }
  //   return 'text-center';
  // }


  // public function setTableRowClass($value)
  // {
  //   return $value->id;
  // }

  public function setTableRowId($value)
  {
    return $value->id;
  }
}
