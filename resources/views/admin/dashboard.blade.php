@extends('layouts.admin')
@section('title',$pageTitle)
@section('content')
@include('admin.template.breadcrum',['title'=>$pageTitle])

<div class="row row-xs">
          <div class="col-sm-6 col-md-6">
            <a href="{{route('admin.companies')}}">
            <div class="card card-status">
              <div class="media">
                <i class="icon ion-ios-world-outline tx-purple"></i>
                <div class="media-body">
                  <h1>{{$total_companies}}</h1>
                  <p>Total Companies</p>
                </div><!-- media-body -->
              </div><!-- media -->
            </div><!-- card -->
            </a>
          </div><!-- col-3 -->
          <div class="col-sm-6 col-md-6 mg-t-10 mg-sm-t-0">
             <a href="{{route('admin.employee')}}">
            <div class="card card-status">
              <div class="media">
                <i class="icon ion-ios-people-outline tx-teal"></i>
                <div class="media-body">
                  <h1>{{$total_users}}</h1>
                  <p>Total Employee</p>
                </div><!-- media-body -->
              </div><!-- media -->
            </div><!-- card -->
             </a>
          </div><!-- col-3 -->
         <!-- col-3 -->
        </div>
@endsection
@push('custom_script')
@endpush
