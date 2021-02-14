import {
    ApiSource
} from "../../services/ApiService";
const api = new ApiSource();
const state = {
    all_companies: [],
    companies_employee:[]
}
const mutations = {

    ALL_COMPANIES(state, payload) {
        state.all_companies = payload;
        // console.log(payload)

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
    allCompaniesEmployeeAction({commit},company_id){
           api.companyEmployee(company_id).then(res => {
               const p = res.data.data;
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