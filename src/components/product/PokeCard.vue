<template>
  <div class="poke-container">
    <div class="pokemon" :style="backgroundColor">
      <div class="img-container">
        <img :src="imgUrl" alt="pokeimg" />
      </div>
      <div class="info">
        <span class="number">{{
          pokeitem.id.toString().padStart(3, "0")
        }}</span>
        <h3 class="name">{{ pokeitem.name }}</h3>
        <small class="type"
          >Type: <span>{{ pokeitem.types[0].type.name }}</span></small
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokeCard",
  props: ["pokeitem"],
  data() {
    return {
      colors: [
        { fire: "#FDDFDF" },
        { grass: "#DEFDE0" },
        { electric: "#FCF7DE" },
        { water: "#DEF3FD" },
        { ground: "#f4e7da" },
        { rock: "#d5d5d4" },
        { fairy: "#fceaff" },
        { poison: "#98d7a5" },
        { bug: "#f8d5a3" },
        { dragon: "#97b3e6" },
        { psychic: "#eaeda1" },
        { flying: "#F5F5F5" },
        { fighting: "#E6E0D4" },
        { normal: "#F5F5F5" },
      ],
      bgcolor: "",
    };
  },
  mounted() {
    const typeList = this.colors.map((item) => Object.keys(item)[0]);
    const colorList = this.colors.map((item) => Object.values(item)[0]);
    const index = typeList.indexOf(`${this.pokeitem.types[0].type.name}`);
    this.bgcolor = colorList[index];
  },
  computed: {
    imgUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokeitem.id}.png`;
    },
    backgroundColor() {
      return `background-color:${this.bgcolor}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.poke-container {
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
}
.pokemon {
  background-color: #eee;
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
}
.pokemon .info {
  margin-top: 20px;
}

.pokemon .number {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 0.8em;
  padding: 5px 10px;
}

.pokemon .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}
</style>