<template>
  <div class="ProjectManage-left flex">
    <div>
      <BaseTitle title="项目投资信息" :width="750" />
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
      <BaseTitle title="项目列表" :width="750" />
      <div class="lunbo" @mouseenter="mouseEnter" @mouseleave="mouseleave">
        <div class="titles">
          <div>
            <span v-for="item in swiperTitle" :key="item">{{item}}</span>
          </div>
        </div>
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slider v-for="(item, index) in list" :key="`item-${index}`">
            <div>
              <div class="inner-div">
                <span>{{ item.name }}</span>
                <span>{{ item.dept }}</span>
                <span>{{ item.startTimt }}</span>
                <span>{{ item.endTime }}</span>
                <span>{{ item.money }}</span>
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
      swiperTitle: ['项目名称', '牵头单位', '拟开工时间', '拟结束时间', '投资额'],
      list: [
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        }, {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
        {
          name: '六横人民广场',
          dept: '六横镇政府',
          startTimt: '2020-05-10',
          endTime: '2025-05-10',
          money: '450万',
        },
      ],
      swiperOption: {
        direction: 'vertical',
        speed: 1000,
        slidesPerView: 9,
        spaceBetween: 0,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        // autoplay: true,
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
    if (this.list.length < 10) {
      this.swiper.autoplay = false;
    }
  },
  methods: {
    mouseEnter() {
      if (this.list.length < 10) {
        return;
      }
      this.swiper.autoplay.stop();
    },
    mouseleave() {
      if (this.list.length < 10) {
        return;
      }
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
    &:nth-child(2) {
      margin-left: 40px;
    }
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
      width: 50%;
      height: calc(100% - 83px);

      .titles {
        width: 793px;
        height: 75px;
        background: url('./images/list-bg.png') no-repeat 100% 100%;
        > div {
          height: 75px;
          line-height: 75px;
          font-size: 29px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #ffffff;
          padding: 0 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            &:nth-child(1) {
              width: 24%;
            }
            &:nth-child(2) {
              width: 20%;
            }
            &:nth-child(3) {
              width: 22%;
            }
            &:nth-child(4) {
              width: 22%;
            }
            &:nth-child(5) {
              width: 12%;
            }
          }
        }
      }
    }
  }
}
.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-slide {
    width: 795px;
    background: url('./images/list-bg.png') no-repeat 100% 100%;
    display: flex;
    align-items: center;
    font-size: 26px;
    box-sizing: border-box;
    .inner-div {
      width: 100%;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: #78d2ff;
      padding: 0 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        height: 75px;
          line-height: 100px;
        &:nth-child(1) {
          width: 24%;
        }
        &:nth-child(2) {
          width: 20%;
        }
        &:nth-child(3) {
          width: 22%;
        }
        &:nth-child(4) {
          width: 22%;
        }
        &:nth-child(5) {
          width: 10%;
        }
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
