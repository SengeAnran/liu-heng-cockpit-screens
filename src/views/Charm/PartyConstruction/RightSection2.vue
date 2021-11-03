<template>
  <div class="right-section2">
    <Title title="活动掠影" />
    <div class="section-content">
      <div class="loop-img">
        <Swiper
          ref="mySwiper2"
          :options="swiperOptions"
          @slideChange="onSlideChange"
          class="swiper-main"
        >
          <swiper-slide v-for="(item, index) in dataList" :key="index">
            <div class="img-bg">
              <img :src="item.url" />
            </div>
          </swiper-slide>
          <!-- <swiper-slide>
            <div class="img-bg">
              <img src="@/assets/images/Charm/loopImg1.png" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img-bg">
              <img src="@/assets/images/Charm/loopImg1.png" />
            </div>
          </swiper-slide> -->

          <div class="swiper-pagination" style="height: 3rem;text-align: center" slot="pagination"></div>
        </Swiper>
      </div>

      <div class="loop-content">
        <ul class="loop-tab">
          <li
            :class="{'active': currentTab === item.qtlx}"
            v-for="(item, index) in dataList"
            :key="index"
            @click="selectTab(item.qtlx, index)">{{item.qtlx}}</li>
        </ul>

        <h2 class="activity-title">{{currentData.bt}}</h2>
        <p class="activity-label">举办时间：{{currentData.jbsj}}</p>
        <p class="activity-label">举办单位：{{currentData.jbdw}}</p>
        <p class="activity-label">举办地址：{{currentData.jbdz}}</p>

        <div class="activity-content">
          <p>{{currentData.jbnr}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from './components/Title';
import { workCompetition } from '@/api/Charm/PartyConstruction';
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
      tabList: [
        { name: '工会' },
        { name: '妇联' },
        { name: '团委' },
      ],
      currentTab: '工会',
      dataList: [],
      currentData: {},
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    mySwiper() {
      return this.$refs.mySwiper2.$swiper;
    },
  },
  methods: {
    onSlideChange() {
      this.currentTab = this.tabList[this.mySwiper.activeIndex].name;
      this.currentData = this.dataList[this.mySwiper.activeIndex];
      // console.log(this.currentData);
    },
    selectTab(name, index) {
      // console.log(name, index);
      this.mySwiper.slideTo(index);
    },
    async getData() {
      const result = await workCompetition().request();
      // console.log('workCompetition', result);

      this.dataList = result.map((i) => {
        return {
          ...i,
          url: 'data:image/png;base64,' + i.jstp,
        };
      });
      this.currentData = this.dataList[0];
    },
  },
};
</script>
<style lang="scss" scoped>
.right-section2{
  p{
    margin: 0;
  }
}
.section-content{
  display: flex;
  padding-top: 1.8rem;
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
    padding-left: 2.9rem;
    .loop-tab{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 7rem;
      list-style: none;
      width: 44rem;
      overflow-x: auto;
      padding: 0;
      margin: 1rem 0rem;
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
        width: 14rem;;
        text-align: center;
        &.active{
          color: white;
          background: url('~@/assets/images/Charm/tab-active.png') no-repeat center;
          background-size: 160%;
        }
      }
    }
    .activity-title{
      background: url('~@/assets/images/Charm/tab-active.png') no-repeat center;
      color: #fff;
      font-size: 3.4rem;
      background-size: 100% 100%;
      display: inline-block;
      margin: 0 0 1rem 0;
    }
    .activity-label{
      font-size: 2.4rem;
      color: #fff;
      line-height: 1.8;
    }

    .activity-content{
      font-size: 1.8rem;
      color: rgba(255, 255, 255, .85);
      line-height: 3rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
