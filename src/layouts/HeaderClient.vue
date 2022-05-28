<template>
  <header class="fluid" :class="{ header_active: headerActive }">
    <div class="header-main">
      <div class="logo">
        <router-link to="/">
          <img
            class="logo-pc"
            src="https://gw.alicdn.com/tfs/TB1ugm9f5cKOu4jSZKbXXc19XXa-356-76.png"
            alt=""
          />
          <img class="logo-mobile" src="../assets/youku.png" alt="" />
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
          <button class="register" @click="authActive = false, authBox = true">Đăng ký</button>
          <button class="login" @click="authBox = true">Đặng nhập</button>
        </div>
        <div class="bars-mobile">
          <font-awesome-icon icon="bars" class="bars-icon" />
        </div>
      </div>
    </div>
  </header>
  <div class="auth-box" :class="{'auth-box-active': authBox}">
    <div class="action-box">
      <div class="main-auth">
        <font-awesome-icon icon="times" class="icon-close" @click="authBox = false, authActive = true" />
        <div class="auth-direct">
          <h3 :class="{ 'auth-active': authActive }" @click="authActive = true">
            ĐĂNG NHẬP
          </h3>
          <h3
            :class="{ 'auth-active': !authActive }"
            @click="authActive = false"
          >
            ĐĂNG KÝ
          </h3>
        </div>
        <div class="item-box" :hidden="!authActive">
          <form action="">
            <div class="main-form-login">
              <input
                type="text"
                formControlName="email"
                placeholder="Nhập email của bạn..."
              />
              <input
                type="password"
                formControlName="password"
                placeholder="Nhập mật khẩu..."
              />
              <div class="sub-action">
                <div><input type="checkbox" name="" id="" /> Ghi nhớ</div>
                <a routerLink="">Quên mật khẩu</a>
              </div>
              <button>Đăng nhập</button>
              <p id="orLogin">Hoặc</p>
              <div id="loginWithGoogle">
                <img src="../assets/logo-google.png" alt="" />
                <span> Đăng nhập với google </span>
              </div>
            </div>
          </form>
        </div>
        <div class="item-box" :hidden="authActive">
          <form action="">
            <div class="main-form-login">
              <input
                type="password"
                formControlName="password"
                placeholder="Nhập tên tài khoản..."
              />
              <input
                type="text"
                formControlName="email"
                placeholder="Nhập email của bạn..."
              />
              <input
                type="password"
                formControlName="password"
                placeholder="Nhập mật khẩu..."
              />
              <button>Đăng ký</button>
              <p id="orLogin">Hoặc</p>
              <div id="loginWithGoogle">
                <img src="../assets/logo-google.png" alt="" />
                <span> Đăng nhập với google </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="auth-involve">
        <div class="login-box" :hidden="!authActive">
          <h4>Mời bạn đăng nhập để tiếp tục trải nghiệm các dịch vụ!</h4>
        </div>
        <div class="register-box" :hidden="authActive">
          <h4>Hãy tạo một tài khoản để than gia với chúng tôi!</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerActive: false,
      authActive: true,
      authBox: false
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