import routers from "../../router/router";
export default {
  namespaced: true,
  state: {
    changeClass: "next",
    pageConfigInfo: {},
    routers
  },
  mutations: {
    changeClass(state, newVal) {
      state.changeClass = newVal;
    }
  }
};
