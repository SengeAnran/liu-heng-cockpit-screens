<template>
  <div class="right-section4">
    <Title title="政策文件" />
    <div class="section-content">
      <ul class="loop-tab">
        <li
          :class="{'active': currentTab === item.name}"
          v-for="(item, index) in tabList"
          :key="index"
          @click="selectTab(item.name, index)">{{item.name}}</li>
      </ul>
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        class="main-swiper"
      >
        <swiper-slide class="swiper-slide" v-for="(item, index) in dataList" :key="index">
          <div class="row">
            <div class="file-label">{{item.label}}</div>
            <div class="file-time">{{item.time}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { partyDocument } from '@/api/Charm/PartyConstruction';
import Title from './components/Title';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  components: {
    Title,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      tabList: [
        { name: '工会' },
        { name: '妇联' },
        { name: '团委' },
      ],
      currentTab: '工会',
      swiperOptions: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 15,
        autoplay: {
          delay: 3000,
        },
      },
      dataList: [
        {
          label: '中共中央印发《中国共产党中央委员会工作条例》',
          time: '2021-05-23',
        },
        {
          label: '中共中央印发《中国共产党中央委员会工作条例》',
          time: '2021-05-23',
        },
        {
          label: '中共中央印发《中国共产党中央委员会工作条例》',
          time: '2021-05-23',
        },
        {
          label: '中共中央印发《中国共产党中央委员会工作条例》',
          time: '2021-05-23',
        },
        {
          label: '中共中央印发《中国共产党中央委员会工作条例》',
          time: '2021-05-23',
        },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    selectTab(name, index) {
      this.currentTab = name;
    },
    async getData() {
      const result = await partyDocument().request();
      console.log('partyDocument', result);
      if (result) {
        this.dataList = result.map((i) => {
          return {
            label: i.wjm,
            time: i.rq,
          };
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.right-section4{
  .section-content{
    // padding-top: 1rem;
    .loop-tab{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 7rem;
      list-style: none;
      width: 100%;
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
    .main-swiper{
      ::v-deep .swiper-wrapper{
        height: 30.1rem;
        .swiper-slide{
          height: 6.4rem;
          background: url('~@/assets/images/Charm/swiper-row-bg.png') no-repeat 0 0;
          .row{
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            line-height: 6.4rem;
            color: rgba(139, 173, 211, 1);
            font-size: 2.4rem;
          }
        }
      }
    }
  }
}
</style>
