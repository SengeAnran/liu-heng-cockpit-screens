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
        { name: '2015', value1: 334233, value2: 284233 },
        { name: '2016', value1: 354233, value2: 324233 },
        { name: '2017', value1: 364233, value2: 394233 },
        { name: '2018', value1: 374233, value2: 364233 },
        { name: '2019', value1: 382233, value2: 402233 },
        { name: '2020', value1: 402233, value2: 382233 },
        { name: '2021', value1: 414233, value2: 424233 },
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
  margin-top: 4rem;
  // outline: 1px solid red;
  height: 40rem;
}
</style>
