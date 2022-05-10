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
                <span class="film-name">Tranh thiên hạ</span>
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
                <span class="film-name">Tranh thiên hạ</span>
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
                <span class="film-name">Tranh thiên hạ</span>
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
                <span class="film-name">Tranh thiên hạ</span>
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
          <h2>Phim đề cử</h2>
          <div class="main-box-film">
            <div class="item">
              <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20605/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20603/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20529/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20615/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20611/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20405/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20647/poster.jpg" alt="" />
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
      <div class="cinema-film">
        <h2>PHIM CHIẾU RẠP</h2>
        <div class="main-box-film">
          <div class="item">
            <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20605/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20603/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20529/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20615/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20611/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20405/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20647/poster.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="cinema-film">
        <h2>PHIM BỘ</h2>
        <div class="main-box-film">
          <div class="item">
            <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20605/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20603/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20529/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20615/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20611/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20405/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20647/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20529/poster.jpg" alt="" />
          </div>
          <div class="item">
            <img src="https://bilutv.link/film/20615/poster.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="cinema-film">
        <h2>REVIEW PHIM</h2>
        <div class="main-box-film">
          <VueSlickCarousel :arrows="true" :dots="true">
            <div class="item">
              <img src="https://bilutv.link/film/20643/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20605/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20603/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20529/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20615/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20611/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20405/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20647/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20529/poster.jpg" alt="" />
            </div>
            <div class="item">
              <img src="https://bilutv.link/film/20615/poster.jpg" alt="" />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerComponent from "./BannerComponent.vue";
const VueSlickCarousel = require("vue-slick-carousel");
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    BannerComponent,
    VueSlickCarousel,
  },
};
</script>

<style lang="scss" scoped>
.box-film {
  display: grid;
  grid-template-columns: 2fr 5fr;
  width: 100%;
  margin: 40px auto;
  section {
    h2 {
      font-size: 28px;
      margin: 30px 0;
      display: block !important;
      color: #fff;
    }
    .main-box-film {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-row-gap: 20px;
      .item {
        width: 85%;
        margin: auto;
        img {
          width: 100%;
          margin: auto;
          border-radius: 15px;
        }
      }
    }
  }
  aside {
    .title {
      display: flex;
      align-items: center;
      h2 {
        font-size: 16px;
        margin: 35px 0;
        display: inline !important;
        color: yellow;
      }
      #title-right {
        color: #fff;
        font-size: 22px;
        margin: 35px 15px;
        font-style: italic;
      }
    }

    .ranked {
      display: grid;
      grid-auto-columns: 1fr;
      width: 80%;
      .box-rank {
        color: #fff;
        display: grid;
        grid-template-columns: 50px 1fr 40px;
        cursor: pointer;
        border-bottom: 1px solid #999;
        padding: 15px 0;
        margin: 15px 0;
        .position-rank {
          width: 24px;
          height: 35px;
          font: 700 36px Impact;
          font-style: italic;
        }
        .rank1 {
          color: #ff4f34;
        }
        .rank2 {
          color: #fa6400;
        }
        .rank3 {
          color: #ffb802;
        }
        .rank4 {
          color: #999;
        }
        .rank5 {
          color: #999;
        }
        .desc {
          display: flex;
          flex-direction: column;
          .film-name {
            font-size: 22px;
          }
          .film-desc {
            font-size: 16px;
            color: #999;
          }
        }
        .rank-point {
          display: flex;
          align-items: center;
          color: #ff008c;
          span {
            margin: 7px;
          }
        }
      }
    }
  }
}
.sub-banner img {
  width: 100%;
}
.cinema-film {
  h2 {
    color: #fff;
    margin: 40px 0;
  }
  .main-box-film {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    .item {
      width: 100%;
      margin: auto;
      padding: 10px;
      img {
        border-radius: 15px;
        width: 90%;
      }
    }
  }
}
</style>
