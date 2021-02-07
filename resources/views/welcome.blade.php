@extends('layouts.app')

@section('content')
    <div class="container mg-t-20">
          <label class="section-title">Comapnies</label>
          {{-- <p class="mg-b-20 mg-sm-b-40">Places an image to the top, bottom or overlay of the card.</p> --}}
                <company-list :companies="{{$companies}}"></company-list>
       

         
         
        </div>
@endsection