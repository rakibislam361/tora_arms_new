@extends('backend.layouts.app')

@section('title', __('Manage Member'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Account details')
        </x-slot>

        <x-slot name="headerActions">
            <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
                :href="route('admin.transection-accounts.index')" :text="__('Cancel')" />
        </x-slot>

        <x-slot name="body">
            <div class="card-body">
                <div class="row justify-content-center mt-4">
                    <div class="col-md-6 text-center">
                        <h3>Account Details</h3>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th class="text-left">Account Name</th>
                                    <th>:</th>
                                    <th class="text-left">{{ $account->account_title }}</th>
                                </tr>
                                <tr>
                                    <th class="text-left">Account number</th>
                                    <th>:</th>
                                    <th class="text-left">{{ $account->account_number }}</th>
                                </tr>
                                <tr>
                                    <th class="text-left">Openging date</th>
                                    <th>:</th>
                                    <th class="text-left">{{ date('d-m-Y', strtotime($account->created_at)) }}</th>
                                </tr>
                                <tr>
                                    <th class="text-left">Openging balance</th>
                                    <th>:</th>
                                    <th class="text-left">{{ $account->opening_balance }}</th>
                                </tr>
                                <tr>
                                    <th class="text-left">Extra Note</th>
                                    <th>:</th>
                                    <th class="text-left">{{ $account->note ?? 'N/A' }}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div><br>
                </div>

            </div>
        </x-slot>
    </x-backend.card>

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
