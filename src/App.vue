<template>
  <div class="container">
    <div class="wrapper">
      <header-client />
      <main>
        <router-view></router-view>
      </main>
      <footer-client />
    </div>
  </div>
</template>

<script>
import HeaderClient from "./layouts/HeaderClient.vue";
import FooterClient from "./layouts/FooterClient.vue";
import * as $ from "jquery";
export default {
  name: "App",
  components: {
    HeaderClient,
    FooterClient,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import "./scss/responsive-homepage.scss";
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
    width: fit-content;
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
</style>
