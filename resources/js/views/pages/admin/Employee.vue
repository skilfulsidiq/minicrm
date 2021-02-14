<template>
    <div>
        <bread-crumb :name="title"></bread-crumb>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">{{info.length}} Employees</h3>

                <div class="card-tools">
                    <button class="btn btn-success" @click="openModal">Add Employee</button>
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
          <div class="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="newModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="employeeModalLongTitle">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                      <form @submit.prevent="add">
                        <div class="form-group">
                              <select v-model="form.company_id" id=""
                              class="form-control" :class="{ 'is-invalid': submitted && $v.form.company_id.$error }">
                                <option v-for="item in companies" :key="item.id" :value="item.id">{{item.name}}</option>
                              </select>
                                <div v-if="submitted && $v.form.company_id.$error" class="invalid-feedback">
                                  <span v-if="!$v.form.company_id.required">Company is required</span>
                              </div>
                    
                          </div>
                        <div class="form-group">
                              <select v-model="form.role_id" id=""
                              class="form-control" :class="{ 'is-invalid': submitted && $v.form.role_id.$error }">
                                <option v-for="item in roles" :key="item.id" :value="item.id">{{item.role}}</option>
                              </select>
                                <div v-if="submitted && $v.form.role_id.$error" class="invalid-feedback">
                                  <span v-if="!$v.form.role_id.required">Role is required</span>
                              </div>
                    
                          </div>
                          <div class="form-group">
                              <input class="form-control" :class="{ 'is-invalid': submitted && $v.form.name.$error }" type="text" v-model.trim="form.name" placeholder="name" autofocus>
                                <div v-if="submitted && $v.form.name.$error" class="invalid-feedback">
                                  <span v-if="!$v.form.name.required">Email is required</span>
                                  <span v-if="!$v.form.name.email">Email is invalid</span>
                              </div>
                    
                          </div>
                          <div class="form-group">
                              <input class="form-control" :class="{ 'is-invalid': submitted && $v.form.email.$error }" type="email" id="email" v-model.trim="form.email" placeholder="Email address" autofocus>
                                <div v-if="submitted && $v.form.email.$error" class="invalid-feedback">
                                  <span v-if="!$v.form.email.required">Email is required</span>
                                  <span v-if="!$v.form.email.email">Email is invalid</span>
                              </div>
                    
                          </div>
                      </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
import {paginationMixin} from '../../../mixins/paginationMixin'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    name:"Employee",
    mixins:[paginationMixin],
    data(){
        return{
            title:"Employees",
            form:{
              company_id:'',
              role_id:'',
              name:'',
              email:'',
              password:''
            },
            submitted:false
        }
    },
    validations:{
      form:{
        company_id:{required},
        role_id:{required},
        name:{required},
        email:{required, email},

      }
    },
    computed:{
        info(){
          let p = this.$store.state.dashboard_module.all_employees;
          return p;
        },
        companies(){
           let p = this.$store.state.general_module.all_companies;
          return p;
        },
        roles(){
           let p = this.$store.state.general_module.all_roles;
          return p;
        }
    },
    methods:{
        fetchInfo(){
          this.$store.dispatch('dashboardAllEmployeeAction');
        },
        fetchCompanyInfo(){
          this.$store.dispatch('allCompaniesAction');
        },
        openModal(){
          this.form={}
          $("#newModal").modal('show');
        }
    },
    created(){
      this.fetchInfo();
      this.fetchCompanyInfo();
    }

    
}
</script>