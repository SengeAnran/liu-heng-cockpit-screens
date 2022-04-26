<template>
  <div @mouseenter="mouseEnter(dataList)" @mouseleave="mouseleave(dataList)" >
    <swiper  ref="mySwiper" :options="swiperOption" v-if="dataList.length > 1">
      <swiper-slider v-for="(item, index) in dataList" :key="index">
        <div class="content1">
          <div class="img" @click="showImgs(item.zp)">
            <img :src="item.zp" />
          </div>
          <div class="content">
            <div class="name">告警详情</div>
            <div class="kouhao">
              <div class="detail">
                <div class="title">告警地点: </div>
                <div class="detail-content" :title="item.address">{{ item.address }}</div>
              </div>
              <div class="detail">
                <div class="title">告警类型: </div>
                <div class="detail-content" :title="item.type">{{ item.type }}</div>
              </div>
              <div class="detail">
                <div class="title">告警时间: </div>
                <div class="detail-content" :title="item.time">{{ item.time }}</div>
              </div>
            </div>
            <div class="monitor" @click="showMonitor(item.cameraCode)">
              <img src="./img/icon_jk.png" alt="">
              实时监控
            </div>
          </div>
        </div>
      </swiper-slider>
    </swiper>
    <div v-else class="content1">
      <div class="img" @click="showImgs(dataList[0].zp)">
        <img :src="dataList[0].zp" />
      </div>
      <div class="content">
        <div class="name">告警详情</div>
        <div class="kouhao">
          <div class="detail">
            <div class="title">告警地点: </div>
            <div class="detail-content" :title="dataList[0].address">{{ dataList[0].address }}</div>
          </div>
          <div class="detail">
            <div class="title">告警类型: </div>
            <div class="detail-content" :title="dataList[0].type">{{ dataList[0].type }}</div>
          </div>
          <div class="detail">
            <div class="title">告警时间: </div>
            <div class="detail-content" :title="dataList[0].time">{{ dataList[0].time }}</div>
          </div>
        </div>
        <div class="monitor" @click="showMonitor(dataList[0].cameraCode)">
          <img src="./img/icon_jk.png" alt="">
          实时监控
        </div>
      </div>
    </div>
    <monitorShow :show.sync="monitorShow" :cameraIndexCode="cameraIndexCode"/>
    <ImageModal :show.sync="modalShow" :data="imgDataList" />
  </div>
</template>

<script>
import swiper from '@/components/Swiper';
import SwiperSlider from '@/components/SwiperSlider';
import { getAbnormalAnalysis } from '@/api/Strength/GovernServe/api';
import ImageModal from "./ImageModal";
import monitorShow from "./monitorShow/index";
export default {
  components: {
    swiper,
    SwiperSlider,
    ImageModal,
    monitorShow,
  },
  data() {
    return {
      dataList: [],
      imgDataList: '',
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
      modalShow: false,
      monitorShow: false,
      cameraIndexCode: '',
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    showMonitor(cameraCode = '') {
      console.log(cameraCode);
      if (!cameraCode) return
      this.cameraIndexCode = cameraCode;
      this.monitorShow = true;
    },
    showImgs(dataList) {
      this.imgDataList = dataList;
      this.modalShow = true;
    },
    initData() {
      getAbnormalAnalysis({num: 100})
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
    width: 377px;
    height: 239px;
    overflow: hidden;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  .content {
    position: relative;
    height: 100%;
    padding: 20px;
    .kouhao {
      //border-top: 2px solid slategrey;
      width: 308px;

      padding: 10px;
      margin-top: 20px;
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
      .detail {
        display: flex;
        .title {
          margin-right: 5px;
          width: 103px;
        }
        .detail-content {
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .monitor {
      position: absolute;
      right: 35px;
      bottom: 81px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #82E2E4;
      line-height: 36px;
      img {
        margin-right: 12px;
        vertical-align: sub;
      }

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
