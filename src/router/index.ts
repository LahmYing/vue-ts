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
    redirect: "/channel/list",
    children: [
      {
        path: "channel/list",
        component: () => import("@/views/channelManage/channelList.vue"),
        name: "ChannelList",
        meta: {
          name: "channel",
        },
      },
    ],
  },
];

const router = new VueRouter({
  base: "/adPlatform/",
  routes,
});

export default router;
