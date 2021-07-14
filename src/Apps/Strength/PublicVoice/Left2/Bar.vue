<template>
  <div class="bar" ref="eleChart"></div>
</template>

<script>
import * as echarts from 'echarts/lib/echarts';
import getOptions from './options';
import economicAPI from '@/api/Strength/PublicVoice';

export default {
  data() {
    return {
      list: [
        { name: '总发稿量', value: 6340 },
        { name: '总阅读量', value: 7340 },
        { name: '总评论数', value: 8340 },
        { name: '总点赞数', value: 9340 },
        { name: '总转载数', value: 1034 },
      ],
    };
  },
  mounted() {
    this.getData();
    // this.initChart();
  },
  methods: {
    async getData() {
      const data = await economicAPI.getDevelopmentTrend();
      this.list = data.map((d) => ({
        name: d.rq,
        value1: d.sjzs,
        value2: d.zmsjs,
        value3: d.fmsjs,
        value4: d.zxsjs,
      }));
      this.initChart();
    },
    initChart() {
      this.chart = echarts.init(this.$refs.eleChart);
      this.chart.setOption(getOptions(this.list));
    },
  },
};
</script>
<style lang="scss" scoped>
.bar {
  margin-top: 2rem;
  // outline: 1px solid red;
  height: 40rem;
}
</style>
