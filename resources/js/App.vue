<template>
    <div >
      <component :is="layout"></component>
    </div>
</template>

<script>
const frontend = 'frontend'

export default {
  computed:{
    layout(){  
      return (this.$route.meta.layout || frontend)+'-layout'
    }
  }
};
</script>
<style>
  #nprogress .bar {
 background: #0168fa !important;
 height: 3px !important;

}

#nprogress .spinner-icon {
  border-left-color: green !important;
  border-top-color: #0168fa  !important;
	width:30px !important;
	height:30px !important;

}

</style>