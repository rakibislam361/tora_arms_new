@extends('backend.layouts.app')

@section('title', __('Update Agent'))

@section('content')

    @php
    $required = html()
        ->span(' *')
        ->class('text-danger');
    @endphp

    {{ html()->modelForm($agent, 'PUT', route('admin.agent.update', $agent->id))->attribute('enctype', 'multipart/form-data')->open() }}

    <x-backend.card>
        <x-slot name="header">
            @lang('Update Agent')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.agent.index')" :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="row">
                <div class="col-md-9">
                    <x-backend.card>
                        <div class="card-header with-border">
                            <h3 class="card-title"> Agent Management <small class="ml-2">Update
                                    Agent</small></h3>
                        </div>
                        <x-slot name="body">
                            <div class="p-3 mb-2 bg-light text-black fx-4"><strong>PERSONAL INFORMATION</strong></div>
                            <div class="row mb-3 px-4">
                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="agent_name" class="form-label">Name</label>
                                        <input type="text" class="form-control" name="agent_name" id="agent_name"
                                            value="{{ $agent->user->name }}" placeholder="">
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="phone" class="form-label">Phone</label>
                                        <input type="text" class="form-control" name="phone" id="phone"
                                            value="{{ $agent->user->phone }}" placeholder="Enter Phone Number">
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="dob" class="form-label">Date of Birth</label>
                                    <input type="date" class="form-control" name="dob" id="dob"
                                        value="{{ $agent->dob }}" placeholder="Spouse's Name">
                                    @if ($errors->has('dob'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('dob') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="fathers_name" class="form-label">Father's Name</label>
                                        <input type="text" class="form-control" name="fathers_name" id="fathers_name"
                                            value="{{ $agent->fathers_name }}" placeholder="Father's Name">
                                        @if ($errors->has('fathers_name'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('fathers_name') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="p-3 mb-2 bg-light text-black fx-4 text-uppercase"><strong>Permanent
                                    Address:</strong></div>
                            <div class="row mb-3 px-4">
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="village_permanent" class="form-label">Village:</label>
                                        <input type="text" class="form-control" name="village_permanent"
                                            id="village_permanent" value="{{ $agent->village_permanent }}"
                                            placeholder="Enter Village Name">
                                        @if ($errors->has('village_permanent'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('village_permanent') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="post_office_permanent" class="form-label">Post Office:</label>
                                    <input type="text" class="form-control" name="post_office_permanent"
                                        id="post_office_permanent" value="{{ $agent->post_office_permanent }}"
                                        placeholder="Enter Village Name">
                                    @if ($errors->has('post_office_permanent'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('post_office_permanent') }}</small>
                                        </p>
                                    @endif
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="district_permanent" class="form-label">District:</label>
                                        {{ html()->select('district_permanent', collect($districts)->prepend('Select', ''), old($agent->district_permanent))->class('form-control') }}

                                        @if ($errors->has('district_permanent'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('district_permanent') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="police_station_permanent" class="form-label">Police
                                        Station:</label>
                                    {{ html()->select('police_station_permanent', collect($thanas)->prepend('Select', ''), old($agent->police_station_permanent))->class('form-control') }}

                                    @if ($errors->has('police_station_permanent'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('police_station_permanent') }}</small>
                                        </p>
                                    @endif
                                </div>
                            </div>
                            <div class="p-3 mb-2 bg-light text-black fx-4 text-uppercase"><strong>Present
                                    Address</strong></div>
                            <div class="row mb-3 px-4">
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="village_present" class="form-label">Village:</label>
                                        <input type="text" class="form-control" name="village_present"
                                            id="village_present" value="{{ $agent->village_present }}"
                                            placeholder="Enter Village Name">
                                        @if ($errors->has('village_present'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('village_present') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="post_office_present" class="form-label">Post Office:</label>
                                    <input type="text" class="form-control" name="post_office_present"
                                        id="post_office_present" value="{{ $agent->post_office_present }}"
                                        placeholder="Enter Village Name">
                                    @if ($errors->has('post_office_present'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('post_office_present') }}</small>
                                        </p>
                                    @endif
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="district_present" class="form-label">District:</label>
                                    {{ html()->select('district_present', collect($districts)->prepend('Select', ''), old($agent->district_present))->class('form-control') }}

                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="police_station_present" class="form-label">Police Station:</label>
                                    {{ html()->select('police_station_present', collect($thanas)->prepend('Select', ''), old($agent->police_station_present))->class('form-control') }}

                                </div>
                            </div>
                            <!-- End row -->

                            <div class="p-3 mb-2 bg-light text-black fx-4 text-uppercase"><strong>Passport No</strong>
                            </div>
                            <div class="row mb-3 px-4">
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="passport_no" class="form-label">No:</label>
                                        <input type="text" class="form-control" name="passport_no" id="passport_no"
                                            value="{{ $agent->passport_no }}" placeholder="Enter passport_no">
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="passport_issue_date" class="form-label">Issue Date:</label>
                                    <input type="date" class="form-control" name="passport_issue_date"
                                        id="passport_issue_date" value="{{ $agent->passport_issue_date }}"
                                        placeholder="">
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="passport_expiry_date" class="form-label">Expiry Date:</label>
                                        <input type="date" class="form-control" name="passport_expiry_date"
                                            id="passport_expiry_date" value="{{ $agent->passport_expiry_date }}"
                                            placeholder="">
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="nid_no" class="form-label">NID No:</label>
                                    <input type="text" class="form-control" name="nid_no" id="nid_no"
                                        value="{{ $agent->nid_no }}" placeholder="Enter NID No">
                                    @if ($errors->has('nid_no'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('nid_no') }}</small>
                                        </p>
                                    @endif
                                </div>
                            </div>

                        </x-slot> <!--  .card-body -->
                        <x-slot name="footer">
                            <button class="btn btn-success" type="submit">@lang('Update')</button>
                            <a class="btn btn-danger" type="reset">@lang('Cancel')</a>
                        </x-slot>
                    </x-backend.card>

                </div> <!-- .col-md-3 -->
                <div class="col-sm-3">
                    <div class="card">
                        <div class="card-header with-border">
                            <h3 class="card-title">Image Add</h3>
                        </div>
                        <div class="card-body p-3">
                            <div class="form-group">
                                <div class="col-md-12 col-sm-12">
                                    <label for="agent_gender" class="form-label">Gender</label>
                                    <div class="form-group">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="" value="male"
                                                {{ $agent->gender == 'male' ? 'checked' : '' }}>
                                            <label class="form-check-label" for="inlineRadio1">Male</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="" value="female"
                                                {{ $agent->gender == 'female' ? 'checked' : '' }}>
                                            <label class="form-check-label" for="inlineRadio2">Female</label>
                                        </div>
                                    </div>
                                </div>

                            </div> <!-- form-group -->
                            <div class="row">
                                <div class="card-title col">Profile image</div>
                            </div> <!-- row -->
                            <hr class="mt-0">
                            <div class="form-group" id="for_New_upload">
                                @php
                                    $image = asset('uploads/users') . '/' . $agent->image;
                                @endphp
                                <label for="image">
                                    <img src="{{ asset($image) }}" class="img-fluid" id="holder" alt="Image upload">
                                </label>
                                <input type="file" class="form-control" name="image" id="image">
                                @if ($errors->has('image'))
                                    <p class="text-danger">
                                        <small>{{ $errors->first('image') }}</small>
                                    </p>
                                @endif
                                <div class="form-cotrol mt-3">
                                    <button class="btn btn-success" type="submit">@lang('Update')</button>
                                </div>
                            </div> <!-- form-group -->
                        </div> <!--  card-body -->
                    </div> <!-- /.card -->
                </div> <!-- .col-md-9 -->
            </div> <!-- .row -->
        </x-slot>

    </x-backend.card>

    {{ html()->closeModelForm() }}

@endsection

@push('after-styles')
    <link rel="stylesheet" href="{{ asset('assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css') }}">
@endpush

@push('after-scripts')
    <script src="{{ asset('js/admin/editor.js') }}"></script>
    <script src="{{ asset('assets/plugins/moment/moment.js') }}"></script>
    <script src="{{ asset('assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>

    <script>
        $(document).ready(function() {
            simple_editor('.editor', 400);
            $('#datepicker-autoclose').datepicker({
                format: "dd-mm-yyyy",
                clearBtn: true,
                autoclose: true,
                todayHighlight: true,
            });
            $("#image").change(function() {
                readImageURL(this, $('#holder'));
            });
        });

        $(document).on('blur', "#name", function() {
            let nameField = $(this);
            let nameValue = nameField.val();
            if (!nameValue) {
                $("#post_error").text('Title must not empty');
                nameField.addClass('is-invalid');
            } else {
                nameField.removeClass('is-invalid');
            }
        });

        $(function() {
            $(".form-check-input").click(function() {
                const status = $(this).val();
                if (status === "schedule") {
                    $("#scheduleDate").removeClass("d-none");
                } else if (status === "1") {
                    $("#for_New_upload").removeClass("d-none");
                } else if (status === "0") {
                    $("#for_New_upload").addClass("d-none");
                } else {
                    $("#scheduleDate").addClass("d-none");
                }
            });

        });
    </script>

@endpush
