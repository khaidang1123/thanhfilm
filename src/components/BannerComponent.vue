<template>
  <div class="banner">
    <div class="top-animate-banner"></div>
    <div class="left-animate-banner"></div>
    <img :src="currentBanner" alt="" />
    <div class="right-animate-banner"></div>
    <div class="bottom-animate-banner"></div>
    <nav class="list-cate">
      <div class="main-list-cate">
        <ul class="box-list-cate">
          <li>
            <router-link to="">PHIM CHIẾU RẠP</router-link>
          </li>
          <li>
            <router-link to="">PHIM VIỆT NAM</router-link>
          </li>
          <li>
            <router-link to="">PHIM BỘ</router-link>
          </li>
          <li>
            <router-link to="">PHIM LẺ</router-link>
          </li>
          <li>
            <router-link to="">REVIEW PHIM</router-link>
          </li>
        </ul>
        <ul
          class="categories"
          @mouseover="subCateActive = true"
          @mouseout="subCateActive = false"
        >
          <li>
            <font-awesome-icon icon="bars" class="bars" />
            <router-link to="">THỂ LOẠI</router-link>
            <ul
              class="sub_categories"
              :class="{ sub_categories_active: subCateActive }"
            >
              <li><router-link to="/">Hành động</router-link></li>
              <li><router-link to="/">Tâm lý, tình cảm</router-link></li>
              <li><router-link to="/">Ngôn tình, lãng mạn</router-link></li>
              <li><router-link to="/">Cổ trang</router-link></li>
              <li><router-link to="/">Hiện đại</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentBanner: "",
      count: 0,
      arrBanner: [
        "https://liangcang-material.alicdn.com/prod/upload/3ad86336b2a74bcfb0d37369ba5f1de7.jpg",
        "https://liangcang-material.alicdn.com/prod/upload/0a2ca04d65084dfd8d8f5f95472b7402.jpg",
        "https://liangcang-material.alicdn.com/prod/upload/84f73b50868749fbae70f809fc5256da.jpg",
        "https://liangcang-material.alicdn.com/prod/upload/ae5fbb8c339a4feb8e504e5b8a8d3238.jpg",
      ],
      subCateActive: false,
    };
  },
  methods: {
    changeBanner() {
      this.currentBanner = this.arrBanner[this.count];
      setInterval(() => {
        this.count++;
        this.currentBanner = this.arrBanner[this.count];
        if (this.count >= this.arrBanner.length - 1) {
          this.count = 0;
        }
      }, 3000);
    },
  },
  mounted() {
    this.changeBanner();
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/banner.scss';
</style>
