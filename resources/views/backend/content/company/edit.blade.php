@extends('backend.layouts.app')

@section('title', __('Update Company'))

@section('content')

@php
$required = html()->span(' *')->class('text-danger');
@endphp

{{ html()->modelForm($company, 'PUT', route('admin.company.update',
$company))->class('form-horizontal')->attribute('enctype', 'multipart/form-data')->open() }}

<x-backend.card>
  <x-slot name="header">
    @lang('Update Company')
  </x-slot>

  <x-slot name="headerActions">
    <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
      :href="route('admin.company.index')" :text="__('Cancel')" />
  </x-slot>

  <x-slot name="body">
    <div class="row">
      <div class="col-md-12">
        <x-backend.card>

          <div class="card-header with-border">
            <h3 class="card-title">Manage Company <small class="ml-2">Update company</small>
            </h3>
          </div>
          <x-slot name="body">
            <div class="form-group">
              <label for="">Company name</label>
              {{ html()->text('company_name')->class('form-control cash')->placeholder('Company name') }}
              <p class="text-danger margin-bottom-none" id="post_error">
                @error('company_name'){{ $message }}@enderror </p>
            </div> <!-- form-group -->

            <div class="form-group">
              <label for="">Country</label>
              {{ html()->text('country')->class('form-control cash')->placeholder('Select country') }}
              <p class="text-danger margin-bottom-none" id="post_error">
                @error('country'){{ $message }}@enderror
              </p>
            </div> <!-- form-group -->

            <div class="form-group">
              <label for="">Company Email</label>
              {{ html()->text('company_email')->class('form-control cash')->placeholder('Email') }}
              <p class="text-danger margin-bottom-none" id="post_error">
                @error('company_email'){{ $message }}@enderror
              </p>
            </div> <!-- form-group -->

            <div class="form-group">
              <label for="">Company URL</label>
              {{ html()->text('company_url')->class('form-control cash')->placeholder('https://www') }}
              <p class="text-danger margin-bottom-none" id="post_error">
                @error('company_url'){{ $message }}@enderror
              </p>
            </div> <!-- form-group -->

            <div class="form-group">
              <label for="">Company contact number</label>
              {{ html()->text('contact_number')->class('form-control cash')->placeholder('Contact number') }}
              <p class="text-danger margin-bottom-none" id="post_error">
                @error('contact_number'){{ $message }}@enderror
              </p>
            </div> <!-- form-group -->


            <div class="form-group">
              <label for="">Company Address</label>
              {{ html()->text('address')->class('form-control')->placeholder('Address') }}
              <p class="text-danger margin-bottom-none" id="post_error">
                @error('address'){{ $message }}@enderror
              </p>
            </div>

            <div class="form-group">
              <label for="">Company Details</label>
              {{ html()->textarea('company_details')->class('editor form-control')->placeholder('Description') }}
              @error('company_details')
              <p class="text-danger margin-bottom-none">{{ $message }}</p>
              @enderror
            </div> <!-- form-group -->
          </x-slot> <!--  .card-body -->
          <x-slot name="footer">
            <button class="btn btn-success" type="submit">@lang('Update')</button>
            <a href="{{ route('admin.company.index') }}" class="btn btn-danger" type="reset">@lang('Cancel')</a>
          </x-slot>

        </x-backend.card>
      </div> <!-- .col-md-12 -->

    </div> <!-- .row -->
  </x-slot>

</x-backend.card>

{{ html()->closeModelForm() }}

@endsection

@push('after-styles')
<link rel="stylesheet" href="{{asset('assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css')}}">
@endpush

@push('after-scripts')
<script src="{{asset('js/admin/editor.js')}}"></script>
<script src="{{asset('assets/plugins/moment/moment.js')}}"></script>
<script src="{{asset('assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js')}}"></script>

<script>
  $(document).ready(function () {
      simple_editor('.editor', 400);
      $('#datepicker-autoclose').datepicker({
          format: "dd-mm-yyyy",
          clearBtn: true,
          autoclose: true,
          todayHighlight: true,
      });
      $("#image").change(function () {
          readImageURL(this, $('#holder'));
      });
  });

  $(document).on('blur', "#name", function () {
      let nameField = $(this);
      let nameValue = nameField.val();
      if (!nameValue) {
        $("#post_error").text('Title must not empty');
        nameField.addClass('is-invalid');
      }else{
        nameField.removeClass('is-invalid');
      }
  });

    $(function () {
        $(".form-check-input").click(function () {
            const status = $(this).val();
            if (status === "schedule") {
                $("#scheduleDate").removeClass("d-none");
            } else if (status === "1") {
                $("#for_New_upload").removeClass("d-none");
            } else if (status === "0") {
                $("#for_New_upload").addClass("d-none");
            } else {
                $("#scheduleDate").addClass("d-none");
            }
        });

    });
</script>

@endpush