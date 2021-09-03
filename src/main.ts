import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import "./assets/scss/index.scss";
import Bus from "./bus"; /// mitt 总线程引入
import "./modules";

Vue.use(ViewUI);

Vue.config.productionTip = false;
Vue.prototype.bus = Bus;

// if (process.env.NODE_ENV === "production" && window) {
//   window.console.log = function () {};
// }

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
