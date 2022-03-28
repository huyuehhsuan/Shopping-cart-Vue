<template>
  <div>
    <div class="container">
      <h1>2022328Products</h1>
      <div class="grid">
        <ProductCard
          v-for="(item, index) in itemList"
          :key="index"
          :item="item"
          @product-item="getItemData"
        />
      </div>
    </div>
    <Scroll />
    <div class="container"><Boxes /></div>
    <div class="container"><Hoverbox /></div>
  </div>
</template>

<script>
import ProductCard from "@/components/product/ProductCard.vue";
import itemList from "@/data/item.js";
import Scroll from "@/components/utility/Scroll.vue";
import Boxes from "@/components/utility/Boxes.vue";
import Hoverbox from "@/components/utility/Hoverbox.vue";
export default {
  name: "Dashboard",
  components: { ProductCard, Boxes, Hoverbox, Scroll },
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