<div class="slim-sidebar">
    {{-- <label class="sidebar-label">Navigation</label> --}}

    <ul class="nav nav-sidebar">
        <li class="sidebar-nav-item">
            <a href="{{route('dashboard')}}" class="sidebar-nav-link {{setSingleActive('dashboard')}}"><i class="icon ion-ios-home-outline"></i>&nbsp;&nbsp;Dashboard</a>
        </li>
    {{-- </ul> --}}
    <label class="sidebar-label mt-3">Officers</label>
        <li class="sidebar-nav-item">
            <a href="{{route('admin.officers')}}" class="sidebar-nav-link {{setSingleActive('admin.officers')}}"><i class="icon ion-ios-people-outline"></i>&nbsp;&nbsp;Registered Officer</a>
        </li>
    </ul>
    <label class="sidebar-label mt-3">Requests</label>
        <li class="sidebar-nav-item">
            <a href="{{route('admin.requests.list')}}" class="sidebar-nav-link {{setSingleActive('admin.requests.list')}}"><i class="icon ion-ios-list-outline"></i>&nbsp;&nbsp;Properties Requests</a>
        </li>
        <li class="sidebar-nav-item">
            <a href="{{route('admin.requests.by-zone')}}" class="sidebar-nav-link {{setSingleActive('admin.requests.by-zone')}}"><i class="icon material-icons">room</i>&nbsp;&nbsp;Requests by Zones</a>
        </li>
        <li class="sidebar-nav-item">
            <a href="{{route('admin.requests.by-rank')}}" class="sidebar-nav-link {{setSingleActive('admin.requests.by-rank')}}"><img src="{{asset('images/Bookmark.svg')}}"/>
                {{-- <img class="icon far fa-bookmark"></img> --}}
                &nbsp;&nbsp;Requests by Ranks</a>
        </li>
    <label class="sidebar-label mt-3">Properties</label>
    <li class="sidebar-nav-item">
    <a href="{{route('admin.all_developers')}}" class="sidebar-nav-link {{setSingleActive('admin.all_developers')}}"><i class="icon ion-ios-briefcase-outline"></i>&nbsp;&nbsp;Properties Developer</a>
    </li>
    <li class="sidebar-nav-item">
    <a href="{{route('admin.properties_list')}}" class="sidebar-nav-link {{setSingleActive('admin.properties_list')}}"><i class="fa ion-ios-list-outline"></i>&nbsp;&nbsp;Properties List</a>
    </li>
    <li class="sidebar-nav-item">
    <a href="{{route('admin.property_form')}}" class="sidebar-nav-link {{setSingleActive('admin.property_form')}}"><i class="icon fa fa-plus-square"></i>&nbsp;&nbsp;Add Properties</a>
    </li>

      {{-- <li class="sidebar-nav-item">
        <a href="page-messages.html" class="sidebar-nav-link active"><i class="icon ion-ios-chatboxes-outline"></i> Messages</a>
      </li>
      <li class="sidebar-nav-item with-sub">
        <a href="" class="sidebar-nav-link"><i class="icon ion-ios-book-outline"></i> Pages</a>
        <ul class="nav sidebar-nav-sub">
          <li class="nav-sub-item"><a href="page-profile.html" class="nav-sub-link active">Profile Page</a></li>
          <li class="nav-sub-item"><a href="page-invoice.html" class="nav-sub-link">Invoice</a></li>
          <li class="nav-sub-item sub-with-sub">
            <a href="#" class="nav-sub-link">Pricing</a>
            <ul>
              <li><a href="page-pricing.html">Pricing 01</a></li>
              <li><a href="page-pricing2.html">Pricing 02</a></li>
              <li><a href="page-pricing3.html">Pricing 03</a></li>
            </ul>
          </li>
        </ul>
      </li> --}}

    </ul>
  </div>
