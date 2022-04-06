<template>
  <div class="card">
    <div>
      <div class="card-header">
        <div>商品</div>
        <div>價格</div>
        <div>數量</div>
        <div>總計</div>
        <div></div>
      </div>
      <div class="card-body">
        <div style="flex-direction: column">
          <!-- <img src="https://picsum.photos/200/200" alt="" /> -->
          <p>{{ item.name }}</p>
        </div>
        <div>
          <p>{{ item.price }}</p>
        </div>
        <div class="quantity">
          <button @click="removeFromCart">-</button>
          <p>{{ item.quantity }}</p>
          <button @click="addToCart">+</button>
        </div>
        <div>
          <p>{{ total_cost }}</p>
        </div>
        <div><button @click="removeOneItem">刪除</button></div>
      </div>
    </div>
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
    removeOneItem() {
      this.$store.commit("removeOneItem", this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  text-align: center;
  border: 1px solid rgb(226, 226, 226);
  background-color: #fff;
  min-width: 300px;
}

.card-header,
.card-body {
  display: flex;
  flex-wrap: wrap;
}
.card-header div {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(226, 226, 226);
  flex: 1;
  height: 50px;
  @media screen and (max-width: 576px) {
    height: unset;
  }
}

.card-body div {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(226, 226, 226);
  flex: 1;
  height: 100px;
  @media screen and (max-width: 576px) {
    height: unset;
    padding: 20px 0;
  }
}
.quantity {
  p {
    margin: 0 1rem;
    @media screen and (max-width: 576px) {
      margin: 0.2rem;
    }
  }
}
</style>
