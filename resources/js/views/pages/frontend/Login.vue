<template>
    <div>
    <div class="slim-mainpanel mt-5">
        <div class="container">
            <div class="center-div">
            <div class="signin-box box-shadow mt-5">
                <h2 class="signin-title-primary">Welcome back!</h2>
                <h3 class="signin-title-secondary">Sign in to continue.</h3>
                <form class="login-form" @submit.prevent="login()" method="POST" role="form">
                    <div class="form-group">
                        <input class="form-control" :class="{ 'is-invalid': submitted && $v.form.email.$error }" type="email" id="email" v-model.trim="form.email" placeholder="Email address" autofocus>
                          <div v-if="submitted && $v.form.email.$error" class="invalid-feedback">
                            <span v-if="!$v.form.email.required">Email is required</span>
                            <span v-if="!$v.form.email.email">Email is invalid</span>
                        </div>
                    
                    </div>
                    <div class="form-group">

                            <input class="form-control " :class="{ 'is-invalid': submitted && $v.form.password.$error }"  type="password" id="password" v-model="form.password" placeholder="Password">
                              <div v-if="submitted && $v.form.password.$error" class="invalid-feedback">
                            <span v-if="!$v.form.password.required">Password is required</span>
                            <span v-if="!$v.form.password.minLength">Password must be at least 6 characters</span>
                        </div>

                    </div>
                 
                    <div class="form-group btn-container">
                        <button class="btn btn-primary btn-block btn-signin" type="submit">
                            <span v-if="!apiloading"><i class="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</span>
                            <span v-if="apiloading"> Logging in ........</span>
                            </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
</div>
    </div>
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import {loadingMixin} from '../../../mixins/Loading'
export default {
    name:'Login',
    mixins:[loadingMixin],
    data(){
        return{
            form:{
                email:'',
                password:''
            },
            submitted: false
        }
    },
    validations:{
        form:{
            email:{required,email},
            password:{required,minLength:minLength(6)}
        }
    },
    methods:{
        login(){
              this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));

        }
    }
}
</script>