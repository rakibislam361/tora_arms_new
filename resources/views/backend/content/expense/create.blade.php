@inject('carbon', '\Carbon\Carbon')

@extends('backend.layouts.app')

@section('title', __('Create new account'))

@php
$required = html()
    ->span(' *')
    ->class('text-danger');
@endphp

@section('content')

    {{ html()->form('POST', route('admin.transection-expense.store'))->attribute('enctype', 'multipart/form-data')->open() }}
    <input type="hidden" id="add_account" name="" value="{{ route('admin.transection-accounts.store') }}">
    <input type="hidden" id="add_expense_id" name="" value="{{ route('admin.expanse.option.store') }}">
    <input type="hidden" id="payment_method" name="" value="{{ route('admin.payment.store') }}">
    <input type="hidden" id="payer" name="" value="{{ route('admin.payer.store') }}">

    <x-backend.card>
        <x-slot name="header">
            @lang('Create New Expense')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.transection-expense.index')" :text="__('Cancel')" />
        </x-slot>
        <x-slot name="body">
            <div class="row d-flex justify-content-center">
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Expense Date</label>
                                {{ html()->date('expense_date')->class('form-control cash')->placeholder('Account Title') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('expense_date')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->
                            <div class="form-group">
                                <label for="">Amount</label>
                                {{ html()->text('amount')->class('form-control cash')->placeholder('0.00') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('amount')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->
                            <div class="form-group">
                                <label for="">Select Account</label>
                                <span class="add-more btn btn-sm btn-outline-primary float-right add-button"
                                    style="height: 25px; padding: 0; width: 82px;" data="add-account">
                                    <icon class="fa fas fa-plus"></icon> Add new
                                </span>
                                {{ html()->select('account_id', collect($account))->class('form-control js-example-basic-single')->style('width:100%')->style('width:100%')->placeholder('') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('account_id')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <div class="d-flex justify-content-between">
                                    <label for="">Expense Type</label>
                                    <span class="add-more btn btn-sm btn-outline-primary float-right add-button"
                                        style="height: 25px; padding: 0; width: 82px;" data="expense-type">
                                        <icon class="fa fas fa-plus"></icon> Add new
                                    </span>
                                </div>
                                {{ html()->select('expense_id', collect($expense))->class('form-control js-example-basic-single')->style('width:100%')->placeholder('') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('expense_id')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->

                            <div class="form-group">
                                <label for="">Payment Method</label>
                                <span class="add-more btn btn-sm btn-outline-primary float-right add-button"
                                    style="height: 25px; padding: 0; width: 82px;" data="payment-method">
                                    <icon class="fa fas fa-plus"></icon> Add new
                                </span>
                                {{ html()->select('payment_method', collect($payment))->class('form-control js-example-basic-single')->style('width:100%')->placeholder('') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('payment_method')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->
                            <div class="form-group">
                                <label for="">Payer</label>
                                <span class="add-more btn btn-sm btn-outline-primary float-right add-button"
                                    style="height: 25px; padding: 0; width: 82px;" data="add-payer">
                                    <icon class="fa fas fa-plus"></icon> Add new
                                </span>
                                {{ html()->select('payer', collect($payer))->class('form-control js-example-basic-single')->style('width:100%')->placeholder('') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('payer')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">Reference</label>
                                {{ html()->text('reference')->class('form-control cash')->placeholder('Reference') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('reference')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->
                            <div class="form-group">
                                <label for="voucher">Attachment</label>
                                <input name="voucher" id="voucher" type="file" class="dropify" data-height="100" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="extra_note">Note</label>
                                <textarea name="extra_note" class="form-control" id="extra_note" name="extra_note" cols="30" rows="4"></textarea>
                                @error('extra_note')
                                    <p class="text-danger margin-bottom-none">{{ $message }}</p>
                                @enderror
                            </div> <!-- form-group -->
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <button class="btn btn-success" type="submit">@lang('Create')</button>
                                <a href="{{ route('admin.transection-expense.index') }}" class="btn btn-danger"
                                    type="reset">@lang('Cancel')</a>
                            </div>
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
