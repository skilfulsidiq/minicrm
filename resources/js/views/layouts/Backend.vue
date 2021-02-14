<template>
   <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div class="container">
                    <router-link class="navbar-brand" to="/welcome">MiniCRM</router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Left Side Of Navbar -->
                        <ul class="navbar-nav mr-auto">

                        </ul>

                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav ml-auto">
                            <!-- Authentication Links -->
                        
                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        {{userData.name}}
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        
                                        <router-link to="/profile" class="dropdown-item">Profile
                                        </router-link>
                                        <button class=" btn-text dropdown-item"  @click="logout()">
                                            Logout
                                        </button>

                                        <!-- <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                            @csrf
                                        </form> -->
                                    </div>
                                </li>
                        </ul>
                    </div>
                </div>
        </nav>
        <router-view></router-view>
   </div>
</template>
<script>
export default {
     name: 'Backend',
     data(){
         return{

         }
     },
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