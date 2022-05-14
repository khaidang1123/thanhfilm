<template>
  <div class="box-content">
    <banner-component />
    <div class="box-main-content fluid">
      <div class="box-film">
        <aside>
          <div class="title">
            <h2>Bảng xếp hạng</h2>
            <span id="title-right">(Thịnh hành)</span>
          </div>
          <div class="ranked">
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
          </div>
        </aside>
        <section>
          <div class="title-film">
            <font-awesome-icon icon="film" class="icon-film" />
            <h2>Phim đề cử</h2>
          </div>
          <div class="main-box-film">
            <div class="item">
              <router-link to="/">
                <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
                <div class="count-star">
                  <span>4.5</span>
                  <font-awesome-icon icon="star" class="star" />
                </div>
              </router-link>
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20605/poster.jpg" alt="" />
              <div class="count-star">
                <span>4.5</span> <font-awesome-icon icon="star" class="star" />
              </div>
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20603/poster.jpg" alt="" />
              <div class="count-star">
                <span>4.5</span> <font-awesome-icon icon="star" class="star" />
              </div>
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20529/poster.jpg" alt="" />
              <div class="count-star">
                <span>4.5</span> <font-awesome-icon icon="star" class="star" />
              </div>
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20615/poster.jpg" alt="" />
              <div class="count-star">
                <span>4.5</span> <font-awesome-icon icon="star" class="star" />
              </div>
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20611/poster.jpg" alt="" />
              <div class="count-star">
                <span>4.5</span> <font-awesome-icon icon="star" class="star" />
              </div>
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20405/poster.jpg" alt="" />
              <div class="count-star">
                <span>4.5</span> <font-awesome-icon icon="star" class="star" />
              </div>
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20647/poster.jpg" alt="" />
              <div class="count-star">
                <span>4.5</span> <font-awesome-icon icon="star" class="star" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="sub-banner">
        <img
          src="https://m.ykimg.com/material/0A03/A1/202204/0428/3078361/1651128901234/0D010000626A3C334792082338423532.jpg"
          alt=""
        />
      </div>
      <div class="cinema">
        <div class="title-film">
          <font-awesome-icon icon="film" class="icon-film" />
          <h2>Phim chiếu rạp</h2>
        </div>
        <div class="main-box-film">
          <div class="item">
            <router-link to="/">
              <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
              <div class="count-star">
                <span>4.5</span> <font-awesome-icon icon="star" class="star" />
              </div>
              <div class="film-content">
                <h3 class="name">Tân tây du ký</h3>
                <span class="desc">Siêu phẩm tân tây du kí với...</span>
              </div>
            </router-link>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20605/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
            <div class="film-content">
              <h3 class="name">Tân tây du ký</h3>
              <span class="desc">Siêu phẩm tân tây du kí với...</span>
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20603/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20529/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20615/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20611/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20405/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20647/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
        </div>
      </div>
      <div class="cinema">
        <div class="title-film">
          <font-awesome-icon icon="film" class="icon-film" />
          <h2>Phim bộ</h2>
        </div>
        <div class="main-box-film">
          <div class="item">
            <router-link to="/">
              <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
              <div class="count-star">
                <span>4.5</span> <font-awesome-icon icon="star" class="star" />
              </div>
              <div class="espisode_status">
                <span>15/17</span>
              </div>
            </router-link>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20605/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
            <div class="espisode_status">
              <span>Full</span>
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20603/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20529/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20615/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20611/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20405/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20647/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20529/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20615/poster.jpg" alt="" />
            <div class="count-star">
              <span>4.5</span> <font-awesome-icon icon="star" class="star" />
            </div>
          </div>
        </div>
      </div>
      <div class="cinema">
        <div class="title-film">
          <font-awesome-icon icon="film" class="icon-film" />
          <h2>Review phim</h2>
        </div>
        <Carousel :settings="settings" :wrapAround="true">
          <Slide v-for="slide of arrSlide" :key="slide">
            <div class="carousel__item">
              <router-link to="/">
                <img :src="slide" alt="" />
                <div class="espisode_status">
                  <span>HOT</span>
                </div>
              </router-link>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import BannerComponent from "./BannerComponent.vue";
import { Carousel, Navigation, Slide } from "vue3-carousel/dist/carousel.es";
import "vue3-carousel/dist/carousel.css";
export default {
  data() {
    return {
      settings: {
        itemsToShow: 4,
        snapAlign: "center",
      },
      arrSlide: [
        "https://bilutv.link/film/20643/poster.jpg",
        "https://bilutv.link/film/20605/poster.jpg",
        "https://bilutv.link/film/20603/poster.jpg",
        "https://bilutv.link/film/20529/poster.jpg",
        "https://bilutv.link/film/20615/poster.jpg",
        "https://bilutv.link/film/20611/poster.jpg",
        "https://bilutv.link/film/20405/poster.jpg",
        "https://bilutv.link/film/20647/poster.jpg",
        "https://bilutv.link/film/20529/poster.jpg",
        "https://bilutv.link/film/20615/poster.jpg",
      ],
    };
  },
  methods: {},
  components: {
    BannerComponent,
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/home.scss";
</style>
