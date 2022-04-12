<?php

namespace App\Http\Livewire\Backend;

use App\Models\Status;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

/**
 * Class RolesTable.
 */
class StatusTable extends DataTableComponent
{

  public array $perPageAccepted = [10, 20, 50, 100];
  public bool $perPageAll = false;

  protected string $pageName = 'Status';
  protected string $tableName = 'Status';


  /**
   * @return Builder
   */
  public function query(): Builder
  {
    return Status::with('user')->where('status', '1');
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
      Column::make(__('Name'), 'name')
        ->addClass('text-center')
        ->searchable(),
      Column::make(__('For'), 'status_for')
        ->addClass('text-center')
        ->searchable(),
      Column::make(__('Status details'), 'details')
        ->addClass('text-center')
        ->searchable(),

      Column::make('Actions')
        ->addClass('text-center')
        ->format(function ($value, $column, $row) {
          return view('backend.content.status.includes.actions')->with(['status' => $row]);
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
