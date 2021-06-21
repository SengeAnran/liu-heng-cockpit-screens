<template>
  <div class="bar-chart-wrapper">
    <div class="indicator">
      <span class="name">公交总里程</span>
      <span class="value" style="width: 16rem;">53587</span>
      <span class="name">总线路条数</span>
      <span class="value" style="width: 6rem;">24</span>
    </div>
    <div class="bar2-wrapper" ref="chartEle" />
  </div>
</template>
<script>
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { AxisPointerComponent, GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import getOptions from './options';
import { randomInt } from '../util';

echarts.use([
  BarChart,
  AxisPointerComponent,
  GridComponent,
  CanvasRenderer,
]);

export default {
  data() {
    return {
      list: [
        { name: '名称', value: randomInt(0, 2000) },
        { name: '名称', value: randomInt(0, 2000) },
        { name: '名称', value: randomInt(0, 2000) },
        { name: '名称', value: randomInt(0, 2000) },
        { name: '名称', value: randomInt(0, 2000) },
        { name: '名称', value: randomInt(0, 2000) },
        { name: '名称', value: randomInt(0, 2000) },
        { name: '名称', value: randomInt(0, 2000) },
      ],
    };
  },
  mounted() {
    const chart = echarts.init(this.$refs.chartEle);
    chart.setOption(
      getOptions(this.list),
    );
    this.chart = chart;
  },
};
</script>
<style lang="scss" scoped>
.bar-chart-wrapper {
  height: 47rem;
  position: relative;
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
  .bar2-wrapper {
    height: 42rem;
    // outline: 1px solid red;
  }
}
</style>
