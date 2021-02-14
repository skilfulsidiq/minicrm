import Vue from 'vue'



//layouts
import Frontend from '../views/layouts/Frontend.vue'
import Backend from '../views/layouts/Backend.vue'

import MyLoader from '../components/general/MyLoader.vue'
import Success from '../components/general/Success.vue'
import NavList from '../components/general/NavList.vue'
import JwPagination from 'jw-vue-pagination'
import VueSwal from 'vue-swal'




Vue.component('frontend-layout', Frontend);
Vue.component('backend-layout', Backend);

// Vue.component('bottomnav', BottomNav);
// Vue.component('seperator', Seperator);
// Vue.component('page-title', PageTitle);
// Vue.component('paginated',Pagination);

Vue.component('my-loader', MyLoader);
Vue.component('success-card', Success);
Vue.component('nav-list', NavList);

//Lazy Load components

const EmployeeTable = () => import( /* webpackChunkName: "component" */ './others/EmployeeTable')
const ProfileComponent = () => import( /* webpackChunkName: "component" */ './others/ProfileComponent')
const CompanyList = () => import( /* webpackChunkName: "component" */ './others/CompanyList')
const CompanyCard = () => import( /* webpackChunkName: "component" */ './others/CompanyCard')

Vue.component('employee-table', EmployeeTable);
Vue.component('profile-component', ProfileComponent);
Vue.component('company-list', CompanyList)
Vue.component('company-card', CompanyCard);

// External Components
Vue.use(VueSwal)
Vue.component('jw-pagination', JwPagination);

