import {
    ApiSource
} from "../../services/ApiService";
const api = new ApiSource();
const state = {
    all_companies: [],
    companies_employee:[],
    all_roles:[]
}
const mutations = {

    ALL_COMPANIES(state, payload) {
        state.all_companies = payload;
        // console.log(payload)

    },
    ALL_ROLES(state,payload){
        state.all_roles=payload
    },
    COMPANY_EMPLOYEES(state,payload){
        state.companies_employee=payload
    }
}
const actions = {
    allCompaniesAction({
        commit
    }) {
        api.companiesList().then(res => {
            const p = res.data.data;
            commit("ALL_COMPANIES", p);
        })

    },
    allRoleAction({commit}){
        api.fetchRole().then(res=>{
              const p = res.data.data;
              console.log(p)
              commit("ALL_ROLES", p);
        })
    },
    allCompaniesEmployeeAction({commit},company_id){
           api.companyEmployee(company_id).then(res => {
               const p = res.data.data;
               console.log(p)
               commit("COMPANY_EMPLOYEES", p);
           })

    }


}
const getters = {}

const general_module = {
    state,
    mutations,
    actions,
    getters
}
export default general_module;