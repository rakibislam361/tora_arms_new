@inject('carbon', '\Carbon\Carbon')

@extends('backend.layouts.app')

@section('title', __('Register new patient'))

@php
$required = html()
    ->span(' *')
    ->class('text-danger');
@endphp

@section('content')

    {{ html()->form('POST', route('admin.upazilla.store'))->attribute('enctype', 'multipart/form-data')->open() }}

    <x-backend.card>
        <x-slot name="header">
            @lang('Create New upazilla')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.upazilla.index')" :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="row mb-3 px-4">
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="character_refer_name_1" class="form-label">Upazilla name
                            (english)</label>
                        <input type="text" class="form-control" name="name" id="name" value="{{ old('name') }}"
                            placeholder="Enter upazilla name english">
                        @if ($errors->has('name'))
                            <p class="text-danger">
                                <small>{{ $errors->first('name') }}</small>
                            </p>
                        @endif
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <label for="bn_name" class="form-label">Upazilla name (Bangala)</label>
                    <input type="text" class="form-control" name="bn_name" id="bn_name" value="{{ old('bn_name') }}"
                        placeholder="Enter upazilla name bangla">
                    @if ($errors->has('bn_name'))
                        <p class="text-danger">
                            <small>{{ $errors->first('bn_name') }}</small>
                        </p>
                    @endif
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <label for="district_id" class="form-label">District:</label>
                        {{ html()->select('district_id', collect($districts)->prepend('Select', ''), old('district_id'))->class('form-control') }}

                        @if ($errors->has('district_id'))
                            <p class="text-danger">
                                <small>{{ $errors->first('district_id') }}</small>
                            </p>
                        @endif
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <label for="url" class="form-label">URL:</label>
                    <input type="text" class="form-control" name="url" id="url" value="{{ old('url') }}"
                        placeholder="Location url">
                    @if ($errors->has('url'))
                        <p class="text-danger">
                            <small>{{ $errors->first('url') }}</small>
                        </p>
                    @endif
                </div>
            </div>
            <x-slot name="footer">
                <button class="btn btn-success" type="submit">@lang('Create')</button>
                <a href="{{ route('admin.upazilla.index') }}" class="btn btn-danger" type="reset">@lang('Cancel')</a>
            </x-slot>
        </x-slot> <!--  .card-body -->
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
