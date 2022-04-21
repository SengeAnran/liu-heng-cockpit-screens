<template>
  <div>
    <div class="table">
      <div @mouseenter="mouseEnter(list1)" @mouseleave="mouseleave(list1)">
        <div class="table-title">
          <div v-for="item in list" :key="item" class="title-item">{{ item }}</div>
        </div>
        <swiper ref="mySwiper" :options="swiperOption" v-if="list1.length > 3">
          <swiper-slider v-for="(item, index) in list1" :key="index">
            <div class="table-body-item">
              <div :title="item.content">{{ item.content }}</div>
              <div :title="item.number">{{ item.number }}</div>
              <div :title="item.name">{{ item.name }}</div>
              <div>
                <img @click="showMonitor(item.cameraCode)"  style="margin-right: 29px" src="./img/icon_jk.png" alt="">
                <img @click="showImgs(item.zp)"  src="./img/icon_zp.png" alt="">
              </div>
            </div>
          </swiper-slider>
        </swiper>
        <div v-else class="table-body-item" v-for="(item, index) in list1" :key="index">
          <div :title="item.content">{{ item.content }}</div>
          <div :title="item.number">{{ item.number }}</div>
          <div :title="item.name">{{ item.name }}</div>
          <div>
            <img @click="showMonitor(item.cameraCode)"  style="margin-right: 29px" src="./img/icon_jk.png" alt="">
            <img @click="showImgs(item.zp)"  src="./img/icon_zp.png" alt="">
          </div>
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
// import Title from "../../../../../Overview/Traffic/components/BridgeAndTunnel/Title";
export default {
  components: {
    swiper,
    SwiperSlider,
    ImageModal,
    monitorShow,
  },
  data() {
    return {
      list: ['告警地点', '告警类型', '告警发生时间','监控抓拍'],
      list1: [
      ],
      swiperOption: {
        direction: 'vertical',
        speed: 1000,
        slidesPerView: 5,
        spaceBetween: 10,
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
      imgDataList: '',
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
      getAbnormalAnalysis({num: 200})
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.list1 = json.map((item) => {
            return {
              content: item.address,
              number: item.type,
              name: item.time,
              zp: item.zp,
              cameraCode: item.cameraCode,
            };
          });
        });
    },
    mouseEnter(lists) {
      if (lists.length < 5) {
        return;
      }
      // this.swiper.swiper.autoplay.stop();
      if (this.$refs.mySwiper) {
        this.$refs.mySwiper.swiper.autoplay.stop();
      }
    },
    mouseleave(lists) {
      if (lists.length < 5) {
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
.table {
  display: flex;
}
.table-digital {
  width: 200px;
  height: 150px;
  background: linear-gradient(180deg, rgba(22, 40, 47, 0.8), rgba(16, 31, 37, 0.8));
  border: 1px solid rgba(168, 247, 237, 0.2);
  opacity: 0.65;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
  .title {
    font-size: 18px;
    font-family: Source Han Sans SC;
    font-weight: 500;
    color: #78d2ff;
  }
}
.table-title {
  margin-top: 30px;
  width: 799px;
  height: 75px;
  border-image: linear-gradient(0deg, #ffffff) 10 10;
  background: linear-gradient(0deg, #5d5d5d 0%, #535353 99%);
  opacity: 0.8;
  border-radius: 14px;
  display: flex;
  justify-content: space-around;
  background: url('../img/list-bg.png') no-repeat 100% 100%;
  .title-item {
    width: 200px;
    text-align: center;
    line-height: 75px;
  }
}
.table-body-item {
  background: url('../img/list-bg.png') no-repeat 100% 100%;
  //margin: 1.2rem 0;
  //box-sizing: content-box;
  //margin-top: 10px;
  //margin-bottom: 10px;
  width: 795px;
  height: 75px;
  line-height: 75px;
  display: flex;
  justify-content: space-around;

  //justify-content: space-between;
  div {
    //margin-left: 10px;
    width: 180px;
    text-align: center;
    color: #AECACA;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.table-body-item :hover {
  cursor: pointer;
}
//.table-body {
//  height: 970px;
//  border-radius: 14px;
//
//  overflow: auto;
//  .table-body-item {
//    display: flex;
//    background: url('../img/list-bg.png') no-repeat 100% 100%;
//    margin-top: 10px;
//    div {
//      //margin-left: 10px;
//      width: 180px;
//      text-align: center;
//      line-height: 75px;
//      color: #59dbe6;
//      overflow: hidden;
//      white-space: nowrap;
//      text-overflow: ellipsis;
//    }
//  }
//  .table-body-item :hover {
//    cursor: pointer;
//  }
//}
.swiper-container {
  width: 100%;
  height: 347px;
  .swiper-slide {
    height: 75px !important;
    //box-sizing: border-box !important;
  }
}
</style>
