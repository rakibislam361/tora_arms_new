@extends('backend.layouts.app')

@section('title', __('Manage donation'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage donation')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header icon="fas fa-plus" class="btn btn-sm btn-tool btn-primary"
                :href="route('admin.donation.create')" :text="__('Add New Donation')" />
        </x-slot>

        <x-slot name="body">
            <livewire:backend.donation-table />
        </x-slot>

    </x-backend.card>

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
