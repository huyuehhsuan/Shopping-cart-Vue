<template>
  <nav class="siderbar">
    <ul class="menus">
      <li class="menu-list menu-open">
        <router-link to="/" class="menu-header"
          >水果<span class="arrow">▼</span></router-link
        >
        <ul class="menu-list-item">
          <li v-for="item in fruitList" :key="item.id">
            <router-link
              :to="{ name: 'ProductDetial', query: { Id: item.id } }"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </li>
      <li class="menu-list menu-open">
        <router-link to="/" class="menu-header"
          >動物<span class="arrow">▼</span></router-link
        >
        <ul class="menu-list-item">
          <li v-for="item in animalList" :key="item.id">
            <router-link
              :to="{ name: 'ProductDetial', query: { Id: item.id } }"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
    <div class="bar-handler">X</div>
  </nav>
</template>

<script>
import itemList from "@/data/item.js";
export default {
  name: "Sidebar",
  data() {
    return {
      itemList: itemList,
    };
  },
  mounted() {
    const menuHeader = document.querySelectorAll(".menu-header");
    menuHeader.forEach((item) => {
      item.addEventListener("click", this.toggleSkills);
    });
    const barHandler = document.querySelector(".bar-handler");
    const siderbar = document.querySelector(".siderbar");
    barHandler.addEventListener("click", () => {
      if (siderbar.className === "siderbar") {
        siderbar.classList.add("siderbar-open");
      } else {
        siderbar.classList.remove("siderbar-open");
      }
    });
    const menuListItem = document.querySelectorAll(".menu-list-item");
    menuListItem.forEach((item) => {
      item.addEventListener("click", () => {
        siderbar.classList.remove("siderbar-open");
      });
    });
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
    toggleSkills(e) {
      let itemClass = e.target.parentNode.className;
      if (itemClass === "menu-list menu-open") {
        e.target.parentNode.className = "menu-list menu-close";
      }
      if (itemClass === "menu-list menu-close") {
        e.target.parentNode.className = "menu-list menu-open";
      }
    },
  },
};
</script>

<style>
@import "../../style/sidebar.css";
</style>