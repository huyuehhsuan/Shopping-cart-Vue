<template>
  <div>
    <h1>登入</h1>
    <div class="form box-border">
      <input
        type="text"
        id="account"
        placeholder="Account"
        v-model="user.account"
      />

      <input
        type="password"
        id="password"
        placeholder="Password"
        v-model="user.password"
      />

      <button class="color-button" @click="login">登入</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.commit({
        type: "setUserData",
        userData: this.user,
      });
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss"  scoped>
.form {
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

input {
  height: 2.5rem;
  border: 0;
  border-bottom: 1px solid var(--first-color-lighter);
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  color: #797a9e;
  letter-spacing: 0.11em;

  &::placeholder {
    color: #c3c3d8;
    font-weight: var(--font-medium);
  }

  &:focus {
    outline: 0;
    border-bottom: 1px solid var(--first-color);
    transition: 0.6s all ease;
  }
}
.color-button {
  width: 80%;
  height: 30px;
  margin-top: 2rem;
}
</style>