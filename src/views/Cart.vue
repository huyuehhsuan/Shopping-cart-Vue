<template>
  <div class="container grid">
    <router-link to="/" class="back">&lt; Back</router-link>
    <h1>Cart</h1>
    <CartItemCard v-for="item in items" :key="item.id" :item="item" />
    <CartPaymentCard />
  </div>
</template>
<script>
import CartItemCard from "@/components/cart/CartItemCard.vue";
import CartPaymentCard from "@/components/cart/CartPaymentCard.vue";
export default {
  name: "Cart",
  components: { CartItemCard, CartPaymentCard },
  data() {
    return {
      isCart: false,
    };
  },
  mounted() {
    if (this.$store.state.cart.length > 0) {
      this.isCart = true;
    }
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>
<style lang="scss" >
.cart {
  display: flex;
}
</style>
