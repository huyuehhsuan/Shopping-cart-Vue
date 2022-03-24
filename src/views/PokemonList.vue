<template>
  <div class="container">
    <div class="input">
      <select v-model="type">
        <option value="all">all</option>
        <option value="fire">fire</option>
        <option value="grass">grass</option>
        <option value="electric">electric</option>
        <option value="water">water</option>
        <option value="ground">ground</option>
        <option value="rock">rock</option>
        <option value="fairy">fairy</option>
        <option value="poison">poison</option>
        <option value="bug">bug</option>
        <option value="dragon">dragon</option>
        <option value="psychic">psychic</option>
        <option value="flying">flying</option>
        <option value="fighting">fighting</option>
        <option value="normal">normal</option>
      </select>
      <input type="text" v-model.trim="title" v-on:keyup.enter="inputHandle" />
    </div>
    <div class="grid">
      <PokeCard
        v-for="(item, index) in titleMenu"
        :key="index"
        :pokeitem="item"
      />
    </div>
  </div>
</template>
<script>
import PokeCard from "@/components/pokemon/PokeCard.vue";
import Pokemon from "@/data/Pokemon.js";
export default {
  name: "PokemonList",
  components: { PokeCard },
  data() {
    return {
      listLength: 50,
      pokeList: [],
      showList: [],
      type: "all",
      title: "",
    };
  },
  mounted() {
    this.fetchPokemons();
  },
  methods: {
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
  computed: {
    //第一層分類檢索
    typeMenu() {
      if (this.type !== "all") {
        return this.pokeList.filter((item) => {
          return item.types[0].type.name === this.type;
        });
      } else {
        return this.pokeList;
      }
    },
    //第二層關鍵字檢索
    titleMenu() {
      if (this.title) {
        return this.typeMenu.filter((item) => {
          let content = item.name.toLowerCase();
          let keyword = this.title.toLowerCase();
          return content.indexOf(keyword) !== -1;
        });
      } else {
        return this.typeMenu;
      }
    },
  },
};
</script>
<style lang="scss" >
.input {
  width: 70%;
  font-size: 1.2rem;
  background-color: rgb(255, 172, 158);
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  margin: 0 auto 2rem;
  text-align: center;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0.8rem;
    margin: 0 auto 0.5rem;
  }
}
.input select {
  outline: none;
  border: none;
  height: 1.8rem;
  width: 20%;
  border-radius: 10px;
}
.input input {
  outline: none;
  border: none;
  height: 1.8rem;
  width: 50%;
  border-radius: 10px;
  margin: 0 1.2rem;
  padding: 0.8rem;
  @media screen and (max-width: 800px) {
    width: 60%;
  }
}
</style>
