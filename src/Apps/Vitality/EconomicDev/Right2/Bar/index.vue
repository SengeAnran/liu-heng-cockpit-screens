<template>
  <div class="bar-line" ref="eleChart"></div>
</template>

<script>
import * as echarts from 'echarts/lib/echarts';
import getOptions from './options';
import economicAPI from '@/api/Vitality/EconomicDev';

export default {
  data() {
    return {
      list: [
        { name: '18-25岁', value: 6340 },
      ],
    };
  },
  mounted() {
    this.initChart();
    this.fetchData();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.eleChart);
      this.chart.setOption(getOptions(this.list));
    },
    async fetchData() {
      const data = await economicAPI.ageDistribution();
      // console.log(data);
      const list = data
        .map((d) => ({
          ...d,
          name: d.nlfb,
          value: d.ldlrks,
        }));
      this.chart.setOption(getOptions(list));
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
