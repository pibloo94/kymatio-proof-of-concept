/* eslint-disable vue/multi-word-component-names */
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueApexCharts from "vue-apexcharts";

import moment from 'moment'

Vue.prototype.moment = moment
Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(require("vue-moment"));
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
