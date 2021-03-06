@extends('backend.layouts.app')

@section('title', __('Update Candidate'))

@section('content')

    @php
    $required = html()
        ->span(' *')
        ->class('text-danger');
    @endphp

    {{ html()->modelForm($member, 'PUT', route('admin.member.update', $member))->attribute('enctype', 'multipart/form-data')->open() }}

    <x-backend.card>
        <x-slot name="header">
            @lang('Update Candidate')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace" :href="route('admin.member.index')"
                :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="row">
                <div class="col-md-9">
                    <x-backend.card>
                        <x-slot name="body">
                            <div class="row mb-3 px-4">
                                <input type="hidden" id="upazilla" value="{{ json_encode($thana_list) }}">
                                <div class="col-md-4 col-sm-12">
                                    <label for="name" class="form-label">Full name <sup style="color:red">★</sup></label>
                                    <input type="text" class="form-control text-uppercase" name="name" id="name"
                                        value="{{ $member->user->name }}" placeholder="Full name in english">
                                    @if ($errors->has('name'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('name') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="father_name" class="form-label">Father's name <sup
                                                style="color:red">★</sup></label>
                                        <input type="text" class="form-control" name="father_name" id="father_name"
                                            value="{{ old('father_name', $member->father_name) }}"
                                            placeholder="Father's Name">
                                        @if ($errors->has('father_name'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('father_name') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="mother_name" class="form-label">Mother's name <sup
                                            style="color:red">★</sup></label>
                                    <input type="text" class="form-control" name="mother_name" id="mother_name"
                                        value="{{ $member->mother_name }}" placeholder="Mother's Name">
                                    @if ($errors->has('mother_name'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('mother_name') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="spouse_name" class="form-label">Spouse name</label>
                                    <input type="text" class="form-control" name="spouse_name" id="spouse_name"
                                        value={{ $member->spouse_name ?? '' }} placeholder="Spouse name">
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="position_desierd" class="form-label">Position desierd <sup
                                                style="color:red">★</sup></label>
                                        {{ html()->select('position_desierd', collect($positions), $member->position_desierd)->class('form-control') }}
                                        @if ($errors->has('position_desierd'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('position_desierd') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="personal" class="form-label">Date of birth<sup
                                            style="color:red">★</sup></label>
                                    <div class="input-group mb-2">
                                        <input type="date" class="form-control" name="dob"
                                            value="{{ old('dob', $member->dob) }}" placeholder="">
                                    </div>
                                    @if ($errors->has('dob'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('dob') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="nid_no" class="form-label">NID no: / Birth certificate <sup
                                            style="color:red">★</sup></label>
                                    <input type="number" class="form-control" name="nid_no" id="nid_no"
                                        value="{{ $member->nid_no }}" placeholder="NID">
                                    @if ($errors->has('nid_no'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('nid_no') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="religion" class="form-label">Gender <sup
                                            style="color:red">★</sup></label>
                                    {{ html()->select('gender', ['' => 'Select', 'male' => 'male', 'female' => 'female'], $member->gender)->class('form-control') }}
                                    @if ($errors->has('gender'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('gender') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-12 bg-light text-justify mt-4 mb-3">
                                    <label class="mt-1">Contact number</h6>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="personal" class="form-label">Phone number (personal) <sup
                                            style="color:red">★</sup></label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">+88</div>
                                        </div>
                                        <input type="text" class="form-control phon_validation" name="phone"
                                            value="{{ $member->user->phone }}" placeholder="">
                                    </div>
                                    @if ($errors->has('phone'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('phone') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="phone_father" class="form-label">Phone number (father)</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">+88</div>
                                        </div>
                                        <input type="text" class="form-control phon_validation" name="phone_father"
                                            value="{{ $member->phone_father }}" placeholder="">
                                    </div>
                                    @if ($errors->has('phone_father'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('phone_father') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="phone_others" class="form-label">Phone number (others)</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">+88</div>
                                        </div>
                                        <input type="text" class="form-control phon_validation" name="phone_others"
                                            value="{{ $member->phone_others }}" placeholder="">
                                    </div>
                                    @if ($errors->has('phone_others'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('phone_others') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-12 bg-light text-justify mt-2 p-1 mb-2 px-4">
                                    <h6>Present Address</h6>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="district_present" class="form-label">District: <sup
                                                style="color:red">★</sup></label>
                                        {{ html()->select('district_present',collect($districts)->prepend('Select', ''),old('district_present', $member->district_present),get_step_value('step1', 'district_present'))->class('form-control')->id('district_present') }}
                                        @if ($errors->has('district_present'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('district_present') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="police_station_present" class="form-label">Upazila: <sup
                                            style="color:red">★</sup></label>
                                    {{ html()->select('police_station_present',collect($thana)->prepend('Select', ''),old('police_station_present', $member->police_station_present),get_step_value('step1', 'police_station_present'))->class('form-control') }}
                                    @if ($errors->has('police_station_present'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('police_station_present') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-4 col-sm-12"></div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="post_office_present" class="form-label">Post Office:
                                        <sup style="color:red">★</sup></label>
                                    <input type="text" class="form-control" name="post_office_present"
                                        id="post_office_present" placeholder="Enter post office name"
                                        value={{ $member->post_office_present }}
                                        {{ old('post_office_present', $member->post_office_present) }}>
                                    @if ($errors->has('post_office_present'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('post_office_present') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-6 col-sm-12">
                                    <label for="village_present" class="form-label">Village: <sup
                                            style="color:red">★</sup></label>
                                    <textarea type="text" class="form-control" name="village_present" id="village_present"
                                        placeholder="Enter village name">{{ old('village_present', $member->village_present), get_step_value('step1', 'village_present') }}</textarea>
                                    @if ($errors->has('village_present'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('village_present') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-12 bg-light text-justify mt-4 mb-4">
                                    <div class="d-flex">
                                        <label class="mt-1">Permanent address as like as present </label>
                                        <div class="m-2">
                                            <input style="margin-left: 5px;" type="checkbox" name="check1" id="same_as" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="district_permanent" class="form-label">District: <sup
                                                style="color:red">★</sup></label>
                                        {{ html()->select('district_permanent',collect($districts)->prepend('Select', ''),old('district_permanent', $member->district_permanent),get_step_value('step1', 'district_permanent'))->class('form-control')->id('district_present') }}
                                        @if ($errors->has('district_permanent'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('district_permanent') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="police_station_permanent" class="form-label">Upazila:<sup
                                            style="color:red">★</sup></label>
                                    {{ html()->select('police_station_permanent',collect($thana)->prepend('Select', ''),old('police_station_permanent', $member->police_station_permanent),get_step_value('step1', 'police_station_permanent'))->class('form-control') }}
                                    @if ($errors->has('police_station_permanent'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('police_station_permanent') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-4 col-sm-12"></div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="post_office_permanent" class="form-label">Post Office: <sup
                                            style="color:red">★</sup></label>
                                    <input type="text" class="form-control" name="post_office_permanent"
                                        id="post_office_permanent" placeholder="Enter post office name"
                                        value={{ $member->post_office_permanent }}
                                        {{ old('post_office_permanent', $member->post_office_permanent),get_step_value('step1', 'post_office_permanent') }}>
                                    @if ($errors->has('post_office_permanent'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('post_office_permanent') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-6 col-sm-12">
                                    <label for="village_permanent" class="form-label">Village: <sup
                                            style="color:red">★</sup></label>
                                    <textarea type="text" class="form-control" name="village_permanent" id="village_permanent"
                                        placeholder="Enter village name">{{ old('village_permanent', $member->village_permanent), get_step_value('step1', 'village_permanent') }}</textarea>
                                    @if ($errors->has('village_permanent'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('village_permanent') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-12 bg-light text-justify mt-2 p-1 mb-2 px-4">
                                    <h6>Passport Information:</h6>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="passport_no" class="form-label">Passport No:</label>
                                        <input type="text" class="form-control" name="passport_no" id="passport_no"
                                            value="{{ old('passport_no', $member->passport_no) }}"
                                            placeholder="Enter passport number">
                                        @if ($errors->has('passport_no'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('passport_no') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="passport_issue_date" class="form-label">Issue Date:</label>
                                    <input type="date" class="form-control" name="passport_issue_date"
                                        id="passport_issue_date"
                                        value="{{ old('passport_issue_date', $member->passport_issue_date) }}"
                                        placeholder="Enter village name">
                                    @if ($errors->has('passport_issue_date'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('passport_issue_date') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="passport_expiry_date" class="form-label">Expiry
                                            Date:</label>
                                        <input type="date" class="form-control" name="passport_expiry_date"
                                            id="passport_expiry_date"
                                            value="{{ old('passport_expiry_date', $member->passport_expiry_date) }}"
                                            placeholder="Enter Institute Name">
                                        @if ($errors->has('passport_expiry_date'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('passport_expiry_date') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>

                                <div class="col-md-12 bg-light text-justify mt-5 p-1 mb-2 px-4">
                                    <h6>Educational Qualification:</h6>
                                </div>

                                @forelse ($degree_name as $key => $degree)
                                    <div class="col-md-4 col-sm-12">
                                        @if ($key == 0)
                                            <label for="degree_name" class="form-label">Degree Name
                                            </label>
                                        @endif
                                        <input type="text" class="form-control" name="education[0][degree_name]"
                                            placeholder="Degree name" value="{{ $degree->degree_name ?? '' }}">
                                        @if ($errors->has('degree_name'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('degree_name') }}</small>
                                            </p>
                                        @endif
                                    </div>

                                    <div class="col-md-3 col-sm-12">
                                        <div class="form-group">
                                            @if ($key == 0)
                                                <label for="grade" class="form-label">Grade</label>
                                            @endif
                                            <input type="text" class="form-control exam_grade" name="education[0][grade]"
                                                id="grade" placeholder="4.5" value="{{ $degree->grade ?? '' }}">
                                            @if ($errors->has('grade'))
                                                <p class="text-danger">
                                                    <small>{{ $errors->first('grade') }}</small>
                                                </p>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-12">
                                        @if ($key == 0)
                                            <label for="elementary_passing_year" class="form-label">Year
                                                Graduated </label>
                                        @endif
                                        {{ html()->select('education[0][elementary_passing_year]',collect($years)->prepend('Select', ''),old('elementary_passing_year[]', $degree->elementary_passing_year ?? ''),get_step_value('step1', 'elementary_passing_year[]'))->class('form-control')->id('elementary_passing_year[]') }}
                                        @if ($errors->has('elementary_passing_year'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('elementary_passing_year') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                @empty
                                @endforelse
                                <div class="col-md-2 col-sm-12 {{ $key == 0 ? 'mt-4' : '' }}">
                                    <button type="button" class="btn btn-sm btn-info" onclick="education_fields();">Add
                                        more</button>
                                </div>
                                <div class="col-md-12" id="education_fields">

                                </div>

                                <div class="col-md-12 bg-light text-justify mt-4 mb-4">
                                    <label class="mt-1">Technical Qualification:</h6>
                                </div>

                                <div class="col-md-6 col-sm-12">
                                    <label for="technical_qualification_institute_name"
                                        class="form-label">Technical:</label>
                                    <textarea type="text" class="form-control" name="technical_qualification_institute_name"
                                        id="technical_qualification_institute_name"
                                        value="{{ $member->technical_qualification_institute_name }}"
                                        placeholder="Enter technical qualification details" cols="30"
                                        rows="5"></textarea>
                                </div>

                                <div class="col-md-6 col-sm-12">
                                    <label for="other_qualification_institute_name" class="form-label">Other's:</label>
                                    <textarea type="text" class="form-control" name="other_qualification_institute_name"
                                        id="other_qualification_institute_name"
                                        value="{{ $member->other_qualification_institute_name }}"
                                        placeholder="Enter qualification details" cols="30" rows="5"></textarea>
                                </div>

                                <div class="col-md-12 bg-light text-justify mt-4 mb-4">
                                    <label class="mt-1">Police Clearance details</h6>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="police_clearance_issue" class="form-label">Issue date</label>
                                        <div class="d-flex">
                                            <input type="date" max="{{ date('Y-m-d') }}" class="form-control"
                                                name="police_clearance_issue" id="police_clearance_issue"
                                                value="{{ $member->police_clearance_issue }}">
                                        </div>
                                    </div>
                                </div>


                                <div class="col-md-8 d-flex" id="police_clearanc">

                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="religion" class="form-label">Police Case/Punishment
                                        Record <sup style="color:red">★</sup></label>
                                    {{ html()->select('punishment_record', ['' => 'Select', 'yes' => 'Yes', 'no' => 'No'], old('punishment_record'))->class('form-control') }}
                                    @if ($errors->has('punishment_record'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('punishment_record') }}</small>
                                        </p>
                                    @endif
                                </div>


                                <div class="col-md-12 bg-light text-justify mt-2 p-1 mb-2 px-4">
                                    <h6>New Attachment:</h6>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="police_clearance" class="form-label">Police Clearance Copy <br> <small
                                            style="font-size:12px;">(jpg, jpeg, doc, docx, pdf)</small></label>
                                    <input type="file" class="form-control dropify" name="police_clearance"
                                        id="police_clearance">
                                    @if ($errors->has('police_clearance'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('police_clearance') }}</small>
                                        </p>
                                    @endif
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="passport_photocopy" class="form-label">Passport
                                            photocopy: <br> <small style="font-size:12px;">(jpg, jpeg, doc, docx,
                                                pdf)</small></label>
                                        <input type="file" class="form-control dropify" name="passport_photocopy"
                                            id="passport_photocopy">
                                        @if ($errors->has('passport_photocopy'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('passport_photocopy') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <div class="form-group">
                                        <label for="job_exprince_certificate" class="form-label">Job exprince
                                            certificate: <br> <small style="font-size:12px;">(jpg, jpeg, doc, docx,
                                                pdf)</small></label>
                                        <input type="file" class="form-control dropify" name="job_exprince_certificate"
                                            id="job_exprince_certificate">
                                        @if ($errors->has('job_exprince_certificate'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('job_exprince_certificate') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-12">
                                    <label for="all_attachment" class="form-label">All Attachment
                                        copy: <small style="font-size:12px;">(PDF only)</small></label>
                                    <input type="file" class="form-control dropify" name="all_attachment"
                                        id="all_attachment">
                                    @if ($errors->has('all_attachment'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('all_attachment') }}</small>
                                        </p>
                                    @endif
                                </div>
                            </div>
                        </x-slot>

                        <x-slot name="footer">
                            <a href="{{ route('admin.member.index') }}" class="btn btn-lg btn-danger"
                                type="reset">@lang('Cancel')</a>
                            <button class="btn btn-lg btn-success" type="submit">@lang('Update')</button>

                        </x-slot>

                    </x-backend.card>
                </div> <!-- .col-md-9 -->

                <div class="col-md-3">
                    <div class="card">
                        <div class="card-header with-border">
                            <h3 class="card-title">Image Add</h3>
                        </div>
                        <div class="card-body p-3">
                            {{-- <div class="form-group">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="" value="male"
                                        {{ $member->gender == 'male' ? 'checked' : '' }}>
                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="" value="female"
                                        {{ $member->gender == 'female' ? 'checked' : '' }}>
                                    <label class="form-check-label" for="inlineRadio2">Female</label>
                                </div>
                            </div> --}}
                            <div class="row">
                                <div class="card-title col text-bold">Profile image</div>
                            </div> <!-- row -->
                            <hr class="mt-0">

                            <div class="form-group" id="for_New_upload">
                                <label for="image">
                                    <img src="{{ $member->image ? asset('/uploads/users/' . $member->image) : asset('img/backend/no-image.gif') }}"
                                        class="img-fluid" id="holder" alt="Image upload">
                                </label>
                                {{ html()->file('image')->id('image')->class('d-none')->acceptImage() }}
                                <div class="form-cotrol mt-2">
                                    <button class="btn btn-success col-12" type="submit">@lang('Update')</button>
                                </div>
                            </div>

                            <div class="row">
                                <div class="card-title col text-bold">All Attachment</div>
                            </div>
                            <hr class="mt-0">
                            <div class="form-group">
                                @if ($member->police_clearance)
                                    <div class="attached-group attached-group d-inline mb-2 mr-2">
                                        <label class="text-muted">
                                            <a href="{{ asset('uploads/users/' . $member->police_clearance) }}" download>
                                                <i class="fas fa-3x fa-file-pdf"></i>
                                                <?php $value = pathinfo($member->police_clearance, PATHINFO_EXTENSION); ?>
                                                <p>{{ 'Police clearance', '.' . $value }}</p>
                                            </a>
                                        </label>
                                    </div>
                                @endif

                                @if ($member->passport_photocopy)
                                    <div class="attached-group attached-group d-inline mb-2 mr-2">
                                        <label class="text-muted">
                                            <a href="{{ asset('uploads/users/' . $member->passport_photocopy) }}"
                                                download>
                                                <i class="fas fa-3x fa-file-pdf"></i>
                                                <?php $value = pathinfo($member->passport_photocopy, PATHINFO_EXTENSION); ?>
                                                <p>{{ 'Passport copy', '.' . $value }}</p>
                                            </a>
                                        </label>
                                    </div>
                                @endif

                                @if ($member->job_exprince_certificate)
                                    <div class="attached-group attached-group d-inline mb-2 mr-2">
                                        <label class="text-muted">
                                            <a href="{{ asset('uploads/users/' . $member->job_exprince_certificate) }}"
                                                download>
                                                <i class="fas fa-3x fa-file-pdf"></i>
                                                <?php $value = pathinfo($member->job_exprince_certificate, PATHINFO_EXTENSION); ?>
                                                <p>{{ 'Job exprince', '.' . $value }}
                                                </p>
                                            </a>
                                        </label>
                                    </div>
                                @endif

                                @if ($member->all_attachment)
                                    <div class="attached-group attached-group d-inline mb-2 mr-2">
                                        <label class="text-muted">
                                            <a href="{{ asset('uploads/users/' . $member->all_attachment) }}" download>
                                                <i class="fas fa-3x fa-file-pdf"></i>
                                                <?php $value = pathinfo($member->all_attachment, PATHINFO_EXTENSION); ?>
                                                <p>{{ 'All doc', '.' . $value }}
                                                </p>
                                            </a>
                                        </label>
                                    </div>
                                @endif
                            </div>
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

        var option = 1;

        function education_fields() {
            option++;
            var objTo = document.getElementById('education_fields')
            var divtest = document.createElement("div");
            divtest.setAttribute("class", "row removeclass" + option);
            var rdiv = 'removeclass' + option;
            divtest.innerHTML =
                `<div class="col-md-4 col-sm-12">
                        <input type="text" class="form-control" name="education[${option}][degree_name]" placeholder="Degree name">
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <input type="text" class="form-control exam_grade" name="education[${option}][grade]" id="grade"
                                placeholder="4.5 ">
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        {{ html()->select('education[${option}][elementary_passing_year]', collect($years)->prepend('Select', ''))->class('form-control') }}
                    </div>
                    <div class="col-md-2 col-sm-12">
                        <div class="input-group-btn">
                            <button class="btn btn-danger" type="button" onclick="remove_education_fields(${option});">
                                <span class="glyphicon glyphicon-minus" aria-hidden="true">
                                </span>Remove</button>
                        </div>
                    </div>
                <div class="clear"></div>`;
            objTo.appendChild(divtest)
        }

        function remove_education_fields(rid) {
            $('.removeclass' + rid).remove();
        }
    </script>
@endpush
