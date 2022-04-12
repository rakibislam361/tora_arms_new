@extends('backend.layouts.app')

@section('title', __('Manage Categories'))

@section('content')

<x-backend.card xmlns:livewire="">
  <x-slot name="header">
    @lang('Manage Categories')
  </x-slot>

  <x-slot name="headerActions">
    <x-utils.link-header icon="fas fa-sync" class="btn btn-sm btn-tool btn-danger" :href="route('admin.reload.category')"
      :text="__('Reload Categories')" />
  </x-slot>

  <x-slot name="body">
    <livewire:backend.category-table />
  </x-slot>
</x-backend.card>

@endsection

@push('after-styles')
<livewire:styles />
@endpush

@push('after-scripts')
<livewire:scripts />
@endpush