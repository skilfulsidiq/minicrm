import {
    ApiSource
} from "../../services/ApiService";
const api = new ApiSource();
const state = {
    dashboard: "",
    all_companies: [],
    all_employees: []

}
const mutations = {

    DASHBOARD_INFO(state, payload) {
        state.dashboard = payload;

    },
    ALL_COMPANIES(state, payload) {
        state.all_companies = payload;
        // console.log(payload)

    },
    ALL_EMPLOYEES(state, payload) {
        state.all_employees = payload;
        // console.log(payload)

    },

}
const actions = {
    dashboardInfoAction({
        commit
    }) {
        api.dashboardInfo().then(res => {
            const p = res.data.data;
            // console.log(p)
            commit("DASHBOARD_INFO", p);
        })

    },
    dashboardCompaniesAction({
        commit
    }) {
        api.companiesList().then(res => {
            const p = res.data.data;
            commit("ALL_COMPANIES", p);
        })

    },
    dashboardAllEmployeeAction({
        commit
    }) {
        api.employeeList().then(res => {
            const p = res.data.data;
            commit("ALL_EMPLOYEES", p);
        })
    },
    addCompanyAction({
        commit
    }, formdata) {
        let form = formdata.form;
        let slug = formdata.slug;
        return new Promise((resolve, reject) => {
            api.addCompany(form, slug).then(res => {
                const p = res.data.data;
                resolve(res);
                // commit("ALL_EMPLOYEES", p);
            })
        });
    },
    deleteCompanyAction({
        commit
    }, slug) {
        return new Promise((resolve, reject) => {
            api.deleteCompany(slug).then(res => {
                const p = res.data.data;
                resolve(res);
                // commit("ALL_EMPLOYEES", p);
            })
        })
    },
    addEmployeeAction({
        commit
    }, formdata) {
        let form = formdata.form;
        let slug = formdata.slug;
        console.log(formdata)
          return new Promise((resolve,reject)=>{
                  api.addEmployee(form, slug).then(res => {
                      const p = res.data.data;
                      resolve(res);
                      // commit("ALL_EMPLOYEES", p);
                  }).catch((err)=>{
                      reject(err);
                  })
          })

    },
    deleteEmployeeAction({
        commit
    }, slug) {
        return new Promise((resolve, reject) => {
            api.deleteEmployee(slug).then(res => {
                const p = res.data.data;
                resolve(res);
                // commit("ALL_EMPLOYEES", p);
            })
        });
    }


}
const getters = {}

const dashboard_module = {
    state,
    mutations,
    actions,
    getters
}
export default dashboard_module;
