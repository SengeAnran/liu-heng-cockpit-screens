<template>
  <div class="ProjectManage-left flex">
    <div>
      <BaseTitle title="项目投资信息"
                 :width="750" />
      <div class="desc">
        <p>实时情况</p>
        <div class="flex desc-item">
          <div class="flex">
            <div class="label">已实现 <br />融资项目</div>
            <div class="count">
              <MyCountUp :endVal="233" /><span class="unit">个</span>
            </div>
          </div>
          <div class="flex">
            <div class="label">
              已实现<br />融资总量
            </div>
            <div class="count">
              <MyCountUp :endVal="233" /><span class="unit">万</span>
            </div>
          </div>
        </div>
      </div>
      <div class="chart-box">
        <YYLineBarChart :data="lineBarDataBussiness" />
      </div>
      <div class="chart-box">
        <YYLineBarChart :data="lineBarData" />
      </div>
    </div>
    <div>
      <BaseTitle title="项目列表"
                 :width="750" />

      <div class="lunbo" @mouseenter="mouseEnter" @mouseleave="mouseleave">
        <swiper ref="mySwiper"
                :options="swiperOption">
          <swiper-slider v-for="(item, index) in list"
                         :key="`item-${index}`">
            <!-- <img :src="item.image" alt="" /> -->
            <div>
              <div>
                <span>{{ item.type }}</span>
                <span>{{ item.time }}</span>
              </div>
              <div>
                <div :class="['detail', `detail-${index+1}`]">{{ item.detail }}</div>
              </div>
            </div>
          </swiper-slider>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '../../Overview/Medical/components/BaseTitle';
import MyCountUp from '../../Overview/Medical/components/ICountUp';
import YYLineBarChart from '../../Overview/Medical/components/YYLineBarChart';
import swiper from '../../Overview/Medical/components/Swiper';
import SwiperSlider from '../../Overview/Medical/components/SwiperSlider';
export default {
  name: 'ProjectManageLeft',
  components: { BaseTitle, MyCountUp, YYLineBarChart, swiper, SwiperSlider },
  data() {
    return {
      list: [
        {
          type: '萧山区邵钧时被诈骗案',
          time: '2020.09.25',
          // image: img2,
          detail:
            '2020年9月25日，萧山',
        }, {
          type: '萧山区邵钧时被诈骗案',
          time: '2020.09.25',
          // image: img2,
          detail:
            '2020年9月25日，萧山',
        }, {
          type: '萧山区邵钧时被诈骗案',
          time: '2020.09.25',
          // image: img2,
          detail:
            '2020年9月25日，萧山',
        }, {
          type: '萧山区邵钧时被诈骗案',
          time: '2020.09.25',
          // image: img2,
          detail:
            '2020年9月25日，萧山',
        }, {
          type: '萧山区邵钧时被诈骗案',
          time: '2020.09.25',
          // image: img2,
          detail:
            '2020年9月25日，萧山',
        },
      ],
      swiperOption: {
        direction: 'vertical',
        speed: 3000,
        loop: true,
        grabCursor: true, // 鼠标hover 变成手掌效果
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        // autoplay: false,
        slidesPerView: 3,
        spaceBetween: 15,
      },
      lineBarDataBussiness: {
        title: '项目行业分布',
        name1: '投资额',
        legendOrient: 'horizontal',
        name2: '项目数',
        lineColor: 'rgba(238, 192, 100, 1)',
        barColor1: 'rgba(111, 216, 238, 1)',
        barColor2: 'rgba(111, 216, 238, .3)',
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 26, 8, 49, 99],
        data2: [10, 31, 5, 163, 18, 9, 199],
      },
      lineBarData: {
        title: '项目开工情况',
        name1: '开工率',
        legendOrient: 'horizontal',
        name2: '项目总数',
        name3: '开工总数',
        lineColor: 'rgba(238, 192, 100, 1)',
        barColor1: 'rgba(49, 234, 188, 1)',
        barColor2: 'rgba(49, 234, 188, 1)',
        barColor21: 'rgba(97, 130, 174, 1)',
        barColor22: 'rgba(97, 130, 174, 1)',
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 26, 8, 49, 99],
        data2: [10, 31, 5, 163, 18, 9, 199],
        data3: [120, 321, 15, 163, 128, 19, 99],
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    if (this.list.length < 4) {
      this.swiper.autoplay = false;
    }
  },
  methods: {
    mouseEnter() {
      if (this.list.length < 4) { return; }
      this.swiper.autoplay.stop();
    },
    mouseleave() {
      if (this.list.length < 4) { return; }
      this.swiper.autoplay.start();
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.ProjectManage-left {
  position: absolute;
  top: 263px;
  left: 160px;
  width: 1650px;
  height: 1027px;
  font-size: 24px;
  color: #fff;
  z-index: 999;
  > div {
    width: 50%;
    .desc {
      margin-top: 63px;
      p {
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        height: 74px;
        line-height: 94px;
        color: #ffffff;
      }
      .desc-item {
        text-align: center;
        height: 123px;
        > div {
          width: 382px;
          // margin-right: 38px;
          background: url('./images/ontime-bg.png');
        }
        .label {
          width: 158px;
          height: 98px;
          font-size: 24px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          background: -webkit-linear-gradient(bottom, rgba(92, 207, 207, 1), rgba(225, 255, 255, 1));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding-top: 25px;
        }
        .count {
          width: 224px;
          height: 123px;
          font-size: 48px;
          font-family: DIN;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .unit {
            font-size: 22px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #ffffff;
            line-height: 29px;
            opacity: 0.5;
          }
        }
      }
    }
    .chart-box {
      height: 382px;
    }

    .lunbo {
      position: absolute;
      top: 83px;
    }
  }
}
.swiper-container {
    width: 594px;
    height: 717px;
    position: absolute;
    // border: 1px solid red;
    top: 135px;
    left: 35px;
    box-sizing: border-box;

    .swiper-slide {
      width: 100%;
      height: 229px;
      background: url("./images/list-bg.png") no-repeat;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 10px;

      img {
        width: 250px;
        height: 200px;
      }

      > div {
        width: 340px;
        height: 229px;
        font-size: 18px;
        padding: 10px;
        box-sizing: border-box;

        > div:first-child {
          width: 100%;
          height: 45px;
          position: relative;
          left: -10px;
          &::before {
            content: "";
            width: 33px;
            height: 45px;
            background: url("./images/list-bg.png");
            position: absolute;
            // left: 0;
            // top: 0;
          }
          >span{
            line-height: 45px;
            position: absolute;
          }
          >span:first-child{
            left: 30px;
          }
          >span:last-child{
            color: #faec75;
            font-style: italic;
            right: -15px;
          }
        }
        > div:last-child {
          width: 100%;
          height: 160px;
          overflow: hidden;
          .detail {
            padding-left: 5px;
            font-size: 15.5px;
            text-indent: 2em;
          }
          .detail-1 {
            /*animation: detailRoll 12s 3s linear infinite;*/
          }
          .detail-2 {
            animation: detailRoll 8s 3s linear infinite;
          }
          // overflow-y: auto;
          // ::-webkit-scrollbar {
          //   width: 6px;
          //   height: 6px;
          //   background-color: red;
          // }
        }
      }
    }
  }
@keyframes detailRoll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20%);
    }
  }
</style>
