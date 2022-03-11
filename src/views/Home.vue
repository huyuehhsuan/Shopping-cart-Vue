<template>
  <div class="wrapper home">
    <h1>Home</h1>
    <div class="products">
      <ProductCard
        v-for="(item, index) in itemList"
        :key="index"
        :item="item"
        @product-item="getItemData"
      />
    </div>
    <div class="background" :class="{ show: active }">
      <ProductDetial
        :itemData="itemData"
        class="productDetial"
        :class="{ show: active }"
        @close="closeView"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/product/ProductCard.vue";
import ProductDetial from "@/components/product/ProductDetial.vue";

import itemList from "@/data/item.js";
export default {
  name: "Home",
  components: { ProductCard, ProductDetial },
  data() {
    return {
      itemList: itemList,
      itemData: {},
      active: false,
    };
  },

  methods: {
    getItemData(data) {
      this.itemData = data.item;
      this.active = data.active;
    },
    closeView() {
      this.active = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  visibility: hidden;
  transition: 0.3s;
  &.show {
    visibility: visible;
  }
}

.productDetial {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: start;
  width: 500px;
  border: 1px solid #999;
  padding: 1.25rem;
  background-color: #fff;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  &.show {
    top: 6rem;
    opacity: 1;
    visibility: visible;
  }
}

.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
</style>
