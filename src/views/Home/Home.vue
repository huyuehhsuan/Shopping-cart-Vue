<template>
  <div class="home">
    <div class="nav-flex"><Navbar /> <LoginSuccess v-if="logInSuccess" /></div>

    <Carousel />
    <router-view></router-view>
    <Sidebar />
  </div>
</template>

<script>
import Carousel from "@/components/utility/Carousel.vue";
import Navbar from "@/components/utility/Navbar.vue";
import Sidebar from "@/components/utility/Sidebar.vue";
import LoginSuccess from "@/components/login/LoginSuccess.vue";
export default {
  name: "Home",
  components: { Carousel, Navbar, Sidebar, LoginSuccess },
  data() {
    return {
      logInSuccess: false,
    };
  },
};
</script>
<style >
.home {
  position: relative;
}
.nav-flex {
  display: flex;
}
</style>
