<template>
  <div id="nav">
    <router-link to="/home">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "nav",
  mounted() {
    console.log("______", this.$router);
  }
};
</script>