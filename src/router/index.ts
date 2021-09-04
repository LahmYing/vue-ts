import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/login",
  //   component: () => import("@/views/login/index"),
  //   hidden: true
  // },
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("../views/home.vue"),
        name: "Home",
        meta: {
          name: "home",
        },
      },
    ],
  },
];

const router = new VueRouter({
  base: "/childHost/",
  routes,
});

export default router;
