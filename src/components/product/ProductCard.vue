<template>
  <div class="card box-border">
    <div class="img"><img :src="img" alt="" /></div>
    <h2>{{ item.name }}</h2>
    <div class="flex">
      <p>價格:{{ item.price }}</p>
      <router-link :to="{ name: 'ProductDetial', query: { Id: itemdata.id } }">
        <button class="color-button">詳細資訊</button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["item"],
  data() {
    return {
      itemdata: this.item,
    };
  },

  computed: {
    img() {
      return `${this.item.img}`;
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 0;
}
.card {
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
}
.img {
  width: 200px;
  margin: auto;
}
.color-button {
  border-radius: 0.5rem;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>