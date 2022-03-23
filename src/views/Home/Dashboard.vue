<template>
  <div>
    <div class="container">
      <h1>Products</h1>
      <div class="grid">
        <ProductCard
          v-for="(item, index) in itemList"
          :key="index"
          :item="item"
          @product-item="getItemData"
        />
      </div>
      <div class="grid">
        <PokeCard
          v-for="(item, index) in pokeList"
          :key="index"
          :pokeitem="item"
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
import PokeCard from "@/components/product/PokeCard.vue";
import itemList from "@/data/item.js";
import Pokemon from "@/data/Pokemon.js";
import Scroll from "@/components/utility/Scroll.vue";
import Boxes from "@/components/utility/Boxes.vue";
import Hoverbox from "@/components/utility/Hoverbox.vue";
export default {
  name: "Dashboard",
  components: { ProductCard, Boxes, Hoverbox, Scroll, PokeCard },
  data() {
    return {
      itemList: itemList,
      itemData: {},
      listLength: 30,
      pokeList: [],
    };
  },
  mounted() {
    this.fetchPokemons();
  },
  methods: {
    getItemData(data) {
      this.itemData = data.item;
    },
    async fetchPokemons() {
      for (let i = 1; i <= this.listLength; i++) {
        await this.getPokeList(i);
      }
    },

    async getPokeList(id) {
      const pokemon = new Pokemon();
      const res = await pokemon.getPokemon(id);
      this.pokeList.push(res);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>