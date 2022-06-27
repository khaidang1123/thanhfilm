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
                v-model="profile.username"
                :class="{ enableEdit: checkEdit }"
              />
            </li>
            <li>
              <label for="">Email:</label>
              <input
                type="text"
                v-model="profile.email"
                :class="{ enableEdit: checkEdit }"
                ref="email"
              />
            </li>
            <li>
              <label for="">Số điện thoại:</label>
              <input
                type="text"
                v-model="profile.phone_number"
                :class="{ enableEdit: checkEdit }"
              />
            </li>
            <li>
              <label for="">Địa chỉ:</label>
              <input
                type="text"
                v-model="profile.address"
                :class="{ enableEdit: checkEdit }"
              />
            </li>
            <li>
              <label for="">Ngày sinh:</label>
              <input
                type="text"
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
        user_name: "khaidang",
        email: "khaiddph15544@fpt.edu.vn",
        phone_number: "0962597441",
        address: "Đoan Hùng - Phú Thọ",
        birthday: "12 - 10 - 2002",
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
          this.profile.email = res.data.email;
          this.profile.gender = this.profile.gender == 1 ? "Nam" : "Nữ";
        });
      }
    },
    enableEdit() {
      this.checkEdit = true;
      this.$refs.email.focus();
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/profile.scss";
</style>