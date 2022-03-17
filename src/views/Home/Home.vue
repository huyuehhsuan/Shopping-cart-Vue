<template>
  <div class="home">
    <Navbar />
    <Carousel />
    <router-view></router-view>
    <Sidebar />
  </div>
</template>

<script>
import Carousel from "@/components/utility/Carousel.vue";
import Navbar from "@/components/utility/Navbar.vue";
import Sidebar from "@/components/utility/Sidebar.vue";

export default {
  name: "Home",
  components: { Navbar, Sidebar, Carousel },
};
</script>
<style >
.home {
  position: relative;
}
</style>
