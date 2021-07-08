<template>
  <div class="left-2">
    <Title>事件趋势</Title>
    <Bar />
    <Title style="margin-top: 6.5rem">热词词云</Title>
    <WordCloud />
  </div>
</template>
<script>
import Title from '../Title';
import Bar from './Bar';
import WordCloud from './WordCloud';
export default {
  components: {
    Title,
    Bar,
    WordCloud,
  },
};
</script>
<style lang="scss" scoped>
.left-2 {
  position: absolute;
  top: 26rem;
  left: 101rem;
  width: 80rem;
  z-index: 999;
}
</style>
