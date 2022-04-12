<div class="btn-group btn-group-sm">
    <a href="{{ route('admin.transection-accounts.edit', $account) }}" class="btn btn-light mr-1" data-toggle="tooltip"
        title="Edit">
        <i class="ti-pencil-alt"></i>
    </a>
    <a href="{{ route('admin.transection-accounts.destroy', $account) }}" class="btn btn-light mr-1"
        data-method="delete" data-toggle="tooltip" title="Delete">
        <i class="fas fa-trash"></i>
    </a>
</div>
