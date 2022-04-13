@extends('backend.layouts.app')

@section('title', __('Manage Transection'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage Transection')
        </x-slot>

        {{-- <x-slot name="headerActions">
            <x-utils.link-header icon="fas fa-plus" class="btn btn-sm btn-tool btn-primary"
                :href="route('admin.transection.edit', $transection_details->id)" :text="__('Add Transection')" />

           <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.transection.index')" :text="__('Back')" /> --}}
        {{-- </x-slot> --}}
        </x-slot>

        <x-slot name="body">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div id="receiptData">
                        <div>
                            <div id="receipt-data" class="mb-3">
                                <div class="logo_header">
                                    <div style="padding-top:70px">
                                        <img style="width: 25%" src="{{ asset('img/logo/' . get_setting('app_logo')) }}">
                                    </div>
                                    <div
                                        style="position: absolute; top: 0; left:0; text-align:center;display: table;height: 100%;width: 100%;">
                                        <h2 style="margin: 0; font-weight:600;font-size: 33px;vertical-align: middle;">
                                            Invoice
                                        </h2>
                                    </div>
                                </div> <!-- logo_header -->
                                <div class="heade_content clear-both d-flex">
                                    <div class="content_left" style="width: 80%; float:left">
                                        <h3 class="site_title">{{ get_setting('app_name') }}</h3>
                                        <p class=" paragraph">{{ get_setting('app_address') }} </p>
                                    </div>
                                    <div class="content_right" style="width: 30%; float:right">
                                        <table class="table table-sm table-borderless">
                                            <tr>
                                                <th class="text-right py-0" scope="col"><b>Invoice No:</b></th>
                                                <td class="py-0" scope="col">
                                                    {{ $transection_details->invoice_number }} </td>
                                            </tr>
                                            <tr>
                                                <th class="text-right py-0" scope="col"><b>Date:</b></th>
                                                <td class="py-0" scope="col">
                                                    {{ $transection_details->created_at ? date('M d, Y', strtotime($transection_details->created_at)) : 'N/A' }}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div> <!-- heade_content -->

                                <div class="heade_content clear-both d-flex">
                                    <div class="content_left" style="width: 75%; float:left">
                                        <p class="paragraph">

                                        </p>
                                        <p class="paragraph"><b>Phone No:</b>

                                        </p>
                                    </div>
                                </div> <!-- heade_content -->
                            </div>

                            <div class="mb-5" style="border-style: solid; border-color: #ebebeb;">
                                <table class="table table-sm table_details">
                                    <thead style="background-color: #d9d9d9;">
                                        <tr>
                                            <th scope="col" class="text-left">Date</th>
                                            <th scope="col" class="text-left">Payment type</th>
                                            @if ($transection_details->payment_type == 'bank')
                                                <th scope="col" class="text-left">Account Name</th>
                                                <th scope="col" class="text-left">Account Number</th>
                                                <th scope="col" class="text-right">Amount</th>
                                            @elseif($transection_details->payment_type == 'cash')
                                                <th scope="col" colspan="3" class="text-right">Amount</th>
                                            @else
                                                <th scope="col" class="text-left">Phone</th>
                                                <th scope="col" class="text-left">Transection number</th>
                                                <th scope="col" class="text-right">Amount</th>
                                            @endif
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-left align-middle">
                                                {{ date('F j, Y', strtotime($transection_details->created_at)) ?? 'N/A' }}
                                            </td>
                                            <td class="text-left align-middle">
                                                {{ $transection_details->payment_type }}
                                            </td>
                                            <td class="text-left align-middle">
                                                {{ $transection_details->mobile }}
                                            </td>

                                            <td class="text-left align-middle">
                                                {{ $transection_details->transection_or_ac_number }}
                                            </td>
                                            <td class="text-right align-middle">
                                                {{ number_format($transection_details->amount, 2, '.', ',') }}
                                            </td>
                                        </tr>
                                    </tbody>

                                    <tfoot>
                                        <tr>
                                            <th colspan="4" class="text-right">Subtotal</th>
                                            <th class="text-right">
                                                {{ number_format($transection_details->amount, 2, '.', ',') }}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colspan="4" class="text-right">Total</th>
                                            <th class="text-right">
                                                {{ number_format($transection_details->amount, 2, '.', ',') }}
                                            </th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div> <!-- receiptData -->

                </div>
            </div>
        </x-slot>
    </x-backend.card>

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
