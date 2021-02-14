<template>
    <div>
        {{userData.role.role}}
    </div>
</template>
<script>
export default {
    name:"Home",
    computed:{
        userData(){
            let p = this.$store.state.authmodule.user;
            return p;
        }
    }
}
</script>