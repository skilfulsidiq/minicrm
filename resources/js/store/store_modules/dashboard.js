import { ApiSource } from "../../services/ApiService";
const api = new ApiSource();
const state={
    dashboard:""
}
const mutations={
   
   DASHBOARD_INFO(state,payload){
       this.dashboard = payload;

   }
}
const actions = {
    dashboardInfoAction({commit}){
        api.dashboardInfo().then(res=>{
            const p = res.data.data;
            console.log(p)
            commit("DASHBOARD_INFO",p);
        })
        
    }

    
}
const getters= {}

const dashboard_module = {
    state, mutations, actions, getters
}
export default dashboard_module;