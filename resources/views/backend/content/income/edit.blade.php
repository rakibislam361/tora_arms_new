@extends('backend.layouts.app')

@section('title', __('Update Income'))

@section('content')

    @php
    $required = html()
        ->span(' *')
        ->class('text-danger');
    @endphp

    {{ html()->modelForm($income_details, 'PUT', route('admin.income.update', $income_details))->class('form-horizontal')->attribute('enctype', 'multipart/form-data')->open() }}
    <input type="hidden" id="add_account" name="" value="{{ route('admin.transection-accounts.store') }}">
    <input type="hidden" id="add_expense_id" name="" value="{{ route('admin.expanse.option.store') }}">
    <input type="hidden" id="payment_method" name="" value="{{ route('admin.payment.store') }}">
    <input type="hidden" id="payer" name="" value="{{ route('admin.payer.store') }}">
    <x-backend.card>
        <x-slot name="header">
            @lang('Update Income')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.income.index')" :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="row d-flex justify-content-center">
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Income Date</label>
                                {{ html()->date('expense_date')->class('form-control cash')->placeholder('Account Title') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('expense_date')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group -->

                            <div class="form-group">
                                <div class="d-flex justify-content-between">
                                    <label for="">Income Type</label>
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

                            <!-- form-group -->
                            {{-- <div class="form-group">
                                <label for="">Account Number</label>
                                <span class="add-more btn btn-sm btn-outline-primary float-right add-button"
                                    style="height: 25px; padding: 0; width: 82px;" data="add-account">
                                    <icon class="fa fas fa-plus"></icon> Add new
                                </span>
                                {{ html()->select('account_id', collect($account))->class('form-control js-example-basic-single')->placeholder('') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('account_id')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div> <!-- form-group --> --}}
                        </div>

                        <div class="col-md-6">
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
                                <label for="">Amount</label>
                                {{ html()->text('amount')->class('form-control cash')->placeholder('0.00') }}
                                <p class="text-danger margin-bottom-none" id="post_error">
                                    @error('amount')
                                        {{ $message }}
                                    @enderror
                                </p>
                            </div>
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
                                <textarea name="extra_note" class="form-control" id="extra_note" name="extra_note"
                                    cols="30" rows="4"></textarea>
                                @error('extra_note')
                                    <p class="text-danger margin-bottom-none">{{ $message }}</p>
                                @enderror
                            </div> <!-- form-group -->
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <button class="btn btn-success" type="submit">@lang('Update')</button>
                                <a href="{{ route('admin.income.index') }}" class="btn btn-danger"
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

    <div class="modal fade" id="expenseModal" tabindex="-1" role="dialog" aria-labelledby="expenseModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="expenseModalLabel"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="expense-modal-body">
                    {{ html()->form('POST')->class('m-3 expanse-modal-form')->attribute('enctype', 'multipart/form-data')->open() }}

                    <div class="form-group">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                    {{ html()->form()->close() }}

                </div>
            </div>
        </div>
    </div>

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
