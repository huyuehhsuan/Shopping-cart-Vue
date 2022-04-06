<template>
  <div class="container">
    <router-link to="/" class="back">&lt; 回上一頁</router-link>
    <div class="product">
      <div class="product-img">
        <img :src="img" alt="" />
      </div>
      <div class="product-data">
        <h1>{{ itemData.name }}</h1>

        <p>{{ itemData.description }}</p>
        <p>價格:{{ itemData.price }}</p>
        <div class="text-center">
          <button @click="reduce">-</button><span class="num">{{ num }}</span>
          <button @click="add">+</button>
        </div>
        <div class="text-center">
          <button @click="addItemsToCart" class="color-button">
            加入購物車
          </button>
        </div>
        <div id="snackbar">已加入購物車</div>
      </div>
    </div>
  </div>
</template>

<script>
import itemList from "@/data/item.js";
export default {
  name: "ProductDetial",
  data() {
    return {
      itemList: itemList,
      itemData: {},
      num: 0,
    };
  },
  mounted() {
    if (this.$route.query.Id) {
      this.itemData = this.itemList[this.$route.query.Id - 1];
    } else {
      this.itemData = this.itemList[0];
    }
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.itemData);
    },
    img() {
      return `${this.itemData.img}`;
    },
  },
  methods: {
    add() {
      this.num++;
      this.itemData.quantity = this.num;
    },
    reduce() {
      if (this.num > 0) {
        this.num--;
        this.itemData.quantity = this.num;
      }
      return;
    },
    addItemsToCart() {
      if (this.$store.state.user.isLogin) {
        if (this.num > 0) {
          this.$store.commit("addItemsToCart", this.itemData);
          let snackbar = document.getElementById("snackbar");
          snackbar.className = "show";
          setTimeout(function () {
            snackbar.className = snackbar.className.replace("show", "");
          }, 2000);
        }
      } else {
        alert("please login");
        setTimeout(() => {
          this.$router.push({ path: "/LogIn" });
        }, 1000);
      }
    },
    removeFromCart() {
      if (this.$store.state.user.isLogin) {
        this.$store.commit("removeFromCart", this.itemData);
      } else {
        alert("please login");
        setTimeout(() => {
          this.$router.push({ path: "/LogIn" });
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  padding: 2rem;
  justify-content: space-evenly;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 0.5rem;
  }
}
.product-img {
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
}
.product-data {
  padding: 2rem;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 576px) {
    padding: 0.5rem;
    width: 100%;
  }
}
.product-data h1 {
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
}
.color-button {
  border-radius: 0.5rem;
}
.num {
  display: inline-block;
  margin: 0 0.5rem;
}
.text-center {
  text-align: center;
}
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: rgb(164, 164, 164);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
}

#snackbar.show {
  visibility: visible;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 50%;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    top: 50%;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
</style>