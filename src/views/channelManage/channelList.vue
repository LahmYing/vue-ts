<template>
  <div class="channel-manage">
    channel-manage
    <div id="next-tick-html">{{ "showDelModal: " }}{{ showDelModal }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class";

interface ActiveRow {
  channel?: null | string;
  channel_name?: null | string;
  channel_type?: null | string;
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
export default class ChannelList extends Vue {
  activeRow: ActiveRow = {
    channel: null,
    channel_name: null,
    channel_type: null,
    settlement_type: "",
    createTime: null,
    strategy: null,
    status: null,
  };
  showDelModal = false;
  filter: string[] | number[];

  @State((state) => state.home.store_id) state_store_id;
  // By default, actions and mutations inside a module are still registered under the global namespace
  // this allows multiple modules to react to the same action/mutation type
  // so we can use action/mutation directly as follow
  @Action("setConfig") actionSetConfig; // use action method: setConfig
  @Getter("getter_tel") getter_tel;

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

  @Watch("channel_name", { immediate: true, deep: true })
  onChannelNameChanged(val, oldVal) {
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
