<template>
  <div class="TradingPercent">
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
      title: '运输货物分类占比',
      color: ['#6182AE', '#66CCFF', '#31EABC', '#EDC063', '#ED9164', '#FFB1B1'],
      chartData: [
        { value: 73.7, name: '食品' },
        { value: 12.1, name: '日用品' },
        { value: 4.9, name: '工业材料' },
        { value: 0.98, name: '化学药品' },
        { value: 0.32, name: '危险品' },
        { value: 9.4, name: '其他货物' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.TradingPercent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .chart {
    flex: 1;
  }
}
</style>
