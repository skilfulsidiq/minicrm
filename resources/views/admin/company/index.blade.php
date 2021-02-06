@extends('layouts.admin')
@section('title',$pageTitle)
@section('content')
@include('admin.template.breadcrum',['title'=>$pageTitle])

    <div class="section-title mb-b-20"><a href="{{route('admin.company_form')}}" class="btn btn-outline-primary float-right">Add Company</a>

    </div>
 
<div class="clearfix"></div>
<div class="mg-t-50"></div>
<div class="row">

    <div class="col-12">
        <div class="card">


            <div class="card-body">

            <h4 class="header-title">{{$companies->count()??null}} Companies</h4>
                <p class="text-muted font-13 mb-4">
                </p>

                <div class="table-responsive">
                    <table id="datatable-buttons" class="table table-centered table-nowrap mb-0">
                        <thead class="thead-light">
                            <tr>
                                <th> # </th>
                                <th>Company Name</th>
                                <th>Company Email</th>
                                <th>Company Website</th>
                                <th>Company logo</th>
                                <th class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($companies as $company)
                                <tr>
                                <td>{{$loop->iteration}}</td>
                                <td>{{$company->name??null}}</td>
                                <td>{{$company->email??null}}</td>
                                <td>{{$company->url??null}}</td>
                                <td>  <img src="{{asset($company->logo)??null}}" alt="" style="width:40px; height:30px">
                                </td>

                                <td>
                                    <a href="{{route('admin.company_form',$company->slug)}}"  class="action-icon action-btn text-success"> <i class="fa fa-edit text-20"></i>
                                    </a>
                                    &nbsp;
                                    <a onclick="return confirm('are you sure to delete');"  href="{{route('admin.delete_company',$company->slug)}}" class="action-icon action-btn text-danger"> <i class="fa fa-trash"></i></a>
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
