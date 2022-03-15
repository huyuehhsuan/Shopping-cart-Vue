<template>
  <nav class="siderbar">
    <ul class="menus">
      <li>
        <a @click="click(1)"
          >apple<span v-if="!show1">▼</span><span v-if="show1">▲</span></a
        >
        <ul class="menu-list" v-if="show1">
          <li><a href="#">apple111</a></li>
          <li><a href="#">apple111</a></li>
          <li><a href="#">apple111</a></li>
        </ul>
      </li>
      <li>
        <a @click="click(2)"
          >banana<span v-if="!show2">▼</span><span v-if="show2">▲</span></a
        >
        <ul class="menu-list" v-if="show2">
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
      show1: false,
      show2: false,
    };
  },
  methods: {
    click(num) {
      if (num === 1) {
        this.show1 = !this.show1;
      }
      if (num === 2) {
        this.show2 = !this.show2;
      }
    },
  },
};
</script>

<style>
@import "../../style/sidebar.css";
</style>