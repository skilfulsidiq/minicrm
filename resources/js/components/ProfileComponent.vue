<template>
<div>

    <div class="card card-profile">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                      <div class="media">
                        <img :src="company.logo" alt="">
                        <div class="media-body">
                          <h3 class="card-profile-name">{{profile.name}}</h3>
                          <h4 class="">Company:  {{company.name}} </h4>
                          <h4>Email : {{profile.email}}</h4>
                          <p></p>

                        </div><!-- media-body -->
                      </div>
                  </div>
                  <div class="col-md-6 show-line">
                     <h3>Update Profile</h3>
                      <form @submit.prevent="updateProfile" data-parsley-validate>
                          <div class="form-group">
                          <label  class="text-left">Name</label>
                          <input type="text" v-model="form.name" class="form-control" required>
                        </div>
                         <div class="form-group">
                          <label for="email">Email</label>
                          <input type="email" v-model="form.email" class="form-control">
                        </div>
                         <div class="form-group">
                          <label for="password">Password</label>
                          <input type="password" v-model="form.password" class="form-control">
                        </div>
                        <div class="form-group">
                        <button class="btn btn-primary btn-block">Update Profile</button>
                        </div>
                      </form>
                  </div>
                </div>
                <!-- media -->
              </div><!-- card-body -->
              <div class="card-footer">
                <a :href="company.url" class="card-profile-direct">{{company.url}}</a>
                <div>
                  <!-- <a class="btn btn-text" @click="editProfile = !editProfile">Edit Profile</a> -->
                  <!-- <a href="">Profile Settings</a> -->
                </div>
            </div><!-- card-footer -->
      </div>
      
      
</div>
  
</template>
<script>
import axios from 'axios';
const URL="";
export default {
    name:'ProfileComponent',
    props:{profile:Object,company:Object},
    data(){
      return{
        form:{
          name:'',
          email:'',
          password:'',
          slug:''
        }
      }
    },
    methods:{
      updateProfile(){
        if(this.form.name !='' &&  this.form.email !=''){
            console.log(this.form);
            axios.post(URl,this.form).then((res)=>{

            }).catch((err)=>{
              
            })
        }
        return;
      
      }
    },
    created(){
        this.form.name = this.profile.name
        this.form.email = this.profile.email
        this.form.slug = this.profile.slug
    }
}
</script>
<style scoped>
  .show-line{
    border-left: 1px solid #f2f2f2;
  }
</style>