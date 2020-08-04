// import persistedstate from "vuex-persistedstate";
let pluginArr = [];
// const creatPersistedstate = persistedstate({
//   storage: window.sessionStorage,
//   reducer(val) {
//     console.log("val", val);
//     return { ROUTER_PLUGINS: val.router.changeClass };
//   }
// });
// const stateSession = persistedstate({
//   storage: window.sessionStorage,
//   key: "CHANGE_CLASS",
//   paths: ["router.changeClass"]
// });
// const test = (store) => {
//   let sessionState = window.sessionStorage.getItem("state");
//   if (sessionState) {
//     store.replaceState(JSON.parse(sessionState));
//   } else {
//     window.sessionStorage.setItem("state", JSON.stringify(store.state));
//   }
//   store.subscribe((mutation, state) => {
//     window.sessionStorage.setItem("state", JSON.stringify(state));
//   });
// };
// console.log(creatPersistedstate, test, stateSession);
// pluginArr.push(creatPersistedstate);
// pluginArr.push(test);
// pluginArr.push(stateSession);
export default pluginArr;
