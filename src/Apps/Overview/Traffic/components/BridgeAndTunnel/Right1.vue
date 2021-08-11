<template>
  <div class="right-1">
    <Title>邬家红绿灯监控</Title>
    <Monitor :video-url="url1" />
    <Title>世大梅线与六横路叉口监控位</Title>
    <Monitor :video-url="url2" />
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
  data() {
    return {
      url1: 'http://60.163.192.206:8000/liuheng-pc/views/haikangVideo/window_simple_preview.html?cameraIndexCode=33090305011321460328&width=540&height=380',
      url2: 'http://60.163.192.206:8000/liuheng-pc/views/haikangVideo/window_simple_preview.html?cameraIndexCode=33090305141323020001&width=540&height=380',
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
