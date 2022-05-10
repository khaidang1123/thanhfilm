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
      <div class="user">
        <div class="header-item">
          <div class="notice">
            <span class="count-notice">1</span>
            <font-awesome-icon icon="bell" class="bell" />
          </div>
          <div class="history">
            <font-awesome-icon icon="history" class="history-icon" />
          </div>
        </div>
        <router-link to="/register">Đăng ký</router-link>
        <router-link to="/login">Đăng nhập</router-link>
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
header {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 100000;
  .header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    width: 1230px;
    margin: auto;
    .logo img {
      width: 200px;
    }
    .box-search {
      position: relative;
      display: flex;
      align-items: center;
      margin: 10px 0;
      input {
        width: 300px;
        padding: 8px;
        border-radius: 15px;
        border: none;
        outline: none;
        text-indent: 15px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        font-size: 16px;
        background-color: #fff;
        opacity: 0.6;
      }
      .icon-search {
        position: absolute;
        top: -0.5px;
        left: 100%;
        cursor: pointer;
        border: none;
        color: #fff;
        background-color: blue;
        padding: 10px 12px;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    }
    .user {
      display: flex;
      align-items: center;
      .header-item {
        display: flex;
        align-items: center;
        .history {
          margin-right: 25px;
          background-color: #4c4c4c;
          padding: 7px 9px;
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          .history-icon {
            font-size: 22px;
          }
        }
        .notice {
          position: relative;
          display: inline-flex;
          align-items: center;
          margin-right: 15px;
          background-color: #4c4c4c;
          padding: 7px 9px;
          border-radius: 50%;
          cursor: pointer;
          color: #fff;
          .count-notice {
            background-color: red;
            position: absolute;
            top: -3px;
            right: -3px;
            font-size: 14px;
            padding: 0 5px;
            color: #000;
            border-radius: 50%;
          }
          .bell {
            font-size: 22px;
            animation: ring 4s 0.7s ease-in-out infinite;
            transform-origin: 50% 4px;
          }
        }
      }
      a {
        color: #fff;
        margin-right: 15px;
        text-decoration: none;
      }
    }
    @keyframes ring {
      0% {
        -webkit-transform: rotateZ(0);
      }
      1% {
        -webkit-transform: rotateZ(30deg);
      }
      3% {
        -webkit-transform: rotateZ(-28deg);
      }
      5% {
        -webkit-transform: rotateZ(34deg);
      }
      7% {
        -webkit-transform: rotateZ(-32deg);
      }
      9% {
        -webkit-transform: rotateZ(30deg);
      }
      11% {
        -webkit-transform: rotateZ(-28deg);
      }
      13% {
        -webkit-transform: rotateZ(26deg);
      }
      15% {
        -webkit-transform: rotateZ(-24deg);
      }
      17% {
        -webkit-transform: rotateZ(22deg);
      }
      19% {
        -webkit-transform: rotateZ(-20deg);
      }
      21% {
        -webkit-transform: rotateZ(18deg);
      }
      23% {
        -webkit-transform: rotateZ(-16deg);
      }
      25% {
        -webkit-transform: rotateZ(14deg);
      }
      27% {
        -webkit-transform: rotateZ(-12deg);
      }
      29% {
        -webkit-transform: rotateZ(10deg);
      }
      31% {
        -webkit-transform: rotateZ(-8deg);
      }
      33% {
        -webkit-transform: rotateZ(6deg);
      }
      35% {
        -webkit-transform: rotateZ(-4deg);
      }
      37% {
        -webkit-transform: rotateZ(2deg);
      }
      39% {
        -webkit-transform: rotateZ(-1deg);
      }
      41% {
        -webkit-transform: rotateZ(1deg);
      }

      43% {
        -webkit-transform: rotateZ(0);
      }
      100% {
        -webkit-transform: rotateZ(0);
      }
    }
  }
}
.header_active {
  background-color: #16161a;
  width: 100%;
  margin: auto;
  a {
    color: #000;
  }
}
</style>