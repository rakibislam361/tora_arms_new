<?php $status = DB::table('status')
    ->where('status', '1')
    ->whereIn('status_for', ['member', 'both'])
    ->get()
    ->pluck('name', 'id');
?>
<div class="btn-group btn-group-sm">
    @if ($logged_in_user->hasAllAccess())
        {{ html()->select('status', collect($status)->prepend('Select', ''))->class('form-control status-change')->attribute('data-key', $member->id) }}
        <input type="hidden" id="status_update_route" value="{{ route('admin.update.status') }}">
    @endif
    <a href="{{ route('admin.member.show', $member) }}" class="btn btn-light mr-1" data-toggle="tooltip" title="view">
        <i class="fas fa-eye"></i>
    </a>
    <a href="{{ route('admin.member.edit', $member) }}" class="btn btn-light mr-1" data-toggle="tooltip" title="Edit">
        <i class="ti-pencil-alt"></i>
    </a>
    @if ($logged_in_user->hasAllAccess())
        <a href="{{ route('admin.member.destroy', $member) }}" class="btn btn-light mr-1" data-method="delete"
            data-toggle="tooltip" title="Delete">
            <i class="fas fa-trash"></i>
        </a>
    @endif
    <a href="{{ route('admin.member.pdf', $member) }}" class="btn btn-light mr-1" title="download">
        <i class="fa fa-download"></i>
    </a>
</div>
