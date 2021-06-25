<template>
  <div class="TalentType">
    <pie-chart :list="chartData" :title="title" :color="color" />
  </div>
</template>

<script>
import PieChart from '../components/PieChart';
import { getPersonTypeTrend } from '@/api/Overview/Innovation/api';
export default {
  components: {
    PieChart,
  },
  data() {
    return {
      title: '人才类型\n分布',
      color: ['#6182AE', '#71D47D', '#01A1F5', '#F772D1'],
      chartData: [],
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
          const total = json.map((item) => item.rcsl).reduce((m, n) => m + n);
          json.map((item) => {
            item.name = item.rclx;
            item.value = item.rcsl;
            item.percent = item.value / total * 100 + '%';
          });
          this.chartData = json;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.TalentType {
  & > div {
    height: 100%;
  }
}
</style>
