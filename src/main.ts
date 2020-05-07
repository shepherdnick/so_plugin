import _Vue from "vue";
import Camera from "./components/Camera.vue";

export default {
  install(Vue: typeof _Vue, options: any) {
    //Vue.prototype.$myStore = options.store;

    Vue.prototype.$myProperty = "Third time's a charm";

    Vue.component("camera-control", Camera);
  }
};
