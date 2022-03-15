<template>
  <div class="container">
    <router-link to="/" class="back">&lt; Back</router-link>
    <LoginInput />
  </div>
</template>
<script>
import LoginInput from "@/components/login/LoginInput.vue";
export default {
  name: "LogIn",
  components: { LoginInput },
};
</script>
<style lang="scss" >
</style>
