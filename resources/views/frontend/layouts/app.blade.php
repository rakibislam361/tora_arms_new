<!doctype html>
<html lang="{{ htmlLang() }}" @langrtl dir="rtl" @endlangrtl>

<head>
    <meta charset="utf-8">
    <link rel="icon" href="{{ asset('img/logo/' . get_setting('fabicon')) }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ get_setting('app_name_short') }} - {{ get_setting('app_name') }}</title>
    <meta name="description" content="@yield('meta_description', get_setting('app_name_short'))">
    <meta name="author" content="@yield('meta_author', 'sumon4skf')">
    {{-- <link rel="apple-touch-icon" href="{{ asset('img/brand/android-chrome-192x192.png') }}" /> --}}
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('uploads/' . get_setting('fabicon')) }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('uploads/' . get_setting('fabicon')) }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
    @yield('meta')

    @stack('before-styles')

    <link rel="stylesheet" href="{{ asset('css/icons.css') }}">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
    <link href="{{ mix('css/frontend.css') }}" rel="stylesheet">
    <livewire:styles />
    @stack('after-styles')
</head>

<body>

    <noscript>You need to enable JavaScript to run this app.</noscript>

    @include('includes.partials.read-only')
    @include('includes.partials.logged-in-as')
    @include('includes.partials.announcements')

    <div id="app">
        @include('frontend.includes.nav')
        @include('includes.partials.messages')

        <main>
            @yield('content')
        </main>
        @include('frontend.includes.footer')
    </div> <!-- app -->

    <a href="#" class="scrollup" style="display: none;"><i class="ion-ios-arrow-up"></i></a>

    @stack('before-scripts')
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/frontend.js') }}"></script>
    <script src="{{ asset('js/custom.js') }}"></script>
    <script src={{ asset('js/sweetalert.js') }}></script>
    @stack('after-scripts')
    @include('Alerts::alerts')
</body>

</html>
