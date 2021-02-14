<template>
    <div>
    <div class="slim-mainpanel mt-5">
        <div class="container">
            <div class="center-div">
            <div class="signin-box box-shadow mt-5">
                <h2 class="signin-title-primary">Welcome back!</h2>
                <h3 class="signin-title-secondary">Sign in to continue.</h3>
                <form class="login-form" action="#" method="POST" role="form">
                    <div class="form-group">
                        <input class="form-control  " type="email" id="email" name="email" placeholder="Email address" autofocus  required>
                    
                    </div>
                    <div class="form-group">

                            <input class="form-control " type="password" id="password" name="password" placeholder="Password" required>

                    </div>
                    <div class="form-group">
                        <div class="utility">
                            <div class="animated-checkbox">
                                <label>
                                    <input type="checkbox" name="remember"><span class="label-text">Stay Signed in</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group btn-container">
                        <button class="btn btn-primary btn-block btn-signin" type="submit"><i class="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
</div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            form:{
                email:'',
                password:''
            }
        }
    }
}
</script>