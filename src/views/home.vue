<template>
  <div class="home-manage">
    home-manage
    <div id="next-tick-html">{{ "showDelModal: " }}{{ showDelModal }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class";

interface ActiveRow {
  home?: null | string;
  home_name?: null | string;
  home_type?: null | string;
  settlement_type?: string;
  createTime?: null | number;
  strategy?: null | string;
  status?: null | string;
  telephone?: null | string;
  address?: null | string;
  cooperation_time?: null | number;
  click?: () => boolean; // function
}

// required even empty
@Component({})
export default class Home extends Vue {
  activeRow: ActiveRow = {
    home: null,
    home_name: null,
    home_type: null,
    settlement_type: "",
    createTime: null,
    strategy: null,
    status: null,
  };
  showDelModal = false;
  filter: string[] | number[];

  @Prop({ default: () => [] })
  checked_list: string[];

  @Prop({ default: false })
  hide_check_all: boolean;

  @Prop({
    default: () => [],
    validator: (actions) => actions.every((item) => item.name),
  })
  actions: any[];

  @Prop({ default: "" })
  title: string;

  @State((state) => state.home.store_id)
  state_store_id: string;

  // By default, actions and mutations inside a module are still registered under the global namespace
  // this allows multiple modules to react to the same action/mutation type
  // so we can use action/mutation directly as follow
  @Action("setConfig")
  actionSetConfig; // use action method: setConfig

  @Getter("getter_tel")
  getter_tel: string;

  // life hook
  created() {
    this.showDelModal = true;
    console.log("no-next-tick-value", this.showDelModal);
    console.log("no-next-tick-dom", document.getElementById("next-tick-html"));
    this.$nextTick(() => {
      console.log("next-tick-value", this.showDelModal);
      console.log("next-tick-dom", document.getElementById("next-tick-html"));
    });

    console.log("created");
    console.log("state_store_id", this.state_store_id);
    console.log("getter_tel", this.getter_tel);
    this.actionSetConfig(this.state_store_id);
  }

  @Watch("home_name", { immediate: true, deep: true })
  onHomeNameChanged(val, oldVal) {
    //
  }
  @Watch("$route")
  onRouteChanged() {
    //
  }

  // method
  someMethod() {
    // someMethod
  }

  // computed
  get computedProperty() {
    return 0;
  }
}
</script>
