<template>
  <div class="wrap">
    <ul class="carousel">
      <li v-for="n in list" :key="n.id" :style="img(n)"></li>
    </ul>
    <h1 class="type-text">more cookies...</h1>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      list: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        },
      ],
      fullWidth: 0,
    };
  },
  mounted() {
    const vm = this;
    vm.fullWidth = window.innerWidth;
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
    };
    if (vm.fullWidth > 576) {
      window.addEventListener("scroll", function () {
        let typeText = document.querySelector(".type-text");
        let scroll = document.querySelector(".carousel");
        if (window.scrollY > 0) {
          scroll.classList.add("scroll");
          typeText.classList.add("typing");
        } else {
          scroll.classList.remove("scroll");
          typeText.classList.remove("typing");
        }
      });
    }
  },
  methods: {
    img(n) {
      return {
        backgroundImage: `url(${n.url})`,
        animationDelay: `${(n.id - 1) * 5}s`,
        animationDuration: "10s",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 500px;
  background-color: beige;
  position: relative;
}

.carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
  z-index: 2;
}

.scroll {
  width: 800px;
  height: 300px;
}

.carousel > li {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150% auto;
  position: absolute;
  top: 0;
  left: 0;
  animation-name: carouselanimate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.type-text {
  position: absolute;
  left: 40%;
  bottom: 0;
  font-family: monospace;
  color: #fff;
  font-size: 60px;
  width: 0ch;
  overflow: hidden;
}
.typing {
  animation: 6s typing steps(16, jump-none) forwards infinite;
}
@keyframes carouselanimate {
  0% {
    opacity: 0;
    background-size: 150% auto;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  to {
    opacity: 0;
    background-size: 110% auto;
  }
}
@keyframes typing {
  from {
    width: 0ch;
  }
  to {
    width: 15ch;
  }
}
</style>