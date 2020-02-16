import Vue from "vue";
import VueApp from "../packages/vue-app";
import App from "./app/App";
Vue.config.productionTip = false;
VueApp.install(Vue);
new Vue({
	render: h => h(App)
}).$mount("#app");
