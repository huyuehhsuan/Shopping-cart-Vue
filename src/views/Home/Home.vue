<template>
  <div class="home">
    <Navbar />
    <Carousel />
    <router-view></router-view>
    <Sidebar />
    <Footer />
  </div>
</template>

<script>
import Carousel from "@/components/utility/Carousel.vue";
import Navbar from "@/components/utility/Navbar.vue";
import Sidebar from "@/components/utility/Sidebar.vue";
import Footer from "@/components/utility/Footer.vue";
export default {
  name: "Home",
  components: { Navbar, Sidebar, Footer, Carousel },
};
</script>
<style >
.home {
  position: relative;
}
</style>
