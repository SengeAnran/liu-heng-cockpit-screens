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
        { name: '大型企业', value: 12 },
        { name: '中型企业', value: 25 },
        { name: '小型企业', value: 123 },
        { name: '微型企业', value: 98 },
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
  height: 51rem;
}
</style>
