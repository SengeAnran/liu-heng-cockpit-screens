<template>
  <div class="ProjectManage-right">
    <div>
      <BaseTitle title="投资增速分析" :width="780" />
      <div class="chart-box">
        <LineChart :line-data="lineData" />
      </div>
      <BaseTitle  title="项目许可情况" :width="780" :top="550" />
      <div class="chart-box box1">
        <div class="box-left" @mouseenter="mouseEnter" @mouseleave="mouseleave">
          <div class="titles">
            <div>
              <span v-for="item in swiperTitle" :key="item">{{item}}</span>
            </div>
          </div>
          <swiper ref="manageSwiper" :options="swiperOption">
            <swiper-slider v-for="(item, index) in list" :key="`item-${index}`">
              <div>
                <div class="inner-div">
                  <span>{{ item.name }}</span>
                  <span>{{ item.area }}</span>
                  <span><i :class="['suqare',`${item.isXuke?'active':''}`]"></i></span>
                  <span><i :class="['suqare',`${item.isPro?'active':''}`]"></i></span>
                  <span> <i :class="['suqare',`${item.isImplent?'active':''}`]"></i></span>
                </div>
              </div>
            </swiper-slider>
          </swiper>
        </div>
      </div>
    </div>
    <div class="right-right">
      <BaseTitle title="资金占比分析" :width="780" />
      <div class="chart-box">
        <PieChart :data="pieTypeData" legendType="pec" title="资金占比分析" />
      </div>
      <BaseTitle title="重大项目" :width="780" :top="550" />
      <div class="chart-box box1">
        <div class="flex">
          <div>
            <div class="desc-item">项目总数（个）
              <MyCountUp :endVal="2333" />
            </div>
            <div class="desc-item">项目总量（万元）
              <MyCountUp :endVal="22333" />
            </div>
          </div>
          <div class="lunbo-list" @mouseenter="mouseEnterMain" @mouseleave="mouseleaveMain">
            <div class="title-list">
              <div>
                <span v-for="item in swiperTitle1" :key="item">{{item}}</span>
              </div>
            </div>
            <swiper ref="manageMainSwiper" :options="swiperOption">
              <swiper-slider v-for="(item, index) in list1" :key="`item-${index}`">
                <div>
                  <div class="inner-div-main">
                    <span>{{ item.plan }}</span>
                    <span>{{ item.num }}</span>
                    <span>{{ item.money }}</span>
                  </div>
                </div>
              </swiper-slider>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '../../Overview/Medical/components/BaseTitle';
