<template>
  <footer>
    <section class="fluid">
      <div class="information">
        <h3 class="title">Về chúng tôi</h3>
        <ul>
          <li>
            <router-link to="">giới thiệu</router-link>
          </li>
          <li>
            <router-link to="">Bản quyền</router-link>
          </li>
        </ul>
      </div>

      <div class="cate_film">
        <h3 class="title">Phim bộ</h3>
        <ul>
          <li>
            <router-link to="">Phim bộ mới</router-link>
          </li>
          <li>
            <router-link to="">Phim bộ hot</router-link>
          </li>
        </ul>
      </div>

      <div class="cate_film">
        <h3 class="title">Phim lẻ</h3>
        <ul>
          <li>
            <router-link to="">Phim lẻ mới</router-link>
          </li>
          <li>
            <router-link to="">Phim lẻ hot</router-link>
          </li>
        </ul>
      </div>

      <div class="cate_film">
        <h3 class="title">Review phim</h3>
        <ul>
          <li>
            <router-link to="">Review phim mới</router-link>
          </li>
          <li>
            <router-link to="">Review phim hot</router-link>
          </li>
        </ul>
      </div>

      <div class="contact">
        <h3 class="title">Liên hệ</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/Khaidang121002/" target="_blank"> <img src="../assets/facebook-icon.png" alt="">  Facebook </a>
          </li>
          <li>
            <a href="" target="_blank"><img src="../assets/logo-tw.png" alt=""> Twiter</a>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/footer.scss";
</style>