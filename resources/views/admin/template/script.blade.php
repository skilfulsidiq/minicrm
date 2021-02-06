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
    function formatNumber(n) {
            // format number 1000000 to 1,234,567
            return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }


        function formatCurrency(input, blur) {
            // appends $ to value, validates decimal side
            // and puts cursor back in right position.

            // get input value
            var input_val = input.val();

            // don't validate empty input
            if (input_val === "") { return; }

            // original length
            var original_len = input_val.length;

            // initial caret position
            var caret_pos = input.prop("selectionStart");

            // check for decimal
            if (input_val.indexOf(".") >= 0) {

                // get position of first decimal
                // this prevents multiple decimals from
                // being entered
                var decimal_pos = input_val.indexOf(".");

                // split number by decimal point
                var left_side = input_val.substring(0, decimal_pos);
                var right_side = input_val.substring(decimal_pos);

                // add commas to left side of number
                left_side = formatNumber(left_side);

                // validate right side
                right_side = formatNumber(right_side);

                // On blur make sure 2 numbers after decimal
                if (blur === "blur") {
                // right_side += "00";
                }

                // Limit decimal to only 2 digits
                right_side = right_side.substring(0, 0);

                // join number by .
                input_val =   left_side + "." + right_side;

            } else {
                // no decimal entered
                // add commas to number
                // remove all non-digits
                input_val = formatNumber(input_val);
                // input_val = "$" + input_val;

                // final formatting
                if (blur === "blur") {
                input_val += "";
                }
            }

            // send updated string to input
            input.val(input_val);

            // put caret back in the right position
            var updated_len = input_val.length;
            caret_pos = updated_len - original_len + caret_pos;
            input[0].setSelectionRange(caret_pos, caret_pos);
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
