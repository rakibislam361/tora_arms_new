<div class="btn-group btn-group-sm">
    <a href="{{ route('admin.upazilla.edit', $upazilla) }}" class="btn btn-primary mr-1" data-toggle="tooltip"
        title="Edit">
        <i class="ti-pencil-alt"></i>
    </a>
    <a href="{{ route('admin.upazilla.destroy', $upazilla) }}" class="btn btn-danger mr-1" data-method="delete"
        data-toggle="tooltip" title="Delete">
        <i class="fas fa-trash"></i>
    </a>
</div>
