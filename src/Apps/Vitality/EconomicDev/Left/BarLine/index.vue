<template>
  <div class="bar-line" ref="eleChart"></div>
</template>

<script>
import * as echarts from 'echarts/lib/echarts';
import getOptions from './options';

export default {
  data() {
    return {
      list: [
        { name: '房地产项目', line: 100, bar: 221 },
        { name: '光伏项目', line: 123, bar: 321 },
        { name: '小型项目', line: 132, bar: 245 },
        { name: '电子政务', line: 213, bar: 342 },
        { name: '交通项目', line: 492, bar: 352 },
        { name: '能源项目', line: 541, bar: 233 },
        { name: '水利项目', line: 264, bar: 123 },
      ],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.eleChart);
      this.chart.setOption(getOptions(this.list));
    },
  },
};
</script>
<style lang="scss" scoped>
.bar-line {
  flex: auto;
  margin-left: 4rem;
  // outline: 1px solid red;
  height: 41rem;
}
</style>
