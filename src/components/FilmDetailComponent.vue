<template>
  <div class="film-detail fluid">
    <div class="film-detail-left">
      <div class="main-video"></div>
      <div class="film-detail-content">
        <h3>Tranh thiên hạ</h3>
        <b>Diễn viên: </b><span>Yang Yang Rosy Zhao Xuan Lu Lai Yi</span>
        <p>Bộ phim kể về câu chuyện tình yêu võ hiệp giữa sóng gió giang hồ của chàng trai phong nhã vô song Hắc Phong Tức 
          và cô gái tài mạo tuyệt thế Bạch Phong Tịch. Trải qua 10 năm, tình yêu của hai người chớm nở giữa gió tanh mưa máu.
          Sau một trận đại chiến, Hắc Phong Tức cuối cùng cũng đối diện với lòng mình, dùng tất cả những gì mình có để cứu 
          sống Bạch Phong Tịch.</p>
      </div>
      <div class="film-detail-involve"></div>
      <div class="comment"></div>
    </div>
    <div class="film-detail-right">
      <div class="espisode">
        <div class="main-espisode">
          <h3>Tranh thiên hạ</h3>
          <h5>28 tập</h5>
          <div class="list-espisode">
            <span
              v-for="(n, index) of 50"
              :key="index"
              @click="changeExpisode(n, $event)"
            >
              <p>{{ n }}</p>
            </span>
          </div>
        </div>
      </div>
      <div class="film-detail-ranked"></div>
    </div>
  </div>
</template>

<script>
const $ = require("jquery");
export default {
  data() {
    return {
      btn_es_active: true,
    };
  },
  methods: {
    changeExpisode(position, event) {
      $(".active-espisode").removeClass("active-espisode");
      event.target.parentNode.classList.add("active-espisode");
    },
  },
  mounted() {
    $(".list-espisode span")[0].classList.add("active-espisode");
    console.log(this.$route.params.slug);
  },
};
</script>
<style lang="scss" scoped>
.film-detail {
  display: grid;
  grid-template-columns: 70% 30%;
  div {
    margin-top: 40px;
  }
  .film-detail-left {
    .main-video {
      width: 100%;
      background-color: #000;
      height: 500px;
    }
    .film-detail-content{
      color: #fff;
      font-size: 18px;
      font-weight: lighter;
      h3{
        font-size: 40px;
        text-transform: capitalize;
        margin-bottom: 15px;
        color: yellow;
      }
      span{
        font-size: 20px;
      }
      p{
        margin: 25px 0;
        font-weight: lighter;
        letter-spacing: 0.05em;
        line-height: 25px;
        width: 90%;
      }
    }
  }
  .film-detail-right {
    width: 100%;
    .espisode {
      background-color: #444;
      color: #fff;
      overflow-y: auto;
      scrollbar-width: none;
      padding-bottom: 20px;
      height: 480px;
      font-weight: 400;
      .main-espisode {
        width: 90%;
        margin: auto;
      }
      h3 {
        font-size: 36px;
        padding-top: 15px;
        text-transform: capitalize;
      }
      h5 {
        color: #c5c5c5;
        font-weight: 200px;
        margin: 15px 5px;
      }
      .list-espisode {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 30px 20px;
        text-align: center;
        span {
          cursor: pointer;
          font-size: 20px;
          padding: 3px 0;
          width: 100%;
        }
        .active-espisode {
          border: 1px solid #c4c4c4;
          background-color: #666;
          p {
            color: #ff4a22;
          }
        }
      }
    }
  }
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: #666;
}
</style>