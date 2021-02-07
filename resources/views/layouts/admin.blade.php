<!DOCTYPE html>
<html lang="en">
<head>
    <title>@yield('title') - {{ config('app.name') }}</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
     <!-- vendor css -->
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
     <link href="{{asset('assets/lib/font-awesome/css/font-awesome.css')}}" rel="stylesheet">
     <link href="{{asset('assets/lib/parsleyjs/parsley.css')}}" rel="stylesheet">
     <link href="{{asset('assets/lib/Ionicons/css/ionicons.css')}}" rel="stylesheet">
     <link href="{{asset('assets/lib/datatables/css/jquery.dataTables.css')}}" rel="stylesheet">
     <link href="{{asset('assets/lib/select2/css/select2.min.css')}}" rel="stylesheet">

     <!-- Slim CSS -->
     <link rel="stylesheet" href="{{asset('css/app.css')}}">
     <link rel="stylesheet" href="{{asset('assets/css/slim.min.css')}}">
    <link href="{{asset('css/toastr/toastr.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/css/mycss.css')}}" rel="stylesheet" type="text/css" />
   
</head>
 <body >
    <div id="app">
         @include('admin.template.header')

        <div class="slim-body">
            @include('admin.template.sidebar')
            <div class="slim-mainpanel">
                <div class="container">

                    @yield('content')
                </div>
                 @include('admin.template.footer')
            </div>
        </div>

    <!-- Begin page -->
</div>

    @include('admin.template.script')
    @include('admin.template.notify')
    @stack('custom_script')


 </body>
 </html>
