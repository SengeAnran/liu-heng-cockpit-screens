<template>
  <div class="right-2">
    <Title>沙岙红绿灯监控位</Title>
    <Monitor :camera-index-code="url1" />
    <Title>台门台台线终点叉口监控位</Title>
    <Monitor :camera-index-code="url2" />
  </div>
</template>
<script>
import Title from './Title';
import Monitor from '../Monitor';
// import Table from './Table';

export default {
  components: {
    Title,
    Monitor,
    // Table,
  },
  data() {
    return {
      url1: '33090305141323030002',
      url2: '33090462081310237534',
    };
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
