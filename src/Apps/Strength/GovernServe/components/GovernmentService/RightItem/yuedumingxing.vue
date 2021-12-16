<template>
  <div >
    <swiper  ref="mySwiper" @mouseenter="mouseEnter(dataList)" @mouseleave="mouseleave(dataList)" :options="swiperOption" v-if="dataList.length > 1">
      <swiper-slider v-for="(item, index) in dataList" :key="index">
        <div class="content1">
          <div class="img">
            <img :src="'data:image/png;base64,'+item.zp" />
          </div>
          <div class="content">
            <div class="name">{{item.xm}}</div>
            <div>
              <span class="font-name">工号</span>
              <span class="font-content">{{item.gh}}</span>
            </div>
            <div>
              <span class="font-name">部门</span>
              <span class="font-content">{{item.bm}}</span>
            </div>
            <div class="kouhao">
              <div style="font-size: 20px">服务口号</div>
              <div style="font-size: 18px; color: #dfdfdf; margin-top: 20px">{{item.fwkh}}</div>
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
        <div class="name">{{dataList[0].xm}}</div>
        <div>
          <span class="font-name">工号</span>
          <span class="font-content">{{dataList[0].gh}}</span>
        </div>
        <div>
          <span class="font-name">部门</span>
          <span class="font-content">{{dataList[0].bm}}</span>
        </div>
        <div class="kouhao">
          <div style="font-size: 20px">服务口号</div>
          <div style="font-size: 18px; color: #dfdfdf; margin-top: 20px">{{dataList[0].fwkh}}</div>
        </div>
      </div>
    </div>
  </div>
<!--  <div>-->
<!--    <div class="content1">-->
<!--      <div class="img">-->
<!--        <img :src="'data:image/png;base64,'+dataList.zp" />-->
<!--      </div>-->
<!--      <div class="content">-->
<!--        <div class="name">{{dataList.xm}}</div>-->
<!--        <div>-->
<!--          <span class="font-name">工号</span>-->
<!--          <span class="font-content">{{dataList.gh}}</span>-->
<!--        </div>-->
<!--        <div>-->
<!--          <span class="font-name">部门</span>-->
<!--          <span class="font-content">{{dataList.bm}}</span>-->
<!--        </div>-->
<!--        <div class="kouhao">-->
<!--          <div style="font-size: 20px">服务口号</div>-->
<!--          <div style="font-size: 18px; color: #dfdfdf; margin-top: 20px">{{dataList.fwkh}}</div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import swiper from '@/components/Swiper';
import SwiperSlider from '@/components/SwiperSlider';
import { getMonthlyStar } from '@/api/Strength/GovernServe/api';
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
      getMonthlyStar()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.dataList.push(json);
          this.dataList.push(json);
          this.dataList.push(json);
          // console.log(this.dataList);
        });
    },
    mouseEnter(lists) {
      if (lists.length < 1) {
        return;
      }
      // this.swiper.swiper.autoplay.stop();
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

<style lang="scss">
.content1 {
  margin: 28px 0 0 0;
  background: url('../img/yue_bg.png') 100% 100% no-repeat;
  height: 356px;
  width: 800px;
  display: flex;
  .img {
    margin: 50px;
    height: 240px;
    width: 230px;
    img {
      object-fit: fill;
      width: 100%;
      height: 100%;
    }
  }
  .content {
    margin: 20px;
    .kouhao {
      border-top: 2px solid slategrey;
      width: 300px;
      padding: 10px;
      margin-top: 20px;
    }
  }
  .name {
    font-size: 32px;
    color: #ffffff;
    margin: 20px 0px 20px 0px;
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
  width: 100%;
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
