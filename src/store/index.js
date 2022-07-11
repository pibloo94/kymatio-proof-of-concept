import Vue from "vue";
import Vuex from "vuex";

import dashboard from "./dashboard.module";
import chatbot from "./chatbot.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chatbot,
    dashboard,
  },
});
