<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
};
</script>
<style>
@import "./style/main.css";

body {
  height: 200vh;
}
</style>
