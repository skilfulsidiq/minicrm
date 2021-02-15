<template>
    <div>
       <bread-crumb name="Dashboard"></bread-crumb>
          <div class="content">
            <div class="container">
                   <div class="row row-xs">
                  <div class="col-sm-6 col-md-6">
                    <router-link to="/companies">
                    <div class="card card-status">
                      <div class="media">
                        <i class="icon ion-ios-world-outline tx-purple"></i>
                        <div class="media-body">
                          <h1>{{info.companies}}</h1>
                          <p>Total Companies</p>
                        </div><!-- media-body -->
                      </div><!-- media -->
                    </div><!-- card -->
                    </router-link >
                    </div>
                  <!-- col-3 -->
                  <div class="col-sm-6 col-md-6 mg-t-10 mg-sm-t-0">
                      <router-link to="/employees">
                        <div class="card card-status">
                          <div class="media">
                            <i class="icon ion-ios-people-outline tx-teal"></i>
                            <div class="media-body">
                              <h1>{{info.users}}</h1>
                              <p>Total Employee</p>
                            </div><!-- media-body -->
                          </div><!-- media -->
                        </div><!-- card -->
                      </router-link >
                  </div><!-- col-3 -->
         <!-- col-3 -->
                </div>
            </div>
           
          </div>
    </div>
</template>
<script>
import {loadingMixin} from '../../../mixins/Loading'
export default {
    name:"Dashboard",
    mixins:[loadingMixin],
    computed:{
        info(){
          let p = this.$store.state.dashboard_module.dashboard;
          return p;
        }
    },
    methods:{
        fetchInfo(){
          this.$store.dispatch('dashboardInfoAction');
        }
    },
    created(){
      this.fetchInfo();
    }
}
</script>