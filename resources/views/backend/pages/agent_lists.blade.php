@extends('backend.layouts.app')

@section('title', __('Agent list'))

@section('content')
    <x-backend.card>
        <x-slot name="header">
            @lang('Welcome :Name', ['name' => $logged_in_user->name])
        </x-slot>

        <x-slot name="body">
            @lang('Welcome to the Agent list')
        </x-slot>
    </x-backend.card>
@endsection
