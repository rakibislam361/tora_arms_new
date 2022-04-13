<?php $status = DB::table('status')
    ->where('status', '1')
    ->whereIn('status_for', ['agent', 'both'])
    ->get()
    ->pluck('name', 'id');
?>

<div class="btn-group btn-group-sm">
    {{ html()->select('status', collect($status)->prepend('select', ''))->id('')->class('form-control status-change-agent')->attribute('data-key', $agent->id) }}
    <input type="hidden" id="status_update_route_agent" value="{{ route('admin.update.agentstatus') }}">
    <a href="{{ route('admin.agent.show', $agent) }}" class="btn btn-light mr-1" data-toggle="tooltip" title="view">
        <i class="fas fa-eye"></i>
    </a>
    <a href="{{ route('admin.agent.edit', $agent) }}" class="btn btn-light mr-1" data-toggle="tooltip" title="Edit">
        <i class="ti-pencil-alt"></i>
    </a>
    <a href="{{ route('admin.agent.destroy', $agent) }}" class="btn btn-light mr-1 delete" data-method="delete"
        data-toggle="tooltip" title="Delete">
        <i class="fas fa-trash"></i>
    </a>
    <a href="{{ route('admin.agent.pdf', $agent->id) }}" class="btn btn-light mr-1" title="download">
        <i class="fa fa-download"></i>
    </a>
</div>
