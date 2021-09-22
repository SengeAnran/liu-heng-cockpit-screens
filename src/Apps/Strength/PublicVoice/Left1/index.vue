<template>
  <div class="left-1">
    <Title>事件态势</Title>
    <Indicator />
    <Title style="margin-top: 6.5rem">热点网站来源</Title>
    <Bar />
  </div>
</template>
<script>
import Title from '../Title';
import Indicator from './Indicator';
import Bar from './Bar';
export default {
  components: {
    Title,
    Indicator,
    Bar,
  },
};
</script>
<style lang="scss" scoped>
.left-1 {
  position: absolute;
  top: 20rem;
  left: 16rem;
  width: 80rem;
  z-index: 999;
}
</style>
