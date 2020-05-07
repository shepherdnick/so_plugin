<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Camera extends Vue {
  public created() {
    this.isAlarmFeature();
  }

  private message = "";

  public isAlarmFeature() {
    //const othervar = this.$myStore.getters["getFeatureList"];
    //const featureList = this.$store.getters["getFeatureList"];
    this.message = this.$myProperty;
    return false;
  }
}
</script>

<template>
  <div>
    <button type="button" @click="isAlarmFeature">CLICK</button>
    <h1 v-show="isAlarmFeature">Message: {{ message }}</h1>
  </div>
</template>