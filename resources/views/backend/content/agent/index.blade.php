@extends('backend.layouts.app')

@section('title', __('Manage Agents'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage Agents')
        </x-slot>

        <x-slot name="headerActions">

        </x-slot>

        <x-slot name="body">
            <livewire:backend.agent-table />
        </x-slot>
    </x-backend.card>

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
