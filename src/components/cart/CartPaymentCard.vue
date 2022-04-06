<template>
  <div>
    <div class="card" v-show="cart_total">
      <h1>總計:{{ cart_total }}</h1>
      <button @click="removeAll">移除全部</button>
      <button>結帳</button>
    </div>
    <div v-show="!cart_total" class="text-center">購物車內無商品</div>
  </div>
</template>

<script>
export default {
  name: "CartPaymentCard",
  computed: {
    cart_total() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    removeAll() {
      this.$store.commit("removeAll");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid rgb(226, 226, 226);
  background-color: #fff;
  padding: 0.5rem;
}
.card > * {
  margin: 0 1rem;
}
.text-center {
  text-align: center;
}
.card h1 {
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
}
</style>
