<template>
    <div class="container mt-5">
         <profile-component  :user="userData" :company="userData.company"></profile-component>
    </div>
</template>
<script>
export default {
    name:"Profile",
      computed:{
        userData(){
            let p = this.$store.state.authmodule.user;
            return p;
        }
        
    },
}
</script>