<template>
  <header class="fluid" :class="{ header_active: headerActive }">
    <div class="header-main">
      <div class="logo">
        <router-link to="/">
          <img class="logo-pc" src="../assets/kl-movie-logo.png" alt="" />
          <img class="logo-mobile" src="../assets/kl-movie-logo.png" alt="" />
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
            <font-awesome-icon
              icon="bell"
              class="bell"
              @click="(noticeExpand = !noticeExpand), (historyExpand = false)"
            />
            <div
              class="notice-content"
              :class="{ 'notice-expand': noticeExpand }"
            >
              <div class="notice-index">1</div>
              <div class="notice-content-right">
                <div class="notice-content-main">
                  Thông báo thời hạn link vip : Hiện do sever lưu trữ game của
                  tụi mình đã tăng chi phí lên rất cao . Nên hiện tại tụi mình
                  chỉ có thể lưu trữ game đã mua trong 6 tháng kể từ ngày mua (
                  thay vì 1 năm trước đó ) Mong các bạn thông cảm
                </div>
                <div class="notice-time">01/05/2022</div>
              </div>
            </div>
          </div>
          <div class="history">
            <font-awesome-icon
              @click="(historyExpand = !historyExpand), (noticeExpand = false)"
              icon="history"
              class="history-icon"
            />

            <div
              class="history-content"
              :class="{ 'history-expand': historyExpand }"
            >
              <h1>Lịch sử</h1>
              <div class="history-content-main">
                <div class="history-film-image">
                  <img src="" alt="" />
                </div>
                <div class="history-content-right">
                  <p>Tranh thiên hạ</p>
                  <span>Updated to 50</span>
                </div>
              </div>
              <div class="history-content-main">
                <div class="history-film-image">
                  <img src="" alt="" />
                </div>
                <div class="history-content-right">
                  <p>Tranh thiên hạ</p>
                  <span>Updated to 50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="user" :class="{ 'logged-in': isLogin }">
          <button
            class="register"
            @click="(authActive = false), (authBox = true)"
          >
            Đăng ký
          </button>
          <button class="login" @click="authBox = true">Đăng nhập</button>
          <div class="logged-action">
            <img
              src="../assets/user-icon.png"
              @click="isUserActionExpand = !isUserActionExpand"
              alt=""
            />
            <ul
              class="nav-user"
              :class="{ 'user-action-expand': isUserActionExpand }"
            >
              <li>
                <routerLink to="">Xin chào: {{ userInfo.name }}</routerLink>
              </li>
              <li><routerLink to="">Quản lý tài khoản</routerLink></li>
              <li><routerLink to="">Đổi mật khẩu</routerLink></li>
              <li>
                <button @click="logout(), (isUserActionExpand = false)">
                  Đăng xuất
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="bars-mobile">
          <font-awesome-icon icon="bars" class="bars-icon" />
        </div>
      </div>
    </div>
  </header>
  <div class="auth-box" :class="{ 'auth-box-active': authBox }">
    <div class="action-box">
      <div class="main-auth">
        <div
          class="alert-err"
          :class="{
            'error-active': alert && alert.length > 0,
            'alert-success': success,
          }"
        >
          <p>{{ alert }}</p>
        </div>
        <font-awesome-icon
          icon="times"
          class="icon-close"
          @click="
            (authBox = false),
              (authActive = true),
              (dataLogin = {}),
              (dataRegister = {}),
              (alert = '')
          "
        />
        <div class="auth-direct">
          <h3
            :class="{ 'auth-active': authActive }"
            @click="(authActive = true), (alert = ''), (dataRegister = {})"
          >
            ĐĂNG NHẬP
          </h3>
          <h3
            :class="{ 'auth-active': !authActive }"
            @click="(authActive = false), (alert = ''), (dataLogin = {})"
          >
            ĐĂNG KÝ
          </h3>
        </div>
        <div class="item-box" :hidden="!authActive">
          <form @submit.prevent="loginAction()">
            <div
              class="main-form"
              :class="{ 'form-has-error': typeof alert != 'string' }"
            >
              <input
                v-model="dataLogin.email"
                type="text"
                formControlName="email"
                placeholder="Nhập email của bạn..."
                autocomplete="off"
              />
              <span class="validate-err" v-if="alert.email">{{
                alert.email[0]
              }}</span>
              <input
                v-model="dataLogin.password"
                type="password"
                formControlName="password"
                placeholder="Nhập mật khẩu..."
                autocomplete="off"
              />
              <span class="validate-err" v-if="alert.password">{{
                alert.password[0]
              }}</span>
              <div class="sub-action">
                <div><input type="checkbox" name="" id="" /> Ghi nhớ</div>
                <a routerLink="">Quên mật khẩu</a>
              </div>
              <button>Đăng nhập</button>
              <p id="orLogin">Hoặc</p>
              <div @click="SigninWithGoogle()" id="loginWithGoogle">
                <img src="../assets/logo-google.png" alt="" />
                <span> Đăng nhập với google </span>
              </div>
            </div>
          </form>
        </div>
        <div class="item-box" :hidden="authActive">
          <form @submit.prevent="registerAction()">
            <div
              class="main-form"
              :class="{ 'form-has-error': typeof alert != 'string' }"
            >
              <input
                v-model="dataRegister.name"
                type="text"
                formControlName="name"
                placeholder="Nhập tên tài khoản..."
                autocomplete="off"
              />
              <span class="validate-err" v-if="alert.name">{{
                alert.name[0]
              }}</span>
              <input
                v-model="dataRegister.email"
                type="text"
                formControlName="email"
                placeholder="Nhập email của bạn..."
                autocomplete="off"
              />
              <span class="validate-err" v-if="alert.email">{{
                alert.email[0]
              }}</span>
              <input
                v-model="dataRegister.password"
                type="password"
                formControlName="password"
                placeholder="Nhập mật khẩu..."
                autocomplete="off"
              />
              <span class="validate-err" v-if="alert.password">{{
                alert.password[0]
              }}</span>
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
import {
  login as apiLogin,
  signinWithGoogle as googleSignin,
  register as apiRegister,
  getUser,
} from "../api/ApiUser";

