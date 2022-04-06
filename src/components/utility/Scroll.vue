<template>
  <div>
    <!-- <section style="flex-direction: column">
      <h1 class="text-jump">ScrollDown &#8595;</h1>
    </section> -->
    <section>
      <div class="container reveal fade-bottom">
        <h2>起源</h2>
        <div class="text-container">
          <div class="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
          <div class="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
          <div class="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container reveal fade-left">
        <h2>Caption</h2>
        <div class="text-container">
          <div class="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
          <div class="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
          <div class="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  mounted() {
    window.addEventListener("scroll", this.reveal);
    const textJump = document.querySelector(".text-jump");
    textJump.innerHTML = textJump.textContent.replace(/\S/g, "<span>$&</span>");
    document.querySelectorAll(".text-jump span").forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 0.1}s`);
    });
    const textPop = document.querySelector(".text-pop");
    textPop.innerHTML = textPop.textContent.replace(/\S/g, "<span>$&</span>");
    document.querySelectorAll(".text-pop span").forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 0.1}s`);
    });
    const textFlip = document.querySelector(".text-flip");
    textFlip.innerHTML = textFlip.textContent.replace(/\S/g, "<span>$&</span>");
    document.querySelectorAll(".text-flip span").forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 0.1}s`);
    });
    const textBlink = document.querySelector(".text-blink");
    textBlink.innerHTML = textBlink.textContent.replace(
      /\S/g,
      "<span>$&</span>"
    );
    document.querySelectorAll(".text-blink span").forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 0.1}s`);
    });
  },
  methods: {
    reveal() {
      let reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
section:nth-child(1) {
  color: var(--first-color-second);
}
section:nth-child(2) {
  color: #42455a;
  background: rgb(255, 217, 190);
}
section:nth-child(3) {
  color: var(--first-color-second);
}
section:nth-child(4) {
  color: #42455a;
  background: rgb(255, 217, 190);
}
section .container {
  margin: 100px;
  @media screen and (max-width: 576px) {
    margin: 0;
  }
}
section h1 {
  font-size: 3rem;
  margin: 20px;
}
section span {
  display: inline-block;
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-delay: var(--delay);
  /* animation-iteration-count: infinite; */
}
section .text-jump span {
  animation-name: text-jump;
}
section .text-pop span {
  animation-name: text-pop;
}
section .text-flip span {
  animation-name: text-flip;
}
section .text-blink span {
  animation-name: text-blink;
}
section h2 {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
}

section .text-container {
  display: flex;
}
section .text-container .text-box {
  margin: 20px;
  padding: 20px;
  background: var(--body-color);
}
section .text-container .text-box h3 {
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
}

@media (max-width: 900px) {
  section h1 {
    font-size: 2rem;
    text-align: center;
  }
  section .text-container {
    flex-direction: column;
  }
}

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}
.active.fade-bottom {
  animation: fade-bottom 1s ease-in;
}
.active.fade-left {
  animation: fade-left 1s ease-in;
}
.active.fade-right {
  animation: fade-right 1s ease-in;
}
.active.text-jump {
  animation: text-jump 0.4s ease-in;
}
@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes text-jump {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
@keyframes text-pop {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}
@keyframes text-flip {
  0%,
  100% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(90deg);
  }
}
@keyframes text-blink {
  0%,
  100% {
    color: inherit;
  }
  50% {
    color: yellow;
  }
}
</style>