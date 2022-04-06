<template>
  <div class="main-footer">
    <div class="container">
      <div class="footer-item">
        <h4>聯絡我們</h4>
        <nav>
          <a href="#">聯絡我們</a>
          <a href="#">其他問題</a>
          <a href="#">隱私政策</a>
          <a href="#">法律條款</a>
        </nav>
      </div>
      <div class="footer-item">
        <h4>聯絡我們</h4>
        <nav>
          <a href="#">聯絡我們</a>
          <a href="#">其他問題</a>
          <a href="#">隱私政策</a>
          <a href="#">法律條款</a>
        </nav>
      </div>
      <!-- <div class="footer-item">
        <h4>title</h4>
        <nav>
          <a href="#">聯絡我們</a>
          <a href="#">其他問題</a>
          <a href="#">網站大綱</a>
          <a href="#">課程摘要</a>
        </nav>
      </div> -->
      <div class="footer-item footer-sub">
        <h4>訂閱電子報</h4>
        <form action="">
          <input type="text" />
          <input type="submit" value="訂閱" />
        </form>
      </div>
    </div>
    <div class="copyright" id="copyright">
      <p>{{ name }}公司 copyright{{ year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      name: "HUYUEHHSUAN",
      year: " " + new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.main-footer {
  padding-top: 150px;
  background: linear-gradient(-45deg, #9adcff, #fff89a, #ffb2a6, #ff8aae);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @media screen and (max-width: 576px) {
    padding-top: 50px;
  }
}
.main-footer .container {
  max-width: 1200px;
  min-height: unset;
  margin: auto;
  display: flex;
  @media screen and (max-width: 576px) {
    width: 100%;
    flex-direction: column;
  }
}
.footer-item {
  width: 0;
  flex-grow: 1;
  margin: 0 20px;
  @media screen and (max-width: 576px) {
    width: 50%;
    flex-grow: unset;
  }
}
.footer-item h4 {
  font-size: 24px;
  color: rgb(156, 156, 156);
  border-bottom: 1px rgb(255, 255, 255) solid;
  margin-bottom: 0.5em;
  padding-bottom: 0.5em;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    margin-top: 0.5em;
  }
}
.footer-item nav {
  display: flex;
  flex-direction: column;
}
.footer-item nav a {
  text-decoration: none;
  color: #fff;
  line-height: 1.5;
  padding-top: 10px;
}
.footer-item nav a:hover {
  color: darkblue;
}
.copyright {
  text-align: center;
  margin-top: 150px;
  padding: 10px 0;
  color: rgb(155, 155, 155);
  background-color: blanchedalmond;
  @media screen and (max-width: 576px) {
    margin-top: 30px;
  }
}
.footer-sub {
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    width: 80%;
  }
}
.footer-sub form {
  display: flex;
  width: 100%;
  margin: auto;
}
.footer-sub input[type="text"] {
  border: none;
  padding: 5px 10px;
  width: 0;
  flex-grow: 1;
}
.footer-sub input[type="submit"] {
  border: none;
  padding: 5px 10px;
  color: rgb(155, 155, 155);
  background-color: rgb(255, 221, 157);
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