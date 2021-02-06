
@extends('layouts.app')
@section('title','Login')
@section('content')
<div class="slim-mainpanel">
    <div class="container">
        <div class="center-div">
        <div class="signin-box box-shadow">
            <h2 class="signin-title-primary">Welcome back!</h2>
            <h3 class="signin-title-secondary">Sign in to continue.</h3>
            <form class="login-form" action="{{ route('login') }}" method="POST" role="form">
                {{ csrf_field() }}
                <div class="form-group">
                    <input class="form-control  @error('email') has-danger @enderror" type="email" id="email" name="email" placeholder="Email address" autofocus value="{{ old('email') }}" required>
                    @error('email')
                    <span class="text-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
                </div>
                <div class="form-group">

                        <input class="form-control  @error('password') has-danger @enderror" type="password" id="password" name="password" placeholder="Password" required>
                        {{-- <span class="input-group-btn btn bd bd-l-0 bg-white tx-gray-600"><i onclick="togglePassword()" class="fa fa-eye"></i></span> --}}

                    @error('password')
                    <span class="text-danger" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror

                </div>
                <div class="form-group">
                    <div class="utility">
                        <div class="animated-checkbox">
                            <label>
                                <input type="checkbox" name="remember"><span class="label-text">Stay Signed in</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group btn-container">
                    <button class="btn btn-primary btn-block btn-signin" type="submit"><i class="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
                </div>
            </form>
        </div>
        </div>
    </div>
</div>

@endsection
@push('custom_script')
<script>
    $(document).ready(function(){
        $('.login-form').parsley();
    });
</script>
@endpush