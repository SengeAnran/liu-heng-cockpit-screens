<template>
  <div class="right-1">
    <Title>邬家红绿灯监控</Title>
    <Monitor />
    <Title>长途客运站监控位</Title>
    <Monitor />
  </div>
</template>
<script>
import Title from './Title';
// import Bar2 from './Bar2';
// import Line1 from './Line1';
import Monitor from './Monitor';

export default {
  components: {
    Monitor,
    // Bar2,
    Title,
    // Line1,
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
