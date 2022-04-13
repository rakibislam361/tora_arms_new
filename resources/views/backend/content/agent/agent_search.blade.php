@extends('backend.layouts.app')

@section('title', __('Agent search'))

@section('content')
    <input type="hidden" id="status_update_route_agent" value="{{ route('admin.update.agentstatus') }}">

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Agent search')
        </x-slot>

        <x-slot name="body">
            <form action="{{ route('admin.agent.search') }}" method="get" enctype="multipart/form-data">
                @csrf
                <div class="row">
                    <div class="col-md-12 d-flex col-sm-12">

                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="district_permanent" class="form-label">District: (permanent)</label>
                                {{ html()->select('district_permanent', collect($districts)->prepend('All District', ''), old('district_permanent'))->class('form-control') }}
                                @if ($errors->has('district_permanent'))
                                    <p class="text-danger">
                                        <small>{{ $errors->first('district_permanent') }}</small>
                                    </p>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                {{ html()->label('Status')->class('form-label')->for('status') }}
                                {{ html()->select('status', collect($allStatus)->prepend('All', ''), request('status'))->class('form-control') }}
                            </div>
                        </div>


                        <div class="col-md-3 col-sm-12">
                            <label for="member_gender" class="form-label">Gender</label>
                            <div class="form-group">
                                @php
                                    $gender = request('gender', 'Male');
                                @endphp
                                <div class="form-check form-check-inline">
                                    {{ html()->radio('gender', $gender == 'Male', 'Male')->class('form-check-input')->id('Male') }}
                                    <label class="form-check-label" for="Male">Male</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    {{ html()->radio('gender', $gender == 'Female', 'Female')->class('form-check-input')->id('Female') }}
                                    <label class="form-check-label" for="Female">Female</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-3 from-control">
                        <button type="submit" name="next" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
            <br>

            <table id="example" class="table" style="width:100%">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>District Permanent</th>
                        {{-- <th>Position</th> --}}
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @if (!empty($agents))
                        @foreach ($agents as $val => $agent)
                            <tr>
                                <td>{{ $val + 1 }}</td>
                                <td>{{ $agent->user->name ?? 'N/A' }}</td>
                                <td>{{ $agent->user->email ?? 'N/A' }}</td>
                                <td>{{ $agent->district->name ?? 'N/A' }}</td>
                                {{-- <td>{{ $agent->position->position_name ?? 'N/A' }}</td> --}}
                                <td>
                                    @if ($agent->statusGet)
                                        <span class="badge badge-primary">{{ $agent->statusGet->name }}</span>
                                    @else
                                        <span class="badge badge-primary">N/A</span>
                                    @endif
                                </td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        {{ html()->select('status', collect($allStatus)->prepend('All', '0'))->id('')->class('form-control status-change-agent')->attribute('data-key', $agent->id) }}

                                        <a href="{{ route('admin.agent.show', $agent->id) }}" class="btn btn-light m-1"
                                            data-toggle="tooltip" title="view">
                                            <i class="fas fa-eye"></i>
                                        </a>
                                        <a href="{{ route('admin.agent.edit', $agent->id) }}" class="btn btn-light m-1"
                                            data-toggle="tooltip" title="Edit">
                                            <i class="ti-pencil-alt"></i>
                                        </a>
                                        <a href="{{ route('admin.agent.destroy', $agent->id) }}"
                                            class="btn btn-light m-1 delete" data-method="delete" data-toggle="tooltip"
                                            title="Delete">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                        <a href="{{ route('admin.agent.pdf', $agent->id) }}" class="btn btn-light m-1"
                                            title="download">
                                            <i class="fa fa-download"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    @else
                        <table id="example" class="table" style="width: 100%">
                            <tr>
                                No Data Found
                            </tr>
                        </table>
                    @endif
                </tbody>
                <tfoot>
                    <th>NO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>District Permanent</th>
                    {{-- <th>Position</th> --}}
                    <th>Status</th>
                    <th>Action</th>
                </tfoot>
            </table>

            <div class="d-inline-block float-right">
                {{ $agents->appends(request()->query())->links() }}
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
