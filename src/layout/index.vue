<template>
  <div class="layout">
    layout
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CustomLayout extends Vue {}
</script>
