<template>
  <div class="nav">
    <LoginSuccess v-if="this.$store.state.user.isLogin" class="nav-header" />
    <div class="nav-btn">
      <label for="nav-check" class="nav-button"> click </label>
    </div>
    <div class="nav-links">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/LogIn" class="nav-item">LogIn</router-link>
      <router-link to="/" class="nav-item" @click.native="logout">
        LogOut</router-link
      >
      <router-link to="/Cart" class="nav-item">Cart</router-link>
      <a href="#" class="nav-item">Contact</a>
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
      console.log(open);
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
        console.log(navLinks);
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