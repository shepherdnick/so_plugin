import _Vue from "vue";
import Camera from "./components/Camera.vue";

export default {
  install(Vue: typeof _Vue, options: any) {
    Vue.prototype.$myStore = function () { return options.store };

    Vue.prototype.$nick = "MY NAME IS NICK";

    Vue.component("camera-control", Camera);
  }
};
