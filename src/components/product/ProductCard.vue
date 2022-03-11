<template>
  <div class="card">
    <h2>{{ item.name }}</h2>
    <p>{{ item.price }}</p>
    <button @click="itemData">view more</button>
  </div>
</template>

<script>
<<<<<<< HEAD
  export default {
    name: "ProductCard",
    props: ["item"],
    data() {
      return {
        itemObj: {
          item: this.item,
          active: true,
        },
      };
    },
    methods: {
      itemData() {
        this.$emit("product-item", this.itemObj);
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
=======
export default {
  name: "ProductCard",
  props: ["item"],
  data() {
    return {
      itemObj: {
        item: this.item,
        active: true,
      },
    };
  },
  methods: {
    itemData() {
      this.$emit("product-item", this.itemObj);
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
>>>>>>> 584988bc31ad041eb022b4cf7bc2409b27e42344
</style>