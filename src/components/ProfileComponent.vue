<template>
  <section class="fluid">
    <div class="profile-content">
      <div class="profile-left">
        <div class="avatar">
          <img class="avatar-image" src="../assets/avatar.jpg" alt="" />
        </div>
        <div class="avatar-action">
          <button class="remove-image">Xóa ảnh</button>
          <button class="change-image">Thay đổi ảnh</button>
        </div>
        <div class="info">
          <p>{{ profile.user_name }}</p>
          <router-link :to="profile.email">Facebook cá nhân</router-link>
          <p class="verified">
            <img src="../assets/verified-icon.jpg" alt="" />Tài khoản đã xác
            minh
          </p>
          <p>{{ profile.email }}</p>
          <p>Ngày đăng ký: 12-10-2002</p>
          <p>Tài khoản</p>
          <router-link to="">Đổi mật khẩu</router-link>
        </div>
      </div>
      <div class="profile-right">
        <div class="profile-info">
          <div class="profile-top">
            <h4>Thông tin cá nhân</h4>
            <button @click="enableEdit()">Chỉnh sửa</button>
          </div>
          <ul>
            <li>
              <label for="">Tên đăng nhập:</label>
              <input
                type="text"
                v-model="profile.user_name"
                :class="{ enableEdit: checkEdit }"
                ref="user_name"
              />
            </li>
            <li>
              <label for="">Email:</label>
              <input
                type="text"
                v-model="profile.email"
              />
            </li>
            <li>
              <label for="">Số điện thoại:</label>
              <input
                type="text"
                v-model="profile.phone_number"
                :class="{ enableEdit: checkEdit }"
                placeholder="Chưa thiết lập"
              />
            </li>
            <li>
              <label for="">Địa chỉ:</label>
              <input
                type="text"
                v-model="profile.address"
                :class="{ enableEdit: checkEdit }"
                placeholder="Chưa thiết lập"
              />
            </li>
            <li>
              <label for="">Ngày sinh:</label>
              <input
                type="date"
                v-model="profile.birthday"
                :class="{ enableEdit: checkEdit }"
              />
            </li>
            <li>
              <label for="">Giới tính:</label>
              <input
                type="text"
                v-model="profile.gender"
                :class="{ enableEdit: checkEdit }"
              />
            </li>
          </ul>
          <button>Cập nhật</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getUser as getInfo } from "../api/ApiUser";
export default {
  data: () => {
    return {
      profile: {
        user_name: "",
        email: "khaiddph15544@fpt.edu.vn",
        phone_number: "",
        address: "",
        birthday: new Date(),
        gender: 1,
      },
      checkEdit: false,
    };
  },
  methods: {
    getUser() {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      } else {
        getInfo(token).then((res) => {
          this.profile.user_name = res.data.name
          this.profile.email = res.data.email;
          this.profile.gender = this.profile.gender == 1 ? "Nam" : "Nữ";
          this.profile.phone_number = res.data.phone
        });
      }
    },
    enableEdit() {
      this.checkEdit = true;
      this.$refs.user_name.focus();
    },
  },
  beforeMount(){
    if(this.profile.user_name != "aaa"){
      this.$router.push({path: ''})
    }
  },
  mounted() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
    this.getUser();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/profile.scss";
</style>