@inject('carbon', '\Carbon\Carbon')

@extends('backend.layouts.app')

@section('title', __('Add New transection'))

@php
$required = html()
    ->span(' *')
    ->class('text-danger');
@endphp

@section('content')

    {{ html()->form('POST', route('admin.transection.store'))->attribute('enctype', 'multipart/form-data')->open() }}

    <x-backend.card>
        <x-slot name="header">
            @lang('Transections list')
        </x-slot>

        <x-slot name="body">
            <div class="row">
                <div class="col-12">
                    <table class="table table_details" style="border-style: solid; border-color: #ebebeb;">
                        <thead style="background-color: #d9d9d9;">
                            <tr>
                                <th scope="col" class="text-left">SL</th>
                                <th scope="col" class="text-left">Transection Date</th>
                                <th scope="col" class="text-left">Payment type</th>
                                <th scope="col" class="text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if (!empty($transection_details))
                                @forelse ($transection_details->transectionUser as $key => $transection)
                                    <tr>
                                        <td class="text-left align-middle">{{ $key + 1 }}.</td>

                                        <td class="text-left align-middle">
                                            {{ date('F j, Y', strtotime($transection->created_at)) ?? 'N/A' }}
                                        </td>
                                        <td class="text-left align-middle">
                                            {{ $transection->payment_type }}
                                        </td>

                                        <td class="text-right align-middle">
                                            {{ number_format($transection->amount, 2, '.', ',') }}
                                        </td>
                                    </tr>
                                @empty
                                @endforelse
                            @endif
                        </tbody>
                    </table>
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
