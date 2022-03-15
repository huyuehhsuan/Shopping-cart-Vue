<template>
  <nav class="siderbar">
    <ul class="menus">
      <li>
        <router-link to="/" @click.native="click(1)"
          >水果<span v-if="!show1">▼</span
          ><span v-if="show1">▲</span></router-link
        >
        <ul class="menu-list" v-if="show1">
          <li v-for="item in fruitList" :key="item.id">
            <router-link to="/ProductDetial?Id=1">{{ item.name }}</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a @click="click(2)"
          >動物<span v-if="!show2">▼</span><span v-if="show2">▲</span></a
        >
        <ul class="menu-list" v-if="show2">
          <li v-for="item in animalList" :key="item.id">
            <router-link to="/ProductDetial?Id=1">{{ item.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import itemList from "@/data/item.js";
export default {
  name: "Sidebar",
  data() {
    return {
      itemList: itemList,
      show1: false,
      show2: false,
    };
  },
  computed: {
    fruitList() {
      return this.itemList.filter((item) => item.class === "fruit");
    },
    animalList() {
      return this.itemList.filter((item) => item.class === "animal");
    },
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