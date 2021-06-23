<template>
  <div class="video-frame">
    <iframe :src="videoUrl" frameborder="0" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoUrl: 'http://60.163.192.206:8000/liuheng-pc/views/haikangVideo/window_simple_preview.html?cameraIndexCode=33090305141323050002&width=700&height=500',
    };
  },
};
</script>
<style lang="scss" scoped>
.video-frame {
  height: 31.5rem;
  position: relative;
  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 705px;
    height: 505px;
    transform: translate(-50%, -50%) scale(0.66);
  }
  // outline: 1px solid red;
}
</style>
