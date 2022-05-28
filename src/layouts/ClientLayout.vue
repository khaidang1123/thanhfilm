<template>
  <div class="container">
    <div class="wrapper">
      <header-client />
      <main>
        <router-view></router-view>
      </main>
      <footer-client />
      <div class="action-fixed">
        <ul>
          <li class="chat">
            <img src="../assets/chat.png" alt="" />
          </li>
          <li class="gototop" @click="goToTop()">
            <img src="../assets/gototop.png" alt="" />
            <span>top</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderClient from "../layouts/HeaderClient.vue";
import FooterClient from "../layouts/FooterClient.vue";
export default {
  components: {
    HeaderClient,
    FooterClient,
  },
  methods: {
    goToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
@import "../scss/responsive-homepage.scss";
$main-bg-color: #323232;
$pri-bg-color: #fff;
$main-color: #fff;
$pri-color: #000;
$pc-width: 1230px;
$normal-font: 16px;
$main-bg-color-nav: #ffb850;
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
}
.container {
  background-color: $main-bg-color;
}
.fluid {
  width: $pc-width;
  margin: auto;
  @include mobile {
    width: auto;
  }
}
.carousel__next {
  @include mobile {
    right: 20px !important;
  }
}
.carousel__prev {
  @include mobile {
    left: 20px !important;
  }
}
.action-fixed {
  color: #fff;
  position: fixed;
  right: 25px;
  bottom: 40px;
  background-color: #444;
  overflow: hidden;
  border-radius: 4px;
  li {
    list-style-type: none;
    text-align: center;
    font-size: 16px;
    padding: 12px;
    border-bottom: 1px solid #999;
    color: #60f4fd;
    cursor: pointer;
    img {
      width: 30px;
      display: block;
    }
  }
  .gototop {
    border-bottom: none;
  }
}
</style>