<template>
  <div class="container">
    <div class="products">
      <ProductCard
        v-for="(item, index) in itemList"
        :key="index"
        :item="item"
        @product-item="getItemData"
      />
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
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
</style>