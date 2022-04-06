<template>
  <div class="nav">
    <LoginSuccess v-if="this.$store.state.user.isLogin" class="nav-header" />
    <div class="nav-btn">
      <label for="nav-check" class="nav-button"> click </label>
    </div>
    <div class="nav-links">
      <router-link to="/" class="nav-item">首頁</router-link>
      <router-link to="/LogIn" class="nav-item">登入</router-link>
      <router-link to="/" class="nav-item" @click.native="logout">
        登出</router-link
      >
      <router-link to="/Cart" class="nav-item">購物車</router-link>
      <a href="/About" class="nav-item">關於我們</a>
    </div>
  </div>
</template>

<script>
import LoginSuccess from "@/components/login/LoginSuccess.vue";
export default {
  name: "Navbar",
  components: { LoginSuccess },
  data() {
    return {
      scrollNum: 0,
    };
  },
  mounted() {
    const nav = document.querySelector(".nav");
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = top;
      if (top >= 100) {
        nav.classList.add("fix");
      } else {
        nav.classList.remove("fix");
      }
    });
    const navButton = document.querySelector(".nav-button");
    const navLinks = document.querySelector(".nav-links");
    navButton.addEventListener("click", () => {
      let open = document.querySelector(".nav-links.open");
      if (open) {
        open.className = "nav-links close";
      }
      if (open == null) {
        navLinks.classList.add("open");
      }
    });
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navLinks.classList.add("close");
      });
    });
  },
  methods: {
    logout() {
      this.$store.commit({
        type: "removeUserData",
        userData: {
          account: "",
          password: "",
        },
      });
      this.$router.push("/");
      this.$store.commit("removeAll");
    },
  },
};
</script>

<style>
@import "../../style/nav.css";
</style>