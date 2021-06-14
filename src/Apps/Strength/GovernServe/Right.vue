<template>
  <div class="right">
    <div>
      <BaseTitle title="办理情况分布" :width="750" />
      <div class="title">实时情况</div>
      <div class="top-box flex">
        <div class="item flex" v-for="(item, index) in list" :key="index">
          <div class="name">
            <div>预约今日</div>
            <div class="sub-title">数量</div>
          </div>
          <div>
            <CountUp :num="item.number" />
            <div class="unit">件</div>
          </div>
        </div>
      </div>
      <div class="chart-box">
        <LineChart :line-data="lineData" />
      </div>
      <div class="bar-box">
        <div class="name">热门事项Top5</div>
        <Bar v-for="(item, index) in barList" :key="index" :barData="{ ...item, index: index + 1 }" />
      </div>
    </div>
    <div class="to-right">
      <BaseTitle title="评价分析" :width="750" />
      <div class="title">实时情况</div>
      <div class="top-box flex">
        <div class="item flex" v-for="(item, index) in list1" :key="index">
          <div class="name">
            <div>{{ item.name }}</div>
            <div class="sub-title">{{ item.subTitle }}</div>
          </div>
          <div>
            <div class="number"><span class="sign" v-show="item.hasSign">+</span><CountUp :num="item.number" /></div>
            <div class="unit">件</div>
          </div>
        </div>
      </div>
      <div class="chart-box">
        <PieChart :data="pieTypeData" :color="pieColor" legendType="pec" title="资金占比分析" />
      </div>
      <div class="bar-box">
        <div class="name">本月事项满意度排行Top5</div>
        <Bar
          v-for="(item, index) in barList"
          :color="'221, 114, 227'"
          :key="index"
          :barData="{ ...item, index: index + 1 }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '../../Overview/Medical/components/BaseTitle';
import LineChart from '../../Overview/Medical/components/LineChart';
import PieChart from '../../Overview/Medical/components/PieChart';
import Bar from './component/Bar';
export default {
  name: 'Right',
  components: { BaseTitle, LineChart, PieChart, Bar },
  data() {
    return {
      pieTypeData: [
        { name: '非常满意', value: 10 },
        { name: '满意', value: 20 },
        { name: '不满意', value: 30 },
      ],
      lineData: {
        title: '办理量趋势',
        yname1: '件',
        name1: '当前',
        name2: '昨日',
        lineColor11: 'rgba(89, 219, 230, 1)',
        lineColor12: 'rgba(153, 170, 255, 1)',
        showArea: false,
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 6, 8, 9, 12],
        data2: [13, 33, 53, 6, 38, 9, 12],
      },
      pieColor: ['#6182AE', ' #E772DD', '#01A1F5'],
      list: [
        {
          name: '今日',
          number: 102,
        },
        {
          name: '本周',
          number: 102,
        },
        {
          name: '月度',
          number: 102,
        },
      ],
      list1: [
        { name: '评价总数', number: 234324 },
        { name: '评价总数', subTitle: '较昨日', hasSign: true, number: 88 },
      ],
      barList: [
        { name: '不动产登记', percent: 90 },
        { name: '公积金个人业务', percent: 80 },
        { name: '社保业务', percent: 60 },
        { name: '养老金业务', percent: 50 },
        { name: '出入境业务', percent: 40 },
      ],
      barList1: [
        { name: '综合受理', percent: 90 },
        { name: '残疾人，计生服务', percent: 80 },
        { name: '经济发展', percent: 60 },
        { name: '不动产', percent: 50 },
        { name: '签证', percent: 40 },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.right {
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
  .title {
    margin-top: 87px;
  }
  .top-box {
    margin-top: 20px;
    .item {
      background: url(./img/bg-title.png);
      width: 286px;
      height: 123px;
      align-items: center;
      .count-up {
        font-size: 48px;
      }
      .name {
        text-decoration: none;
        background-image: linear-gradient(to bottom, #fff 0%, #26c4bf 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .sub-title {
        color: #26c4bf;
      }
      .number {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 48px;
        .sign {
          display: inline-block;
        }
      }
      .unit {
        font-size: 22px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.5);
      }
      > div:nth-child(1) {
        width: 128px;
        text-align: center;
      }
      > div:nth-child(2) {
        width: 128px;
        text-align: center;
      }
    }
  }
  .to-right {
    padding-left: 25px;
    .item {
      background: url(./img/bg-title2.png);
      width: 382px;
      height: 123px;
      > div:nth-child(1) {
        width: 189px;
        text-align: center;
      }
      > div:nth-child(2) {
        width: 193px;
        text-align: center;
      }
    }
  }
  .chart-box {
    height: 350px;
    width: 100%;
  }
  .bar-box {
    width: 800px;
    .name {
      margin: 15px 0;
    }
  }
}
</style>
