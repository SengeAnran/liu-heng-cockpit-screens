<template>
  <div class="line-chart-wrapper">
    <div class="line-chart" ref="chartEle" />
    <div class="indicator">
      <span class="name">出租车数量</span>
      <span class="value" style="width: 16rem;">{{ taxiNum }}</span>
      <span class="name">日均载客数</span>
      <span class="value" style="width: 6rem;">{{ busload }}</span>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import getOptions from './options';
// import { randomInt } from '../util';
import trafficAPI from '@/api/Overview/Traffic';

echarts.use([
  LineChart,
  CanvasRenderer,
  LegendComponent,
  TooltipComponent,
  GridComponent,
]);

export default {
  data() {
    return {
      taxiNum: 0,
      busload: 0,
      list: [
        // { name: '1', value: 12 },
      ],
    };
  },
  mounted() {
    const chart = echarts.init(this.$refs.chartEle);
    chart.setOption(getOptions(this.list));
    this.chart = chart;
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await trafficAPI.taxiAnalysis();
      // console.log(data);
      const { czcyytj, czcyyxq } = data;
      this.taxiNum = czcyytj.czcls;
      this.busload = czcyytj.rjzkl;
      const list = czcyyxq.map((d) => ({
        ...d,
        name: d.rq,
        value: d.yycls,
      }));
      this.chart.setOption(getOptions(list));
    },
  },
};
</script>
<style lang="scss" scoped>
.line-chart-wrapper {
  position: relative;
  .line-chart {
    width: 100%;
    height: 42rem;
  }
  .indicator {
    position: absolute;
    right: 0;
    top: 5px;
    z-index: 2;
    .name {
      font-size: 26px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #FFFFFF;
      opacity: 0.5;
    }
    .value {
      font-size: 36px;
      font-family: DINPro;
      font-weight: 500;
      color: #FFFFFF;
      padding-left: 2rem;
      display: inline-block;
    }
  }
}
</style>
