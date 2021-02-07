{{-- --}}
 <script src="{{ asset('js/app.js') }}" ></script>
<script src="{{ asset('js/parsley.min.js') }}" ></script>
<script src="{{asset('assets/lib/select2/js/select2.min.js')}}"></script>
<script src="{{asset('css/toastr/toastr.js')}}"></script>
<script src="{{asset('assets/lib/datatables/js/jquery.dataTables.js')}}"></script>
<script src="{{asset('assets/lib/datatables-responsive/js/dataTables.responsive.js')}}"></script>
<script src="{{asset('assets/js/slim.js')}}"></script>
   

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
