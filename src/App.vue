<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>||
      <router-link to="/Cart">Cart</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  text-decoration: none;
}
.wrapper {
  text-align: center;
  max-width: 800px;
  margin: auto;
  // position: relative;
}
h1,
h2 {
  text-align: center;
}
button {
  display: block;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: inline-block;
  border: 1px solid #999;
  text-align: center;
  margin: 0.5rem 0;
  &:hover {
    cursor: pointer;
  }
}
</style>
