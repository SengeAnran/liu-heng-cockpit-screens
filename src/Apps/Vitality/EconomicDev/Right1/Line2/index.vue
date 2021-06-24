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
        // { name: '2015', value1: 334233, value2: 284233 },
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
      const data = await economicAPI.financialRevenue();
      // console.log(data);
      const list = data
        .map((d) => ({
          ...d,
          name: d.sj,
          value1: d.czsr,
          value2: d.czzc,
        }))
        .sort((a, b) => {
          return +a.name - (+b.name);
        });
      this.chart.setOption(getOptions(list));
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
