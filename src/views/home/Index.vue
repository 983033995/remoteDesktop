<template>
  <div class="home_area">
    <nav-bar></nav-bar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import navBar from "./Nav";
export default {
  name: "index",
  components: { navBar }
};
</script>

<style lang="less" scoped>
.home_area {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  .view {
    width: 100%;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>