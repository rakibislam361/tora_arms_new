        <!-- Start Traninng information section -->
        <div class="card cardbordernone">

            <div class="bggreen mb-4 p-3">
                <h6>Character Reference:</h6>
            </div>
            <div class=" row mb-3 px-4">
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="character_refer_name_1" class="form-label">1. Name</label>
                        <input type="text" class="form-control" name="character_refer_name_1"
                            id="character_refer_name_1"
                            value="{{ old('character_refer_name_1'), get_step_value('step5', 'character_refer_name_1') }}"
                            placeholder="Enter name">
                        @if ($errors->has('character_refer_name_1'))
                            <p class="text-danger">
                                <small>{{ $errors->first('character_refer_name_1') }}</small>
                            </p>
                        @endif
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <label for="character_refer_company_name_1" class="form-label">Company
                        Name</label>
                    <input type="text" class="form-control" name="character_refer_company_name_1"
                        id="character_refer_company_name_1"
                        value="{{ old('character_refer_company_name_1'), get_step_value('step5', 'character_refer_company_name_1') }}"
                        placeholder="Enter company name">
                    @if ($errors->has('character_refer_company_name_1'))
                        <p class="text-danger">
                            <small>{{ $errors->first('character_refer_company_name_1') }}</small>
                        </p>
                    @endif
                </div>

                <div class="col-md-6 col-sm-12">
                    <label for="character_refer_position_1" class="form-label">Position</label>
                    <input type="text" class="form-control" name="character_refer_position_1"
                        id="character_refer_position_1"
                        value="{{ old('character_refer_position_1'), get_step_value('step5', 'character_refer_position_1') }}"
                        placeholder="Enter position's name">
                    @if ($errors->has('character_refer_position_1'))
                        <p class="text-danger">
                            <small>{{ $errors->first('character_refer_position_1') }}</small>
                        </p>
                    @endif
                </div>

                <div class="col-md-6 col-sm-12">
                    <label for="character_refer_phone_1" class="form-label">Contact No:</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">+88</div>
                        </div>
                        <input type="text" class="form-control" name="character_refer_phone_1" id="phon_validation"
                            value="{{ old('character_refer_phone_1'), get_step_value('step5', 'character_refer_phone_1') }}"
                            placeholder="">
                    </div>
                    @if ($errors->has('character_refer_phone_1'))
                        <p class="text-danger">
                            <small>{{ $errors->first('character_refer_phone_1') }}</small>
                        </p>
                    @endif
                </div>

            </div>
            <!-- End row -->
            <div class="row mb-3 px-4">
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="character_refer_name_2" class="form-label">2. Name</label>
                        <input type="text" class="form-control" name="character_refer_name_2"
                            id="character_refer_name_2"
                            value="{{ old('character_refer_name_2'), get_step_value('step5', 'character_refer_name_2') }}"
                            placeholder="Mr/Ms :">
                    </div>
                    @if ($errors->has('character_refer_name_2'))
                        <p class="text-danger">
                            <small>{{ $errors->first('character_refer_name_2') }}</small>
                        </p>
                    @endif
                </div>
                <div class="col-md-6 col-sm-12">
                    <label for="character_refer_company_name_2" class="form-label">Company
                        Name</label>
                    <input type="text" class="form-control" name="character_refer_company_name_2"
                        id="character_refer_company_name_2"
                        value="{{ old('character_refer_company_name_2'), get_step_value('step5', 'character_refer_company_name_2') }}"
                        placeholder="Enter company name">
                </div>
                <div class="col-md-6 col-sm-12">
                    <label for="character_refer_position_2" class="form-label">Position</label>
                    <input type="text" class="form-control" name="character_refer_position_2"
                        id="character_refer_position_2"
                        value="{{ old('character_refer_position_2'), get_step_value('step5', 'character_refer_position_2') }}"
                        placeholder="Enter position's name">
                </div>

                <div class="col-md-6 col-sm-12">
                    <label for="character_refer_phone_2" class="form-label">Contact No:</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">+88</div>
                        </div>
                        <input type="text" class="form-control" name="character_refer_phone_2" id="phon_validation"
                            value="{{ old('character_refer_phone_2'), get_step_value('step5', 'character_refer_phone_2') }}"
                            placeholder="Enter contact number">
                    </div>
                </div>

            </div>
        </div>
        <br>
        <div class="card cardbordernone">
            <!-- End row -->
            <div class="col-md-12 col-sm-12">
                <div class="bg-light p-1">
                    <h6>Passport No:</h6>
                </div>
            </div>
            <div class="row mb-3 px-4">
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="passport_no" class="form-label">No:</label>
                        <input type="text" class="form-control" name="passport_no" id="passport_no"
                            value="{{ old('passport_no'), get_step_value('step5', 'passport_no') }}"
                            placeholder="Enter passport number">
                        @if ($errors->has('passport_no'))
                            <p class="text-danger">
                                <small>{{ $errors->first('passport_no') }}</small>
                            </p>
                        @endif
                    </div>
                </div>

                <div class="col-md-6 col-sm-12">
                    <label for="passport_issue_date" class="form-label">Issue Date:</label>
                    <input type="date" class="form-control" name="passport_issue_date" id="passport_issue_date"
                        value="{{ old('passport_issue_date'), get_step_value('step5', 'passport_issue_date') }}"
                        placeholder="Enter institute name">
                    @if ($errors->has('passport_issue_date'))
                        <p class="text-danger">
                            <small>{{ $errors->first('passport_issue_date') }}</small>
                        </p>
                    @endif
                </div>

                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="passport_expiry_date" class="form-label">Expiry
                            Date:</label>
                        <input type="date" class="form-control" name="passport_expiry_date" id="passport_expiry_date"
                            value="{{ old('passport_expiry_date'), get_step_value('step5', 'passport_expiry_date') }}"
                            placeholder="Enter Institute Name">
                        @if ($errors->has('passport_expiry_date'))
                            <p class="text-danger">
                                <small>{{ $errors->first('passport_expiry_date') }}</small>
                            </p>
                        @endif
                    </div>
                </div>

                <div class="col-md-6 col-sm-12">
                    <label for="nid_no" class="form-label">NID no: <sup style="color:red">★</sup></label>
                    <input type="number" class="form-control" name="nid_no" id="nid_no"
                        value="{{ old('nid_no'), get_step_value('step5', 'nid_no') }}" placeholder="NID">
                    @if ($errors->has('nid_no'))
                        <p class="text-danger">
                            <small>{{ $errors->first('nid_no') }}</small>
                        </p>
                    @endif
                </div>

            </div>
        </div>
        <br>
        <div class="card cardbordernone">
            <div class="col-md-12 col-sm-12">
                <div class="bg-light p-1">
                    <h6>Any Others</h6>
                </div>
            </div>
            <div class="row mb-3 px-4">
                <div class="col-md-6 col-sm-12">
                    <label for="Job like Performance" class="form-label">Country & Job like
                        Performance</label>
                    <textarea name="performance" id="performance"
                        class="form-control">{{ old('performance'), get_step_value('step5', 'performance') }}</textarea>
                </div>

                <div class="col-md-6 col-sm-12">
                    <label for="Any Other" class="form-label">Any Other</label>
                    <textarea name="any_others" id="any_others"
                        class="form-control">{{ old('any_others'), get_step_value('step5', 'any_others') }}</textarea>
                </div>
            </div>
            <!-- End row -->
        </div>
