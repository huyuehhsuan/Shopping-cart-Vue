<template>
  <div>
    <h2>Login Success</h2>
    <p>
      Hi, <strong>{{ user.account }}</strong> !
    </p>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  created() {
    if (!this.user.account) {
      this.$router.push("login");
    }
  },
=======
  name: "LoginSuccess",
  // created() {
  //   if (!this.user.account) {
  //     this.$router.push("login");
  //   }
  // },
>>>>>>> 584988bc31ad041eb022b4cf7bc2409b27e42344
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
<<<<<<< HEAD
</script>
=======
</script>
>>>>>>> 584988bc31ad041eb022b4cf7bc2409b27e42344
