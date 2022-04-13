@extends('backend.layouts.app')

@section('title', __('Manage subscription'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage subscription')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header icon="fas fa-plus" class="btn btn-sm btn-tool btn-primary"
                :href="route('admin.subscription.create')" :text="__('Add New subscription')" />
        </x-slot>

        <x-slot name="body">
            <livewire:backend.subscription-table />
        </x-slot>

    </x-backend.card>

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
