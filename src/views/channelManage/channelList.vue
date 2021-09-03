<template>
  <div class="channel-manage">channel-manage</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

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
}

// required
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
  filter: any;

  created() {
    console.log("created");
  }

  someMethod() {
    // someMethod
  }
}
</script>
