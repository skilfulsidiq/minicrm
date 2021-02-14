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
  async updateprofile(authData) {
    return await this.sendrequest("post", "admin/update-profile", authData);
  }
  async dashboardInfo() {
    return await this.sendrequest("get", "admin/dashboard");
  }
  async companiesList() {
    return this.sendrequest("get", "all-companies");
  }
  async notpaginatedpropertiesList() {
    return this.sendrequest("get", "admin/not-paginated-all-properties");
  }
  async addProperty(step, slug, formdata) {
    return this.sendrequest("post", "admin/add-property/" + step + "/" + slug, formdata);
  }
}
export default ApiService;
