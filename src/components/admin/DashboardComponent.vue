<template>
  <div class="box-dashboard">
    <aside>
      <div class="aside-header">
        <h1>ADMIN</h1>
      </div>
      <div class="aside_content">
        <ul>
          <li><router-link to="/admin">TRANG CHỦ</router-link></li>
          <li><router-link to="/admin/category">LOẠI HÀNG</router-link></li>
          <li><router-link to="/admin/phones">HÀNG HÓA</router-link></li>
          <li><router-link to="/admin/user">NGƯỜI DÙNG</router-link></li>
          <li><router-link to="/admin/comment">BÌNH LUẬN</router-link></li>
          <li><router-link to="/admin/order">ĐƠN HÀNG</router-link></li>
          <li><router-link to="/admin/warranty">BẢO HÀNH</router-link></li>
          <li><router-link to="/admin/cart">GIỎ HÀNG</router-link></li>
          <li><router-link to="/admin/slider">SLIDER</router-link></li>
          <li><router-link to="/admin/statistical">THỐNG KÊ</router-link></li>
          <li><router-link to="/">TRANG NGƯỜI DÙNG CUỐI</router-link></li>
        </ul>
      </div>
    </aside>
    <div class="main-dashboard">
      <div class="header-dashboard">
        <img src="../../assets/kl-movie-logo.png" alt="" />
      </div>
      <div class="content-dashboad">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.box-dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  background-color: #3a3a3a;
  color: #fff;
  aside {
    border-right: 1px solid #c5c5c5;
    box-shadow: 0 0 10px #999;
    height: 100vh;
    .aside-header {
      display: flex;
      align-items: center;
      padding-left: 30px;
      height: 90px;
      border-bottom: 1px solid #c5c5c5;
      h1 {
        font-weight: 700;
        font-size: 32px;
      }
    }
    .aside_content {
      ul {
        margin-top: 25px;
        li {
          font-size: 17px;
          transition: 0.4s;
          a {
            color: #fff;
            font-size: 16px;
            padding: 0 30px;
            width: 100%;
            height: 44px;
            display: inline-block;
            transition: all 0.4s;
            cursor: pointer;
            &:hover {
              padding-left: 40px;
              transition: all 0.4s;
            }
          }
        }
      }
    }
  }
  .main-dashboard {
    .header-dashboard {
      display: flex;
      height: 90px;
      width: 100%;
      margin: auto;
      img {
        margin: auto;
      }
    }
  }
}
table{
    width: 97%;
    margin: auto;
}
</style>