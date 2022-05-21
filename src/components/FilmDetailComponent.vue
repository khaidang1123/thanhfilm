<template>
  <div class="film-detail fluid">
    <div class="film-detail-top">
      <div class="main-video"></div>

      <div class="title-mobile">
        <h3 class="film-name-mobile">Tranh thiên hạ</h3>
        <h5 class="count-espisode-mobile">50 tập</h5>
      </div>
      <div class="espisode">
        <div class="main-espisode">
          <h3>Tranh thiên hạ</h3>
          <h5>50 tập</h5>
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
    </div>
    <div class="film-detail-bottom">
      <div class="film-detail-bottom-left">
        <div class="film-detail-content">
          <h4>Tranh thiên hạ</h4>
          <b>Diễn viên: </b><span>Yang Yang Rosy Zhao Xuan Lu Lai Yi</span>
          <p>
            Bộ phim kể về câu chuyện tình yêu võ hiệp giữa sóng gió giang hồ của
            chàng trai phong nhã vô song Hắc Phong Tức và cô gái tài mạo tuyệt
            thế Bạch Phong Tịch. Trải qua 10 năm, tình yêu của hai người chớm nở
            giữa gió tanh mưa máu. Sau một trận đại chiến, Hắc Phong Tức cuối
            cùng cũng đối diện với lòng mình, dùng tất cả những gì mình có để
            cứu sống Bạch Phong Tịch.
          </p>
        </div>
        <div class="film-detail-involve">
          <h4>Đề xuất cho bạn</h4>
          <div class="list-involve">
            <div class="item">
              <router-link to="/">
                <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
                <div class="count-star">
                  <span>4.5</span>
                  <font-awesome-icon icon="star" class="star" />
                </div>
                <div
                  class="film-content"
                  :class="{ 'film-content-active': filmContentActive }"
                >
                  <h3 class="name">Tân tây du ký</h3>
                  <span class="desc">Siêu phẩm tân tây du sdadsdasdas...</span>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link to="/">
                <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
                <div class="count-star">
                  <span>4.5</span>
                  <font-awesome-icon icon="star" class="star" />
                </div>
                <div
                  class="film-content"
                  :class="{ 'film-content-active': filmContentActive }"
                >
                  <h3 class="name">Tân tây du ký</h3>
                  <span class="desc">Siêu phẩm tân tây du dsajdhasjkd</span>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link to="/">
                <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
                <div class="count-star">
                  <span>4.5</span>
                  <font-awesome-icon icon="star" class="star" />
                </div>
                <div
                  class="film-content"
                  :class="{ 'film-content-active': filmContentActive }"
                >
                  <h3 class="name">Tân tây du ký</h3>
                  <span class="desc">Siêu phẩm tân tây du ...</span>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link to="/">
                <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
                <div class="count-star">
                  <span>4.5</span>
                  <font-awesome-icon icon="star" class="star" />
                </div>
                <div
                  class="film-content"
                  :class="{ 'film-content-active': filmContentActive }"
                >
                  <h3 class="name">Tân tây du ký</h3>
                  <span class="desc">Siêu phẩm tân tây du ...</span>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link to="/">
                <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
                <div class="count-star">
                  <span>4.5</span>
                  <font-awesome-icon icon="star" class="star" />
                </div>
                <div
                  class="film-content"
                  :class="{ 'film-content-active': filmContentActive }"
                >
                  <h3 class="name">Tân tây du ký</h3>
                  <span class="desc">Siêu phẩm tân tây du ...</span>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link to="/">
                <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
                <div class="count-star">
                  <span>4.5</span>
                  <font-awesome-icon icon="star" class="star" />
                </div>
                <div
                  class="film-content"
                  :class="{ 'film-content-active': filmContentActive }"
                >
                  <h3 class="name">Tân tây du ký</h3>
                  <span class="desc">Siêu phẩm tân tây du ...</span>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link to="/">
                <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
                <div class="count-star">
                  <span>4.5</span>
                  <font-awesome-icon icon="star" class="star" />
                </div>
                <div
                  class="film-content"
                  :class="{ 'film-content-active': filmContentActive }"
                >
                  <h3 class="name">Tân tây du ký</h3>
                  <span class="desc">Siêu phẩm tân tây du ...</span>
                </div>
              </router-link>
            </div>
            <div class="item">
              <router-link to="/">
                <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
                <div class="count-star">
                  <span>4.5</span>
                  <font-awesome-icon icon="star" class="star" />
                </div>
                <div
                  class="film-content"
                  :class="{ 'film-content-active': filmContentActive }"
                >
                  <h3 class="name">Tân tây du ký</h3>
                  <span class="desc">Siêu phẩm tân tây du ...</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="comment">
          <h4>Bình luận</h4>
          <textarea
            name=""
            cols="30"
            rows="10"
            placeholder="Viết bình luận..."
          ></textarea>
          <div class="comment-action">
            <button>Bình luận</button>
          </div>
        </div>
        <div class="list-comment">
          <h5>Bình luận hàng đầu</h5>
          <span class="count-comment">( 25 )</span>
          <div class="detail-comment">
            <div class="image">
              <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
            </div>
            <div class="comment-box">
              <p>Đặng Đình Khải</p>
              <p class="comment-content">
                Phim rất hay tình tiết thú vị, nam chính ngầu quá
              </p>
              <span>
                <font-awesome-icon icon="heart" class="heart" />
                25
              </span>
              <span
                class="response-comment"
                @click="boxResponseActive = !boxResponseActive"
                >Phản hồi</span
              >
              <span class="comment-time">- 3 ngày trước</span>
              <div
                class="box-response"
                :class="{ 'box-response-active': boxResponseActive }"
              >
                <textarea
                  name=""
                  cols="30"
                  rows="10"
                  placeholder="Viết phản hồi..."
                ></textarea>
                <div class="comment-action">
                  <button>Phản hồi</button>
                </div>
              </div>
              <div class="show-all-response-comment">
                Xem tất cả 14 phản hồi
              </div>
            </div>
          </div>

          <div class="detail-comment">
            <div class="image">
              <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
            </div>
            <div class="comment-box">
              <p>Đặng Đình Khải</p>
              <p class="comment-content">Phim rất hay tình tiết thú vị</p>
              <span>
                <font-awesome-icon icon="heart" class="heart" />
                25
              </span>
              <span class="response-comment">Phản hồi</span>
              <span class="comment-time">- 3 ngày trước</span>
            </div>
          </div>
          <div class="detail-comment">
            <div class="image">
              <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
            </div>
            <div class="comment-box">
              <p>Đặng Đình Khải</p>
              <p class="comment-content">Phim rất hay tình tiết thú vị</p>
              <span>
                <font-awesome-icon icon="heart" class="heart" />
                25
              </span>
              <span class="response-comment">Phản hồi</span>
              <span class="comment-time">- 3 ngày trước</span>
              <div class="show-all-response-comment">
                Xem tất cả 14 phản hồi
              </div>
            </div>
          </div>
          <div class="detail-comment">
            <div class="image">
              <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
            </div>
            <div class="comment-box">
              <p>Đặng Đình Khải</p>
              <p class="comment-content">Phim rất hay tình tiết thú vị</p>
              <span>
                <font-awesome-icon icon="heart" class="heart" />
                25
              </span>
              <span class="response-comment">Phản hồi</span>
              <span class="comment-time">- 3 ngày trước</span>
              <div class="show-all-response-comment">
                Xem tất cả 14 phản hồi
              </div>
            </div>
          </div>
          <div class="detail-comment">
            <div class="image">
              <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
            </div>
            <div class="comment-box">
              <p>Đặng Đình Khải</p>
              <p class="comment-content">Phim rất hay tình tiết thú vị</p>
              <span>
                <font-awesome-icon icon="heart" class="heart" />
                25
              </span>
              <span class="response-comment">Phản hồi</span>
              <span class="comment-time">- 3 ngày trước</span>
              <div class="show-all-response-comment">
                Xem tất cả 14 phản hồi
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="film-detail-bottom-right">
        <div class="film-detail-ranked">
          <div class="main-ranked">
            <h4>Hot nhất trong ngày</h4>
            <div class="box-main-ranked">
              <div class="box-rank">
                <span class="position-rank rank1">1</span>
                <div class="desc">
                  <span class="film-name">Tranh thiên hạ</span>
                  <span class="film-desc">Tranh thiên hạ</span>
                </div>
                <div class="rank-point">
                  <font-awesome-icon icon="fire" />
                  <span>15846</span>
                </div>
              </div>
              <div class="box-rank">
                <span class="position-rank rank2">2</span>
                <div class="desc">
                  <span class="film-name">Tỗi chưa bao...</span>
                  <span class="film-desc">Tranh thiên hạ</span>
                </div>
                <div class="rank-point">
                  <font-awesome-icon icon="fire" />
                  <span>15846</span>
                </div>
              </div>
              <div class="box-rank">
                <span class="position-rank rank3">3</span>
                <div class="desc">
                  <span class="film-name">Cô phương bất...</span>
                  <span class="film-desc">Tranh thiên hạ</span>
                </div>
                <div class="rank-point">
                  <font-awesome-icon icon="fire" />
                  <span>15846</span>
                </div>
              </div>
              <div class="box-rank">
                <span class="position-rank rank4">4</span>
                <div class="desc">
                  <span class="film-name">Quân vương bất...</span>
                  <span class="film-desc">Tranh thiên hạ</span>
                </div>
                <div class="rank-point">
                  <font-awesome-icon icon="fire" />
                  <span>15846</span>
                </div>
              </div>
              <div class="box-rank">
                <span class="position-rank rank5">5</span>
                <div class="desc">
                  <span class="film-name">Khi cây trà trổ...</span>
                  <span class="film-desc">Tranh thiên hạ</span>
                </div>
                <div class="rank-point">
                  <font-awesome-icon icon="fire" />
                  <span>15846</span>
                </div>
              </div>
              <div class="box-rank">
                <span class="position-rank rank5">6</span>
                <div class="desc">
                  <span class="film-name">Khi cây trà trổ...</span>
                  <span class="film-desc">Tranh thiên hạ</span>
                </div>
                <div class="rank-point">
                  <font-awesome-icon icon="fire" />
                  <span>15846</span>
                </div>
              </div>
              <div class="box-rank">
                <span class="position-rank rank5">7</span>
                <div class="desc">
                  <span class="film-name">Khi cây trà trổ...</span>
                  <span class="film-desc">Tranh thiên hạ</span>
                </div>
                <div class="rank-point">
                  <font-awesome-icon icon="fire" />
                  <span>15846</span>
                </div>
              </div>
              <div class="box-rank">
                <span class="position-rank rank5">8</span>
                <div class="desc">
                  <span class="film-name">Khi cây trà trổ...</span>
                  <span class="film-desc">Tranh thiên hạ</span>
                </div>
                <div class="rank-point">
                  <font-awesome-icon icon="fire" />
                  <span>15846</span>
                </div>
              </div>
              <div class="box-rank">
                <span class="position-rank rank5">9</span>
                <div class="desc">
                  <span class="film-name">Khi cây trà trổ...</span>
                  <span class="film-desc">Tranh thiên hạ</span>
                </div>
                <div class="rank-point">
                  <font-awesome-icon icon="fire" />
                  <span>15846</span>
                </div>
              </div>
              <div class="box-rank">
                <span class="position-rank rank5">10</span>
                <div class="desc">
                  <span class="film-name">Khi cây trà trổ...</span>
                  <span class="film-desc">Tranh thiên hạ</span>
                </div>
                <div class="rank-point">
                  <font-awesome-icon icon="fire" />
                  <span>15846</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const $ = require("jquery");
export default {
  data() {
    return {
      btn_es_active: true,
      filmContentActive: false,
      boxResponseActive: false,
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
    $(".item").hover(
      (e) => {
        e.currentTarget.lastElementChild.lastElementChild.classList.add(
          "film-content-active"
        );
      },
      (e) => {
        e.currentTarget.lastElementChild.lastElementChild.classList.remove(
          "film-content-active"
        );
      }
    );
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/film-detail.scss";
</style>