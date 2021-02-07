@extends('layouts.app')

@section('content')
<div class="container">
   <profile-component :profile="{{$user}}" :company="{{$company}}"></profile-component>
</div>
@endsection
