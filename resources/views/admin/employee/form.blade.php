@extends('layouts.admin')
@section('title',$pageTitle)
@section('content')
@include('admin.template.breadcrum',['title'=>$pageTitle])

    <div class="section-wrapper mg-t-20 mg-b-10">
        <div class="section-title mg-b-20"><a href="{{route('admin.employee')}}" class="btn btn-outline-primary float-right">Employee List</a>
        </div>
    <div class="mg-t-50"></div>
    <hr>
    <div class="form mt-20">
        <form action="{{$edit?route('admin.add_employee', $user->slug): route('admin.add_employee')}}" method="POST" enctype="multipart/form-data" id="company-form">
            @csrf
            <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label" for="company_id">Company</label>
                        <select name="company_id" id="company_id" class="form-control @error('company_id') is-invalid @enderror">
                            <option value="0">Select </option>
                            @foreach($companies as $coy)
                                @if ($edit && $user->company_id == $coy->id)
                                    <option value="{{ $coy->id }}" selected>{{ $coy->name }}</option>
                                @else
                                    <option value="{{ $coy->id }}">{{ $coy->name }}</option>
                                @endif
                            @endforeach
                        </select>
                        <div class="invalid-feedback active">
                            <i class="fa fa-exclamation-circle fa-fw"></i> @error('company_id') <span>{{ $message }}</span> @enderror
                        </div>
                    </div>
                </div>
                     <div class="col-md-6">
                      <div class="form-group">
                        <label class="control-label" for="company_id">Role</label>
                        <select name="role_id" id="role_id" class="form-control @error('role_id') is-invalid @enderror">
                            <option value="0">Select </option>
                            @foreach($roles as $role)
                                @if ($edit && $user->role_id == $role->id)
                                    <option value="{{  $role->id}}" selected>{{  $role->role }}</option>
                                @else
                                    <option value="{{  $role->id}}">{{  $role->role}}</option>
                                @endif
                            @endforeach
                        </select>
                        <div class="invalid-feedback active">
                            <i class="fa fa-exclamation-circle fa-fw"></i> @error('company_id') <span>{{ $message }}</span> @enderror
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                     <div class="form-group">
                        <label for="">Name</label>
                    <input type="text" name="name" class="form-control" required value="{{$edit?$user->name:old('name')}}">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Email</label>
                    <input type="email" name="email" class="form-control" required value="{{$edit?$user->email:old('email')}}">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Password</label>
                    <input type="text" name="password" class="form-control" >
                    </div>
                </div>
                 
            </div>
            <div class="row">

                <div class="col-md-12 text-center" >
                    <button class="btn btn-outline-primary" style="width:300px"> {{$edit?'Update Employee':'Add Employee'}}</button>
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
