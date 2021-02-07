<div class="slim-sidebar">
    {{-- <label class="sidebar-label">Navigation</label> --}}

    <ul class="nav nav-sidebar">
        <li class="sidebar-nav-item">
            <a href="{{route('dashboard')}}" class="sidebar-nav-link {{setSingleActive('dashboard')}}"><i class="icon ion-ios-home-outline"></i>&nbsp;&nbsp;Dashboard</a>
        </li>
    {{-- </ul> --}}
    <label class="sidebar-label mt-3">Companies</label>
        <li class="sidebar-nav-item">
            <a href="{{route('admin.companies')}}" class="sidebar-nav-link {{setActive(['admin.companies','company_form'])}}"><i class="icon ion-ios-world-outline"></i>&nbsp;&nbsp;All Companies</a>
        </li>
    </ul>
    <label class="sidebar-label mt-3">Employees</label>
          <li class="sidebar-nav-item">
            <a href="{{route('admin.employee')}}" class="sidebar-nav-link {{setActive(['admin.employee','admin.employee_form'])}}"><i class="icon ion-ios-people-outline"></i>&nbsp;&nbsp;All Employee</a>
        </li>

    </ul>
  </div>
