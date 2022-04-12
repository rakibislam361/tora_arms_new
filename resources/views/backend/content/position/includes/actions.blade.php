<div class="btn-group btn-group-sm">
    <a href="{{ route('admin.position.edit', $position) }}" class="btn btn-primary mr-1" data-toggle="tooltip"
        title="Edit">
        <i class="ti-pencil-alt"></i>
    </a>
    <a href="{{ route('admin.position.destroy', $position) }}" class="btn btn-danger mr-1" data-method="delete"
        data-toggle="tooltip" title="Delete">
        <i class="fas fa-trash"></i>
    </a>
</div>
