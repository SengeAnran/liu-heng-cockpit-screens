<template>
  <div class="right-2">
    <Title>沙吞经绿灯监控位</Title>
    <Monitor />
    <Title>台门台台线终点叉口监控位</Title>
    <Monitor />
  </div>
</template>
<script>
import Title from './Title';
import Monitor from './Monitor';
// import Table from './Table';

export default {
  components: {
    Title,
    Monitor,
    // Table,
  },
};
</script>
<style lang="scss" scoped>
.right-2 {
  position: absolute;
  top: 26.4rem;
  right: 16rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
