<template>
    <div >
      <component :is="layout"></component>
    </div>
</template>

<script>
const frontend = 'frontend'
export default {
  name: 'App',
  computed:{
    layout(){  
      return (this.$route.meta.layout || frontend)+'-layout'
    }
  }
};
</script>