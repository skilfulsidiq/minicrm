<template>
    <div>
        <bread-crumb :name="title"></bread-crumb>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">{{info.length}} Employees</h3>

                <div class="card-tools">
                    <button class="btn btn-success">Add Employee</button>
                </div>
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
                        <th class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                    </tr>
                </thead>
                  <tbody>
                    <tr v-for="(user,i) in pageOfItems" :key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.company.name}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.role.role}} User</td>

                        <td>
                            <a href="#"  class="text-success"> <i class="fa fa-edit text-20"></i>
                            </a>
                            &nbsp;
                            <a onclick="return confirm('are you sure to delete');"  href="#" class=" text-danger"> <i class="fa fa-trash"></i></a>
                        </td>

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
    name:"Employee",
    mixins:[paginationMixin],
    data(){
        return{
            title:"Employees"
        }
    },
    computed:{
        info(){
          let p = this.$store.state.dashboard_module.all_employees;
          return p;
        }
    },
    methods:{
        fetchInfo(){
          this.$store.dispatch('dashboardAllEmployeeAction');
        }
    },
    created(){
      this.fetchInfo();
      console.log(this.info);
    }

    
}
</script>