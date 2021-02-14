import { TokenService } from "../../services/TokenService";
import UserService from "../../services/UserService";
import router from "../../router/index"
import {ApiSource} from "../../services/ApiService";
const api = new ApiSource();

const state = {
  authenticating: false,
  accessToken: TokenService.getToken(),
  authenticationErrorCode: 0,
  authenticationError: "",
  user: {
    id:'',
      firstname:'',
      lastname:'',
      position:'',
      email:'',
      phone:'',
      is_admin:0,
      slug:''
      },
      lender:'',
  developerprofile:'',
  isLoggedIn:false,
  developersubscription:''
}
const mutations ={
  LENDER_USER(state,payload){
    state.lender = payload
  },
  UPDATED_USER_DATA(state,payload){
    // console.log(payload)
      state.user.id = payload.id
      state.user.firstname = payload.firstname;
      state.user.lastname = payload.lastname;
      state.user.email = payload.email;
      state.user.phone = payload.phone;
      state.user.position = payload.position;
      state.user.is_admin=payload.is_superadmin;
      state.user.slug=payload.slug;
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

    // console.log(state.user);
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
           commit("UPDATED_USER_DATA", res.data.data.user);
           router.push(router.history.current.query.redirect || "/home");
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
    router.push({name:'login'});
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