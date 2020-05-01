<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Camera extends Vue {
  public created() {
    this.isAlarmFeature();
  }

  public isAlarmFeature() {
    const featureList = this.$myStore.getters.getFeatureList;
    return false;
  }
}
</script>

<template>
  <div>
    <h1 v-show="isAlarmFeature">I AM A CAMERA COMPONENT FROM THE PLUGIN</h1>
  </div>
</template>