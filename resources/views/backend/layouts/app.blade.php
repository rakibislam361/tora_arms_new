<!doctype html>
<html lang="{{ htmlLang() }}" @langrtl dir="rtl" @endlangrtl>

<head>
    <meta charset="utf-8">
    <link rel="icon" href="{{ asset('img/logo/' . get_setting('fabicon')) }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ get_setting('app_name_short') }} | @yield('title')</title>
    <meta name="description" content="@yield('meta_description', get_setting('app_name_short'))">
    <meta name="author" content="@yield('meta_author', 'sumon4skf')">

    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('img/brand/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('uploads/' . get_setting('fabicon')) }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('uploads/' . get_setting('fabicon')) }}">
    <link rel="manifest" href="{{ asset('img/brand//site.webmanifest') }}">

    @yield('meta')
    <link href="{{ asset('css/icons.css') }}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="https://jeremyfagis.github.io/dropify/dist/css/dropify.min.css">

    <link rel=" stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css" />
    <link rel=" stylesheet" type="text/css"
        href="https://cdn.datatables.net/buttons/2.2.2/css/buttons.dataTables.min.css" />

    @stack('before-styles')
    <link href=" {{ mix('css/backend.css') }}" rel="stylesheet">
    <link href="{{ asset('css/admin/adminlte.css') }}" rel="stylesheet">
    <link href="{{ mix('css/admin/extend.css') }}" rel="stylesheet">
    <livewire:styles />

    @stack('after-styles')
</head>

<body class="hold-transition sidebar-mini text-sm">

    <div class="loader">
    </div>

    @include('includes.partials.announcements')

    <div class="wrapper">
        @include('backend.includes.header')

        @include('backend.includes.sidebar')

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">

            @include('includes.partials.read-only')
            @include('includes.partials.logged-in-as')

            <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            @include('backend.includes.partials.breadcrumbs')
                        </div>
                    </div>
                </div> <!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">
                @include('includes.partials.messages')
                @yield('content')
            </section> <!-- /.content -->
        </div> <!-- /.content-wrapper -->

        @include('backend.includes.footer')

    </div> <!-- ./wrapper -->

    @stack('before-scripts')
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/backend.js') }}"></script>

    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://jeremyfagis.github.io/dropify/dist/js/dropify.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

    <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.11.5/datatables.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.2/js/dataTables.buttons.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.2/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.2/js/buttons.print.min.js"></script>

    <script src="{{ asset('js/custom.js') }}"></script>

    @stack('after-scripts')
</body>

</html>
