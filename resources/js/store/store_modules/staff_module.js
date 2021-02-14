import { ApiSource } from "../../services/ApiService";
const api = new ApiSource();
const state={
    staff:'',
    tour:'',
    current_staff:''
}
const mutations={
   
    STAFF_LIST(state,payload){
        state.staff = payload
    },
    BOOK_TOUR(state,payload){
        state.tour = payload
    },
    CURRENT_STAFF(state,payload){
            state.staff.filter((s)=>{
                if(s.slug == payload){
                    state.current_staff=s;
                }
            })
        
    }
}
const actions = {
    addStaffAction({commit},form){
        return new Promise(function(resolve, reject){
            api.addStaff(form).then(res=>{
                const p = res.data.data
                resolve(p)
                // commit("MAKE_OFFER",p)
            })
        }).catch(err=>{
            reject(err)
        })
    },
    updateStaffAction({commit},data){
        let form = data.form
        let slug = data.slug
        return new Promise(function(resolve, reject){
            api.updateStaff(form,slug).then(res=>{
                const p = res.data.data
                resolve(p)
                // commit("MAKE_OFFER",p)
            })
        }).catch(err=>{
            reject(err)
        })
    },
    allStaffListAction({commit}){
       api.allStaff().then(res => {
            const p = res.data.data
            commit("STAFF_LIST", p)
        })
    },
   deleteStaffAction({commit},slug){
        return new Promise(function(resolve, reject){
            api.deleteStaff(slug).then(res=>{
                const p = res.data.data
                resolve(p)
                // commit("MAKE_OFFER",p)
            })
        }).catch(err=>{
            reject(err)
        })
    },
    currentStaffAction({commit},staff){
        commit("CURRENT_STAFF",staff)
    }

    
}
const getters= {}

const staff_module = {
    state, mutations, actions, getters
}
export default staff_module;