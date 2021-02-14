import {
    ApiSource
} from "../../services/ApiService";
const api = new ApiSource();
const state = {
    all_companies: []
}
const mutations = {

    ALL_COMPANIES(state, payload) {
        state.all_companies = payload;
        // console.log(payload)

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