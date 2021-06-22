<template>
  <div class="left-2">
    <Title>全镇交通情况</Title>
    <Indicator />
    <Title>全镇交通分析</Title>
    <LineChart />
  </div>
</template>
<script>
import Title from './Title';
import Indicator from './Indicator';
import LineChart from './LineChart';

export default {
  components: {
    Title,
    Indicator,
    LineChart,
  },
};
</script>
<style lang="scss" scoped>
.left-2 {
  position: absolute;
  top: 26.4rem;
  left: 100rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
