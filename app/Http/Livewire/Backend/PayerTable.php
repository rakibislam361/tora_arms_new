<?php

namespace App\Http\Livewire\Backend;

use App\Models\Backend\Payer;
use App\Models\District;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

/**
 * Class RolesTable.
 */
class PayerTable extends DataTableComponent
{
  public array $sortNames = [
    'email_verified_at' => 'Verified',
    'two_factor_secret' => '2FA',
  ];

  public array $perPageAccepted = [10, 20, 50, 100];
  public bool $perPageAll = false;

  public string $defaultSortColumn = 'id';
  public string $defaultSortDirection = 'desc';

  protected string $pageName = 'Payer';
  protected string $tableName = 'Payer';



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
    return Payer::with('user');
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
      Column::make(__('Payer Name'), 'name')
        ->searchable(),
      Column::make(__('Payer Phone'), 'phone')
        ->searchable(),
      Column::make('Actions')
        ->addClass('text-left')
        ->format(function ($value, $column, $row) {
          return view('backend.content.payer.includes.actions')->with(['payer' => $row]);
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
