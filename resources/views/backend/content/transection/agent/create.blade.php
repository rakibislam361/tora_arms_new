@inject('carbon', '\Carbon\Carbon')

@extends('backend.layouts.app')

@section('title', __('Add New transection'))

@php
$required = html()
    ->span(' *')
    ->class('text-danger');
@endphp

@section('content')

    {{ html()->form('POST', route('admin.agent-transection.store'))->attribute('enctype', 'multipart/form-data')->open() }}

    <x-backend.card>
        <x-slot name="header">
            @lang('Create New transection')
        </x-slot>

        <x-slot name="headerActions">

            <x-utils.link-header class="btn btn-sm btn-tool btn-warning" icon="fas fa-user-group"
                :href="route('admin.agent-transection.index')" :text="__('View all')" />

            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.index')" :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="row justify-content-center">
                <div class="row col-md-6">
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                            <label for="transection_date" class="form-label">Transection Date</label>
                            <input type="date" class="form-control" name="transection_date" id=""
                                value="{{ old('transection_date') }}" placeholder="date">
                            @if ($errors->has('transection_date'))
                                <p class="text-danger">
                                    <small>{{ $errors->first('transection_date') }}</small>
                                </p>
                            @endif
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <label for="invoice_number" class="form-label">Invoice Number</label>
                        <input type="text" class="form-control" name="invoice_number" id="" value="{{ $inv_number }}"
                            placeholder="Enter Invoice number">
                        @if ($errors->has('invoice_number'))
                            <p class="text-danger">
                                <small>{{ $errors->first('invoice_number') }}</small>
                            </p>
                        @endif
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                            <label for="select_user" class="form-label">Select @if ($logged_in_user->hasAllAccess())
                                    Agent
                                @else
                                    Member
                                @endif
                            </label>
                            {{ html()->select('user_id', collect($users))->class('form-control cash')->placeholder('Select') }}
                            @if ($errors->has('user_id'))
                                <p class="text-danger">
                                    <small>{{ $errors->first('user_id') }}</small>
                                </p>
                            @endif
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                            <label for="amount" class="form-label">Amount</label>
                            <input type="text" class="form-control transection_amount" name="amount" id=""
                                value="{{ old('amount') }}" placeholder="Enter amount">
                            @if ($errors->has('amount'))
                                <p class="text-danger">
                                    <small>{{ $errors->first('amount') }}</small>
                                </p>
                            @endif
                        </div>
                    </div>

                    <div class="col-md-12 col-sm-12 mb-2">
                        <label for="transec_type" class="form-label">Transection type</label>
                        <select class="form-control" name="payment_type" id="payment_type">
                            <option value="0">Select</option>
                            <option value="bkash">Bkash</option>
                            <option value="nagad">Nagad</option>
                            <option value="roket">Roket</option>
                            <option value="bank">Bank</option>
                            <option value="cash">Cash</option>
                        </select>
                        @if ($errors->has('payment_type'))
                            <p class="text-danger">
                                <small>{{ $errors->first('payment_type') }}</small>
                            </p>
                        @endif
                    </div>

                    <div class="col-md-12 mb-2 d-flex p-0" id="account_phone_feild">

                    </div>

                    <div class="col-md-12 col-sm-12">
                        <div class="form-group">
                            <label for="description" class="form-label">Remarks</label>
                            <textarea class="form-control" name="description" id="" cols="30" rows="6"></textarea>
                            @error('description')
                                <p class="text-danger margin-bottom-none">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <div class="col-md-12 col-sm-12">
                        <div class="form-group">
                            <button class="btn btn-success" type="submit">@lang('Create')</button>
                            <a href="{{ route('admin.transection.index') }}" class="btn btn-danger"
                                type="reset">@lang('Cancel')</a>
                        </div>
                    </div>
                </div>
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
                readImagemobile(this, $('#holder'));
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
