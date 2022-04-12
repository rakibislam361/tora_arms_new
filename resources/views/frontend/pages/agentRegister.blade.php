@extends('frontend.layouts.app')

@section('title', __('Terms & Conditions'))

@section('content')
    <input type="hidden" id="upazilla" value="{{ json_encode($thana_list) }}">

    <body class="bgforagent">
        <div class="container py-4">
            <h3 style="text-align: center;">Agent Registration</h3>
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-8 col-sm-12">
                    @if ($step == 1)
                        <form action="{{ route('frontend.agent.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); margin-bottom: 70px">
                                @include('frontend.pages.formAgent.step-one')
                            </div>
                        </form>
                    @endif
                </div>
            </div>
        </div>
    </body>
@endsection
