@extends('layouts.admin')
@section('title',$pageTitle)
@section('content')
@include('admin.template.breadcrum',['title'=>$pageTitle])

    <div class="section-title mb-b-20"><a href="{{route('admin.employee_form')}}" class="btn btn-outline-primary float-right">Add Employee</a>

    </div>
 
<div class="clearfix"></div>
<div class="mg-t-50"></div>
<div class="row">

    <div class="col-12">
        <div class="card">


            <div class="card-body">

            <h4 class="header-title">{{$users->count()??null}} Employees</h4>
                <p class="text-muted font-13 mb-4">
                </p>

                <div class="table-responsive pr-3">
                    <table id="datatable1" class="table table-centered table-nowrap mb-0">
                        <thead class="thead-light">
                            <tr>
                                <th> # </th>
                                <th>Company</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($users as $user)
                                <tr>
                                <td>{{$loop->iteration}}</td>
                                <td>{{$user->company->name??null}}</td>
                                <td>{{$user->name??null}}</td>
                                <td>{{$user->email??null}}</td>
                                <td>{{$user->role->role??null}} User</td>

                                <td>
                                    <a href="{{route('admin.employee_form',$user->slug)}}"  class="action-icon action-btn text-success"> <i class="fa fa-edit text-20"></i>
                                    </a>
                                    &nbsp;
                                    <a onclick="return confirm('are you sure to delete');"  href="{{route('admin.delete_employee',$user->slug)}}" class="action-icon action-btn text-danger"> <i class="fa fa-trash"></i></a>
                                </td>

                                </tr>
                            @empty

                            @endforelse



                        </tbody>
                    </table>
                </div>

            </div> <!-- end card body-->
        </div> <!-- end card -->
    </div><!-- end col-->
</div>

@endsection
@push('custom_script')
@endpush
