(self.webpackChunk=self.webpackChunk||[]).push([[922],{922:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(8840),i=r(1311),o=r(379);const n={name:"Employee",mixins:[a.z,i.q],data:function(){return{title:"Employees",form:{company_id:"",role_id:"",name:"",email:"",password:"",slug:""},submitted:!1,editForm:!1,slug:""}},validations:{form:{company_id:{required:o.C1},role_id:{required:o.C1},name:{required:o.C1},email:{required:o.C1,email:o.Do}}},computed:{info:function(){return this.$store.state.dashboard_module.all_employees},companies:function(){return this.$store.state.general_module.all_companies},roles:function(){return this.$store.state.general_module.all_roles}},methods:{fetchInfo:function(){this.$store.dispatch("dashboardAllEmployeeAction")},fetchDataInfo:function(){this.$store.dispatch("allCompaniesAction"),this.$store.dispatch("allRoleAction")},mapDataToForm:function(e){this.form.company_id=e.company_id,this.form.role_id=e.role_id,this.form.name=e.name,this.form.email=e.email},openModal:function(){this.form={},$("#newModal").modal("show")},closeModal:function(){this.editForm=!1,this.resetForm(),$("#newModal").modal("hide")},editModal:function(e){this.resetForm(),this.mapDataToForm(e),this.editForm=!0,this.slug=e.slug,$("#newModal").modal("show")},resetForm:function(){this.form.company_id="",this.form.role_id="",this.form.name="",this.form.email="",this.slug=""},addEmployee:function(){var e=this;if(this.submitted=!0,this.$v.$touch(),!this.$v.$invalid){var t={form:this.form,slug:this.slug};this.$store.dispatch("addEmployeeAction",t).then((function(t){e.closeModal(),e.resetForm(),e.fetchInfo(),swal("Employee updated Successfully",{icon:"success"}),e.submitted=!1}))}},deleteEmployee:function(e){var t=this;this.$swal({title:"Are You sure ?",text:"You won't be able to revert this",icon:"warning",buttons:!0}).then((function(r){r?t.$store.dispatch("deleteEmployeeAction",e.slug).then((function(e){t.fetchInfo(),swal("Employee Deleted Successfully",{icon:"success"})})):swal("Deletion is Cancelled")}))}},created:function(){this.fetchInfo(),this.fetchDataInfo()}};const s=(0,r(1900).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("bread-crumb",{attrs:{name:e.title}}),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h3",{staticClass:"card-title"},[e._v(e._s(e.info.length)+" Employees")]),e._v(" "),r("div",{staticClass:"card-tools"},[r("button",{staticClass:"btn btn-success",on:{click:e.openModal}},[e._v("Add Employee")])])]),e._v(" "),r("div",{staticClass:"card-body table-responsive p-0"},[r("table",{staticClass:"table table-hover text-nowrap"},[e._m(0),e._v(" "),r("tbody",e._l(e.pageOfItems,(function(t,a){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.id))]),e._v(" "),r("td",[e._v(e._s(t.company.name))]),e._v(" "),r("td",[e._v(e._s(t.name))]),e._v(" "),r("td",[e._v(e._s(t.email))]),e._v(" "),r("td",[e._v(e._s(t.role.role)+" User")]),e._v(" "),r("td",[r("a",{staticClass:"text-success btn-text",on:{click:function(r){return e.editModal(t)}}},[r("i",{staticClass:"fa fa-edit text-20"})]),e._v("\n                         \n                        "),r("a",{staticClass:" text-danger",attrs:{href:"#"},on:{click:function(r){return e.deleteEmployee(t)}}},[r("i",{staticClass:"fa fa-trash"})])])])})),0)]),e._v(" "),r("div",{staticClass:" text-center pb-0 p-5 mt-5"},[r("jw-pagination",{attrs:{pageSize:10,items:e.info,styles:e.customStyles,labels:e.customLabels},on:{changePage:e.onChangePage}})],1)])])])]),e._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"newModal",tabindex:"-1",role:"dialog","aria-labelledby":"newModal","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title",attrs:{id:"employeeModalLongTitle"}},[e._v(e._s(e.editForm?"Update Employee":"Add Employee"))]),e._v(" "),e._m(1)]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.addEmployee(t)}}},[r("div",{staticClass:"modal-body"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v("Company")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.company_id,expression:"form.company_id"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.company_id.$error},attrs:{id:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"company_id",t.target.multiple?r:r[0])}}},e._l(e.companies,(function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0),e._v(" "),e.submitted&&e.$v.form.company_id.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.form.company_id.required?e._e():r("span",[e._v("Company is required")])]):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v("ROle")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.role_id,expression:"form.role_id"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.role_id.$error},attrs:{id:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"role_id",t.target.multiple?r:r[0])}}},e._l(e.roles,(function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.role))])})),0),e._v(" "),e.submitted&&e.$v.form.role_id.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.form.role_id.required?e._e():r("span",[e._v("Role is required")])]):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v("Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.name,expression:"form.name",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.name.$error},attrs:{type:"text",autofocus:""},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),e.submitted&&e.$v.form.name.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.form.name.required?e._e():r("span",[e._v("Name is required")])]):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.email,expression:"form.email",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.email.$error},attrs:{type:"email",id:"email",autofocus:""},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),e.submitted&&e.$v.form.email.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.form.email.required?e._e():r("span",[e._v("Email is required")]),e._v(" "),e.$v.form.email.email?e._e():r("span",[e._v("Email is invalid")])]):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"email"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")]),e._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(e._s(e.editForm?"Update":"Add"))])])])])])])],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v(" # ")]),e._v(" "),r("th",[e._v("Company")]),e._v(" "),r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Email")]),e._v(" "),r("th",[e._v("Role")]),e._v(" "),r("th",{staticClass:"text-center text-danger"},[r("i",{staticClass:"fa fa-bolt"})])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])}],!1,null,null,null).exports},6408:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r(6681).regex)("alpha",/^[a-zA-Z]*$/);t.default=a},6195:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r(6681).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},5573:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,a)}),!0)}))}},7884:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(e,t){return(0,a.withParams)({type:"between",min:e,max:t},(function(r){return!(0,a.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},6681:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return i.default}}),t.regex=t.ref=t.len=t.req=void 0;var a,i=(a=r(8085))&&a.__esModule?a:{default:a};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=n;t.len=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,i.default)({type:e},(function(e){return!n(e)||t.test(e)}))}},4078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r(6681).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},8107:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r(6681).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=a},379:(e,t,r)=>{"use strict";Object.defineProperty(t,"Do",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"Ei",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"C1",{enumerable:!0,get:function(){return c.default}});var a=P(r(6408)),i=P(r(6195)),o=P(r(5669)),n=P(r(7884)),s=P(r(8107)),l=P(r(9103)),u=P(r(7340)),d=P(r(5287)),f=P(r(3091)),c=P(r(2419)),m=P(r(2941)),v=P(r(8300)),p=P(r(918)),_=P(r(3213)),y=P(r(5832)),h=P(r(5573)),b=P(r(2500)),g=P(r(2628)),x=P(r(301)),w=P(r(6673)),$=P(r(4078));function P(e){return e&&e.__esModule?e:{default:e}}(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}t.default=e})(r(6681))},6673:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r(6681).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=a},9103:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681),i=(0,a.withParams)({type:"ipAddress"},(function(e){if(!(0,a.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t.default=i;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},7340:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,a.withParams)({type:"macAddress"},(function(t){if(!(0,a.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},5287:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(e){return(0,a.withParams)({type:"maxLength",max:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)<=e}))}},301:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(e){return(0,a.withParams)({type:"maxValue",max:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},3091:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(e){return(0,a.withParams)({type:"minLength",min:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)>=e}))}},2628:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(e){return(0,a.withParams)({type:"minValue",min:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},2500:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(e){return(0,a.withParams)({type:"not"},(function(t,r){return!(0,a.req)(t)||!e.call(this,t,r)}))}},5669:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r(6681).regex)("numeric",/^[0-9]*$/);t.default=a},5832:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,a)}),!1)}))}},2419:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681),i=(0,a.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,a.req)(e.trim()):(0,a.req)(e)}));t.default=i},2941:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(e){return(0,a.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,a.ref)(e,this,r)||(0,a.req)(t)}))}},8300:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(e){return(0,a.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,a.ref)(e,this,r)||(0,a.req)(t)}))}},918:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6681);t.default=function(e){return(0,a.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,a.ref)(e,this,r)}))}},3213:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,r(6681).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=a},8085:(e,t,r)=>{"use strict";var a=r(4155);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="web"===a.env.BUILD?r(16).R:r(8413).withParams;t.default=i},16:(e,t,r)=>{"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.R=void 0;var i="undefined"!=typeof window?window:void 0!==r.g?r.g:{},o=i.vuelidate?i.vuelidate.withParams:function(e,t){return"object"===a(e)&&void 0!==t?t:e((function(){}))};t.R=o}}]);