export default {
  props: ["headerActive"],
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
      dataRegister: {
        name: "",
        email: "",
        password: "",
      },
      userInfo: "",
      isLogin: false,
      isUserActionExpand: false,
      authActive: true,
      authBox: false,
      noticeExpand: false,
      historyExpand: false,
      alert: "",
      success: false,
      user: ""
    };
  },
  methods: {
    loginAction() {
      apiLogin(this.dataLogin)
        .then((res) => {
          localStorage.setItem("token", res.data);
        })
        .then(() => {
          this.dataLogin = {};
          this.authBox = false;
          this.checkLogin();
        })
        .catch((error) => {
          this.alert = error.response.data.errors;
          if (error.response.status == 401) {
            this.alert = error.response.data;
          }
        });
    },

    registerAction() {
      apiRegister(this.dataRegister)
        .then(() => {
          this.alert = "Đăng ký tài khoản thành công!";
          this.success = true;
          this.dataRegister = {};
        })
        .then(() => {
          setTimeout(() => {
            this.authActive = true;
          }, 2000);
        })
        .then(() => {
          setTimeout(() => {
            this.alert = "";
          }, 2000);
        })
        .catch((error) => {
          this.alert = error.response.data.errors;
          if (error.response.status == 401) {
            this.alert = error.response.data;
          }
        });
    },
    checkLogin() {
      const token = localStorage.getItem("token");
      if (token) {
        getUser(token).then((res) => {
          if (res.data) {
            this.userInfo = res.data;
            this.isLogin = true;
          } else {
            this.isLogin = false;
          }
        });
      } else {
        this.isLogin = false;
      }
    },
    logout() {
      const token = localStorage.getItem("token");
      if (token) {
        localStorage.removeItem("token");
        this.checkLogin();
        this.alert = "";
      }
    },
    SigninWithGoogle() {
      googleSignin().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/header.scss";
</style>