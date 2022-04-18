@extends('backend.layouts.app')

@section('title', __('Manage Member'))

@section('content')
    <input type="hidden" id="status_update_route" value="{{ route('admin.update.status') }}">
    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage Member')
        </x-slot>

        <x-slot name="headerActions">
            <div class="d-flex">
                @if ($logged_in_user->hasAllAccess())
                    {{ html()->select('status', collect($allStatus)->prepend('Select', ''))->class('form-control status-change')->attribute('data-key', $member->id) }}
                @endif
                <a class="form-control" href="{{ route('admin.member.pdf', $member->id) }}" class="btn btn-light m-1 mr-3"
                    title="download">
                    <i class="fa fa-print"></i>Download</a>
            </div>
        </x-slot>

        <x-slot name="body">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-10">
                            <p class="text-bold text-center" style="font-size: 30px;">
                                BIO DATA<br>
                            </p>
                        </div>
                        <div class="col-md-2">
                            <img src="{{ asset($member->image ? 'uploads/users/' . $member->image : 'uploads/users/image.png') }}"
                                style="width: 180px; height: 180px; float: right;" alr="" />
                        </div>
                    </div>
                    <table class="table table-bordered">
                        <tbody>
                            <h5>PERSONAL DATA: </h5>
                            <tr>
                                <td>1.</td>
                                <td>Name</td>
                                <td>:</td>
                                <td>
                                    <!--First name : {{ $member->first_name ?? 'N/A' }}<br>-->
                                    <!--Last name : {{ $member->last_name ?? 'N/A' }}<br>-->
                                    Full name : {{ $member->user->name ?? 'N/A' }}
                                <td>Sex : {{ $member->gender }}</td>
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Fathers’ Name</td>
                                <td>:</td>
                                <td colspan="2">{{ $member->father_name ?? 'N/A' }}</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Mothers’ Name</td>
                                <td>:</td>
                                <td colspan="2">{{ $member->mother_name ?? 'N/A' }}</td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Desire position</td>
                                <td>:</td>
                                <td colspan="2">{{ $member->position->position_name ?? 'N/A' }}
                                </td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Mobile/Telephone No</td>
                                <td>:</td>
                                <td colspan="2">Cell : {{ $member->user->phone ?? 'N/A' }}</td>
                                </td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td>Date of Birth</td>
                                <td>:</td>
                                <td colspan="2">{{ $member->dob ?? 'N/A' }}
                                </td>
                            </tr>
                            <tr>
                                <td>7.</td>
                                <td>Present Address</td>
                                <td>:</td>
                                <td>
                                    Vill : {{ $member->village_present ?? 'N/A' }}<br>
                                    P.O : {{ $member->post_office_present ?? 'N/A' }}
                                <td>
                                    P.S : {{ $member->upazilaPresent->name ?? 'N/A' }}<br>
                                    Dist : {{ $member->districtPresent->name ?? 'N/A' }}
                                </td>
                                </td>
                            </tr>
                            <tr>
                                <td>8.</td>
                                <td>Permanent Address</td>
                                <td>:</td>
                                <td>
                                    Vill : {{ $member->village_permanent ?? 'N/A' }}<br>
                                    P.O : {{ $member->post_office_permanent }}
                                <td>
                                    P.S : {{ $member->upazilaPermanent->name ?? 'N/A' }}<br>
                                    Dist : {{ $member->districtPermanent->name ?? 'N/A' }}
                                </td>
                                </td>
                            </tr>

                            <tr>
                                <td>9.</td>
                                <td>Passport No</td>
                                <td>:</td>
                                <td colspan="2"> NO : {{ $member->passport_no ?? 'N/A' }}<br>
                                    Issue Date : {{ $member->passport_issue_date ?? 'N/A' }}<br>
                                    Expiry Date : {{ $member->passport_expiry_date ?? 'N/A' }}

                                </td>
                            </tr>
                            <!--<tr>-->
                            <!--    <td>10.</td>-->
                            <!--    <td>Police Clearance</td>-->
                            <!--    <td>:</td>-->
                            <!--    <td colspan="2">-->
                            <!--        Issue Date :-->
                            <!--        {{ date('j F Y', strtotime($member->police_clearance_issue)) ?? 'N/A' }}<br>-->
                            <!--        Expiry Date : {{ $member->police_clearance_expired ?? 'N/A' }}<br>-->
                            <!--        Remaining Day =-->
                            <!--        {{ police_clearance_remaining_date($member->police_clearance_issue) . ' ' . 'days' }}-->
                            <!--    </td>-->
                            <!--</tr>-->

                            <tr>
                                <td style="width: 2%;">10.</td>
                                <td style="width: 30%">Elementary</td>
                                <td style="width: 2%">:</td>
                                <td colspan="2">
                                    <table style="border:none; width: 100%;">
                                        <tr>
                                            <th>Exam</th>
                                            <th>GPA</th>
                                            <th>Year</th>
                                        </tr>
                                        @forelse ($degree_name as $exam)
                                            <tr>
                                                <td>{{ $exam->degree_name ?? 'N/A' }}</td>
                                                <td>{{ $exam->grade ?? 'N/A' }}</td>
                                                <td>{{ $exam->elementary_passing_year ?? 'N/A' }}</td>
                                            </tr>
                                        @empty
                                            <tr></tr>
                                        @endforelse
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <br>

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
