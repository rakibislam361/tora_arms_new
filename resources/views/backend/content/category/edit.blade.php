@extends('backend.layouts.app')

@section('title', __('Update Category'))

@section('content')

@php
$required = html()->span(' *')->class('text-danger');
@endphp

{{ html()->modelForm($taxonomy, 'PUT', route('admin.category.update', $taxonomy))->attribute('enctype', 'multipart/form-data')->open() }}

<div class="row justify-content-center">
  <div class="col-md-8">

    <x-backend.card>
      <x-slot name="header">
        @lang('Update Category')
      </x-slot>

      <x-slot name="headerActions">
        <x-utils.link-header class="btn btn-sm btn-tool btn-secondary" icon="fas fa-backspace"
          :href="route('admin.category.index')" :text="__('Cancel')" />
      </x-slot>

      <x-slot name="body">
        <div class="form-group row">
          <div class="col-sm-10 offset-sm-2">
            @php
            $is_active = $taxonomy->is_active ? $taxonomy->is_active : now();
            @endphp
            <div class="form-check form-check-inline">
              {{html()->checkbox('is_active', $taxonomy->is_active, $is_active)->class('form-check-input')}}
              {{ html()->label("Active")->class('form-check-label')->for('is_active') }}
            </div>
          </div>
        </div> <!-- form-group row-->

        <div class="form-group row">
          {{html()->label('Name '. html()->span('*')->class('text-danger'))->class('col-md-2 form-control-label')->for('name')}}
          <div class="col-md-10">
            {{html()->text('name')->class('form-control')->placeholder('Name')->required()->attribute('autofocus')}}
          </div> <!-- col-->
        </div> <!-- form-group-->
        
        <div class="form-group row">
          {{html()->label('Current Parent')->class('col-md-2 form-control-label')->for('current_parent')}}
          <div class="col-md-10">
            {{html()->text('current_parent', $taxonomy->parent ? $taxonomy->parent->name : 'No Parent')->class('form-control')->readonly(true)}}
          </div> <!-- col-->
        </div> <!-- form-group-->

        <div class="form-group row">
          {{html()->label('Parent')->class('col-md-2 form-control-label')->for('parent_id')}}
          <div class="col-md-10">
            {{html()->select('parent_id', $parents->prepend('- Select Parent -', ''), $taxonomy->parent->magento_id ?? '')->class('form-control selectTable')}}
          </div> <!-- col-->
        </div> <!-- form-group-->

        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-3">
            <div class="form-group">
              @php
              $imgUrl = $taxonomy->picture ? $taxonomy->picture : 'img/backend/no-image.gif';
              @endphp
              {{html()->label('Picture 130x130')->for('picture')}}
              <label for="picture">
                <img src="{{asset($imgUrl)}}" class="border img-fluid img_holder" alt="Picture upload">
              </label>
              {{html()->file('picture')->class('img_upload_field d-none')->acceptImage()}}
            </div> <!--  col-->
          </div>
          <div class="col-md-3">
            <div class="form-group">
              @php
              $iconUrl = $taxonomy->icon ? $taxonomy->icon : 'img/backend/no-image.gif';
              @endphp
              {{html()->label('Icon 50x50')->class('d-block')->for('icon')}}
              <label for="icon">
                <img src="{{asset($iconUrl)}}" class="border img_holder" style="width:80px" alt="Icon upload">
              </label>
              {{html()->file('icon')->class('img_upload_field d-none')->id('icon')->acceptImage()}}
            </div> <!--  col-->
          </div>
        </div> <!-- row -->

        <div class="form-group row">
          {{html()->label('Description')->class('col-md-2 form-control-label')->for('description')}}
          <div class="col-md-10">
            {{ html()->textarea('description')->class('form-control')->attribute('rows', 4)->placeholder('Description') }}
          </div> <!-- col-->
        </div> <!-- form-group-->


      </x-slot> <!--  .card-body -->
      <x-slot name="footer">
        <button class="btn btn-success" type="submit">@lang('Update')</button>
        <a href="{{route('admin.category.index')}}" class="btn btn-danger" type="reset">@lang('Cancel')</a>
      </x-slot>

    </x-backend.card>

  </div>
</div>

{{ html()->closeModelForm() }}

@endsection

@push('after-styles')
<link rel="stylesheet" href="{{asset("https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css")}}">
@endpush


@push('after-scripts')
<script src="{{asset("https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js")}}"></script>

<script>
  function readImageURL(input, preview) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              preview.attr('src', e.target.result);
          };
          reader.readAsDataURL(input.files[0]); // convert to base64 string
      }
  }

  $(document).ready(function () {
      $(".img_upload_field").change(function () {
        var holder = $(this).closest('.form-group').find(".img_holder");
          readImageURL(this, holder);
      });

      $("#parent_id").select2();
  });


</script>

@endpush