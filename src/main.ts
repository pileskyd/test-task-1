import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/tailwind.css";

Vue.config.productionTip = false;
import "@/assets/global.css";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
