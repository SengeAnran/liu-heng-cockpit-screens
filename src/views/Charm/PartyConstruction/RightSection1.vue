<template>
  <div class="right-section1">
    <Title title="群团宣传情况" />
    <div class="section-content">
      <div class="loop-img">
        <Swiper
          ref="mySwiper"
          :options="swiperOptions"
          @slideChange="onSlideChange"
          class="swiper-main"
        >
          <swiper-slide v-for="(item, index) in imgList" :key="index">
            <div class="img-bg">
              <img :src="item.url" />
            </div>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </Swiper>
      </div>

      <div class="loop-content">
        <ul class="loop-tab">
          <li
            :class="{'active': currentTab === item.name}"
            v-for="(item, index) in tabList"
            :key="index"
            @click="selectTab(item.name, index)">{{item.name}}</li>
        </ul>

        <div >
          <p class="content">{{currentContent}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from './components/Title';
import { publicitySituation } from '@/api/Charm/PartyConstruction';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import { Swiper as SwiperClass, Pagination, Autoplay } from 'swiper/js/swiper.esm';
// Swiper modules
SwiperClass.use([Pagination, Autoplay]);

export default {
  components: {
    Title,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
      currentTab: '工会',
      dataList: [],
      tabList: [
        { name: '工会' },
        { name: '妇联' },
        { name: '团委' },
      ],
      imgList: [],
      currentContent: '迎接建党100周年活动',
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    mySwiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    onSlideChange(item) {
      this.currentTab = this.tabList[this.mySwiper.activeIndex].name;
      this.currentContent = this.dataList[this.mySwiper.activeIndex].xcnr;
      // console.log(this.dataList);
    },
    selectTab(name, index) {
      this.mySwiper.slideTo(index);
    },
    async getData() {
      const result = await publicitySituation().request();
      console.log('publicitySituation', result);
      this.tabList = result.map((i) => {
        return {
          name: i.qtlx,
        };
      });
      this.imgList = result.map((i) => {
        return {
          url: 'data:image/png;base64,' + i.xctp,
        };
      });
      this.dataList = result;
      this.currentContent = this.dataList[0].xcnr;
    },
  },
};
</script>
<style lang="scss" scoped>
.section-content{
  display: flex;
  padding-top: 1.8rem;
  *{
    box-sizing: border-box;
  }
  .loop-img{
    margin-top: .9rem;
    flex: none;
    width: 40.6rem;
    height: 40.6rem;
    background: url('~@/assets/images/Charm/loop-img-bg.png') no-repeat 0 0;
    background-size: 100% 100%;
    .swiper-main{
      width: 32rem;
      .img-bg{
        width: 32rem;
        height: 32rem;
        margin: 1.5rem auto .8rem;
        border-radius: 1rem;
        border: .1rem solid transparent;
        border-image: linear-gradient(to bottom, #96C5FD 0%, #D0E6FF 50%, #96C5FD 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 30rem;
          height: 30rem;
        }
      }
      .swiper-pagination{
        margin: 0 auto;
        width: 8.4rem;
        height: 2.4rem;
        background: rgba(162, 198, 240, 0.21);
        border: 1px solid rgba(255, 255, 255, .25);
        border-radius: 1.2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        bottom: initial;
        ::v-deep .swiper-pagination-bullet{
          display: inline-block;
          width: 1rem;
          height: 1rem;
          background: rgba(162, 198, 240, 0.7);
          border: .1rem solid rgb(255, 255, 255);
          border-radius: 50%;
          opacity: 0.23;
          &-active{
            opacity: .6;
          }
        }
      }
    }
  }

  .loop-content{
    .loop-tab{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 7rem;
      list-style: none;
      width: 44rem;
      overflow-x: auto;
      padding: 0;
      margin: 1rem 3rem;
      &::-webkit-scrollbar
      {
          width:16px;
          height:16px;
          background-color:#413f3f;
      }
      /*定义滚动条轨道
      内阴影+圆角*/
      &::-webkit-scrollbar-track
      {
          -webkit-box-shadow:inset 0 0 6px rgba(20, 34, 49, 0.3);
          // border-radius:10px;
          background-color:#0d1f38;
      }
      /*定义滑块
      内阴影+圆角*/
      &::-webkit-scrollbar-thumb
      {
          // border-radius:10px;
          -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
          background-color:rgb(70, 70, 70);
      }
      li{
        font-size: 3.4rem;
        color: rgba(255, 255, 255, .3);
        padding: 0 3rem;
        cursor: pointer;
        min-width: 14rem;
        width: 14rem;
        text-align: center;
        &.active{
          color: white;
          background: url('~@/assets/images/Charm/tab-active.png') no-repeat center;
          background-size: 160%;
        }
      }
    }
    .content{
      font-size: 1.8rem;
      color: rgba(255, 255, 255, .85);
      line-height: 3rem;
      padding: 1rem 0rem;
      padding-left: 3rem;
      width: 45rem;
      overflow-y: auto;
      max-height: 31rem;
      &::-webkit-scrollbar
      {
          width:16px;
          height:16px;
          background-color:#413f3f;
      }
      /*定义滚动条轨道
      内阴影+圆角*/
      &::-webkit-scrollbar-track
      {
          -webkit-box-shadow:inset 0 0 6px rgba(20, 34, 49, 0.3);
          // border-radius:10px;
          background-color:#0d1f38;
      }
      /*定义滑块
      内阴影+圆角*/
      &::-webkit-scrollbar-thumb
      {
          // border-radius:10px;
          -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
          background-color:rgb(70, 70, 70);
      }
    }
  }
}
</style>
