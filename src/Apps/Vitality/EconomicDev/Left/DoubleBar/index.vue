<template>
  <div class="double-bar" ref="eleChart"></div>
</template>

<script>
import * as echarts from 'echarts/lib/echarts';
import getOptions from './options';
function randomInt(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
export default {
  data() {
    return {
      list: Array.from({ length: 8 }).map((d, i) => ({
        name: `${i + 1}月`,
        value1: randomInt(100, 400),
        value2: randomInt(100, 400),
      })),
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
.double-bar {
  flex: none;
  // outline: 1px solid red;
  height: 51rem;
  width: 80rem;
}
</style>
