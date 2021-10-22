<template>
  <div class="people_compose">
    <BaseTitle title="人口组成情况" :width="720" />
    <div class="item_wrapper">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slider>
          <div class="item">
            <img class="img" src="../../images/people_num.png" />
            <div class="title">户籍人口数量</div>
            <div class="count_wrapper">
              <digital :loop="loop" :endNum="item.hjrksl || 0" :data="data" :config="config"></digital>
            </div>
          </div>
        </swiper-slider>
        <swiper-slider>
          <div class="item">
            <img class="img" src="../../images/children_num.png" />
            <div class="title">新生儿出生数量</div>
            <div class="count_wrapper children">
              <digital :loop="loop" :endNum="item.xscssl || 0" :data="data" :config="config1"></digital>
              <!-- <CountUp :num="item.xscssl" />
              <span class="unit">人</span> -->
            </div>
          </div>
        </swiper-slider>
        <swiper-slider>
          <div class="item">
            <img class="img" src="../../images/dead_num.png" />
            <div class="title">人口死亡数量</div>
            <div class="count_wrapper dead">
              <digital :loop="loop" :endNum="item.rkswsl || 0" :data="data" :config="config2"></digital>
              <!-- <CountUp :num="item.rkswsl" />
              <span class="unit">人</span> -->
            </div>
          </div>
        </swiper-slider>
        <swiper-slider>
          <div class="item">
            <img class="img" src="../../images/dead_num.png" />
            <div class="title">人口死亡数量</div>
            <div class="count_wrapper dead">
              <digital :loop="loop" :endNum="item.rkswsl || 0" :data="data" :config="config2"></digital>
              <!-- <CountUp :num="item.rkswsl" />
              <span class="unit">人</span> -->
            </div>
          </div>
        </swiper-slider>
        <swiper-slider>
          <div class="item">
            <img class="img" src="../../images/dead_num.png" />
            <div class="title">人口死亡数量</div>
            <div class="count_wrapper dead">
              <digital :loop="loop" :endNum="item.rkswsl || 0" :data="data" :config="config2"></digital>
              <!-- <CountUp :num="item.rkswsl" />
              <span class="unit">人</span> -->
            </div>
          </div>
        </swiper-slider>
        <swiper-slider>
          <div class="item">
            <img class="img" src="../../images/dead_num.png" />
            <div class="title">人口死亡数量</div>
            <div class="count_wrapper dead">
              <digital :loop="loop" :endNum="item.rkswsl || 0" :data="data" :config="config2"></digital>
              <!-- <CountUp :num="item.rkswsl" />
              <span class="unit">人</span> -->
            </div>
          </div>
        </swiper-slider>
      </swiper>
    </div>
  </div>
</template>

<script>
import BaseTitle from '../../components/BaseTitle';
import { getPoputionForm } from '@/api/Overview/CityEvolution/api';
import swiper from '@/components/Swiper';
import SwiperSlider from '@/components/SwiperSlider';
export default {
  name: 'CityEvolution',
  components: {
    BaseTitle,
    swiper,
    SwiperSlider,
  },
  data() {
    return {
      item: {
        hjrksl: 10345,
        xscssl: 34,
        rkswsl: 12,
      },
      data: {
        content: 1000,
        unit: '人',
      },
      loop: {
        // 是否开启数值循环
        loop1: true,
        // 多久循环一次
        time: 10000,
        // 循环几次
        count: 99999,
        // 精确的小数位数
        decimals: 0,
        // 是否开启四舍五入 类型(0是不做什么取值操作,1去掉小数部分,2.向上取整,3.下取整,4.四舍五入)
        round: 1,
        decimal: '.',
        // 整数 分割器
        separator: ',',
      },
      config: {
        content: {
          fontSize: '6rem',
          fontFamily: 'DINPro',
          color: '#6AD1F7',
        },
        unit: {
          fontSize: '2rem',
          color: '#6AD1F7',
        },
      },
      config1: {
        content: {
          fontSize: '6rem',
          fontFamily: 'DINPro',
          color: '#47D6AA',
        },
        unit: {
          fontSize: '2rem',
          color: '#47D6AA',
        },
      },
      config2: {
        content: {
          fontSize: '6rem',
          fontFamily: 'DINPro',
          color: '#DF7B7A',
        },
        unit: {
          fontSize: '2rem',
          color: '#DF7B7A',
        },
      },
      swiperOption: {
        // direction: '',
        speed: 1000,
        slidesPerView: 3,
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
    this.getPopulationTarget();
  },
  methods: {
    getPopulationTarget() {
      getPoputionForm()
        .request()
        .then((res) => {
          this.item = res;
        });
    },
    mouseEnter(lists) {
      if (lists.length < 3) {
        return;
      }
      this.swiper.autoplay.stop();
    },
    mouseleave(lists) {
      if (lists.length < 3) {
        return;
      }
      this.swiper.autoplay.start();
    },
  },
};
</script>
<style lang="scss" scoped>
.people_compose {
  position: absolute;
  width: 840px;
  height: 550px;
  top: 0;
  left: 850px;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  .item_wrapper {
    margin-top: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .item {
      height: 413px;
      width: 250px;
      background: url('../../images/item_bg.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      .img {
        position: absolute;
        top: 75px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      .title {
        position: absolute;
        top: 142px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 120px;
        font-size: 30px;
        text-align: center;
        color: white;
      }
      .count_wrapper {
        position: absolute;
        bottom: 40px;
        height: 60px;
        line-height: 60px;
        font-size: 60px;
        font-weight: bolder;
        width: 250px;
        color: #66ccff;
        text-align: center;
        padding-left: 5px;
        font-family: DIN;
        .unit {
          font-size: 30px;
          color: #59dbe6;
          position: relative;
          right: 0px;
          top: -2px;
        }
      }
      .children {
        color: #31eabc;
        .unit {
          color: #31eabc;
        }
      }
      .dead {
        color: #ed7f64;
        .unit {
          color: #ed7f64;
        }
      }
    }
  }
  //.swiper-container {
  //  width: 100%;
  //  height: 227px;
  //  .swiper-slide {
  //    //height: 76px;
  //    box-sizing: border-box;
  //  }
  //}
}
</style>
