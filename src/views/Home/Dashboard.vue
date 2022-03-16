<template>
  <div>
    <div class="container products">
      <ProductCard
        v-for="(item, index) in itemList"
        :key="index"
        :item="item"
        @product-item="getItemData"
      />
    </div>
    <Scroll />
    <Boxes />
  </div>
</template>

<script>
import ProductCard from "@/components/product/ProductCard.vue";
import itemList from "@/data/item.js";
import Scroll from "@/components/utility/Scroll.vue";
import Boxes from "@/components/utility/Boxes.vue";
export default {
  name: "Dashboard",
  components: { ProductCard, Scroll, Boxes },
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