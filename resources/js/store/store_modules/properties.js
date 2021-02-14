import { ApiSource } from "../../services/ApiService";
const api = new ApiSource();
const state = {
    properties:[],
    properties_table_count:"",
    property:"",
    amenities:""

}
const mutations={
    GET_PROPERTIES_LIST(state,payload){
        state.properties = payload
        
    },
    GET_PROPERTIES_TABLE_COUNT(state,payload){
        state.properties_table_count = payload;
    },
    ADD_PROPERTY(state,payload){
        state.property=payload;
    },
    VIEW_PROPERTY_DETAILS(state,payload){
        state.properties.findIndex(function(pro){
            if(pro.slug == payload){
                state.property = pro
            }
        });
        
    }
    
}
const actions = {
 

    notPaginatedPropertyListAction({commit}){
        api.notpaginatedpropertiesList().then((res)=>{
            const list = res.data.data;
            console.table(list)
            const count_data = res.data.count;
            commit("GET_PROPERTIES_TABLE_COUNT",count_data)
            commit("GET_PROPERTIES_LIST",list)
        })
    },
    propertyListAction2({ commit },	page) {
		let main_url = "agent/properties?page="+page;
        commit("TOGGLE_LOADING",true)
        api.notpaginatedpropertiesList(main_url).then((res)=>{
            const list = res.data.data;
            commit("GET_PROPERTIES_LIST",list)
            commit("TOGGLE_LOADING",false)
        })
    },
    hotPropertyListAction({commit},url="agent/properties/hotdeals"){
        
        commit("TOGGLE_LOADING",true)
        api.hotpropertylist(url).then((res)=>{
            const list = res.data.data;
            // console.table('p',list)
            commit("GET_HOT_DEALS_PROPERTY_LIST",list)
            commit("TOGGLE_LOADING",false)
        })
    },
    hotPropertyListAction2({ commit },	page) {
		let main_url = "agent/properties/hotdeals?page="+page;
        commit("TOGGLE_LOADING",true)
        api.hotpropertylist(main_url).then((res)=>{
            const list = res.data.data;
            commit("GET_HOT_DEALS_PROPERTY_LIST",list)
            commit("TOGGLE_LOADING",false)
        })
    },
    addPropertyAction({commit},data){
       let formdata  =data.form;
        let step = data.step;
        let slug = data.slug
        return new Promise((resolve,reject)=>{
            api.addProperty(step,slug,formdata).then((res)=>{
                let r = res.data.data;
                resolve(r);
                commit("ADD_PROPERTY",r)
            })
        })
        
    },
    viewPropertyDetailAction({commit},slug){
        // api.propertydetail(slug).then(res=>{
        //     const pro = res.data.data;slug
            commit("VIEW_PROPERTY_DETAILS",slug);
        // })
        
    },
    addPropertyToAgentCollectionAction({commit},propertyid,agentid){
        // return new Promise((resolve, reject)=>{
        //     api.addtocollection(propertyid,agentid).then(res=>{
        //         const l = res.data.data
        //         resolve(l);
        //     })
        // })
    }
    
}
const getters= {
    getProperty(state){
        return this.property;
    }
}

const property_module = {
    state, mutations, actions, getters
}
export default property_module;