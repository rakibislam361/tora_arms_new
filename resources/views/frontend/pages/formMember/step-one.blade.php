<input type="hidden" id="upazilla" value="{{ json_encode($thana_list) }}">

<div class="card cardbordernone">
    <div class="bggreen mb-4 p-3">
        <h6>Personal Information::</h6>
    </div>
    <div class="row mb-3 px-4">
        <div class="col-md-4 col-sm-12">
            <label for="name_bn" class="form-label">Name (Bangla) <sup style="color:red">★</sup></label>
            <input type="text" class="form-control" name="name_bn" id="name_bn"
                value="{{ old('name_bn', get_step_value('step1', 'name_bn')) }}"
                placeholder="আবেদনকারীর পুরো নাম লিখুন">
            @if ($errors->has('name_bn'))
                <p class="text-danger">
                    <small>{{ $errors->first('name_bn') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="name" class="form-label">Name (English) <sup style="color:red">★</sup></label>
            <input type="text" class="form-control text-uppercase" name="name" id="name"
                value="{{ old('name', get_step_value('step1', 'name')) }}" placeholder="Full name in english">
            @if ($errors->has('name'))
                <p class="text-danger">
                    <small>{{ $errors->first('name') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="religion" class="form-label">Gender <sup style="color:red">★</sup></label>
            {{ html()->select('gender', ['' => 'Select', 'male' => 'Male', 'female' => 'Female'], old('gender'))->class('form-control') }}
            @if ($errors->has('gender'))
                <p class="text-danger">
                    <small>{{ $errors->first('gender') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-4 col-sm-12">
            <div class="form-group">
                <label for="father_name" class="form-label">Father's name <sup style="color:red">★</sup></label>
                <input type="text" class="form-control" name="father_name" id="father_name"
                    value="{{ old('father_name'), get_step_value('step1', 'father_name') }}"
                    placeholder="Father's Name">
                @if ($errors->has('father_name'))
                    <p class="text-danger">
                        <small>{{ $errors->first('father_name') }}</small>
                    </p>
                @endif
            </div>
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="mother_name" class="form-label">Mother's name <sup style="color:red">★</sup></label>
            <input type="text" class="form-control" name="mother_name" id="mother_name"
                value="{{ old('mother_name'), get_step_value('step1', 'mother_name') }}" placeholder="Mother's Name">
            @if ($errors->has('mother_name'))
                <p class="text-danger">
                    <small>{{ $errors->first('mother_name') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-4 col-sm-12">
            <div class="form-group">
                <label for="religion" class="form-label">Religion <sup style="color:red">★</sup></label>
                <select name="religion" id="religion" class="form-control">
                    <option value="islam" {{ get_step_value('step1', 'religion') == 'islam' ? 'selected' : '' }}>
                        Islam</option>
                    <option value="christianity"
                        {{ get_step_value('step1', 'religion') == 'christianity' ? 'selected' : '' }}>
                        Christianity</option>
                    <option value="hinduism"
                        {{ get_step_value('step1', 'religion') == 'hinduism' ? 'selected' : '' }}>
                        Hinduism</option>
                    <option value="others" {{ get_step_value('step1', 'religion') == 'others' ? 'selected' : '' }}>
                        Others</option>
                </select>
            </div>
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="religion" class="form-label">Marital status <sup style="color:red">★</sup></label>
            {{ html()->select('marital_status',['' => 'Select', 'married' => 'Married', 'unmarried' => 'Unmarried'],old('marital_status'))->class('form-control') }}
            @if ($errors->has('marital_status'))
                <p class="text-danger">
                    <small>{{ $errors->first('marital_status') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="personal" class="form-label">Phone<sup style="color:red">★</sup></label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">+88</div>
                </div>
                <input type="text" class="form-control" name="phone" id="phon_validation"
                    value="{{ old('phone'), get_step_value('step1', 'phone') }}" placeholder="">
            </div>
            @if ($errors->has('phone'))
                <p class="text-danger">
                    <small>{{ $errors->first('phone') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="image" class="form-label">Upload photo <small>(format: JPEG,
                    jpg, PNG Size: 600×600)</small></label>
            <input type="file" class="form-control" name="image" value="{{ old('image') }}" id="image">
            @if ($errors->has('image'))
                <p class="text-danger">
                    <small>{{ $errors->first('image') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-12 bg-light text-justify mt-2 p-1 mb-2 px-4">
            <h6>Educational Qualification:</h6>
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="degree_name" class="form-label">Degree Name</label>
            <input type="text" class="form-control" name="degree_name[]" placeholder="Degree name">
            @if ($errors->has('degree_name'))
                <p class="text-danger">
                    <small>{{ $errors->first('degree_name') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-3 col-sm-12">
            <div class="form-group">
                <label for="grade" class="form-label">Grade</label>
                <input type="text" class="form-control" name="grade[]" id="grade" placeholder="4.5 ">
                @if ($errors->has('grade'))
                    <p class="text-danger">
                        <small>{{ $errors->first('grade') }}</small>
                    </p>
                @endif
            </div>
        </div>

        <div class="col-md-3 col-sm-12">
            <label for="elementary_passing_year" class="form-label">Year
                Graduated</label>
            {{ html()->select('elementary_passing_year[]', collect($years)->prepend('Select', ''))->class('form-control') }}
            @if ($errors->has('elementary_passing_year'))
                <p class="text-danger">
                    <small>{{ $errors->first('elementary_passing_year') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-2" style="margin-top: 4%">
            <button type="button" class="btn btn-sm btn-info" onclick="education_fields();">Add more</button>
        </div>

        <div class="col-md-12" id="education_fields">

        </div>


        <div class="col-md-12 bg-light text-justify mt-2 p-1 mb-2 px-4">
            <h6>Address (parmanent)</h6>
        </div>

        <div class="col-md-4 col-sm-12">
            <div class="form-group">
                <label for="district_permanent" class="form-label">District: <sup style="color:red">★</sup></label>
                {{ html()->select('district_permanent',collect($districts)->prepend('Select', ''),old('district_permanent'),get_step_value('step1', 'district_permanent'))->class('form-control') }}
                @if ($errors->has('district_permanent'))
                    <p class="text-danger">
                        <small>{{ $errors->first('district_permanent') }}</small>
                    </p>
                @endif
            </div>
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="police_station_permanent" class="form-label">Upazila: <sup style="color:red">★</sup></label>
            {{ html()->select('police_station_permanent',collect()->prepend('Select', ''),old('police_station_permanent'),get_step_value('step1', 'police_station_permanent'))->class('form-control') }}

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
            <input type="text" class="form-control" name="post_office_permanent" id="post_office_permanent"
                placeholder="Enter post office name"
                value="{{ old('post_office_permanent'), get_step_value('step1', 'post_office_permanent') }}">
            @if ($errors->has('post_office_permanent'))
                <p class="text-danger">
                    <small>{{ $errors->first('post_office_permanent') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-6 col-sm-12">
            <div class="form-group">
                <label for="village_permanent" class="form-label">Village: <sup style="color:red">★</sup></label>
                <textarea type="text" class="form-control" name="village_permanent" id="village_permanent"
                    placeholder="Enter village name">{{ old('village_permanent'), get_step_value('step1', 'village_permanent') }}</textarea>
                @if ($errors->has('village_permanent'))
                    <p class="text-danger">
                        <small>{{ $errors->first('village_permanent') }}</small>
                    </p>
                @endif
            </div>
        </div>

        <div class="col-md-12 bg-light text-justify p-1 mb-2 px-4">
            <div class="d-flex">
                <label style="">Present address as like as Permanent</label>
                <div class="m-2">
                    <input style="margin-left: 5px;" type="checkbox" name="check1" id="same_as" />
                </div>
            </div>
        </div>

        <div class="col-md-4 col-sm-12">
            <div class="form-group">
                <label for="district_present" class="form-label">District: <sup style="color:red">★</sup></label>
                {{ html()->select('district_present',collect($districts)->prepend('Select', ''),old('district_present'),get_step_value('step1', 'district_present'))->class('form-control')->id('district_present') }}
                @if ($errors->has('district_present'))
                    <p class="text-danger">
                        <small>{{ $errors->first('district_present') }}</small>
                    </p>
                @endif
            </div>
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="police_station_present" class="form-label">Upazila: <sup style="color:red">★</sup></label>
            {{ html()->select('police_station_present',collect()->prepend('Select', ''),old('police_station_present'),get_step_value('step1', 'police_station_present'))->class('form-control') }}
            @if ($errors->has('police_station_present'))
                <p class="text-danger">
                    <small>{{ $errors->first('police_station_present') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-4 col-sm-12"></div>

        <div class="col-md-4 col-sm-12">
            <label for="post_office_present" class="form-label">Post Office: <sup style="color:red">★</sup></label>
            <input type="text" class="form-control" name="post_office_present" id="post_office_present"
                placeholder="Enter post office name"
                {{ old('post_office_present'), get_step_value('step1', 'post_office_present') }}>
            @if ($errors->has('post_office_present'))
                <p class="text-danger">
                    <small>{{ $errors->first('post_office_present') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-6 col-sm-12">
            <label for="village_present" class="form-label">Village: <sup style="color:red">★</sup></label>
            <textarea type="text" class="form-control" name="village_present" id="village_present"
                placeholder="Enter village name">{{ old('village_present'), get_step_value('step1', 'village_present') }}</textarea>
            @if ($errors->has('village_present'))
                <p class="text-danger">
                    <small>{{ $errors->first('village_present') }}</small>
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
                    value="{{ old('passport_no'), get_step_value('step1', 'passport_no') }}"
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
            <input type="date" class="form-control" name="passport_issue_date" id="passport_issue_date"
                value="{{ old('passport_issue_date'), get_step_value('step1', 'passport_issue_date') }}"
                placeholder="Enter institute name">
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
                <input type="date" class="form-control" name="passport_expiry_date" id="passport_expiry_date"
                    value="{{ old('passport_expiry_date'), get_step_value('step1', 'passport_expiry_date') }}"
                    placeholder="Enter Institute Name">
                @if ($errors->has('passport_expiry_date'))
                    <p class="text-danger">
                        <small>{{ $errors->first('passport_expiry_date') }}</small>
                    </p>
                @endif
            </div>
        </div>

        <div class="col-md-12 bg-light text-justify mt-2 p-1 mb-2 px-4">
            <h6>Attachment</h6>
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="police_clearance" class="form-label">Police Clearance Copy <small
                    style="font-size:12px;">(jpg, jpeg, doc, docx, pdf)</small></label>
            <input type="file" class="form-control" name="police_clearance" id="police_clearance"
                value="{{ old('police_clearance') }}">
            @if ($errors->has('police_clearance'))
                <p class="text-danger">
                    <small>{{ $errors->first('police_clearance') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-4 col-sm-12">
            <div class="form-group">
                <label for="passport_photocopy" class="form-label">Passport
                    photocopy: <small style="font-size:12px;">(jpg, jpeg, doc, docx, pdf)</small></label>
                <input type="file" class="form-control" name="passport_photocopy" id="passport_photocopy"
                    value="{{ old('passport_photocopy') }}">
                @if ($errors->has('passport_photocopy'))
                    <p class="text-danger">
                        <small>{{ $errors->first('passport_photocopy') }}</small>
                    </p>
                @endif
            </div>
        </div>

        <div class="col-md-4 col-sm-12">
            <div class="form-group">
                <label for="job_exprince_certificate" class="form-label">Job exprince certificate: <small
                        style="font-size:12px;">(jpg, jpeg, doc, docx, pdf)</small></label>
                <input type="file" class="form-control" name="job_exprince_certificate" id="job_exprince_certificate"
                    value="{{ old('job_exprince_certificate') }}">
                @if ($errors->has('job_exprince_certificate'))
                    <p class="text-danger">
                        <small>{{ $errors->first('job_exprince_certificate') }}</small>
                    </p>
                @endif
            </div>
        </div>

        <div class="col-md-12 bg-light text-justify p-1 mb-2 px-4 mt-2">
            <h6>Create account</h6>
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="email" class="form-label">Email Address <sup style="color:red">★</sup></label>
            <input type="email" class="form-control" name="email" id="email"
                value="{{ old('email'), get_step_value('step1', 'email') }}" placeholder="Email Address">
            @if ($errors->has('email'))
                <p class="text-danger">
                    <small>{{ $errors->first('email') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-4 col-sm-12">
            <label for="password" class="form-label">Password <small>(at least 8
                    character)</small></label>
            <input type="password" name="password" class="form-control" id="password"
                value="{{ old('password'), get_step_value('step1', 'password') }}" placeholder="Password">
            @if ($errors->has('password'))
                <p class="text-danger">
                    <small>{{ $errors->first('password') }}</small>
                </p>
            @endif
        </div>

        <div class="col-md-4 col-sm-12">
            <div class="form-group">
                <label class="form-label" for="password_confirmation">Confirm
                    Password</label>
                <input type="password" name="password_confirmation" class="form-control"
                    value="{{ old('password_confirmation') }}" id="password_confirmation"
                    placeholder="Confirm Password">
                @if ($errors->has('password_confirmation'))
                    <p class="text-danger">
                        <small>{{ $errors->first('password_confirmation') }}</small>
                    </p>
                @endif
            </div>
        </div>

        <div class="col-md-12">
            <div class="form-group mt-2">
                <button type="submit" value="submit" class="col-md-2 btn btn-primary float-right">Submit</button>
            </div>
        </div>
    </div>
</div>
<script>
    var option = 1;

    function education_fields() {
        option++;
        var objTo = document.getElementById('education_fields')
        var divtest = document.createElement("div");
        divtest.setAttribute("class", "row removeclass" + option);
        var rdiv = 'removeclass' + option;
        divtest.innerHTML =
            `<div class="col-md-4 col-sm-12">
                    <input type="text" class="form-control" name="degree_name[]" placeholder="Degree name">
                </div>
                <div class="col-md-3 col-sm-12">
                    <div class="form-group">
                        <input type="text" class="form-control" name="grade[]" id="grade"
                            placeholder="4.5 ">
                    </div>
                </div>
                <div class="col-md-3 col-sm-12">
                    {{ html()->select('elementary_passing_year[]', collect($years)->prepend('Select', ''))->class('form-control') }}
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
