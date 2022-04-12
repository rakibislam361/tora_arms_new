@extends('backend.layouts.app')

@section('title', __('Manage Payment method'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage Payment method')
        </x-slot>

        <x-slot name="headerActions">
            <span class="btn btn-primary float-right add-more" style="" data="payment-method">
                <icon class="fa fas fa-plus"></icon> Add Payment method
            </span>
        </x-slot>

        <x-slot name="body">
            <livewire:backend.paymentmethod-table />
        </x-slot>
    </x-backend.card>

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
