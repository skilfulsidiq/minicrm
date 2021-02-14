<template>
    <div>
        <v-list-item  link v-if="!hasChildren" @click="goLink(data.link)" active-class="highlighted"
    :class="data.link === $route.name ? 'highlighted' : ''"  :exact="data.exact" >
            <v-list-item-action>
              <v-icon :class="data.link === $route.name ? 'text-highlighted' : ''">{{data.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title  :class="data.link === $route.name ? 'text-highlighted' : ''">
                {{data.text}}
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-group v-if="hasChildren"
            :prepend-icon="data.model ? data.icon : data['icon-alt']" append-icon="" active-class="highlighted">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                      {{data.text}}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(item,i) in data.children" :key="i" @click="goLink(item.link)" link :class="item.link === $route.name ? 'highlighted' : ''">
              <v-list-item-action  >
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title  :class="item.link === $route.name ? 'text-highlighted' : ''">
                  {{item.text}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list-group>
    </div>
</template>
<script>
export default {
    props:['data','hasChildren'],
    data(){
      return{
        // hasChildren:false
      }
    },
    methods: {
        goLink(link){
          if (this.$route.name !== link){
            this.$router.push({name:link});
          }
         
        },
    },
    created() {
    },
}
</script>
<style scoped>
  .highlighted{
     background-color:rgba(0, 122, 245, 0.12);
  
  }
  .text-highlighted{
    color:#0075f1;
  }
  .active{
  background-color:#0168f3;
  color:#fff;
}
.router-link-active{
	opacity: 1;
    color: #0168fa;
    font-weight: 500;
}
.router-link-exact-active{
	opacity: 1;
    color: #0168fa;
    font-weight: 500;
}
</style>