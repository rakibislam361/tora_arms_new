@extends('frontend.layouts.app')

@section('title', __('Terms & Conditions'))

@section('content')

    <body class="bgforagent">
        <div class="container py-4">
            <h3 style="text-align: center;">Candidate Registration</h3>
            <div class="row justify-content-center">
                <!-- Start General Information -->
                <div class="col-lg-12 col-md-8 col-sm-12">
                    <form action="{{ route('frontend.member.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="step" class="next action-button" value="2" />
                        <fieldset>
                            <div class="card">
                                @include('frontend.pages.formMember.step-one')
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
        <!--container-->
    </body>

    <script>
        var option = 1;

        function education_fields() {
            option++;
            var objTo = document.getElementById('education_fields')
            var divtest = document.createElement("div");
            divtest.setAttribute("class", "row removeclass" + option);
            var rdiv = 'removeclass' + option;
            divtest.innerHTML =
                `<div class="col-md-4 col-sm-12">
                        <input type="text" class="form-control" name="education[${option}][degree_name]" placeholder="Degree name">
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <input type="text" class="form-control exam_grade" name="education[${option}][grade]" id="grade"
                                placeholder="4.5 ">
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        {{ html()->select('education[${option}][elementary_passing_year]', collect($years)->prepend('Select', ''))->class('form-control') }}
                    </div>
                    <div class="col-md-2 col-sm-12">
                        <div class="input-group-btn">
                            <button class="btn btn-danger" type="button" onclick="remove_education_fields(${option});">
                                <span class="glyphicon glyphicon-minus" aria-hidden="true">
                                </span>Remove</button>
                        </div>
                    </div>
                <div class="clear"></div>`;
            objTo.appendChild(divtest)
        }

        function remove_education_fields(rid) {
            $('.removeclass' + rid).remove();
        }
    </script>
@endsection
