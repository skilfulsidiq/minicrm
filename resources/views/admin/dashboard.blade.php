@extends('layouts.admin')
@section('title',$pageTitle)
@section('content')
@include('admin_template.breadcrum',['title'=>$pageTitle])


@endsection
@push('custom_script')
@endpush
