<template>
  <div class="line-chart-wrapper">
    <div class="line-chart" ref="chartEle" />
  </div>
</template>
<script>
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import getOptions from './options';
import { randomInt } from '../util';
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
      source: Array.from({ length: 12 }).map((_, i) => ({
        name: `${i + 1}月`,
        value1: randomInt(100, 200),
        value2: randomInt(100, 200),
      })),
    };
  },
  mounted() {
    const chart = echarts.init(this.$refs.chartEle);
    chart.setOption(getOptions(this.source));
    this.chart = chart;
  },
};
</script>
<style lang="scss" scoped>
.line-chart-wrapper {
  // outline: 1px solid red;
  .line-chart {
    width: 100%;
    height: 42rem;
  }
}
</style>
