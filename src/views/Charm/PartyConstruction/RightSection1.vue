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
          <swiper-slide>
            <div class="img-bg">
              <img src="@/assets/images/Charm/loopImg1.png" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img-bg">
              <img src="@/assets/images/Charm/loopImg1.png" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img-bg">
              <img src="@/assets/images/Charm/loopImg1.png" />
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
            @click="currentTab = item.name">{{item.name}}</li>
        </ul>

        <div class="content">
          <p>党的群团工作是党治国理政的一项经常性、基础性工作，是党动员广大人民群众为完成党的中心任务而奋斗的重要法宝。
回望中国共产党90多年砥砺奋进的光辉历程，党领导下的群团组织为实现党在各个历史时期的中心任务发挥了重要作用，作出了突出贡献。
今天，群团组织联系的广大人民群众更是全面建成小康社会、坚持和发展中国特色社会主义的基本力量，是全面深化改革、全面依法治国、巩固党的执政地位、维护国家长治久安的基本依靠。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from './components/Title';
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
      tabList: [
        { name: '工会' },
        { name: '妇联' },
        { name: '团委' },
      ],
    };
  },
  mounted() {
  },
  computed: {
    mySwiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    onSlideChange(item) {
      this.currentTab = this.tabList[this.mySwiper.activeIndex].name;
    },
  },
};
</script>
<style lang="scss" scoped>
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
    .loop-tab{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 7rem;
      list-style: none;
      li{
        font-size: 3.4rem;
        color: rgba(255, 255, 255, .3);
        padding: 0 3rem;
        cursor: pointer;
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
      padding: 0 2.9rem;
    }
  }
}
</style>
