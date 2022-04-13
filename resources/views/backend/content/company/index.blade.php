@extends('backend.layouts.app')

@section('title', __('Manage Company'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage company')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header icon="fas fa-plus" class="btn btn-sm btn-tool btn-primary"
                :href="route('admin.company.create')" :text="__('New company')" />
        </x-slot>

        <x-slot name="body">
            <livewire:backend.company-table />
        </x-slot>
    </x-backend.card>

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
