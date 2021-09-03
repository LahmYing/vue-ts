import Vue from "vue";
import Model from "./model";

let plugin: any = (Vue) => {
  if (plugin.installed) {
    return;
  }
  plugin.installed = true;

  Object.defineProperties(Vue.prototype, {
    $Model: {
      get() {
        return Model;
      },
    },
  });
};

Vue.use(plugin);
