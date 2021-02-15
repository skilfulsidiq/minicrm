<template>
<div>
        <bread-crumb :name="title"></bread-crumb>
            <div class="content">
                 <div class="row">
                    <div class="col-12">
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">{{info.length}} Companies</h3>

                            <div class="card-tools">
                                <button class="btn btn-success" @click="openModal">Add Company</button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                            <thead >
                                        <tr>
                                            <th> # </th>
                                            <th>Company Name</th>
                                            <th>Company Email</th>
                                            <th>Company Website</th>
                                            <th>Company logo</th>
                                            <th class="text-center text-danger"><i class="fa fa-bolt"> </i></th>
                                        </tr>
                                    </thead>
                            <tbody>
                                <tr v-for="(item,i) in pageOfItems" :key="item.id">
                                            <td>{{item.id}}</td>
                                            <td>{{item.name}}</td>
                                            <td>{{item.email}}</td>
                                            <td>{{item.url}}</td>
                                            <td>  <img :src="item.logo" alt="" style="width:40px; height:30px">
                                            </td>

                                            <td>
                                                <a @click="editModal(item)" href="#"  class="action-icon action-btn text-success"> <i class="fa fa-edit text-20"></i>
                                                </a>
                                                &nbsp;
                                                <a @click="deleteCompany(item)"  href="#" class="action-icon action-btn text-danger"> <i class="fa fa-trash"></i></a>
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

             <div class="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="newModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="employeeModalLongTitle">{{editForm?'Update Employee':'Add Employee'}}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                 <form @submit.prevent="addCompany">
                <div class="modal-body">
                        <div class="form-group">
                             <label for="">Name</label>
                              <input class="form-control" :class="{ 'is-invalid': submitted && $v.form.name.$error }" type="text" v-model.trim="form.name" autofocus>
                                <div v-if="submitted && $v.form.name.$error" class="invalid-feedback">
                                  <span v-if="!$v.form.name.required">Name is required</span>
                              </div>
                    
                          </div>
                             <div class="form-group">
                             <label for="">Email</label>
                              <input class="form-control" :class="{ 'is-invalid': submitted && $v.form.email.$error }" type="email" id="email" v-model.trim="form.email"  autofocus>
                                <div v-if="submitted && $v.form.email.$error" class="invalid-feedback">
                                  <span v-if="!$v.form.email.required">Email is required</span>
                                  <span v-if="!$v.form.email.email">Email is invalid</span>
                              </div>
                    
                          </div>
                           <div class="form-group">
                             <label for="">Website</label>
                              <input class="form-control" :class="{ 'is-invalid': submitted && $v.form.url.$error }" type="text" v-model.trim="form.url" autofocus>
                                <div v-if="submitted && $v.form.url.$error" class="invalid-feedback">
                                  <span v-if="!$v.form.name.required">Name is required</span>
                              </div>
                    
                          </div>
                    
                          <div class="form-group">
                             <label for="">Logo</label>
                              <input class="form-control"  type="file" >
                             
                    
                          </div>
                    
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">{{editForm?'Update':'Add'}}</button>
                </div>
                 </form>
              </div>
            </div>
          </div>

    </div>
   
</template>
<script>
import {paginationMixin} from '../../../mixins/paginationMixin'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    name:"Company",
    mixins:[paginationMixin],
    data(){
        return{
            title:"Companies",
            form:{
                name:'',
                email:'',
                url:'',
                image:''
            },
            submitted:false,
            editForm:false,
            slug:''
        }
    },
        validations:{
      form:{
        name:{required},
        email:{required},
        url:{required}
        

      }
    },
    computed:{
        info(){
          let p = this.$store.state.dashboard_module.all_companies;
          return p;
        }
    },
    methods:{
        fetchInfo(){
          this.$store.dispatch('dashboardCompaniesAction');
        },
          openModal(){
          this.form={}
          $("#newModal").modal('show');
        },
        closeModal(){
          this.editForm=false;
          this.resetForm();
            $("#newModal").modal('hide');
             
        },
        mapDataToForm(company){
          this.form.name = company.name,
          this.form.email = company.email
          this.form.url = company.url
          this.form.image = company.image
        },
        editModal(company){
          this.resetForm();
          this.mapDataToForm(company);
          this.editForm=true;
          this.slug = company.slug
        
           $("#newModal").modal('show');
        },
        resetForm(){
          this.form.name= ''
          this.form.email = ''
          this.form.url = ''
        },
        addCompany(){
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                let fm = {form:this.form,slug:this.slug}
              this.$store.dispatch("addCompanyAction",fm).then((res)=>{
                  this.closeModal();
                  this.resetForm();
                  this.fetchInfo();
                  swal("Company updated Successfully", {
                        icon: "success",
                      });
                  this.submitted = false;
              });
        },
        deleteCompany(company){
            this.$swal({
              title:'Are You sure ?',
              text:'You won\'t be able to revert this',
              icon: "warning",
              buttons: true,

            }).then((willDelete) => {
              if (willDelete) {
                this.$store.dispatch("deleteCompanyAction",company.slug).then((res)=>{
                  this.fetchInfo();
                      swal("Company Deleted Successfully", {
                        icon: "success",
                      });
                })
              
              } else {
                swal("Deletion is Cancelled");
              }
            })
        }
    },
    created(){
      this.fetchInfo();
    }

    
}
</script>