@extends('backend.layouts.app')

@section('title', __('Manage Transection'))

@section('content')
    <input type="hidden" id="status_update_route_transection" value="{{ route('admin.update.transectionstatus') }}">

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage Transection')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header icon="fas fa-plus" class="btn btn-sm btn-tool btn-primary"
                :href="route('admin.agent-transection.create')" :text="__('Add New Transection')" />
        </x-slot>

        <x-slot name="body">
            <div class="row">
                <div class="col-md-3 col-sm-12">
                    <div class="form-group">
                        {{ html()->label('Date')->for('Date') }}
                        <div class="d-flex justify-content-between">
                            {{ html()->date()->class('form-control mr-1') }}
                            {{ html()->date()->class('form-control mr-1') }}
                        </div>
                    </div>
                </div>
            </div>


            <table id="example" class="table" style="width:100%">
                <thead>
                    <tr>
                        <th>#No</th>
                        <th>Transection</th>
                        <th>Agent</th>
                        <th>Total</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @if ($transections)
                        @forelse ($transections as $key => $transection)
                            <?php
                            $agent = $agent->where('user_id', $transection->user_id)->first();
                            ?>
                            <tr>
                                <td>{{ $key + 1 }}</td>
                                <td>
                                    <a href="{{ route('admin.agent.transection.list', $transection->id) }}">Transections
                                        List</a>
                                </td>

                                <td>
                                    <a
                                        href="{{ route('admin.agent.show', $agent ?? $agent->id) }}">{{ $agent->record_id ?? 'N/A' }}</a>
                                </td>

                                <td>{{ $transection->transectionUser? number_format($transection->transectionUser->sum('amount'), 2, '.', ','): 'N/A' }}
                                </td>
                                <td>{{ date('F j, Y', strtotime($transection->created_at)) ?? 'N/A' }}</td>
                                <td>
                                    @if ($transection->statusGet)
                                        <span class="badge badge-primary">{{ $transection->statusGet->name }}</span>
                                    @else
                                        <span class="badge badge-primary">N/A</span>
                                    @endif
                                </td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        @if ($logged_in_user->hasAllAccess())
                                            {{ html()->select('status', collect($allStatus)->prepend('select', ''))->id('status-change-transection')->class('form-control')->attribute('data-key', $transection->id) }}
                                        @endif
                                        <a href="{{ route('admin.agent.transection.list', $transection) }}"
                                            class="btn btn-light m-1" data-toggle="tooltip" title="view">
                                            <i class="fas fa-eye"></i>
                                        </a>
                                        <a href="{{ route('admin.agent-transection.edit', $transection->id) }}"
                                            class="btn btn-light m-1" data-toggle="tooltip" title="Add new">
                                            <i class="fas fa-plus"></i>
                                        </a>
                                        @if ($logged_in_user->hasAllAccess())
                                            <a href="{{ route('admin.agent-transection.destroy', $transection->id) }}"
                                                class="btn btn-light m-1 delete" data-method="delete" data-toggle="tooltip"
                                                title="Delete">
                                                <i class="fas fa-trash"></i>
                                            </a>
                                        @endif
                                        {{-- <a href="{{ route('admin.transection.pdf', $transection) }}"
                                        class="btn btn-light m-1" title="download">
                                        <i class="fa fa-download"></i>
                                    </a> --}}
                                    </div>
                                </td>
                            </tr>
                        @empty
                        @endforelse
                    @endif
                </tbody>
                <tfoot>
                    <th>#No</th>
                    <th>Transection</th>
                    <th>Agent</th>
                    <th>Total</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tfoot>
            </table>
            <div class="d-inline-block float-right">
                {{ $transections->appends(request()->query())->links() }}
            </div>
        </x-slot>
    </x-backend.card>

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
