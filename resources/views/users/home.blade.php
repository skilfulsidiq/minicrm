@extends('layouts.app')

@section('content')
<div class="container">
   <employee-table :employees="{{$employees}}" :company="{{Auth::user()->company}}"></employee-table>
</div>
@endsection
