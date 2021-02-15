import { TokenService } from "../../services/TokenService";
import UserService from "../../services/UserService";
import router from "../../router/index"
import ApiService, {
    ApiSource
} from "../../services/ApiService";
const api = new ApiSource();

const state = {
  authenticating: false,
  accessToken: TokenService.getToken(),
  authenticationErrorCode: 0,
  authenticationError: "",
  user: { },  
  isLoggedIn:false,
}
const mutations ={
  LENDER_USER(state,payload){
    state.lender = payload
  },
  UPDATED_USER_DATA(state,payload){
      state.user = payload
  },
  loginRequest(state) {
    state.authenticating = true;
    state.authenticationError = "";
    state.authenticationErrorCode = 0;
  },


  loginSuccess(state, data) {
    state.accessToken = data.token;
    state.authenticating = false;
    state.isLoggedIn = true;
  },


  loginError(state, { errorCode, errorMessage }) {
    state.authenticating = false;
    state.authenticationErrorCode = errorCode;
    state.authenticationError = errorMessage;
  },

  logoutSuccess(state) {
    state.accessToken = "";
    state.isLoggedIn = false;
  }
}
const actions = {
  async login({ commit }, data) {
		commit("loginRequest");
       await api.login(data).then((res)=>{
         let response = res.data.data;
          TokenService.saveToken(response.token)
          TokenService.saveUser(response.user)
          TokenService.saveRefreshToken(response.token)
          ApiService.setHeader();
           commit("loginSuccess", res);
           commit("UPDATED_USER_DATA", response.user);
           router.push(router.history.current.query.redirect || TokenService.redirectUser(response.user.role.role));
           return true;
       })

    },
  async changePasswordAction({ commit }, data) {
		return new Promise((resolve,reject)=>{
         api.changepassword(data).then((res) => {
            resolve(res);
          })
    })
       

    },
      async updateProfileAction({ commit }, data) {
        	return new Promise((resolve, reject) => {
       api.updateprofile(data).then((res)=>{
           commit("UPDATED_USER_DATA", res.data.data);
           resolve(res);
       })
      })

    },
      async updateProfile({ commit }, data) {
       await api.changePassword(data).then((res)=>{
           commit("UPDATED_USER_DATA", res.data.data.user);
       })

    },
    
  logout({ commit }) {
    	TokenService.removeToken()
    	TokenService.removeUser()
    	TokenService.removeRefreshToken()
    	ApiService.removeHeader()
    commit("logoutSuccess");
    router.push({name:'welcome'});
}
}
const getters = {}
const authmodule = {
    state,
    mutations,
    actions,
    getters
  };
  
  export default authmodule;