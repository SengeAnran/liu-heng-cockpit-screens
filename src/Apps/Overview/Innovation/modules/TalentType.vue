<template>
  <div class="TalentType">
    <PieChart class="chart" :chartData="chartData" :color="color" :title="title" />
  </div>
</template>

<script>
import PieChart from '../components/PiceChart';
export default {
  components: {
    PieChart,
  },
  data() {
    return {
      title: '人才类型分布',
      color: ['#6182AE', '#71D47D', '#01A1F5', '#F772D1'],
      chartData: [
        { value: 50, name: '学术型人才' },
        { value: 30, name: '工程型人才' },
        { value: 20, name: '技术型人才' },
        { value: 10, name: '技能型人才' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.TalentType {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .chart {
    flex: 1;
  }
}
</style>
