<template>
  <header class="fluid" :class="{ header_active: headerActive }">
    <div class="header-main">
      <div class="logo">
        <router-link to="/">
          <img
            src="https://gw.alicdn.com/tfs/TB1ugm9f5cKOu4jSZKbXXc19XXa-356-76.png"
            alt=""
          />
        </router-link>
      </div>
      <div class="box-search">
        <input type="text" placeholder="Nhập tên phim, diễn viên..." />
        <font-awesome-icon icon="search" class="icon-search" />
      </div>
      <div class="header-top-right">
        <div class="header-item">
          <div class="notice">
            <span class="count-notice">1</span>
            <font-awesome-icon icon="bell" class="bell" />
          </div>
          <div class="history">
            <font-awesome-icon icon="history" class="history-icon" />
          </div>
        </div>
        <div class="user">
          <router-link to="/register">Đăng ký</router-link>
          <router-link to="/login" class="login">Đăng nhập</router-link>
        </div>
        <div class="user-mobile">
          <router-link to="/login">
            <font-awesome-icon icon="user" class="user-icon" />
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      headerActive: false,
    };
  },
  methods: {
    checkPosition() {
      window.onscroll = () => {
        if (scrollY > 0) {
          this.headerActive = true;
        } else {
          this.headerActive = false;
        }
      };
    },
  },
  mounted() {
    this.checkPosition();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/header.scss";
</style>