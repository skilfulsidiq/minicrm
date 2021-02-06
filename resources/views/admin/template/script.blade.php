{{-- --}}
 <script src="{{ asset('js/app.js') }}" ></script>
<script src="{{ asset('js/parsley.min.js') }}" ></script>
<script src="{{asset('assets/lib/select2/js/select2.min.js')}}"></script>
<script src="{{asset('css/toastr/toastr.js')}}"></script>
{{-- <script src="{{asset('assets/lib/jquery/js/jquery-3.2.1.min.js')}}"></script>
<script src="{{asset('assets/lib/popper.js/js/popper.js')}}"></script>
<script src="{{asset('assets/lib/bootstrap/js/bootstrap.js')}}"></script> --}}
<script src="{{asset('assets/lib/jquery.cookie/js/jquery.cookie.js')}}"></script>
{{-- <script src="{{asset('assets/lib/chartist/js/chartist.js')}}"></script> --}}
<script src="{{asset('assets/lib/d3/js/d3.js')}}"></script>
{{-- <script src="{{asset('assets/lib/rickshaw/js/rickshaw.min.js')}}"></script> --}}
{{-- <script src="{{asset('assets/lib/jquery.sparkline.bower/js/jquery.sparkline.min.js')}}"></script> --}}
<script src="{{asset('assets/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js')}}"></script>

<script src="{{asset('assets/lib/chart.js/chart.min.js')}}"></script>
<script src="{{asset('assets/lib/peity/js/jquery.peity.js')}}"></script>
		<!-- Chart Circle -->
    <script src="{{asset('assets/lib/chart-circle/circles.min.js')}}"></script>
    <script src="{{asset('assets/lib/datatables/js/jquery.dataTables.js')}}"></script>
    <script src="{{asset('assets/lib/datatables-responsive/js/dataTables.responsive.js')}}"></script>
   

{{-- <script src="{{asset('assets/js/ResizeSensor.js')}}"></script> --}}
{{-- <script src="{{asset('assets/js/dashboard.js')}}"></script> --}}


@stack('custom_script')
<script>
    function togglePassword(){
        var pass = document.getElementById("password");
        if(pass.type=='password'){
            pass.type = 'text'
        }else{
            pass.type='password'
        }
    }
    
    $('#datatable1').DataTable({
          responsive: true,
          language: {
            searchPlaceholder: 'Search...',
            sSearch: '',
            // lengthMenu: '_MENU_ items/page',
          }
        });

        $('#datatable2').DataTable({
          bLengthChange: false,
          searching: true,
          responsive: true
        });

        // Select2
        $('.dataTables_length select').select2({ minimumResultsForSearch: Infinity });
</script>
