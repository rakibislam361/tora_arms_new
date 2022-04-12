@extends('backend.layouts.app')

@section('title', __('Update Upazila'))

@section('content')

    @php
    $required = html()
        ->span(' *')
        ->class('text-danger');
    @endphp

    {{ html()->modelForm($upazilla, 'PUT', route('admin.upazilla.update', $upazilla))->class('form-horizontal')->attribute('enctype', 'multipart/form-data')->open() }}

    <x-backend.card>
        <x-slot name="header">
            @lang('Update upazilla')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.upazilla.index')" :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="row">
                <div class="col-md-9">
                    <x-backend.card>
                        <div class="card-header with-border">
                            <h3 class="card-title">upazilla Management <small class="ml-2">Update
                                    upazilla</small></h3>
                        </div>
                        <x-slot name="body">
                            <div class="row mb-3 px-4">
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="character_refer_name_1" class="form-label">Upazilla name
                                            (english)</label>
                                        <input type="text" class="form-control" name="name" id="name"
                                            value="{{ $upazilla->name }}" placeholder="Enter upazilla name english">
                                        @if ($errors->has('name'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('name') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="bn_name" class="form-label">Upazilla name (Bangala)</label>
                                    <input type="text" class="form-control" name="bn_name" id="bn_name"
                                        value="{{ $upazilla->bn_name }}" placeholder="Enter upazilla name bangla">
                                    @if ($errors->has('bn_name'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('bn_name') }}</small>
                                        </p>
                                    @endif
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="district_id" class="form-label">District:</label>
                                        {{ html()->select('district_id', collect($districts)->prepend('Select', ''), old($upazilla->district_id))->class('form-control') }}

                                        @if ($errors->has('district_id'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('district_id') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="url" class="form-label">URL:</label>
                                    <input type="text" class="form-control" name="url" id="url"
                                        value="{{ $upazilla->url }}" placeholder="Location url">
                                    @if ($errors->has('url'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('url') }}</small>
                                        </p>
                                    @endif
                                </div>
                            </div>
                        </x-slot> <!--  .card-body -->
                        <x-slot name="footer">
                            <button class="btn btn-success" type="submit">@lang('Update')</button>
                            <a href="{{ route('admin.upazilla.index') }}" class="btn btn-danger"
                                type="reset">@lang('Cancel')</a>
                        </x-slot>
                    </x-backend.card>
                </div> <!-- .col-md-9 -->

                <div class="col-sm-3">
                    <div class="card">
                        <div class="card-header with-border">
                            <h3 class="card-title">Publishing Tools</h3>
                        </div>
                        {{-- <div class="card-body p-3">
                                <div class="form-group">
                                    @php $status = old('status', $upazilla->status);@endphp
                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="status" value="publish" id="publish"
                                            class="checking" checked>
                                        <label class="form-check-label" for="publish">Publish</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="status" value="draft" id="draft"
                                            class="checking" @if ($status === 'draft') checked @endif>
                                        <label class="form-check-label" for="draft">Draft</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="status" value="schedule"
                                            id="schedule" class="checking" @if ($status === 'schedule') checked @endif>
                                        <label class="form-check-label" for="schedule">Schedule</label>
                                    </div>
                                </div> <!-- form-group -->
                                <div class="form-group @if ($status !== 'schedule') d-none @endif" id="scheduleDate">
                                    <div class="form-group">
                                        <div class="input-group">
                                            {{ html()->text('schedule_time')->class('form-control')->id('datepicker-autoclose')->placeholder('dd-mm-yyyy')->attributes(['autoComplete' => 'off']) }}
                                            <div class="input-group-append bg-custom b-0">
                                                <span class="input-group-text"><i class="fa fa-calendar"></i></span>
                                            </div>
                                        </div><!-- input-group -->
                                    </div>
                                </div> <!-- form-group -->
                                <div class="row">
                                    <div class="card-title col">upazilla Image (694x500)</div>
                                </div> <!-- row -->
                                <hr class="mt-0">
                                <div class="form-group">
                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="is_picture"
                                            value="{{ now() }}" id="new" class="checking" checked>
                                        <label class="form-check-label" for="new">Upload Image</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input type="radio" class="form-check-input" name="is_picture" value="" id="off"
                                            class="checking">
                                        <label class="form-check-label" for="off">Image Off</label>
                                    </div>
                                </div> <!-- form-group -->
                                <div class="form-group" id="for_New_upload">
                                    @php
                                        $image = $upazilla->is_picture ? $upazilla->picture : 'img/backend/no-image.gif';
                                    @endphp
                                    <label for="image">
                                        <img src="{{ asset($image) }}" class="img-fluid" id="holder" alt="Image upload">
                                    </label>
                                    {{ html()->file('picture')->id('image')->class('d-none')->acceptImage() }}
                                </div> <!-- form-group -->
                            </div> <!--  card-body --> --}}
                    </div> <!-- /.card -->
                </div> <!-- .col-md-3 -->
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
