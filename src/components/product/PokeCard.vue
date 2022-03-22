<template>
  <div class="card box-border">{{ pokeitem.name }}</div>
</template>

<script>
export default {
  name: "PokeCard",
  props: ["pokeitem"],
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 0;
}
.card {
  border-radius: 0.5rem;
  padding: 1rem;
}
.img {
  width: 200px;
  margin: auto;
}
</style>