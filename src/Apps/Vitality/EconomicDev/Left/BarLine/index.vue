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
        // { name: '水利项目', line: 264, bar: 123 },
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
      const data = await economicAPI.industryDistribution();
      // console.log(data);
      const list = data.map((d) => ({
        ...d,
        name: d.xmzl,
        bar: d.xmk,
        line: d.tze,
      }));
      this.chart.setOption(getOptions(list));
      // this.list[0].value = data?.qyzcl || 0;
      // this.list[1].value = data?.qymd || 0;
      // this.list[2].value = data?.ssgssl || 0;
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
