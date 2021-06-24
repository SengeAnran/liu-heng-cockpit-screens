<template>
  <div class="bar-pie-wrapper">
    <div class="pie" ref="chartEle"></div>
    <div class="bar-list">
      <div class="bar-item" v-for="item in list" :key="item.name">
        <div class="name">
          <span>{{ item.name }}</span>
          <span class="value">{{ item.percent }}%</span>
        </div>
        <div class="bar-outer">
          <div class="bar-inner" :style="barStyle(item)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import getOptions from './options';
import trafficAPI from '@/api/Overview/Traffic';

echarts.use([
  PieChart,
  CanvasRenderer,
]);
const colors = [
  ['#EFB690', '#A96F5E'],
  ['#A7FBB2', '#56BC68'],
  ['#92B4F9', '#0329B8'],
  ['#FAE2FD', '#AD8FF8'],
];
export default {
  data() {
    return {
      list: [
        { name: '船舶', value: 43, unit: '%', color: ['#EFB690', '#A96F5E'] },
        { name: '公共汽车', value: 14, unit: '%', color: ['#A7FBB2', '#56BC68'] },
        { name: '出租车', value: 24, unit: '%', color: ['#92B4F9', '#0329B8'] },
        { name: '大巴车', value: 19, unit: '%', color: ['#FAE2FD', '#AD8FF8'] },
      ],
    };
  },
  mounted() {
    const chart = echarts.init(this.$refs.chartEle);

    this.chart = chart;
    this.fetchData();
    this.resetData(this.list);
  },
  methods: {
    async fetchData() {
      const data = await trafficAPI.passengerTrend();
      // console.log(data);
      const total = data.reduce((pre, cur) => pre + cur.zkyl, 0);
      const list = data.map((d, i) => ({
        ...d,
        name: d.jtgj,
        value: d.zkyl,
        percent: (d.zkyl / total * 100).toFixed(2),
        unit: '%',
        color: colors[i],
      }));
      this.resetData(list);
      this.chart.setOption(getOptions(list));
    },
    resetData(data) {
      this.list = data.map((d) => ({ ...d, percent: 0 }));
      setTimeout(() => {
        this.list = data;
      }, 0);
    },
    barStyle(bar) {
      const { color, percent } = bar;
      // console.log(bar);
      return {
        background: `linear-gradient(to right, ${color[0]} 0%, ${color[1]} 100%)`,
        backgroundRepeat: 'no-repeat',
        width: `${percent}%`,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.bar-pie-wrapper {
  // outline: 1px solid red;
  height: 45rem;
  display: flex;
  .pie {
    width: 37rem;
    height: 100%;
    flex: none;
  }
  .bar-list {
    flex: auto;
    // outline: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .bar-item {
      width: 34rem;
      margin-bottom: 2rem;
      &:last-child {
        margin-bottom: 0;
      }
      .name {
        color: #fff;
        font-size: 2.4rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        padding: 0.2rem 2rem;
        display: flex;
        justify-content: space-between;
        .value {
          font-size: 2.6rem;
        }
      }
      .bar-outer {
        height: 1.4rem;
        background: rgba(116, 227, 252, 0.2);
        .bar-inner {
          height: 100%;
          position: relative;
          transition: width 1s;
          &::after {
            position: absolute;
            content: ' ';
            background: #fff;
            width: 4px;
            height: 100%;
            right: 0;
          }
        }
      }
    }
  }
}
</style>
