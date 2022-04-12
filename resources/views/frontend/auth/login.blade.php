@extends('frontend.layouts.app')

@section('title', __('Login'))

@section('content')

    <div class="bgforagent py-4" style="height: 90vh">
        <div class="row align-content-center h-100 justify-content-center" style="margin-right: 0px">
            <div class="col-md-4">
                <x-frontend.card>
                    <x-slot name="body">
                        <h3 class="text-center mb-4">@lang('Login')</h3>
                        <x-forms.post :action="route('frontend.auth.login')">
                            <div class="form-group">
                                <label for="email">@lang('E-mail Address')</label>
                                <input type="email" name="email" id="email" class="form-control"
                                    placeholder="{{ __('E-mail Address') }}" value="{{ old('email') }}" maxlength="255"
                                    required autofocus autocomplete="email" />
                            </div> <!-- form-group-->

                            <div class="form-group">
                                <label for="password">@lang('Password')</label>
                                <input type="password" name="password" id="password" class="form-control"
                                    placeholder="{{ __('Password') }}" maxlength="100" required
                                    autocomplete="current-password" />
                            </div> <!-- form-group-->

                            <div class="form-group">
                                <div class="form-check">
                                    <input name="remember" id="remember" class="form-check-input" style="margin-top: 0%;"
                                        type="checkbox" {{ old('remember') ? 'checked' : '' }} />
                                    <span class="form-check-label" for="remember">
                                        @lang('Remember Me')
                                    </span>
                                </div> <!-- form-check-->
                            </div>
                            <!--form-group-->

                            @if (config('boilerplate.access.captcha.login'))
                                <div class="row">
                                    <div class="col">
                                        @captcha
                                        <input type="hidden" name="captcha_status" value="true" />
                                    </div>
                                    <!--col-->
                                </div>
                                <!--row-->
                            @endif

                            <div class="form-group mb-0">
                                <button class="btn btn-block btn-primary" type="submit">@lang('Login')</button>

                                <x-utils.link :href="route('frontend.auth.password.request')" class="btn btn-link"
                                    :text="__('Forgot Your Password?')" />
                            </div> <!-- form-group-->

                            <div class="text-center">
                                @include('frontend.auth.includes.social')
                            </div>
                        </x-forms.post>
                    </x-slot>
                </x-frontend.card>
            </div>
            <!--col-md-8-->
        </div> <!-- row-->
    </div> <!-- container-->

@endsection
