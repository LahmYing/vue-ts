import Vue from "vue";

declare module "vue/types/vue" {
  // vue instance property
  interface Vue {
    $Model: any;
    $chart: any;
  }
}
