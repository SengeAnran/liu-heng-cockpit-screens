<template>
  <div class="TalentType">
    <PieChart
      class="chart"
      :data="chartData"
      legendType="pec"
      :title="title"
      :color="color"
      :chartStyle="{scale:[2.6,2.5],position:['2.8%','5.1%']}"
    />
  </div>
</template>

<script>
import PieChart from '../components/PiceChart';
import { getPersonTypeTrend } from '@/api/Overview/Innovation/api';
export default {
  components: {
    PieChart,
  },
  data() {
    return {
      title: '人才类型分布',
      color: ['#6182AE', '#71D47D', '#01A1F5', '#F772D1'],
      chartData: [
        { name: '学术型人才', value: 0 },
        { name: '工程型人才', value: 0 },
        { name: '技术型人才', value: 0 },
        { name: '技能型人才', value: 0 },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getPersonTypeTrend()
        .request()
        .then((json) => {
          this.chartData.map((item) => {
            item.value = json.filter((obj) => obj.rclx === item.name)[0].rcsl;
          });
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.TalentType {
  .chart {
    height: 90%;
  }
}
</style>
