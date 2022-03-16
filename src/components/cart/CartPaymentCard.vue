<template>
  <div>
    <div class="card" v-show="cart_total">
      <h1>TOLAL:{{ cart_total }}</h1>
      <button @click="removeAll">Remove All</button>
      <button>pay</button>
    </div>
    <div v-show="!cart_total">no product</div>
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
  border: 1px solid #999;
  background-color: #fff;
  padding: 0.5rem;
}
.card > * {
  margin: 0 1rem;
}
</style>
