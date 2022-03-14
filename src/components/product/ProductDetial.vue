<template>
  <div>
    <h2>name:{{ itemData.name }}</h2>
    <p>price"{{ itemData.price }}</p>
    <p>description"{{ itemData.description }}</p>
    <div v-if="product_total">
      <p>In Cart</p>
      <p>{{ product_total }}</p>
    </div>
    <button @click="addToCart">Add</button>
    <button @click="removeFromCart">Remove</button>
    <button @click="closeBtn">close</button>
  </div>
</template>

<script>
export default {
  name: "ProductDetial",
  props: ["itemData"],
  data() {
    return {
      close: true,
    };
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.itemData);
    },
  },
  methods: {
    closeBtn() {
      this.$emit("close", this.close);
    },
    addToCart() {
      if (this.$store.state.user.isLogin) {
        this.$store.commit("addToCart", this.itemData);
      } else {
        alert("please login");
        setTimeout(() => {
          this.$router.push({ path: "/LogIn" });
        }, 1000);
      }
    },
    removeFromCart() {
      if (this.$store.state.user.isLogin) {
        this.$store.commit("removeFromCart", this.itemData);
      } else {
        alert("please login");
        setTimeout(() => {
          this.$router.push({ path: "/LogIn" });
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>