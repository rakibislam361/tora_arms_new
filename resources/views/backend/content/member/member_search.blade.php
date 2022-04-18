@extends('backend.layouts.app')

@section('title', __('Candidate search'))

@section('content')
    <input type="hidden" id="status_update_route" value="{{ route('admin.update.status') }}">
    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Candidate search')
        </x-slot>

        <x-slot name="body">
            <div class="report-params p-3" style="border: solid #d9d9d9 3px;">
                <form action="{{ route('admin.member.search') }}" method="GET">
                    <div class="row">
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                {{ html()->label('District')->class('form-label')->for('district_permanent') }}
                                {{ html()->select('district_permanent', collect($districts)->prepend('All district', ''), request('district_permanent'))->class('form-control') }}
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                {{ html()->label('Position Desired')->class('form-label')->for('position_desierd') }}
                                {{ html()->select('position_desierd', $positions, request('position_desierd'))->class('form-control') }}
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
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                {{ html()->label('Status')->class('form-label')->for('status') }}
                                {{ html()->select('status', collect($allStatus)->prepend('All', ''), request('status'))->class('form-control') }}
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                {{ html()->label('From Date')->class('form-label')->for('from_date') }}
                                {{ html()->date('from_date', now(), request('from_date'))->class('form-control') }}
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                {{ html()->label('To Date')->class('form-label')->for('to_date') }}
                                {{ html()->date('to_date', now(), request('to_date'))->class('form-control') }}
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="form-group">
                                <label class="invisible">Submit</label>
                                <button type="submit" name="next" class="btn btn-block btn-primary">
                                    <i class="fa fa-search" aria-hidden="true"></i> Search
                                </button>
                            </div>
                        </div>

                        {{-- <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            {{ html()->label('Age')->for('Age') }}
                            <div class="d-flex justify-content-between">
                                {{ html()->number('age_from', request('age_from', 0), 0, 60, 1)->class('form-control mr-1') }}
                                {{ html()->number('age_to', request('age_to', 60), 0, 60, 1)->class('form-control mr-1') }}
                            </div>
                        </div>
                    </div> --}}
                    </div>

                </form>
            </div>
            <br>
            @if ($members->isNotEmpty())
                <table id="example" class="table" style="width:100%">
                    <thead>
                        <tr>
                            <th class="text-center align-middle">
                                {{ html()->checkbox('all-member', false, 'all-member')->id('')->class('checkbox-all') }}
                            </th>
                            <th>Member</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th class="text-nowrap">Position</th>
                            <th>Status</th>
                            <th class="text-nowrap">Apply Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($members as $key => $member)
                            <tr>
                                <td class="text-center align-middle">
                                    {{ html()->checkbox('member', false, $member->id)->id('')->class('checkbox-item') }}
                                </td>
                                <td><a
                                        href="{{ route('admin.member.show', $member->id) }}">{{ $member->record_id }}</a>
                                </td>
                                <td class="text-nowrap">{{ $member->user->name ?? 'N/A' }}
                                </td>
                                <td>{{ $member->user->email ?? 'N/A' }}</td>
                                <td>{{ $member->districtPermanent->name ?? 'N/A' }}</td>
                                <td>{{ $member->position->position_name ?? 'N/A' }}</td>
                                {{-- <td>{{ $member->age ?? 'N/A' }}</td> --}}
                                <td>
                                    @if ($member->statusGet)
                                        <span class="badge badge-primary">{{ $member->statusGet->name }}</span>
                                    @else
                                        <span class="badge badge-primary">N/A</span>
                                    @endif
                                </td>
                                <td class="text-nowrap">{{ date('d-m-Y', strtotime($member->created_at)) }}</td>
                                <td>
                                    <div class="btn-group btn-group-sm">
                                        @if ($logged_in_user->hasAllAccess())
                                            {{ html()->select('status', collect($allStatus)->prepend('select', ''))->id('')->class('form-control status-change')->attribute('data-key', $member->id) }}
                                        @endif
                                        <a href="{{ route('admin.member.show', $member) }}" class="btn btn-light m-1"
                                            data-toggle="tooltip" title="view">
                                            <i class="fas fa-eye"></i>
                                        </a>
                                        <a href="{{ route('admin.member.edit', $member->id) }}" class="btn btn-light m-1"
                                            data-toggle="tooltip" title="Edit">
                                            <i class="ti-pencil-alt"></i>
                                        </a>
                                        @if ($logged_in_user->hasAllAccess())
                                            <a href="{{ route('admin.member.destroy', $member->id) }}"
                                                class="btn btn-light m-1 delete" data-method="delete" data-toggle="tooltip"
                                                title="Delete">
                                                <i class="fas fa-trash"></i>
                                            </a>
                                        @endif
                                        <a href="{{ route('admin.member.pdf', $member) }}" class="btn btn-light m-1"
                                            title="download">
                                            <i class="fa fa-download"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        @endforeach

                    </tbody>
                    <tfoot>
                        <th class="text-center align-middle">
                            {{ html()->checkbox('all-member', false, 'all-member')->id('')->class('checkbox-all') }}
                        </th>
                        <th>Member</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>District</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th class="text-nowrap">Apply Date</th>
                        <th>Action</th>
                    </tfoot>
                </table>
                <div class="clearfix">
                    <div class="d-inline-block float-left">
                        @if ($logged_in_user->hasAllAccess())
                            <button type="button" class="btn btn-danger generate-email disabled">
                                Send Email
                            </button>
                        @endif
                    </div>
                    <div class="d-inline-block float-right">
                        {{ $members->appends(request()->query())->links() }}
                    </div>
                </div>
            @endif
        </x-slot>
    </x-backend.card>


    <!-- Modal -->
    <div class="modal fade" id="emailSubmitForm" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="emailSubmitFormLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="emailSubmitFormLabel">Email Sending Form</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body expense-modal">
                    {{-- form append here --}}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>


@endsection
