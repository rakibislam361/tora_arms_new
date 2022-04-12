@inject('carbon', '\Carbon\Carbon')

@extends('backend.layouts.app')

@section('title', __('Register new patient'))

@php
$required = html()
    ->span(' *')
    ->class('text-danger');
@endphp

@section('content')

    {{ html()->form('POST', route('admin.district.store'))->attribute('enctype', 'multipart/form-data')->open() }}

    <x-backend.card>
        <x-slot name="header">
            @lang('Create New district')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.district.index')" :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="row">
                <div class="col-md-9">
                    <x-backend.card>
                        <div class="card-header with-border">
                            <h3 class="card-title">district Management <small class="ml-2">Create
                                    district</small>
                            </h3>
                        </div>
                        <x-slot name="body">
                            <div class="row mb-3 px-4">
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label for="character_refer_name_1" class="form-label">District name
                                            (english)</label>
                                        <input type="text" class="form-control" name="name" id="name"
                                            value="{{ old('name') }}" placeholder="Enter district name english">
                                        @if ($errors->has('name'))
                                            <p class="text-danger">
                                                <small>{{ $errors->first('name') }}</small>
                                            </p>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="bn_name" class="form-label">District name (Bangala)</label>
                                    <input type="text" class="form-control" name="bn_name" id="bn_name"
                                        value="{{ old('bn_name') }}" placeholder="Enter district name bangla">
                                    @if ($errors->has('bn_name'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('bn_name') }}</small>
                                        </p>
                                    @endif
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="lat" class="form-label">latitude location</label>
                                    <input type="text" class="form-control" name="lat" id="lat"
                                        value="{{ old('lat') }}" placeholder="Enter location's latitude ">
                                    @if ($errors->has('lat'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('lat') }}</small>
                                        </p>
                                    @endif
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <label for="lon" class="form-label">longitude location</label>
                                    <input type="text" class="form-control" name="lon" id="lon"
                                        value="{{ old('lon') }}" placeholder="Enter location's longitude">
                                    @if ($errors->has('lon'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('lon') }}</small>
                                        </p>
                                    @endif
                                </div>
                                <div class="col-md-6 col-sm-12">

                                    <label for="url" class="form-label">URL:</label>
                                    <input type="text" class="form-control" name="url" id="url"
                                        value="{{ old('url') }}" placeholder="Location url">
                                    @if ($errors->has('url'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('url') }}</small>
                                        </p>
                                    @endif
                                </div>
                            </div>
                        </x-slot> <!--  .card-body -->
                        <x-slot name="footer">
                            <button class="btn btn-success" type="submit">@lang('Create')</button>
                            <a href="{{ route('admin.district.index') }}" class="btn btn-danger"
                                type="reset">@lang('Cancel')</a>
                        </x-slot>
                    </x-backend.card>
                </div> <!-- .col-md-9 -->

                <div class="col-sm-3">
                    {{-- <div class="card">
                        <div class="card-header with-border">
                            <h3 class="card-title">Publishing Tools</h3>
                        </div>
                        <div class="card-body p-3">
                            <div class="form-group">
                                @php $status = old('status');@endphp
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
                                <div class="card-title col">district Image (694x500)</div>
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
                                <label for="image">
                                    <img src="{{ asset('img/backend/no-image.gif') }}" class="img-fluid" id="holder"
                                        alt="Image upload">
                                </label>
                                {{ html()->file('picture')->id('image')->class('d-none')->acceptImage() }}
                            </div> <!-- form-group -->
                        </div> <!--  card-body -->
                    </div> <!-- /.card --> --}}
                </div> <!-- .col-md-3 -->
            </div> <!-- .row -->
        </x-slot>

    </x-backend.card>

    {{ html()->form()->close() }}

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
