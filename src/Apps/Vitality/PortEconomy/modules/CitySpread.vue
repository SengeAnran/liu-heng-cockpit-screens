<template>
  <div class="CitySpread">
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
      title: '运输货物城市分布',
      color: ['#6182AE', '#66CCFF', '#31EABC', '#EDC063', '#ED9164', '#FFB1B1'],
      chartData: [
        { value: 40, name: '上海' },
        { value: 30, name: '舟山' },
        { value: 20, name: '宁波' },
        { value: 10, name: '其他城市' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.CitySpread {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .chart {
    flex: 1;
  }
}
</style>
