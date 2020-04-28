import Vue from "vue";
import "vue-loaders/dist/vue-loaders.css";
import VueLoaders from "vue-loaders";
import App from "./App.vue";

Vue.use(VueLoaders);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
