<template>
  <div>
    <div class="container">
      <h1>商品總覽</h1>
      <div class="grid">
        <ProductCard
          v-for="(item, index) in itemList"
          :key="index"
          :item="item"
          @product-item="getItemData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/product/ProductCard.vue";
import itemList from "@/data/item.js";
export default {
  name: "Dashboard",
  components: { ProductCard },
  data() {
    return {
      itemList: itemList,
      itemData: {},
    };
  },

  methods: {
    getItemData(data) {
      this.itemData = data.item;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>