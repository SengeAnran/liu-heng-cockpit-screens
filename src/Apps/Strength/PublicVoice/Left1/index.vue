<template>
  <div class="left-1">
    <Title>事件态势</Title>
    <Indicator />
    <Title style="margin-top: 6.5rem">媒体指数排行</Title>
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
  top: 26rem;
  left: 16rem;
  width: 80rem;
}
</style>
