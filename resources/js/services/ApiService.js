import axios from "axios";
import NProgress from "nprogress";
import { TokenService } from "./TokenService";
import toast from "./ToastService";
import Vue from "vue";
import EventBus from "./event";

axios.interceptors.request.use(config => {
  NProgress.start();
  EventBus.$emit("loading", true);
  return config;
});

// before a response is returned stop nprogress
axios.interceptors.response.use(
  function(response) {
    // NProgress.done();
    EventBus.$emit("loading", false);
    return response;
  },
  function(error) {
    // NProgress.done();
    EventBus.$emit("loading", false);
    // check for errorHandle config
    if (error.config.hasOwnProperty("errorHandle") && error.config.errorHandle === false) {
      return Promise.reject(error);
    }

    if (error.response) {
      // console.log(error.response.data);
      toast.error(error.response.data.data);
    }
  }
);
const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  setHeader() {
    axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },
};
export class ApiSource {
  async sendrequest(httpmethod, url, data) {
    return await axios.request({
      method: httpmethod,
      url:  url,
      data: data
    });
  }

  //  authentication apis
  async login(authData) {
    return await this.sendrequest("post", "login", authData);
  }
  async register(authData) {
    return await this.sendrequest("post", "admin/register", authData);
  }
  async changepassword(authData) {
    return await this.sendrequest("post", "adminchange-password", authData);
  }
  async updateprofile(authData,slug) {
    return await this.sendrequest("post", "update-profile/+slug", authData);
  }
  async dashboardInfo() {
    return await this.sendrequest("get", "admin/dashboard");
  }
  async companiesList() {
    return this.sendrequest("get", "all-companies");
  }
  async fetchRole() {
    return this.sendrequest("get", "all-roles");
  }
  async addCompany(data,slug) {
    return this.sendrequest("post", "admin/update-company/"+slug,data);
  }
  async deleteCompany(slug) {
    return this.sendrequest("get", "admin/delete-company/"+slug);
  }
  async companyEmployee(id) {
    return this.sendrequest("get", "company-employee/" + id);
  }
   async employeeList() {
       return this.sendrequest("get", "admin/all-employees");
   }
  async addEmployee(data,slug) {
    return this.sendrequest("post", "admin/update-employee/"+slug,data);
  }
  async deleteEmployee(slug) {
    return this.sendrequest("get", "admin/delete-employee/"+slug);
  }
}
export default ApiService;
