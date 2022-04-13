@extends('backend.layouts.app')

@section('title', __('Manage Income'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage Income')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header icon="fas fa-plus" class="btn btn-sm btn-tool btn-primary"
                :href="route('admin.income.create')" :text="__('Add New Income')" />
        </x-slot>

        <x-slot name="body">
            <livewire:backend.income-table />
        </x-slot>

    </x-backend.card>

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
