
const backend_routes = [
  {
    path: "/home",
    name: "home",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/pages/backend/Home.vue")
  },
   {
       path: "/dashboard",
       name: "dashboard",
       meta: {
           layout: "admin"
       },
       component: () => import("../views/pages/admin/Dashboard.vue")
   },
    {
        path: "/companies",
        name: "companies",
        meta: {
            layout: "admin"
        },
        component: () => import("../views/pages/admin/Company.vue")
    },
    {
        path: "/employees",
        name: "employees",
        meta: {
            layout: "admin"
        },
        component: () => import("../views/pages/admin/Employee.vue")
    },
  // {
  //   path: "/all-properties",
  //   name: "all-properties",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: () =>import( "../views/backend/properties/AllProperties.vue")
  // },
  // {
  //   path: "/add-property",
  //   name: "add-property",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: () =>import("../views/backend/properties/NewProperty.vue")
  // },
  // {
  //   path: "/all-contractors",
  //   name: "all-contractors",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: () =>import("../views/backend/contrators/Contrator.vue")
  // },
  // {
  //   path: "/all-buyers",
  //   name: "all-buyers",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: () =>import("../views/backend/buyer/Buyer.vue")
  // },

  // {
  //   path: "/profile",
  //   name: "profile",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: Profile
  // },
  // {
  //   path: "/staff",
  //   name: "staff",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: Staff
  // }
];

export default backend_routes;
