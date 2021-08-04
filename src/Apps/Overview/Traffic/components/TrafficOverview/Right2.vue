<template>
  <div class="right-2">
    <Title>大吞码头监控位</Title>
    <Monitor />
    <Title>危险品企业监控</Title>
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
