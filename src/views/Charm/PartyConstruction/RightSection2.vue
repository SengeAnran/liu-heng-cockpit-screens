<template>
  <div class="right-section2">
    <Title title="劳动竞赛" />
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

          <div class="swiper-pagination" style="height: 3rem;text-align: center" slot="pagination"></div>
        </Swiper>
      </div>

      <div class="loop-content">
        <h2 class="activity-title">五四青年节竞赛</h2>
        <p class="activity-label">举办时间：2021-05-23</p>
        <p class="activity-label">举办单位：六横镇团委</p>
        <p class="activity-label">举办地址：六横镇文化礼堂</p>

        <div class="activity-content">
          <p>项目总工黄志林下达了“大干100天”劳动竞赛施工计划节点目标，明确了劳动竞赛的开展时间、产值完成计划、考核办法及活动要求，并对技术质量安全作了重点讲解。
号召全体员工充分认识当前的严峻形势，团结协作、共同奋斗。他指出：形势是严峻的，但困难是暂时的，全体参建人员要心往一处想，劲儿往...处使，齐心协力做好各项工作</p>
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
    };
  },
  mounted() {
  },
  methods: {
    onSlideChange() {
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
    .activity-title{
      background: url('~@/assets/images/Charm/tab-active.png') no-repeat center;
      color: #fff;
      font-size: 3.4rem;
      background-size: 100% 100%;
      display: inline-block;
      margin: 1.5rem 0;
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
    }
  }
}
</style>
