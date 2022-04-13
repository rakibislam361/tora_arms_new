<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
        {{-- <x-utils.link :href="route('frontend.index')" :text="appName()" class="navbar-brand" /> --}}
        <a href="{{ get_setting('app_url') }}">
            <img src="{{ asset('img/logo/' . get_setting('app_logo')) }}" alt="{{ get_setting('app_name_short') }}"
                style="width: 40%;">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="@lang('Toggle navigation')">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

                @guest
                    <li class="nav-item">
                        <x-utils.bsLink :href="route('frontend.agent.register')"
                            :active="activeClass(Route::is('frontend.agent.register'))" :text="__('Agent Registration')"
                            class="nav-link" />
                    </li>

                    <li class="nav-item">
                        <x-utils.bsLink :href="route('frontend.auth.login')"
                            :active="activeClass(Route::is('frontend.auth.login'))" :text="__('Login')"
                            class="nav-link" />
                    </li>
                    {{-- @if (config('boilerplate.access.user.registration'))
                        <li class="nav-item">
                        <x-utils.bsLink :href="route('frontend.auth.register')"
                            :active="activeClass(Route::is('frontend.auth.register'))" :text="__('Register')" class="nav-link" />
                        </li>
                        @endif --}}

                    {{-- <li class="nav-item">
                            <x-utils.bsLink :href="route('frontend.agent.register')"
                                :active="activeClass(Route::is('frontend.agent.register'))" :text="__('Agent Register')"
                                class="nav-link" />
                        </li> --}}

                    {{-- <li class="nav-item">
                        <x-utils.bsLink :href="route('frontend.member.create')"
                            :active="activeClass(Route::is('frontend.member.create'))" :text="__('Member Register')" class="nav-link" />
                        </li>
                        @if (config('boilerplate.locale.status') && count(config('boilerplate.locale.languages')) > 1)
                        <li class="nav-item dropdown">
                        <x-utils.bsLink :text="__(getLocaleName(app()->getLocale()))" class="nav-link dropdown-toggle"
                            id="navbarDropdownLanguageLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        @include('includes.partials.lang')
                        </li> --}}
                    {{-- @endif --}}
                @else
                    <li class="nav-item dropdown">
                        <x-utils.bsLink href="#" id="navbarDropdown" class="nav-link dropdown-toggle" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            <x-slot name="text">
                                <img class="rounded-circle" style="max-height: 20px"
                                    src="{{ $logged_in_user->avatar }}" />
                                {{ $logged_in_user->name }} <span class="caret"></span>
                            </x-slot>
                        </x-utils.bsLink>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            @if ($logged_in_user->isAdmin())
                                <x-utils.bsLink :href="route('admin.dashboard')" :text="__('Administration')"
                                    class="dropdown-item" />
                            @endif

                            @if ($logged_in_user->isUser())
                                <x-utils.bsLink :href="route('frontend.user.dashboard')"
                                    :active="activeClass(Route::is('frontend.user.dashboard'))" :text="__('Dashboard')"
                                    class="dropdown-item" />
                            @endif

                            <x-utils.bsLink :href="route('frontend.user.account')"
                                :active="activeClass(Route::is('frontend.user.account'))" :text="__('My Account')"
                                class="dropdown-item" />

                            <x-utils.bsLink :text="__('Logout')" class="dropdown-item"
                                onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                <x-slot name="text">
                                    @lang('Logout')
                                    <x-forms.post :action="route('frontend.auth.logout')" id="logout-form"
                                        class="d-none" />
                                </x-slot>
                            </x-utils.bsLink>
                        </div>
                    </li>
                @endguest
            </ul>
        </div>
        <!--navbar-collapse-->
    </div>
    <!--container-->
</nav>

@if (config('boilerplate.frontend_breadcrumbs'))
    @include('frontend.includes.partials.breadcrumbs')
@endif
