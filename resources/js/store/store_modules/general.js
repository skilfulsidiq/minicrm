import { generalApiSource } from "../../services/generalApi"
const genaralapi = new generalApiSource();
const state={
    states:[],
    amenities:[],
    property_status:[],
    payment_option:[],
    finance_option:[],
    property_types:[]
}
const mutations={
    STATE_LIST(state,payload){
        state.states = payload
    },
    AMENITY_LIST(state,payload){
        state.amenities = payload
    },
    PROPERTY_STATUS_LIST(state,payload){
        state.property_status = payload
    },
    PAYMENT_OPTION_LIST(state,payload){
        state.payment_option = payload
    },
    FINANCE_OPTION_LIST(state,payload){
        state.finance_option = payload
    },
    PROPERTY_TYPE_LIST(state,payload){
        state.property_types = payload
    }
}
const actions = {
    getAllStateAction({commit}){
        genaralapi.allStates().then((res)=>{
            let q = res.data.data;
            commit("STATE_LIST",q)
        })
    },
    getAmenitiesAction({commit}){
        genaralapi.allAmenities().then((res)=>{
            let q = res.data.data
            commit("AMENITY_LIST",q)
        })
    },
    getAllPropertyStatusAction({commit}){
        genaralapi.allPropertyStatus().then((res)=>{
            let q = res.data.data
            commit("PROPERTY_STATUS_LIST",q)
        })
    },
    getAllPaymentOptionAction({commit}){
        genaralapi.allPaymentOptions().then((res)=>{
            let q = res.data.data
            commit("PAYMENT_OPTION_LIST",q)
        })
    },
    getAllFinanceOptionAction({commit}){
        genaralapi.allFinanceOptions().then((res)=>{
            let q = res.data.data
            commit("FINANCE_OPTION_LIST",q)
        })
    },
    getAllPropertyTypeAction({commit}){
        genaralapi.allPropertyTypes().then((res)=>{
            let q = res.data.data
            commit("PROPERTY_TYPE_LIST",q)
        })
    }
}
const getters = {}
const general_module ={
    state, mutations, actions, getters
}

export default general_module