<template>
  <div class="layout">
    <Layout>
      <Header
        :style="{
          position: 'fixed',
          width: '100%',
          zIndex: '1000',
          left: '0',
          top: '0',
          'box-shadow': '3px 0px 6px 0px rgb(0 0 0 / 8%)',
        }"
        >Header
      </Header>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CustomLayout extends Vue {}
</script>
