
const backend_routes = [
  {
    path: "/home",
    name: "home",
    meta: {
      layout: "backend",
      requireAuth: true,
      is_admin: false
    },
    component:() => import("../views/pages/backend/Home.vue")
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      layout: "backend",
       requireAuth: true,
      is_admin: false
    },
    component:() => import("../views/pages/backend/Profile.vue")
  },
   {
       path: "/dashboard",
       name: "dashboard",
       meta: {
           layout: "admin",
            requireAuth: true,
           is_admin:true
       },
       component: () => import("../views/pages/admin/Dashboard.vue")
   },
    {
        path: "/companies",
        name: "companies",
        meta: {
            layout: "admin",
             requireAuth: true,
             is_admin: true
        },
        component: () => import("../views/pages/admin/Company.vue")
    },
    {
        path: "/employees",
        name: "employees",
        meta: {
            layout: "admin",
             requireAuth: true,
             is_admin: true
        },
        component: () => import("../views/pages/admin/Employee.vue")
    },
  
];

export default backend_routes;
