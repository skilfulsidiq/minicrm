(self.webpackChunk=self.webpackChunk||[]).push([[187],{5187:(s,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});const i={name:"Dashboard",computed:{info:function(){return this.$store.state.dashboard_module.dashboard}},methods:{fetchInfo:function(){this.$store.dispatch("dashboardInfoAction")}},created:function(){this.fetchInfo()}};const o=(0,a(1900).Z)(i,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("bread-crumb",{attrs:{name:"Dashboard"}}),s._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row row-xs"},[a("div",{staticClass:"col-sm-6 col-md-6"},[a("router-link",{attrs:{to:"/companies"}},[a("div",{staticClass:"card card-status"},[a("div",{staticClass:"media"},[a("i",{staticClass:"icon ion-ios-world-outline tx-purple"}),s._v(" "),a("div",{staticClass:"media-body"},[a("h1",[s._v(s._s(s.info.companies))]),s._v(" "),a("p",[s._v("Total Companies")])])])])])],1),s._v(" "),a("div",{staticClass:"col-sm-6 col-md-6 mg-t-10 mg-sm-t-0"},[a("router-link",{attrs:{to:"/employees"}},[a("div",{staticClass:"card card-status"},[a("div",{staticClass:"media"},[a("i",{staticClass:"icon ion-ios-people-outline tx-teal"}),s._v(" "),a("div",{staticClass:"media-body"},[a("h1",[s._v(s._s(s.info.users))]),s._v(" "),a("p",[s._v("Total Employee")])])])])])],1)])])])],1)}),[],!1,null,null,null).exports}}]);