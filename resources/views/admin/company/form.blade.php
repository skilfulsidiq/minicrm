@extends('layouts.admin')
@section('title',$pageTitle)
@section('content')
@include('admin.template.breadcrum',['title'=>$pageTitle])

    <div class="section-wrapper mg-t-20 mg-b-10">
        <div class="section-title mg-b-20"><a href="{{route('admin.companies')}}" class="btn btn-outline-primary float-right">Company List</a>
        </div>
    <div class="mg-t-50"></div>
    <hr>
    <div class="form mt-20">
        <form action="{{$edit?route('admin.add_company', $company->slug): route('admin.add_company')}}" method="POST" enctype="multipart/form-data" id="company-form">
            @csrf
            <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                        <label for="">Company Name</label>
                    <input type="text" name="name" class="form-control" required value="{{$edit?$company->name:old('name')}}">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Company email</label>
                    <input type="email" name="email" class="form-control" required value="{{$edit?$company->email:old('email')}}">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Company website</label>
                    <input type="url" name="url" class="form-control" required value="{{$edit?$company->url:old('url')}}">
                    </div>
                </div>
                 <div class="col-md-6">
                     <div class="row">
                        <div class="col-md-10">
                            <label class="control-label">Company Logo</label>
                            <input class="form-control @error('image') is-invalid @enderror" type="file" id="logo" name="image"/>
                            @error('image') {{ $message }} @enderror
                        </div>
                        <input type="text" name="formal_img" value="{{$edit?$company->logo:''}}" style="display: none">
                           @if ($edit && $company->logo != null)
                                    
                                    <div class="col-md-2">
                                        <figure class="mt-2" style="width: 80px; height: auto;">
                                            <img src="{{ asset($company->logo) }}" id="brandLogo" class="img-fluid" alt="img">
                                        </figure>
                                    </div>
                            @endif
                     </div>
                 </div>
                 
            </div>
            <div class="row">

                <div class="col-md-12 text-center" >
                    <button class="btn btn-outline-primary" style="width:300px"> {{$edit?'Update company':'Add company'}}</button>
                </div>
            </div>
        </form>
    </div>

</div>
@endsection
@push('custom_script')
 <script type=text/javascript>
        $(document).ready(function(){
            $("#company-form").parsley();
        });
@endpush
