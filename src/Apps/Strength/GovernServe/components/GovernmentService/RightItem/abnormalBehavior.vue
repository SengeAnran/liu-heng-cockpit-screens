<template>
  <div @mouseenter="mouseEnter(dataList)" @mouseleave="mouseleave(dataList)" >
    <swiper  ref="mySwiper" :options="swiperOption" v-if="dataList.length > 1">
      <swiper-slider v-for="(item, index) in dataList" :key="index">
        <div class="content1">
          <div class="img">
            <img :src="'data:image/png;base64,'+item.zp" />
          </div>
          <div class="content">
            <div class="name">备注信息</div>
            <div class="kouhao">
              {{ item.bzxx }}
            </div>
          </div>
        </div>
      </swiper-slider>
    </swiper>
    <div v-else class="content1">
      <div class="img">
        <img :src="'data:image/png;base64,'+dataList[0].zp" />
      </div>
      <div class="content">
        <div class="name">备注信息</div>
        <div class="kouhao">
          {{ dataList[0].bzxx }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from '@/components/Swiper';
import SwiperSlider from '@/components/SwiperSlider';
import { getAbnormalAnalysis } from '@/api/Strength/GovernServe/api';
export default {
  components: {
    swiper,
    SwiperSlider,
  },
  data() {
    return {
      dataList: [],
      swiperOption: {
        // direction: '',
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        // autoplay: true,
      },
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getAbnormalAnalysis()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          console.log(json);
          this.dataList = json;
        });
    },
    mouseEnter(lists) {
      if (lists.length < 1) {
        return;
      }
      // this.swiper.swiper.autoplay.stop();
      console.log(this.$refs.mySwiper.swiper);
      if (this.$refs.mySwiper) {
        this.$refs.mySwiper.swiper.autoplay.stop();
      }
    },
    mouseleave(lists) {
      if (lists.length < 1) {
        return;
      }
      if (this.$refs.mySwiper) {
        this.$refs.mySwiper.swiper.autoplay.start();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content1 {
  margin: 28px 0 0 0;
  background: url('../img/bg_yc2.png') 100% 100% no-repeat;
  height: 356px;
  width: 800px;
  display: flex;
  .img {
    margin: 50px;
    width: 347px;
    height: 239px;
    overflow: hidden;
    img {
      object-fit: fill;
      width: 100%;
      height: 100%;
    }
  }
  .content {
    margin: 20px;
    .kouhao {
      //border-top: 2px solid slategrey;
      width: 338px;

      padding: 10px;
      margin-top: 46px;
      //width: 390px;
      //height: 99px;
      background: rgba(54, 66, 80, 0.2);
      border-radius: 10px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 36px;
      max-height: 154px;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

    }
  }
  .name {
    font-size: 32px;
    color: #ffffff;
    margin: 20px 0px 20px 0px;
    background: url("./img/tt_bg.png") no-repeat;
    background-position: -20%;
  }
}
.font-name {
  font-size: 24px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #554f4f;
  margin: 0px 50px 20px 0px;
  //   opacity: 0.5;
}
.font-content {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
.swiper-container {
  //width: 100%;
  width: 800px;
  height: 451px;
  --swiper-theme-color: #fdfcfc;
  .swiper-slide {
    //height: 76px;
    box-sizing: border-box;
    //display: flex;
    //  flex-direction: row;
    //  justify-content: space-between;
  }
}
</style>
