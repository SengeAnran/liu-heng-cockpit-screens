<template>
  <div class="right-1">
    <Title>邬家红绿灯监控</Title>
    <Monitor :camera-index-code="url1" />
    <Title>世大梅线与六横路叉口监控位</Title>
    <Monitor :camera-index-code="url2" />
  </div>
</template>
<script>
import Title from './Title';
import Monitor from '../Monitor';

export default {
  components: {
    Monitor,
    Title,
  },
  data() {
    return {
      url1: '33090305011321460328',
      url2: '33090305141323020001',
    };
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
