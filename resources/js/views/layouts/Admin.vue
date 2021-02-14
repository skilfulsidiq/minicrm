<template>
   <div>
        <div class="slim-header with-sidebar">
            <div class="container-fluid">
        <div class="slim-header-left">
        <h2 class="slim-logo"><router-link to="/dashboard">CRM</router-link><span>.</span></a></h2>
            <a href="" id="slimSidebarMenu" class="slim-sidebar-menu"><span></span></a>
        
        </div><!-- slim-header-left -->
        <div class="slim-header-right">

            <div class="dropdown dropdown-c">
            <a href="#" class="logged-user" data-toggle="dropdown">
                <img src="http://via.placeholder.com/500x500" alt="">
            <span>{{userData.name}}</span>
                <i class="fa fa-angle-down"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <nav class="nav">
                <a href="#" @click="logout()" class="nav-link"><i class="icon ion-forward"></i> Sign Out</a>
                </nav>
            </div><!-- dropdown-menu -->
            </div><!-- dropdown -->
        </div><!-- header-right -->
            </div><!-- container-fluid -->
        </div><!-- slim-header -->
         <div class="slim-body">
            <div class="slim-sidebar">

                <ul class="nav nav-sidebar">
                    <li class="sidebar-nav-item">
                        <router-link to="/dashboard" class="sidebar-nav-link " exact><i class="icon ion-ios-home-outline"></i>&nbsp;&nbsp;Dashboard</router-link>
                    </li>
                    <label class="sidebar-label mt-3">Companies</label>
                    <li class="sidebar-nav-item">
                        <router-link to="/companies" class="sidebar-nav-link" exact><i class="icon ion-ios-world-outline"></i>&nbsp;&nbsp;All Companies</router-link>
                    </li>
                
                    <label class="sidebar-label mt-3">Employees</label>
                    <li class="sidebar-nav-item">
                        <router-link to="/employees" class="sidebar-nav-link" exact><i class="icon ion-ios-people-outline"></i>&nbsp;&nbsp;All Employee</router-link>
                    </li>

                </ul>
            </div>
            <div class="slim-mainpanel">
                <div class="container">
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