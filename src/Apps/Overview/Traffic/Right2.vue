<template>
  <div class="right-2">
    <Title>道路监控</Title>
    <Monitor />
    <Title>环岛客流数据</Title>
    <Table />
  </div>
</template>
<script>
import Title from './Title';
import Monitor from './Monitor';
import Table from './Table';

export default {
  components: {
    Title,
    Monitor,
    Table,
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
