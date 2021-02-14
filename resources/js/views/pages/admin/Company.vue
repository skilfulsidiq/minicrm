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
                                <button class="btn btn-success">Add Company</button>
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
                                                <a href="#"  class="action-icon action-btn text-success"> <i class="fa fa-edit text-20"></i>
                                                </a>
                                                &nbsp;
                                                <a onclick="return confirm('are you sure to delete');"  href="#" class="action-icon action-btn text-danger"> <i class="fa fa-trash"></i></a>
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

    </div>
   
</template>
<script>
import {paginationMixin} from '../../../mixins/paginationMixin'
export default {
    name:"Company",
    mixins:[paginationMixin],
    data(){
        return{
            title:"Companies"
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
        }
    },
    created(){
      this.fetchInfo();
    }

    
}
</script>