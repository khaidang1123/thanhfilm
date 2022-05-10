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
}
.container{
  background-color: $main-bg-color;
}
.fluid {
  width: $pc-width;
  margin: auto;
}
</style>
