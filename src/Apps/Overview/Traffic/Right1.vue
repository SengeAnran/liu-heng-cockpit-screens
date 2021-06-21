<template>
  <div class="right-1">
    <Title>公交营运分析</Title>
    <Bar2 />
    <Title>出租车营运分析</Title>
    <Line1 />
  </div>
</template>
<script>
import Title from './Title';
import Bar2 from './Bar2';
import Line1 from './Line1';

export default {
  components: {
    Bar2,
    Title,
    Line1,
  },
};
</script>
<style lang="scss" scoped>
.right-1 {
  position: absolute;
  top: 26.4rem;
  right: 100rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
