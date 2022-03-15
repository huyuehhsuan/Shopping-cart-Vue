<template>
  <div class="nav">
    <LoginSuccess v-if="this.$store.state.user.isLogin" />
    <router-link to="/" class="nav-item">Home</router-link>
    <router-link to="/LogIn" class="nav-item">LogIn</router-link>
    <router-link to="/" class="nav-item" @click.native="logout">
      LogOut</router-link
    >
    <router-link to="/Cart" class="nav-item">Cart</router-link>
    <a href="#" class="nav-item">Contact</a>
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