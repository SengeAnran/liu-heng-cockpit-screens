<template>
  <div class="right-1">
    <Title>人口经济情况</Title>
    <Indicators />
    <Line1 />
    <Line2 />
  </div>
</template>
<script>
import Title from '../Title';
import Indicators from './Indicators';
import Line1 from './Line1';
import Line2 from './Line2';

export default {
  components: {
    Title,
    Indicators,
    Line1,
    Line2,
  },
};
</script>
<style lang="scss" scoped>
.right-1 {
  position: absolute;
  top: 26rem;
  right: 101rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
