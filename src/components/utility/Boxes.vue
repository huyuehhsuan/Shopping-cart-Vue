<template>
  <div class="grid">
    <div class="box box1"></div>
    <div class="box box2">
      <ul class="carousel">
        <li v-for="n in list" :key="n.id" :style="img(n)"></li>
      </ul>
    </div>
    <div class="box box3"></div>
    <div class="box box4"></div>
    <div class="box box5">
      <ul class="change">
        <li
          style="
            background-image: url(https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
          "
        ></li>
        <li
          style="
            animation-delay: 2.5s;
            background-image: url(https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80);
          "
        ></li>
      </ul>
    </div>
    <div class="box box6"></div>
  </div>
</template>

<script>
export default {
  name: "Boxes",
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
    };
  },
  methods: {
    img(n) {
      return {
        backgroundImage: `url(${n.url})`,
        animationDelay: `${(n.id - 1) * 2.5}s`,
        animationDuration: "5s",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
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
  //animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.change {
  width: 100%;
  height: 100%;
  position: relative;
}
.change > li {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150% auto;
  position: absolute;
  top: 0;
  left: 0;
  animation-name: change;
  animation-iteration-count: infinite;
  animation-duration: 5s;
}

.box {
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: auto;
}
.box1 {
  background-color: #dab88b;
}
.box3 {
  width: 300px;
  height: 300px;
  background-color: #ffd2ff;
  background: radial-gradient(
      closest-side,
      rgba(183, 202, 219, 1),
      rgba(253, 246, 236, 0)
    ),
    radial-gradient(
      closest-side,
      rgba(218, 184, 139, 1),
      rgba(145, 229, 246, 0)
    ),
    radial-gradient(closest-side, rgba(243, 233, 221, 1), rgba(89, 165, 216, 0)),
    radial-gradient(closest-side, rgba(253, 246, 236, 1), rgba(56, 111, 164, 0)),
    radial-gradient(
      closest-side,
      rgba(245, 238, 158, 1),
      rgba(245, 238, 158, 0)
    );
  background-size: 130vmax 130vmax, 110vmax 110vmax, 90vmax 90vmax,
    100vmax 100vmax, 80vmax 80vmax;
  background-position: -100vmax -130vmax, -80vmax -80vmax, 10vmax 10vmax,
    30vmax 30vmax, 130vmax 130vmax;
  background-repeat: no-repeat;
  animation: 5s movement linear infinite;
}
.box4 {
  background: linear-gradient(-45deg, #dab88b, #f3e9dd, #fdf6ec, #f68989);
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
  height: 100%;
}
.box5 li {
  width: 300px;
  height: 300px;
}
.box6 {
  background-image: url("https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
  background-position: center;
}

@keyframes carouselanimate {
  0% {
    transform: translateX(100%);
  }
  25% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(0%);
  }
  75% {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes movement {
  0%,
  100% {
    background-size: 130vmax 130vmax, 110vmax 110vmax, 90vmax 90vmax,
      100vmax 100vmax, 80vmax 80vmax;
    background-position: -100vmax -100vmax, -80vmax -80vmax, 10vmax 10vmax,
      30vmax 30vmax, 130vmax 130vmax;
  }
  25% {
    background-size: 120vmax 120vmax, 130vmax 130vmax, 80vmax 80vmax,
      110vmax 110vmax, 70vmax 70vmax;
    background-position: -110vmax -110vmax, -70vmax -70vmax, 20vmax 20vmax,
      20vmax 20vmax, 120vmax 120vmax;
  }
  50% {
    background-size: 110vmax 110vmax, 140vmax 140vmax, 70vmax 70vmax,
      120vmax 120vmax, 60vmax 60vmax;
    background-position: -120vmax -120vmax, -60vmax -60vmax, 30vmax 30vmax,
      10vmax 10vmax, 110vmax 110vmax;
  }
  75% {
    background-size: 120vmax 120vmax, 130vmax 130vmax, 80vmax 80vmax,
      110vmax 110vmax, 70vmax 70vmax;
    background-position: -110vmax -110vmax, -70vmax -70vmax, 20vmax 20vmax,
      20vmax 20vmax, 120vmax 120vmax;
  }
}
@keyframes change {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
