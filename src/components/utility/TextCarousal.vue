<template>
  <div class="text-carousal">
    <h1>
      Sweets Make You
      <div class="mask">
        <span data-show>Happy</span>
        <span>Satisfied</span>
        <span>Beautiful</span>
        <span>Smile</span>
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  name: "TextCarousal",
  mounted() {
    setInterval(function () {
      const show = document.querySelector("span[data-show]");
      const next =
        show.nextElementSibling || document.querySelector("span:first-child");
      const up = document.querySelector("span[data-up]");
      if (up) {
        up.removeAttribute("data-up");
      }
      show.removeAttribute("data-show");
      show.setAttribute("data-up", "");
      next.setAttribute("data-show", "");
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
.text-carousal {
  @media screen and (max-width: 576px) {
    display: none;
  }
}
h1 {
  width: 900px;
  font-size: 100px;
  color: rgb(66, 66, 66);
  line-height: 1.5;
  font-family: monospace;
}

.mask {
  height: 150px;
  position: relative;
  overflow: hidden;
}

.mask span {
  display: block;
  position: absolute;
  top: 150px;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  -webkit-text-fill-color: transparent;
}

.mask span[data-show] {
  transform: translateY(-100%);
  transition: 0.5s;
}

.mask span[data-up] {
  transform: translateY(-200%);
  transition: 0.5s;
}

.mask span:nth-child(1) {
  background-image: linear-gradient(
    45deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}

.mask span:nth-child(2) {
  background-image: linear-gradient(
    45deg,
    rgba(255, 243, 0, 1) 21%,
    rgba(255, 0, 0, 1) 100%
  );
}

.mask span:nth-child(3) {
  background-image: linear-gradient(
    45deg,
    rgba(255, 0, 245, 1) 21%,
    rgba(255, 166, 0, 1) 100%
  );
}

.mask span:nth-child(4) {
  background-image: linear-gradient(
    45deg,
    rgba(0, 5, 255, 1) 21%,
    rgba(0, 255, 110, 1) 100%
  );
}
</style>