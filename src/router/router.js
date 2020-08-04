import Index from "../views/home/Index";
export default [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/",
    component: Index,
    children: [
      {
        path: "/about",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/home/About.vue")
      },
      {
        path: "/home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/home/Home.vue")
      }
    ]
  },
  {
    path: "/canvasTest",
    name: "CanvasTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/canvas/Test.vue")
  },
  {
    path: "/admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/admin/Index.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () =>
          import(
            /* webpackChunkName: "canvasTest" */ "../views/canvas/Test.vue"
          )
      },
      {
        path: "test",
        component: () =>
          import(/* webpackChunkName: "adminTest" */ "../views/admin/Test.vue")
      }
    ]
    // beforeRouteEnter(to, from, next) {
    //   // ...
    // }
  },
  {
    path: "/adminLogin",
    name: "adminLogin",
    component: () =>
      import(/* webpackChunkName: "adminLogin" */ "../views/admin/Login.vue")
  }
];
