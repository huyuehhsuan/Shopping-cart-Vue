<template>
  <div class="card">
    <p>cart card</p>
    <p>{{ item.name }}</p>
    <p>{{ item.price }}</p>
    <p>{{ item.quantity }}</p>
    <p>{{ total_cost }}</p>
    <button @click="addToCart">Add</button>
    <button @click="removeFromCart">Remove</button>
  </div>
</template>

<script>
export default {
  name: "CartItemCard",
  props: ["item"],
  computed: {
    total_cost() {
      return this.item.price * this.item.quantity;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.item);
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