import LineChart from '../../Overview/Medical/components/LineChart';
import PieChart from '../../Overview/Medical/components/PieChart';
import MyCountUp from '../../Overview/Medical/components/ICountUp';
import swiper from '../../Overview/Medical/components/Swiper';
import SwiperSlider from '../../Overview/Medical/components/SwiperSlider';
export default {
  name: 'ProjectManageRight',
  components: { BaseTitle, LineChart, PieChart, MyCountUp, swiper, SwiperSlider },
  data() {
    return {
      swiperTitle: ['项目名称', '地区', '用地规划许可', '工程规划许可', '施工许可'],
      list: [
        {
          name: '蛟头水利工程',
          area: '蛟头',
          isXuke: true,
          isPro: true,
          isImplent: false,
        },
        {
          name: '蛟头水利工程',
          area: '蛟头',
          isXuke: true,
          isPro: false,
          isImplent: false,
        },
        {
          name: '蛟头水利工程',
          area: '蛟头',
          isXuke: false,
          isPro: true,
          isImplent: false,
        },
        {
          name: '蛟头水利工程',
          area: '蛟头',
          isXuke: true,
          isPro: true,
          isImplent: false,
        },
        {
          name: '蛟头水利工程',
          area: '蛟头',
          isXuke: true,
          isPro: true,
          isImplent: false,
        },
      ],
      swiperTitle1: ['项目计划 ', '项目总数', '累计完成投资额'],
      list1: [
        {
          plan: '六横智慧海项目',
          num: '120',
          money: '7000万元',
        },
        {
          plan: '六横智慧海项目',
          num: '120',
          money: '7000万元',
        },
        {
          plan: '六横智慧海项目',
          num: '120',
          money: '7000万元',
        },
        {
          plan: '六横智慧海项目',
          num: '120',
          money: '7000万元',
        },
        {
          plan: '六横智慧海项目',
          num: '120',
          money: '7000万元',
        },
      ],
      swiperOption: {
        direction: 'vertical',
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        grabCursor: true,
        // autoplay: {
        //   delay: 1500,
        //   disableOnInteraction: false,
        // },
        autoplay: false,
      },
      pieTypeData: [
        { name: '自有资金', value: 10 },
        { name: '财政性资金', value: 20 },
        { name: '银行贷款', value: 30 },
        { name: '其他资金', value: 40 },
      ],
      lineData: {
        title: '增速分析',
        yname1: '百分比%',
        lineColor11: 'rgba(111, 216, 238, 1)',
        showArea: false,
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 6, 8, 9, 12],
      },
      lineBarData: {
        title: '图表',
        name1: '增长率',
        name2: '人数',
        lineColor: 'rgba(89, 219, 230, 1)',
        barColor1: 'rgba(245, 165, 100, .8)',
        barColor2: 'rgba(245, 165, 100, .3)',
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 26, 8, 49, 99], // 增长率
        data2: [10, 31, 5, 163, 18, 9, 199], // 人数
      },
    };
  },
  computed: {
    manageSwiper() {
      console.log(this.$refs.manageSwiper, '');
      return this.$refs.manageSwiper.swiper;
    },
    swiper() {
      return this.$refs.manageMainSwiper.swiper;
    },
  },
  mounted() {
    if (this.list1.length < 4) {
      this.swiper.autoplay = false;
    }
    this.$nextTick(() => {
      if (this.list.length < 4) {
        console.log(this.manageSwiper, '=====');
        this.manageSwiper.autoplay = false;
      }
    });
  },
  methods: {
    mouseEnter() {
      if (this.list.length < 4) {
        return;
      }
      this.manageSwiper.autoplay.stop();
    },
    mouseleave() {
      if (this.list.length < 4) {
        return;
      }
      this.manageSwiper.autoplay.start();
    },
    mouseEnterMain() {
      if (this.list1.length < 4) {
        this.swiper.autoplay.stop();
      }
    },
    mouseleaveMain() {
      if (this.list1.length < 4) {
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
}
.ProjectManage-right {
  position: absolute;
  top: 263px;
  right: 160px;
  width: 1650px;
  height: 1027px;
  font-size: 24px;
  display: flex;
  color: #fff;
  z-index: 999;
  > div {
    height: 100%;
    width: 50%;
  }
  .right-right {
    right: 0;
    margin-left: 40px;
  }
  .chart-box {
    height: 415px;
    width: 50%;
    position: absolute;
    top: 60px;
    .pieChart {
      margin-top: 50px;
      height: 360px;
    }
  }
  .box1 {
    top: 620px;
    margin-top: 18px;
    .box-left {
      width: 795px;
      height: 412px;
      overflow: hidden;
      .titles {
        width: 795px;
        height: 75px;
        background: url('./images/list-bg.png') no-repeat 100% 100%;
        > div {
          height: 75px;
          line-height: 75px;
          font-size: 24px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #ffffff;
          padding: 0 27px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            &:nth-child(1) {
              width: 25%;
            }
            &:nth-child(2) {
              width: 12%;
            }
            &:nth-child(3) {
              width: 28%;
            }
            &:nth-child(4) {
              width: 28%;
            }
            &:nth-child(5) {
              width: 18%;
            }
          }
        }
      }
      .swiper-container {
        width: 100%;
        height: 100%;
        margin-top: 10px;
        .swiper-slide {
          width: 795px;
          background: url('./images/list-right-bg.png') no-repeat 100% 100%;
          display: flex;
          align-items: center;
          font-size: 24px;
          box-sizing: border-box;
          > div {
            height: 100px;
            line-height: 130px;
            width: 100%;
          }
          .inner-div {
            width: 100%;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: Source Han Sans SC;
            font-weight: 500;
            color: rgba(120, 203, 246, 1);
            padding: 0 32px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              &:nth-child(1) {
                width: 25%;
              }
              &:nth-child(2) {
                width: 12%;
              }
              &:nth-child(3) {
                width: 28%;
                text-align: center;
              }
              &:nth-child(4) {
                width: 28%;
                text-align: center;
              }
              &:nth-child(5) {
                width: 18%;
                text-align: center;
              }
              i{
                display: inline-block;
              }
            }
            .suqare {
              width: 20px;
              height: 20px;
              background: transparent;
              border: 2px solid #78cbf6;
              border-radius: 2px;
            }
            .active {
              background: rgba(120, 203, 246, 0.8);
            }
          }
        }
      }
    }
    .desc-item {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 18px;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: #78d2ff;
      width: 200px;
      height: 190px;
      background-image: url('./images/mainpro-bg.png');
      margin-top: 18px;
      &:nth-child(1) {
        margin-top: 0;
      }
      .iCountUp {
        font-size: 36px;
        font-family: DIN;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .lunbo-list {
      width: 585px;
      height: 410px;
      margin-left: 24px;
      overflow: hidden;
      .title-list {
        width: 585px;
        height: 75px;
        line-height: 75px;
        background: url('./images/list-mainpro-bg.png') no-repeat 100% 100%;
        > div {
          font-size: 24px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #ffffff;
          padding: 0 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            &:nth-child(1) {
              width: 35%;
            }
            &:nth-child(2) {
              width: 30%;
            }
            &:nth-child(3) {
              width: 35%;
            }
          }
        }
      }
      .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-slide {
          width: 585px;
          background: url('./images/list-mainpro-bg.png') no-repeat 100% 100%;
          display: flex;
          align-items: center;
          font-size: 24px;
          box-sizing: border-box;
          > div {
            width: 100%;
          }
          .inner-div-main {
            width: 100%;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: Source Han Sans SC;
            font-weight: 500;
            color: #59dbe6;
            padding: 0 32px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              height: 75px;
              line-height: 100px;
              &:nth-child(1) {
                width: 30%;
              }
              &:nth-child(2) {
                width: 20%;
              }
              &:nth-child(3) {
                width: 30%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
