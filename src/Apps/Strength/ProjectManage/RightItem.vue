<template>
  <div style="overflow: auto; height: 1000px">
    <div @mouseenter="mouseEnter(dataList)" @mouseleave="mouseleave(dataList)" >
      <swiper  ref="mySwiper" :options="swiperOption" v-if="dataList.length > 2">
        <swiper-slider v-for="(item, index) in dataList" :key="index">
          <div class="content">
            <div class="title">{{item.name}}</div>
            <div class="flex">
              <div class="left-img" @mouseenter="mouseEnter2(item.pictures)" @mouseleave="mouseleave2(item.pictures)" @click="showImgs(item.pictures)">
                <swiper v-if="item.pictures && item.pictures.length > 1" ref="myImgSwiper" :options="swiperOption2">
                  <swiper-slider v-for="(item2, index2) in item.pictures" :key="index2">
                    <div class="img">
                      <img :src="'data:image/png;base64,'+item2.tp" alt="111" />
                    </div>
                  </swiper-slider>
                </swiper>
                <div v-else class="img">
                  <img v-if="item.pictures && item.pictures.length > 0" :src="'data:image/png;base64,'+item.pictures[0].tp" alt="111" />
                </div>
              </div>
              <div class="content-name" :title="item.content">
                {{ item.content }}
              </div>
            </div>
          </div>
        </swiper-slider>
      </swiper>
      <div v-else class="content" v-for="(item, index) in dataList" :key="index">
        <div class="title">{{item.name}}</div>
        <div class="flex">
          <div class="left-img" @mouseenter="mouseEnter2(item.pictures)" @mouseleave="mouseleave2(item.pictures)" >
            <swiper v-if="item.pictures && item.pictures.length > 1" ref="myImgSwiper" :options="swiperOption2">
              <swiper-slider v-for="(item2, index2) in item.pictures" :key="index2">
                <div class="img">
                  <img :src="'data:image/png;base64,'+item2.tp" alt="111" />
                </div>
              </swiper-slider>
            </swiper>
            <div v-else class="img">
              <img v-if="item.pictures && item.pictures.length > 0" :src="'data:image/png;base64,'+item.pictures[0].tp" alt="111" />
            </div>
          </div>
          <div class="content-name">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
    <ImageModal :show.sync="modalShow" :data="imgDataList" />
  </div>
</template>

<script>
import { getMerchants } from '@/api/Strength/ProjectManage/api';
import swiper from '@/components/Swiper';
import SwiperSlider from '@/components/SwiperSlider';
import ImageModal from "./ImageModal";
export default {
  components: {
    swiper,
    SwiperSlider,
    ImageModal,
  },
  data() {
    return {
      dataList: [],
      swiperOption: {
        direction: 'vertical',
        speed: 1000,
        slidesPerView: 2,
        spaceBetween: 0,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        // autoplay: true,
      },
      swiperOption2: {
        // direction: 'vertical',
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
      // testImgUrl: '',
      imgDataList: [],
      modalShow: false,
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getMerchants().request().then((res) => {
        console.log(res);
        res.forEach((item) => {
          this.dataList.push({
            name: item.xmmc,
            content: item.xmjs,
            pictures: item.pictures,
          });
        });
        // this.testImgUrl = this.dataList[0].pictures[0].tp;
      });
    },
    mouseEnter(lists) {
      if (lists.length < 1) {
        return;
      }
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
    mouseEnter2(lists) {
      if (!lists || lists.length < 1) {
        return;
      }
      if (this.$refs.myImgSwiper) {
        this.$refs.myImgSwiper.swiper.autoplay.stop();
      }
    },
    mouseleave2(lists) {
      if (!lists || lists.length < 1) {
        return;
      }
      if (this.$refs.myImgSwiper) {
        this.$refs.myImgSwiper.swiper.autoplay.start();
      }
    },
    showImgs(dataList) {
      this.imgDataList = dataList;
      console.log(this.imgDataList);
      this.modalShow = true;
    }
  },
};
</script>
<style lang="scss" scoped>
.test-img {
  width: 400px;
  height: 300px;
  background: #FFFFFF;
}
img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.flex {
  display: flex;
  width: 1650px;
  height: 384px;
  background-color: rgba(18, 60, 79, 0.2);
}
.content {
  height: 500px;
}
.title {
  width: 203px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  height: 47px;
  text-align: center;
  background-image: url(./img/right-titleBg.png);
  line-height: 47px;
  background-repeat: no-repeat;
}
.img {
  width: 787px;
  height: 308px;
  //padding: 8px;
}
.content-name {
  padding: 40px;
  width: 795px;
  height: 276px;
  font-size: 24px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 36px;
}
.swiper-container {
  width: 100%;
  height: 1000px;
  .swiper-slide {
    //height: 75px !important;
    //box-sizing: border-box !important;
  }
}
.left-img {
  width: 795px;
  height: 308px;
  overflow: hidden;
}
.img {
  .swiper-container {
    width: 795px;
    height: 308px;
    .swiper-slide {
      //height: 308px !important;
      width: 795px !important;
      //box-sizing: border-box !important;
    }
  }
}
</style>
