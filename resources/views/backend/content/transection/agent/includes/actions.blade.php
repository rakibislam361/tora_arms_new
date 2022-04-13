<div class="btn-group btn-group-sm">
    <a href="{{ route('admin.transection.agent.edit', $transection) }}" class="btn btn-primary mr-1"
        data-toggle="tooltip" title="Edit">
        <i class="fas fa-plus"></i>
    </a>
    <a href="{{ route('admin.transection.agent.destroy', $transection) }}" class="btn btn-danger mr-1"
        data-method="delete" data-toggle="tooltip" title="Delete">
        <i class="fas fa-trash"></i>
    </a>
</div>
