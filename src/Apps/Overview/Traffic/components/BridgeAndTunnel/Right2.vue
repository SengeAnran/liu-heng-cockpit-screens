<template>
  <div class="right-2">
    <Title>沙岙红绿灯监控位</Title>
    <Monitor :video-url="url1" />
    <Title>台门台台线终点叉口监控位</Title>
    <Monitor :video-url="url2" />
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
      url1: 'http://60.163.192.206:8000/liuheng-pc/views/haikangVideo/window_simple_preview.html?cameraIndexCode=33090305141323030002&width=540&height=380',
      url2: 'http://60.163.192.206:8000/liuheng-pc/views/haikangVideo/window_simple_preview.html?cameraIndexCode=33090462081310237534&width=540&height=380',
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
