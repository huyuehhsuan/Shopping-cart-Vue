<template>
  <div class="grid">
    <div class="box box1"></div>
    <div class="box box2"></div>
    <div class="box box3"></div>
    <div class="box box4"></div>
    <div class="box box5"></div>
    <div class="box box6"></div>
  </div>
</template>

<script>
export default {
  name: "Hoverbox",
};
</script>

<style lang="scss" scoped>
.box {
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: auto;
  background-color: #ffd2ff;
  position: relative;
}
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  opacity: 0;
}
.box1 {
  transition: 2s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.box1:hover {
  transform: scale3d(1.006, 1.006, 1);
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
}
.box2 {
  &::before,
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale3d(0, 0, 1);
    transition: transform 0.3s ease-out 0s;
    background: rgba(255, 255, 255, 0.1);
    content: "";
    pointer-events: none;
  }

  &::before {
    transform-origin: left top;
  }

  &::after {
    transform-origin: right bottom;
  }

  &:hover,
  &:focus {
    &::before,
    &::after {
      transform: scale3d(1, 1, 1);
    }
  }
}
</style>