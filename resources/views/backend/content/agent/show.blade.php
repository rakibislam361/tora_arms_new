@extends('backend.layouts.app')

@section('title', __('Manage Agent'))

@section('content')
    <input type="hidden" id="status_update_route_agent" value="{{ route('admin.update.agentstatus') }}">

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage Agent')
        </x-slot>
        <x-slot name="headerActions">
            <div class="d-flex">
                {{ html()->select('status', collect($allStatus)->prepend('Select', ''), $agent->status)->id('')->class('form-control status-change-agent mr-2')->attribute('data-key', $agent->id) }}
                <a class="form-control" href="{{ route('admin.agent.pdf', $agent->id) }}" class="btn btn-light m-1 mr-3"
                    title="print">
                    <i class="fa fa-print"></i>Download</a>
            </div>
        </x-slot>

        <x-slot name="body">
            <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-10">
                            <p class="text-bold text-center" style="font-size: 22px;">
                                Bio DATA<br>
                                APPLICATION FOR RECRUITING AGENT<br>
                                MS RECRUITING AGENCY (MS)<br>
                            </p>
                        </div>
                        <div class="col-md-2">
                            <img src="{{ asset($agent->image ? 'uploads/users/' . $agent->image : 'uploads/users/image.png') }}"
                                style="width: 180px; height: 180px; float: right;" alr="" />
                        </div>
                    </div>
                    <table class="table table-bordered">
                        <tbody>
                            <h5>PERSONAL DATA:</h5>
                            <tr>
                                <td style="width: 2%;">1.</td>
                                <td style="width: 30%">Name</td>
                                <td style="width: 2%">:</td>
                                <td>{{ $agent->user->name ?? 'N/A' }}
                                <td>Sex : {{ $agent->gender ?? 'N/A' }}</td>
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Telephone</td>
                                <td>:</td>
                                <td colspan="2">Cell : {{ $agent->user->phone ?? 'N/A' }}</td>
                                </td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>E-mail Address</td>
                                <td>:</td>
                                <td colspan="2">{{ $agent->user->email ?? 'N/A' }}</td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Date of Birth</td>
                                <td>:</td>
                                <td colspan="2">{{ $agent->dob ?? 'N/A' }}
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Fathers’ Name</td>
                                <td>:</td>
                                <td colspan="2">{{ $agent->fathers_name ?? 'N/A' }}
                            </tr>
                        </tbody>
                    </table>
                    <br>

                    <table class="table table-bordered">
                        <tbody>
                            <h5>ADDRESS</h5>
                            <tr>
                                <td style="width: 2%;">6.</td>
                                <td style="width: 30%">Permanent Address</td>
                                <td style="width: 2%">:</td>
                                <td>
                                    Vill : {{ $agent->village_permanent ?? 'N/A' }}<br>
                                    P.O : {{ $agent->post_office_permanent ?? 'N/A' }}
                                <td style="width: 30%">
                                    P.S : {{ $agent->upazila->name ?? 'N/A' }}<br>
                                    Dist : {{ $agent->district->name ?? 'N/A' }}
                                </td>
                                </td>
                            </tr>

                            <tr>
                                <td style="width: 2%;">7.</td>
                                <td style="width: 30%">Present Address</td>
                                <td style="width: 2%">:</td>
                                <td>
                                    Vill : {{ $agent->village_present ?? 'N/A' }}<br>
                                    P.O : {{ $agent->post_office_present ?? 'N/A' }}
                                <td style="width: 35%">
                                    P.S : {{ $agent->upazilaPresent->name ?? 'N/A' }}<br>
                                    Dist : {{ $agent->districtPresent->name ?? 'N/A' }}
                                </td>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="card-footer"></div>
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
