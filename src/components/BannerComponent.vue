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
        <ul class="categories">
          <li>
            <font-awesome-icon icon="bars" class="bars" />
            <router-link to="">THỂ LOẠI</router-link>
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
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
%top-bottom-banner-animate {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to bottom, #333, transparent);
}

%left-right-banner-animate {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(22, 22, 26, 0)),
    to(#16161a)
  );
  background-image: -webkit-linear-gradient(
    right,
    rgba(22, 22, 26, 0),
    #16161a
  );
  background-image: linear-gradient(270deg, rgba(22, 22, 26, 0), #16161a);
}
.banner {
  position: relative;
  display: flex;
  img {
    width: 100%;
  }
  .top-animate-banner {
    @extend %top-bottom-banner-animate;
  }
  .bottom-animate-banner {
    @extend %top-bottom-banner-animate;
    bottom: 0;
    top: unset;
    height: 300px;
    background: linear-gradient(to top, #333, transparent);
  }
  .left-animate-banner {
    @extend %left-right-banner-animate;
  }
  .right-animate-banner {
    @extend %left-right-banner-animate;
    background-image: linear-gradient(90deg, rgba(22, 22, 26, 0), #16161a);
    position: absolute;
    right: 0;
    left: unset;
  }
  .list-cate {
    position: absolute;
    bottom: 0px;
    width: 100%;
    .main-list-cate {
      display: grid;
      grid-template-columns: 4fr 1fr;
      width: 1200px;
      margin: auto;
      justify-content: center;
      .box-list-cate {
        margin: 15px 0;
        display: flex;
        li {
          list-style: none;
          margin: 10px 0;
          overflow: hidden;
          a {
            text-decoration: none;
            color: #fff;
            padding: 10px 50px 0 0;
            font-weight: 900;
            font-size: 20px;
            font-family: "Open Sans", sans-serif;
            letter-spacing: 0.05em;
          }
          a:hover {
            color: yellow;
            font-weight: 600;
          }
          .bg-hover-cate {
            position: absolute;
            left: 0;
            top: 15px;
            z-index: -1;
          }
        }
      }
    }
    .categories {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      li {
        background: yellow;
        width: 100%;
        padding: 8px 15px;
        cursor: pointer;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px;
        .bars {
          font-size: 24px;
        }
        a {
          padding: unset;
          text-decoration: none;
          font-size: 20px;
          color: #000;
          font-weight: 900 !important;
          letter-spacing: 0.05em;
          text-align: right;
          display: inline-block;
          font-family: "Open Sans", sans-serif;
        }
      }
    }
  }
}
</style>
