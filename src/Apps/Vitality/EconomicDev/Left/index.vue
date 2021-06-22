<template>
  <div class="left">
    <Title>经济情况</Title>
    <div class="first-row">
      <Indicators />
      <BarLine />
    </div>
    <div class="second-row">
      <DoubleBar />
      <Pie />
    </div>
  </div>
</template>
<script>
import Title from '../Title';
import Indicators from './Indicators';
import BarLine from './BarLine';
import DoubleBar from './DoubleBar';
import Pie from './Pie';

export default {
  components: {
    Title,
    Indicators,
    BarLine,
    DoubleBar,
    Pie,
  },
};
</script>
<style lang="scss" scoped>
.left {
  position: absolute;
  top: 26rem;
  left: 16rem;
  width: 165rem;
  .first-row {
    margin-top: 2rem;
    display: flex;
  }
  .second-row {
    // outline: 1px solid red;
    margin-top: 3rem;
    display: flex;
  }
}
</style>
