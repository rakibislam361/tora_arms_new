@inject('carbon', '\Carbon\Carbon')

@extends('backend.layouts.app')

@section('title', __('Create new account'))

@php
$required = html()
    ->span(' *')
    ->class('text-danger');
@endphp

@section('content')

    {{ html()->form('POST', route('admin.transection-accounts.store'))->attribute('enctype', 'multipart/form-data')->open() }}

    <x-backend.card>
        <x-slot name="header">
            @lang('Create New Account')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.transection-accounts.index')" :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="row d-flex justify-content-center">
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Account Title</label>
                                {{ html()->text('account_title')->class('form-control')->placeholder('Account Title') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('name')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Opening Date</label>
                                {{ html()->date('opening_date')->class('form-control')->placeholder('Opening Date') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('name')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Account Number</label>
                                {{ html()->text('account_number')->class('form-control bankaccount_number')->placeholder('') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('name')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Opening Balance</label>
                                {{ html()->text('opening_balance')->class('form-control')->placeholder('0.00') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('name')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->
                        </div>

                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">Note</label>
                                <textarea name="note" class="form-control" id="" cols="30" rows="4"></textarea>
                                @error('description')
                                    <p class="text-danger margin-bottom-none">{{ $message }}</p>
                                @enderror
                            </div> <!-- form-group -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <button class="btn btn-success" type="submit">@lang('Create')</button>
                                <a href="{{ route('admin.transection-accounts.index') }}" class="btn btn-danger"
                                    type="reset">@lang('Cancel')</a>
                            </div>
                        </div>
                    </div>
                </div> <!-- .col-md-9 -->

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
