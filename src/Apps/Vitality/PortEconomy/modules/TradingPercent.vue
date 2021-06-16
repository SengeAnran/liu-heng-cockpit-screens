<template>
  <div class="TradingPercent">
    <secondary-title name="主要商品贸易额占比TOP5" />
    <PieChart :chartData="chartData"  :title="title" :unit="unit"/>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import PieChart from '../components/PiceChart';
export default {
  components: {
    SecondaryTitle,
    PieChart,
  },
  data() {
    return {
      title: ' 贸易额 占比',
      unit: '万元',
      chartData: [
        { value: 3216, name: '水产品' },
        { value: 2366, name: '水产制品' },
        { value: 1885, name: '蔬菜' },
        { value: 1672, name: '罐头' },
        { value: 1312, name: '果汁' },
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
  & > div {
    &:last-child {
      flex: 1;
    }
  }
}
</style>
