<template>
  <div class="card">
    <div>
      <div class="card-header">
        <div>proudct</div>
        <div>price</div>
        <div>quantity</div>
        <div>total</div>
      </div>
      <div class="card-body">
        <div>
          <img src="https://picsum.photos/200/200" alt="" />
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
        <div><button @click="removeOneItem">delete</button></div>
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
  border: 1px solid #999;
  background-color: #fff;
}
.card-header {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  border-bottom: 1px solid #999;
  padding: 0.5rem;
}
.card-header div {
  margin: 0 1rem;
}
.card-body {
  text-align: center;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  padding: 0.5rem;
}
.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 0 1rem;
  }
}
</style>
