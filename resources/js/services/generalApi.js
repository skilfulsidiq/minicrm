import axios from "axios";
import { TokenService } from "./TokenService";
import toast from "./ToastService";
import Vue from "vue";
import EventBus from "./event";

axios.interceptors.request.use(config => {
  EventBus.$emit("loading", true);
  return config;
});

// before a response is returned stop nprogress
axios.interceptors.response.use(
  function(response) {
    EventBus.$emit("loading", false);
    return response;
  },
  function(error) {
    EventBus.$emit("loading", false);
    // check for errorHandle config
    if (
      error.config.hasOwnProperty("errorHandle") &&
      error.config.errorHandle === false
    ) {
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
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${TokenService.getToken()}`;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },
  get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  customRequest(data) {
    return axios(data);
  }
};
export class generalApiSource {
 

  async sendrequest(httpmethod, url, data) {
    return await axios.request({
      method: httpmethod,
      url: url,
      data: data
    });
  }

  //  authentication apis
  async allStates() {
    return await this.sendrequest("get", "general/all-states");
  }
  async allPropertyTypes(data) {
    return await this.sendrequest("get", "general/all-properties-types");
  }
  async allAmenities(data) {
    return await this.sendrequest("get", "general/amenity-list");
  }
  async allPropertyStatus(data) {
    return await this.sendrequest("get", "general/property-status");
  }
  async allPaymentOptions(data) {
    return await this.sendrequest("get", "general/payment-options");
  }
  async allFinanceOptions(data) {
    return await this.sendrequest("get", "general/finance-option");
  }
}
export default ApiService;
