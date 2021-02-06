
@php
$errors = Session::get('error');
$messages = Session::get('success');
$info = Session::get('info');
$warnings = Session::get('warning');
@endphp
<script>
     toastr.options={
            "closeButton":true,
            "progressBar":true
        }
@if ($errors)
    @foreach($errors as $key => $value)
        toastr.error("{{$value}}")
    @endforeach
 @endif

 @if ($messages)
    @foreach($messages as $key => $value)
        toastr.success("{{$value}}")
    @endforeach
 @endif
 @if ($info)
    @foreach($info as $key => $value)
        toastr.info("{{$value}}")
    @endforeach
 @endif

 @if ($warnings)
    @foreach($warnings as $key => $value)
        toastr.info("{{$value}}")
    @endforeach
 @endif
</script>
