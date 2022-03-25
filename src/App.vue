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
@font-face {
  font-family: "AtariClassicChunky";
  src: url("assets/font/AtariClassicChunky-PxXP.woff") format("woff"),
    url("assets/font/AtariClassicChunky-PxXP.ttf") format("truetype"),
    url("assets/font/AtariClassicChunky-PxXP.eot") format("embedded-opentype");
}
@import "./style/main.css";

body {
  height: 200vh;
}
</style>
