<template>
  <nav class="siderbar">
    <ul class="menus">
      <li>
        <a @click="click">apple<span>▼</span></a>
        <ul class="menu-list" v-if="show">
          <li><a href="#">apple111</a></li>
          <li><a href="#">apple111</a></li>
          <li><a href="#">apple111</a></li>
        </ul>
      </li>
      <li>
        <a href="#">banana<span>▼</span></a>
        <ul class="menu-list">
          <li><a href="#">apple111</a></li>
          <li><a href="#">apple111</a></li>
          <li><a href="#">apple111</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    click() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
@import "../../style/sidebar.css";
</style>