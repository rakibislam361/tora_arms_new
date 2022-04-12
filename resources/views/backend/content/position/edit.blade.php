@extends('backend.layouts.app')

@section('title', __('Update position'))

@section('content')

    @php
    $required = html()
        ->span(' *')
        ->class('text-danger');
    @endphp

    {{ html()->modelForm($position, 'PUT', route('admin.position.update', $position))->class('form-horizontal')->attribute('enctype', 'multipart/form-data')->open() }}

    <x-backend.card>
        <x-slot name="header">
            @lang('Update position')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.position.index')" :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="row">
                <div class="col-md-9">
                    <div class="form-group">
                        <div class="row mb-3 px-4">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label for="position_name" class="form-label">Position name
                                        (english)</label>
                                    <input type="text" class="form-control" name="position_name" id="position_name"
                                        value="{{ $position->position_name }}" placeholder="Enter position english">
                                    @if ($errors->has('position_name'))
                                        <p class="text-danger">
                                            <small>{{ $errors->first('position_name') }}</small>
                                        </p>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="row md-3 px-4">
                            <div class="form-group d-flex">
                                <div class="col-md-6 col-sm-6">
                                    <button class="btn btn-success form-controll" type="submit">@lang('Update')</button>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <a href="{{ route('admin.position.index') }}" class="btn btn-danger"
                                        type="reset">@lang('Cancel')</a>
                                </div>
                            </div>
                        </div>
                    </div>
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
