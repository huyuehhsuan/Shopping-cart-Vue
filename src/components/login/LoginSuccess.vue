<template>
  <p>
    Hi, <strong>{{ user.account }}</strong> !
  </p>
</template>

<script>
export default {
  name: "LoginSuccess",
  // created() {
  //   if (!this.user.account) {
  //     this.$router.push("login");
  //   }
  // },
  computed: {
    user() {
      // 這裡將取得方式改變成從 local storage 中取得使用者資訊
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        return userData;
      }
      return "";
    },
  },
};
</script>
