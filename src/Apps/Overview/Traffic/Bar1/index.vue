<template>
  <div class="bar1-wrapper" ref="chartEle">
  </div>
</template>
<script>
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { AxisPointerComponent, GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import getOptions from './options';
// import { randomInt } from '../util';
import trafficAPI from '@/api/Overview/Traffic';

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
        // { name: '名称', value: randomInt(0, 100) },
        // { name: '名称', value: randomInt(0, 100) },
      ],
    };
  },
  mounted() {
    const chart = echarts.init(this.$refs.chartEle);
    chart.setOption(
      getOptions(this.list),
    );
    this.chart = chart;
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await trafficAPI.sourceTrend();
      // console.log(data);
      const list = data.map((d) => ({
        name: d.mc,
        value: d.kylrs,
      }));
      this.chart.setOption(
        getOptions(list),
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.bar1-wrapper {
  height: 42rem;
}
</style>
