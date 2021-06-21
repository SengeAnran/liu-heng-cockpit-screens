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
        { name: '2015', value: 63403 },
        { name: '2016', value: 73403 },
        { name: '2017', value: 83403 },
        { name: '2018', value: 93403 },
        { name: '2019', value: 103403 },
        { name: '2020', value: 113403 },
        { name: '2021', value: 123403 },
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
