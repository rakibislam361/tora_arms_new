<div class="btn-group btn-group-sm"><a href="{{ route('admin.status.edit', $status) }}" class="btn btn-light mr-1"
        data-method="edit" data-toggle="tooltip" title="Edit">
        <i class="ti-pencil-alt"></i>
    </a>
    <a href="{{ route('admin.status.destroy', $status) }}" class="btn btn-light mr-1" data-method="delete"
        data-toggle="tooltip" title="Delete">
        <i class="fas fa-trash"></i>
    </a>
</div>
