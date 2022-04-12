@extends('backend.layouts.app')

@section('title', __('Manage Expenses'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage Expenses')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header icon="fas fa-plus" class="btn btn-sm btn-tool btn-primary"
                :href="route('admin.transection-expense.create')" :text="__('Add New Expense')" />
        </x-slot>

        <x-slot name="body">
            <livewire:backend.expense-table />
        </x-slot>

    </x-backend.card>

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
