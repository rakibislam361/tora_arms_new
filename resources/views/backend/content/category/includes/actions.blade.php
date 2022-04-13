
<div class="btn-group btn-group-sm">
  <a href="{{route('admin.category.edit', $category)}}" class="btn btn-primary" data-toggle="tooltip" title="Edit">
    <i class="ti-pencil-alt"></i>
  </a>
  <a href="{{route('admin.category.destroy', $category)}}" class="btn btn-danger" data-method="delete" data-toggle="tooltip" title="Delete">
    <i class="fas fa-trash"></i>
  </a>
</div>