<template>
  <div class="right-section4">
    <Title title="党建文件" />
    <div class="section-content">
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
    padding-top: 2rem;
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
