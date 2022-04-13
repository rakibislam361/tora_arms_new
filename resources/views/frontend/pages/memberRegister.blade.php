@extends('frontend.layouts.app')

@section('title', __('Terms & Conditions'))

@section('content')

    <body class="bgforagent">
        <div class="container py-4">
            <h3 style="text-align: center;">Candidate Registration</h3>
            <div class="row justify-content-center">
                <!-- Start General Information -->
                <div class="col-lg-12 col-md-8 col-sm-12">
                    <div id="">
                        <form action="{{ route('frontend.member.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <input type="hidden" name="step" class="next action-button" value="2" />
                            <fieldset>
                                <div class="form-card">
                                    @include('frontend.pages.formMember.step-one')
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--container-->
    </body>
@endsection
