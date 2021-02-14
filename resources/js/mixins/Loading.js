import EventBus from '../services/event'
export const loadingMixin ={
    data(){
        return{
            apiloading:false
        }
        
    },
    computed: {
     
    },
    created() {
        EventBus.$on("loading",(t)=>{
            this.apiloading = t;
        })
    },
 }