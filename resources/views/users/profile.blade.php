@extends('layouts.app')

@section('content')
<div class="container">
   <profile-component :user="{{$user}}" :company="{{$company}}"></profile-component>
</div>
@endsection
