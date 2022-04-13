@extends('backend.layouts.app')

@section('title', __('Manage payer'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage Payer')
        </x-slot>

        <x-slot name="headerActions">
            <span class="btn btn-primary float-right add-more" style="" data="add-payer">
                <icon class="fa fas fa-plus"></icon> Add New Payer
            </span>
        </x-slot>

        <x-slot name="body">
            <livewire:backend.payer-table />
        </x-slot>
    </x-backend.card>
@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
