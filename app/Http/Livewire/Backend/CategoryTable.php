<?php

namespace App\Http\Livewire\Backend;

use App\Models\Backend\Taxonomy;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filter;

/**
 * Class RolesTable.
 */
class CategoryTable extends DataTableComponent
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

  protected string $pageName = 'Banner';
  protected string $tableName = 'Banner';



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
    return Taxonomy::with('user', 'children', 'parent');
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
      Column::make(__('Name'), 'name')
        ->searchable(),
      Column::make(__('Parent'), 'parent:name')
        ->searchable()
        ->format(function ($value, $column, $row) {
          return $row->parent ? $row->parent->name  : 'N/A';
        }),
      Column::make(__('Icon'), 'icon')
        ->addClass('text-center')
        ->format(function ($value, $column, $row) {
          $icon = $row->icon ? $row->icon : 'img/backend/no-image.gif';
          return '<img src="' . asset($icon) . '" style="width:40px" />';
        })->asHtml(),
      Column::make(__('Picture'), 'picture')
        ->addClass('text-center')
        ->format(function ($value, $column, $row) {
          $picture = $row->picture ? $row->picture : 'img/backend/no-image.gif';
          return '<img src="' . asset($picture) . '" style="width:60px" />';
        })->asHtml(),
      Column::make(__('MainId'), 'magento_id')
        ->addClass('text-center')
        ->searchable(),
      Column::make(__('Level'), 'level')
        ->addClass('text-center')
        ->searchable(),
      Column::make(__('Position'), 'position')
        ->addClass('text-center')
        ->searchable(),
      Column::make(__('Active'), 'is_active')
        ->searchable()
        ->addClass('text-center')
        ->format(function ($value, $column, $row) {
          return $row->is_active ? '<span class="badge badge-success">Active</span>' : '<span class="badge badge-danger">Inactive</span>';
        })->asHtml(),
      Column::make(__('AddedBy'), 'user.name')
        ->addClass('text-center')
        ->searchable(),
      Column::make('Actions')
        ->addClass('text-center')
        ->format(function ($value, $column, $row) {
          return view('backend.content.category.includes.actions')->with(['category' => $row]);
        }),
    ];
  }

  public function setTableDataClass($attribute, $value): ?string
  {
    $array = ['name', 'parent:name'];
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
