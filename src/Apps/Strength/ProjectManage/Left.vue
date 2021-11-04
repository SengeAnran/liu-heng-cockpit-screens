<template>
  <view-template class="ProjectManage-left flex" :interval="300" @interval="getData">
    <div>
      <BaseTitle title="项目投资信息" :width="750" />
      <div class="desc">
        <p>实时情况</p>
        <div class="flex desc-item">
          <div class="flex">
            <div class="label">已实现 <br />融资项目</div>
            <div class="count">
              <digital :loop="loop" :endNum="onTimeData.ysxrzxms || 0" :data="data" :config="config"></digital>
              <!-- <MyCountUp :endVal="onTimeData.ysxrzxms" />--><span class="unit">个</span>
            </div>
          </div>
          <div class="flex">
            <div class="label">已实现<br />融资总量</div>
            <div class="count">
              <digital :loop="loop" :endNum="onTimeData.yssrzzl || 0" :data="data" :config="config"></digital>
              <span class="unit">万</span>
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
      <BaseTitle title="投资增速分析" :width="780" />
      <div class="chart-box lunbo">
        <LineChart :line-data="lineData" />
      </div>
      <BaseTitle title="重大项目" :width="780" :top="600" />
      <div style="margin-top: 700px">
        <Xtable></Xtable>
      </div>
    </div>
  </view-template>
</template>

<script>
import BaseTitle from '../../Overview/Medical/components/BaseTitle';
import YYLineBarChart from '../../Overview/Medical/components/YYLineBarChart';
import LineChart from '../../Overview/Medical/components/LineChart';
import Xtable from './table/table';
import {
  realtimeInvestment,
  projectIndustryDistribution,
  projectCommencement,
  itemsList,
  analysisOfInvestmentGrowth,
} from '@/api/Strength/ProjectManage/api';
export default {
  name: 'ProjectManageLeft',
  components: { BaseTitle, YYLineBarChart, LineChart, Xtable },
  data() {
    return {
      mainPro: {},
      lineData: {
        title: '增速分析',
        yname1: '百分比%',
        lineColor11: 'rgba(111, 216, 238, 1)',
        showArea: false,
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 6, 8, 9, 12],
      },
      data: {
        content: 1000,
        // unit: '人',
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
          fontSize: '5rem',
          fontFamily: 'DINPro',
          color: '#6AD1F7',
        },
        unit: {
          fontSize: '2rem',
          color: '#6AD1F7',
        },
      },
      swiperTitle: ['项目名称', '牵头单位', '拟开工时间', '拟结束时间', '投资额'],
      list: [],
      onTimeData: {
        ysxrzxms: 203,
        yssrzzl: 5420,
      },
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
      console.log(this.$refs.mySwiper.swiper);
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    this.getData();
    this.analysisOfInvestmentGrowth();
  },
  methods: {
    // 增速分析
    analysisOfInvestmentGrowth() {
      analysisOfInvestmentGrowth()
        .request()
        .then((res) => {
          if (res && res.length) {
            const xData = [];
            const data1 = [];
            res.map((item) => {
              xData.push(item.sj);
              data1.push(item.zs * 100);
            });
            this.lineData.xData = xData;
            this.lineData.data1 = data1;
          }
        });
    },
    getData() {
      this.realtimeInvestment();
      this.projectIndustryDistribution();
      this.projectCommencement();
      this.itemsList();
    },
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
    // 实时
    realtimeInvestment() {
      realtimeInvestment()
        .request()
        .then((res) => {
          if (res && res.length) {
            this.onTimeData = res[0];
          }
        });
    },
    // 项目行业分布
    projectIndustryDistribution() {
      projectIndustryDistribution()
        .request()
        .then((res) => {
          if (res.tze && res.tze.length) {
            const xData = [];
            const data2 = [];
            res.tze.map((item) => {
              xData.push(item.value);
              data2.push(+item.label);
            });
            this.lineBarDataBussiness.xData = xData;
            this.lineBarDataBussiness.data2 = data2;
          }
          if (res.xms && res.xms.length) {
            const data1 = [];
            res.xms.map((item) => {
              data1.push(+item.label);
            });
            this.lineBarDataBussiness.data1 = data1;
          }
        });
    },
    // 项目开工情况
    projectCommencement() {
      projectCommencement()
        .request()
        .then((res) => {
          if (res && res.length) {
            const xData = [];
            const data1 = [];
            const data2 = [];
            const data3 = [];
            res.map((item) => {
              xData.push(item.qymc);
              data1.push(item.percent.slice(0, -1));
              data2.push(item.xmzs);
              data3.push(item.kgzs);
            });
            this.lineBarData.xData = xData;
            this.lineBarData.data1 = data1;
            this.lineBarData.data2 = data2;
            this.lineBarData.data3 = data3;
          }
        });
    },
    // 轮播列表
    itemsList() {
      itemsList()
        .request()
        .then((res) => {
          if (res && res.length) {
            this.list = res;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.tableXm {
  display: flex;
  // position: absolute;
  top: 1600px;
  .digital {
    width: 200px;
    height: 190px;
    background: linear-gradient(180deg, rgba(22, 40, 47, 0.8), rgba(16, 31, 37, 0.8));
    border: 1px solid rgba(168, 247, 237, 0.2);
    opacity: 0.65;
    border-radius: 10px;
  }
}

.flex {
  display: flex;
  justify-content: space-between;
}
.ProjectManage-left {
  position: absolute;
  top: 200px;
  left: 200px;
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
      top: 62px;
      width: 50%;
      height: 500px;
      margin-top: 0;
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
  }
}
.outer-div {
  width: 795px;
  margin-top: 34px;
  background: url('./images/list-bg.png') no-repeat 100% 100%;
  //display: flex;
  align-items: center;
  font-size: 26px;
  span {
    line-height: 75px !important;
  }
}
.inner-div {
  width: 100%;
  height: 75px;
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
@keyframes detailRoll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20%);
  }
}
</style>
