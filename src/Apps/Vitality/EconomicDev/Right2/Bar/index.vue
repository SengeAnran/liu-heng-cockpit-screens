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
        { name: '18-25岁', value: 6340 },
        { name: '26-33岁', value: 7340 },
        { name: '34-40岁', value: 8340 },
        { name: '41-50岁', value: 9340 },
        { name: '51-65岁', value: 1034 },
        { name: '65-80岁', value: 1134 },
        { name: '81岁以上', value: 1234 },
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
  margin-top: 5rem;
  // outline: 1px solid red;
  height: 33rem;
}
</style>
