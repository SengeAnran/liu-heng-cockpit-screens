<template>
  <div class="right-2">
    <Title>人口宏观情况</Title>
    <Indicators />
    <Bar />
    <Pie />
  </div>
</template>
<script>
import Title from '../Title';
import Indicators from './Indicators';
import Bar from './Bar';
import Pie from './Pie';

export default {
  components: {
    Title,
    Indicators,
    Bar,
    Pie,
  },
};
</script>
<style lang="scss" scoped>
.right-2 {
  position: absolute;
  top: 26rem;
  right: 16rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
