<template>
    <div>
         <v-progress-linear
        :active="apiloading"
        :indeterminate="apiloading"
        absolute
        top
        color="deep-purple accent-4"
      ></v-progress-linear>
    </div>
</template>
<script>
import {loadingMixin} from '../../mixins/Loading'
export default {
    mixins:[loadingMixin]
    
}
</script>