@extends('layouts.app')

@section('content')
    <div class="container mg-t-20">
          <label class="section-title">Comapnies</label>
          {{-- <p class="mg-b-20 mg-sm-b-40">Places an image to the top, bottom or overlay of the card.</p> --}}

          <div class="row">
              @forelse ($companies as $item)
                    <div class="col-md-4 mg-t-20 mg-lg-t-0">
                        <company-card :company="{{$item}}"></company-card>
                     </div>
              @empty
                  
              @endforelse
              {{$companies->links()}}
            <!-- col-4 -->
           <!-- col-4 -->
          </div><!-- row -->
        </div>
@endsection