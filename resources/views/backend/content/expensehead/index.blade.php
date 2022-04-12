@extends('backend.layouts.app')

@section('title', __('Manage expense list'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Manage expense list')
        </x-slot>

        <x-slot name="headerActions">
            <span class="btn btn-primary float-right add-more" style="" data="expense-type">
                <icon class="fa fas fa-plus"></icon> Add New Expense
            </span>
        </x-slot>

        <x-slot name="body">
            <input type="hidden" id="add_expense_id" name="" value="{{ route('admin.expanse.option.store') }}">

            <livewire:backend.expensehead-table />
        </x-slot>
    </x-backend.card>
@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
