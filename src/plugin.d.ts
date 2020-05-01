import _Vue from "vue";
import { Store } from 'vuex';

declare module 'vue/types/vue' {
    interface Vue {
        $myStore: Store<any>;
        $nick: string;
    }
}