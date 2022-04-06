<template>
  <div>
    <div class="container">
      <router-link to="/" class="back">&lt; 回上一頁</router-link>
      <h1>ABOUT US</h1>

      <div class="container"><Boxes /></div>
      <TextCarousal />
    </div>

    <Scroll />
  </div>
</template>

<script>
import Scroll from "@/components/utility/Scroll.vue";
import Boxes from "@/components/utility/Boxes.vue";
import TextCarousal from "@/components/utility/TextCarousal.vue";
//import Hoverbox from "@/components/utility/Hoverbox.vue";
export default {
  name: "About",
  components: { Scroll, Boxes, TextCarousal },
};
</script>

<style>
</style>