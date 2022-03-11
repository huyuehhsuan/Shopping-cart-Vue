<template>
  <div class="card">
    total:{{ cart_total }}
    <button @click="removeAll">Remove All</button>
    <button>pay</button>
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
  border: 1px solid #999;
  border-radius: 0.5rem;
  background-color: #fff;
  padding: 0.5rem;
}
</style>