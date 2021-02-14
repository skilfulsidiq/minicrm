<template>
   <div>
       <div class="wrapper">
           <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <!-- <li class="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="#" class="nav-link">Contact</a>
                </li> -->
                </ul>

                <!-- SEARCH FORM -->
                <form class="form-inline ml-3">
                <div class="input-group input-group-sm">
                    <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                    <div class="input-group-append">
                    <button class="btn btn-navbar" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                    </div>
                </div>
                </form>

                <!-- Right navbar links -->
                <ul class="navbar-nav ml-auto">
                <!-- Messages Dropdown Menu -->
                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                           <span>{{userData.name}}</span>
                    <img src="https://static.thenounproject.com/png/363640-200.png" alt="User Avatar" class="img-size-50 mr-3 img-circle" style="width:30px">
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <button class="dropdown-item btn-text"  @click="logout()">
                            <i class="fas fa-sign-out-alt mr-2"></i> Logout
                            <!-- <span class="float-right text-muted text-sm">3 mins</span> -->
                        </button>
                        <div class="dropdown-divider"></div>
                    </div>
                </li>
               
                <li class="nav-item">
                    <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>
                </ul>
            </nav> 
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <!-- Brand Logo -->
                <router-link to="/dashboard" class="brand-link">
                <!-- <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"> -->
                <span class="brand-text font-weight-light">MiniCRM</span>
                </router-link>

                <!-- Sidebar -->
                <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                    <img src="https://static.thenounproject.com/png/363640-200.png" class="img-circle elevation-2" alt="User Image" style="width:35px">
                    </div>
                    <div class="info">
                    <a href="#" class="d-block">{{userData.name}}</a>
                    </div>
                </div>


                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library -->
                
                    <li class="nav-item">
                       <router-link to="/dashboard" class="nav-link" exact>
                        <i class="nav-icon fas fa-home"></i>
                        <p>Dashboard
                        </p>
                       </router-link>
                    </li>
                    <li class="nav-item">
                       <router-link to="/companies" class="nav-link" exact>
                        <i class="nav-icon fas fa-building"></i>
                        <p>Companies
                        </p>
                       </router-link>
                    </li>
                    <li class="nav-item">
                       <router-link to="/employees" class="nav-link" exact>
                        <i class="nav-icon fas fa-users"></i>
                        <p>Employees
                        </p>
                       </router-link>
                    </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
                </div>
                <!-- /.sidebar -->
            </aside>          
            <div class="content-wrapper" style="min-height: 686px;">
                <div class="container-two">
                     <router-view></router-view>
                </div>
                   
            </div>
       </div>
     

       
   </div>
</template>
<script>
export default {
     name: 'Admin',
    computed:{
        userData(){
            let p = this.$store.state.authmodule.user;
            return p;
        }
    },
     methods:{
         logout(){
             this.$store.dispatch('logout')
         }
     }
}
</script>
<style>
    .container-two{
        padding:0 5px;
        margin-left:10px;
        margin-right:10px;
    }
</style>