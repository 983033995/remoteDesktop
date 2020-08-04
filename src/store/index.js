import Vue from "vue";
import Vuex from "vuex";
import modules from "./module";
import plugins from "./plugin/plugin";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 111
  },
  mutations: {},
  actions: {},
  modules,
  plugins
});
