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
          <button @click="reduce">-</button><span class="num">{{ num }}</span>
          <button @click="add">+</button>
        </div>
        <div>
          <button @click="addItemsToCart" class="color-button">
            Add to Cart
          </button>
        </div>
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
    if (this.$route.query.Id) {
      this.itemData = this.itemList[this.$route.query.Id - 1];
    } else {
      this.itemData = this.itemList[0];
    }
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
    },
    reduce() {
      if (this.num > 0) {
        this.num--;
        this.itemData.quantity = this.num;
      }
      return;
    },
    addItemsToCart() {
      if (this.$store.state.user.isLogin) {
        if (this.num > 0) {
          this.$store.commit("addItemsToCart", this.itemData);
        }
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
.num {
  display: inline-block;
  margin: 0 0.5rem;
}
</style>