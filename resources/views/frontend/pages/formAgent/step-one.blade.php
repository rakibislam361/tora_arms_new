                       <div class="card">
                           <div class="bggreen mb-4 p-3">
                               <h6>Personal Information:</h6>
                           </div>
                           <div class="row mb-3 px-4">
                               <div class="col-md-4 col-sm-12">
                                   <label for="agent_name" class="form-label">Name<sup
                                           style="color:red">★</sup></label>
                                   <input type="text" class="form-control text-uppercase" name="agent_name"
                                       id="agent_name" value="{{ old('agent_name') }}" placeholder="Full Name">
                                   @if ($errors->has('agent_name'))
                                       <p class="text-danger">
                                           <small>{{ $errors->first('agent_name') }}</small>
                                       </p>
                                   @endif
                               </div>

                               <div class="col-md-4 col-sm-12">
                                   <div class="form-group">
                                       <label for="fathers_name" class="form-label">Father's Name <sup
                                               style="color:red">★</sup></label>
                                       <input type="text" class="form-control" name="fathers_name" id="fathers_name"
                                           value="{{ old('fathers_name') }}" placeholder="Father's Name">
                                       @if ($errors->has('fathers_name'))
                                           <p class="text-danger">
                                               <small>{{ $errors->first('fathers_name') }}</small>
                                           </p>
                                       @endif
                                   </div>
                               </div>

                               <div class="col-md-4 col-sm-12">
                                   <div class="form-group">
                                       <label for="religion" class="form-label">Gender <sup
                                               style="color:red">★</sup></label>
                                       {{ html()->select('gender', ['' => 'Select', 'male' => 'male', 'female' => 'female'], old('gender'))->class('form-control') }}
                                       @if ($errors->has('gender'))
                                           <p class="text-danger">
                                               <small>{{ $errors->first('gender') }}</small>
                                           </p>
                                       @endif
                                   </div>
                               </div>

                               <div class="col-md-4 col-sm-12">
                                   <label for="personal" class="form-label">Cell Phone<sup
                                           style="color:red">★</sup></label>
                                   <div class="input-group mb-2">
                                       <div class="input-group-prepend">
                                           <div class="input-group-text">+88</div>
                                       </div>
                                       <input type="text" class="form-control phon_validation" name="phone"
                                           value="{{ old('phone'), get_step_value('step1', 'phone') }}"
                                           placeholder="01675969772">
                                   </div>
                                   @if ($errors->has('phone'))
                                       <p class="text-danger">
                                           <small>{{ $errors->first('phone') }}</small>
                                       </p>
                                   @endif
                               </div>

                               <div class="col-md-4 col-sm-12">
                                   <label for="dob" class="form-label">Date of birth <sup
                                           style="color:red">★</sup></label>
                                   <input type="date" class="form-control" name="dob" id="dob"
                                       value="{{ old('dob'), get_step_value('step1', 'dob') }}"
                                       placeholder="Spouse's Name">
                                   @if ($errors->has('dob'))
                                       <p class="text-danger">
                                           <small>{{ $errors->first('dob') }}</small>
                                       </p>
                                   @endif
                               </div>

                               <div class="col-md-4 col-sm-12">
                                   <label for="image" class="form-label">Upload Photo</label>
                                   <input type="file" class="form-control" name="image" id="image">
                                   <small>(format: JPEG, jpg, png size: 600×600)</small>

                                   @if ($errors->has('image'))
                                       <p class="text-danger">
                                           <small>{{ $errors->first('image') }}</small>
                                       </p>
                                   @endif
                               </div>

                           </div>

                           <div class="bg-light text-justify p-1 mb-2 px-4">
                               <h6>Passport No:</h6>
                           </div>
                           <div class="row mb-3 px-4">
                               <div class="col-md-6 col-sm-12">
                                   <div class="form-group">
                                       <label for="passport_no" class="form-label">Passport No:</label>
                                       <input type="text" class="form-control" name="passport_no" id="passport_no"
                                           value="{{ old('passport_no') }}" placeholder="Enter Passport Numer">
                                   </div>
                               </div>
                               <div class="col-md-6 col-sm-12">
                                   <label for="passport_issue_date" class="form-label">Issue Date:</label>
                                   <input type="date" class="form-control" name="passport_issue_date"
                                       id="passport_issue_date" value="{{ old('passport_issue_date') }}"
                                       placeholder="Enter Issue date">
                               </div>
                               <div class="col-md-6 col-sm-12">
                                   <div class="form-group">
                                       <label for="passport_expiry_date" class="form-label">Expiry
                                           Date:</label>
                                       <input type="date" class="form-control" name="passport_expiry_date"
                                           id="passport_expiry_date" value="{{ old('passport_expiry_date') }}"
                                           placeholder="Enter expiry date">
                                   </div>
                               </div>
                               <div class="col-md-6 col-sm-12">
                                   <label for="nid_no" class="form-label">NID No: <sup
                                           style="color:red">★</sup></label>
                                   <input type="number" class="form-control" name="nid_no" id="nid_no"
                                       value="{{ old('nid_no') }}" placeholder="NID">
                                   @if ($errors->has('nid_no'))
                                       <p class="text-danger">
                                           <small>{{ $errors->first('nid_no') }}</small>
                                       </p>
                                   @endif
                               </div>
                           </div>

                           <div class="bg-light text-justify p-1 mb-2 px-4">
                               <h6>Present address:</h6>
                           </div>
                           <div class="row mb-3 px-4">
                               <div class="col-md-6 col-sm-12">
                                   <div class="form-group">
                                       <label for="village_present" class="form-label">Village: <sup
                                               style="color:red">★</sup></label>
                                       <textarea type="text" class="form-control" name="village_present"
                                           id="village_present"
                                           placeholder="Enter village name">{{ old('village_present') }}</textarea>
                                       @if ($errors->has('village_present'))
                                           <p class="text-danger">
                                               <small>{{ $errors->first('village_present') }}</small>
                                           </p>
                                       @endif
                                   </div>
                               </div>
                               <div class="col-md-6 col-sm-12">
                                   <label for="post_office_present" class="form-label">Post Office: <sup
                                           style="color:red">★</sup></label>
                                   <input type="text" class="form-control" name="post_office_present"
                                       id="post_office_present" value="{{ old('post_office_present') }}"
                                       placeholder="Enter post office name">
                                   @if ($errors->has('post_office_present'))
                                       <p class="text-danger">
                                           <small>{{ $errors->first('post_office_present') }}</small>
                                       </p>
                                   @endif
                               </div>
                               <div class="col-md-6 col-sm-12">
                                   <label for="district_present" class="form-label">District: <sup
                                           style="color:red">★</sup></label>
                                   {{ html()->select('district_present', collect($districts)->prepend('Select', ''), old('district_present'))->class('form-control') }}
                                   @if ($errors->has('district_present'))
                                       <p class="text-danger">
                                           <small>{{ $errors->first('district_present') }}</small>
                                       </p>
                                   @endif
                               </div>

                               <div class="col-md-6 col-sm-12">
                                   <label for="police_station_present" class="form-label">Upazila:<sup
                                           style="color:red">★</sup></label>
                                   {{ html()->select('police_station_present', collect()->prepend('Select', ''), old('police_station_present'))->class('form-control') }}
                                   @if ($errors->has('police_station_present'))
                                       <p class="text-danger">
                                           <small>{{ $errors->first('police_station_present') }}</small>
                                       </p>
                                   @endif
                               </div>
                           </div>


                           <div class="bg-light text-justify p-1 mb-2 px-4">
                               <h6>Permanent Address:</h6>
                               <div class="d-flex">
                                   <label style="">address as like as present</label>
                                   <div class="m-2">
                                       <input style="margin-left: 5px;" type="checkbox" name="check1" id="same_as" />
                                   </div>
                               </div>
                           </div>

                           <div class="row mb-3 px-4">
                               <div class="col-md-6 col-sm-12">
                                   <div class="form-group">
                                       <label for="village_permanent" class="form-label">Village: <sup
                                               style="color:red">★</sup></label>

                                       <textarea type="text" class="form-control" name="village_permanent"
                                           id="village_permanent"
                                           placeholder="Enter village name">{{ old('village_permanent') }}</textarea>
                                       @if ($errors->has('village_permanent'))
                                           <p class="text-danger">
                                               <small>{{ $errors->first('village_permanent') }}</small>
                                           </p>
                                       @endif
                                   </div>
                               </div>
                               <div class="col-md-6 col-sm-12">
                                   <label for="post_office_permanent" class="form-label">Post Office: <sup
                                           style="color:red">★</sup></label>
                                   <input type="text" class="form-control" name="post_office_permanent"
                                       id="post_office_permanent" value="{{ old('post_office_permanent') }}"
                                       placeholder="Enter post office name">
                                   @if ($errors->has('post_office_permanent'))
                                       <p class="text-danger">
                                           <small>{{ $errors->first('post_office_permanent') }}</small>
                                       </p>
                                   @endif
                               </div>
                               <div class="col-md-6 col-sm-12">
                                   <div class="form-group">
                                       <label for="district_permanent" class="form-label">District: <sup
                                               style="color:red">★</sup></label>
                                       {{ html()->select('district_permanent', collect($districts)->prepend('Select', ''), old('district_permanent'))->class('form-control') }}
                                       @if ($errors->has('district_permanent'))
                                           <p class="text-danger">
                                               <small>{{ $errors->first('district_permanent') }}</small>
                                           </p>
                                       @endif
                                   </div>
                               </div>
                               <div class="col-md-6 col-sm-12">
                                   <label for="police_station_permanent" class="form-label">Upazila: <sup
                                           style="color:red">★</sup></label>
                                   {{ html()->select('police_station_permanent', collect()->prepend('Select', ''), old('police_station_permanent'))->class('form-control') }}

                                   @if ($errors->has('police_station_permanent'))
                                       <p class="text-danger">
                                           <small>{{ $errors->first('police_station_permanent') }}</small>
                                       </p>
                                   @endif
                               </div>
                           </div>

                           <div class="bg-light text-justify p-1 mb-2 px-4">
                               <h6>Create account</h6>
                           </div>
                           <div class="row mb-3 px-4">
                               <div class="col-md-4 col-sm-12">
                                   <label for="email" class="form-label">Email Address <sup
                                           style="color:red">★</sup></label>
                                   <input value="{{ old('email') }}" type="email" class="form-control" name="email"
                                       id="email" placeholder="Email Address">
                                   @if ($errors->has('email'))
                                       <p class="text-danger">
                                           <small>{{ $errors->first('email') }}</small>
                                       </p>
                                   @endif
                               </div>
                               <div class="col-md-4 col-sm-12">
                                   <label for="password" class="form-label">Password <small>(at least 8
                                           character)</small><sup style="color:red">★</sup></label>
                                   <input type="password" name="password" class="form-control" id="password"
                                       placeholder="Password">
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
                                           id="password_confirmation" placeholder="Confirm Password">
                                       @if ($errors->has('password_confirmation'))
                                           <p class="text-danger">
                                               <small>{{ $errors->first('password_confirmation') }}</small>
                                           </p>
                                       @endif
                                   </div>
                               </div>
                           </div>
                           <div class="row mb-4 px-4 justify-content-center">
                               <div class="col-md-4 col-md-12">
                                   <button class="col-md-2 btn btn-primary float-right" type="submit"
                                       value="Submit">Submit</button>
                               </div>
                           </div>
                       </div>
