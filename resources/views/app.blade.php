<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>

    <!-- Scripts -->
   

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
     <link href="{{asset('assets/lib/font-awesome/css/font-awesome.css')}}" rel="stylesheet">
      <link href="{{asset('assets/lib/Ionicons/css/ionicons.css')}}" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
    {{-- <link href="{{ asset('css/parsley.css') }}" rel="stylesheet"> --}}
    <link rel="stylesheet" href="{{asset('assets/css/slim.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/mycss.css')}}">
</head>
<body>
    <div id="app">
        <app></app>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
