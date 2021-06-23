<template>
  <div class="double-bar" ref="eleChart"></div>
</template>

<script>
import * as echarts from 'echarts/lib/echarts';
import getOptions from './options';
import economicAPI from '@/api/Vitality/EconomicDev';

export default {
  data() {
    return {
      list: [
        // { name: '202101', value1: 100, value2: 100 },
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
      const data = await economicAPI.companyRegisterCancelNum();
      console.log(data);
      const list = data.map((d) => ({
        ...d,
        name: d.sj,
        value1: d.xzqyzcl,
        value2: d.xzqyzxl,
      }));
      this.chart.setOption(getOptions(list));
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
