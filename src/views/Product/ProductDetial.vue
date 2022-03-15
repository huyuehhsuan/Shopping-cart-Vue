<template>
  <div class="container">
    <router-link to="/" class="back">&lt; Back</router-link>
    <div class="product">
      <div class="product-img">
        <img src="https://picsum.photos/500/400" alt="" />
      </div>
      <div class="product-data">
        <h1>{{ itemData.name }}</h1>

        <p>{{ itemData.description }}</p>
        <p>price:{{ itemData.price }}</p>
        <div>
          <button @click="reduce">-</button>{{ num }}
          <button @click="add">+</button>
        </div>

        <!-- <div><button @click="addAll">Add to Cart</button></div> -->
        <div>
          <button @click="addToCart" class="color-button">Add to Cart</button>
        </div>

        <!-- <button @click="removeFromCart">Remove</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import itemList from "@/data/item.js";
export default {
  name: "ProductDetial",

  data() {
    return {
      itemList: itemList,
      itemData: {},
      num: 0,
    };
  },
  mounted() {
    this.itemData = this.itemList[this.$route.query.Id - 1];
    console.log(this.itemData);
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.itemData);
    },
  },
  methods: {
    add() {
      this.num++;
      this.itemData.quantity = this.num;
      console.log(this.itemData);
    },
    reduce() {
      if (this.num > 0) {
        this.num--;
        this.itemData.quantity = this.num;
        console.log(this.itemData);
      }
      return;
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
.product {
  display: flex;
  padding: 2rem;
}
.product-data {
  padding: 2rem;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
}
.color-button {
  border-radius: 0.5rem;
}
</style>