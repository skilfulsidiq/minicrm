<template>
    <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title"> Employees</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                <thead>
                    <tr>
                        <th> # </th>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                  <tbody>
                    <tr v-for="(user,i) in pageOfItems" :key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.company.name}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.role.role}} User</td>

                        

                        </tr>
                   
                  </tbody>
                </table>
                <div class=" text-center pb-0 p-5 mt-5">
                        <jw-pagination :pageSize="10" :items="info" @changePage="onChangePage" :styles="customStyles" :labels="customLabels" ></jw-pagination>
                        </div>
              </div>
             
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
    </div>
</template>
<script>
import {paginationMixin} from '../../../mixins/paginationMixin'
export default {
    name:"Home",
    mixins:[paginationMixin],
    computed:{
        userData(){
            let p = this.$store.state.authmodule.user;
            return p;
        },
        info(){
          let p = this.$store.state.general_module.companies_employee;
          return p;
        }
        
    },
      methods:{
        fetchInfo(){
          this.$store.dispatch('allCompaniesEmployeeAction',this.userData.company.id);
        }
    },
    created(){
      this.fetchInfo();
      console.log(this.info);
    }
}
</script>