<template>
  <video
    ref="videoEle"
    class="video"
    :controls="!options.hideControl || true"
    :muted="options.isMuted || true"
  />
</template>
<script>
import Hls from 'hls.js';

export default {
  props: {
    url: {
      type: String,
      default: 'http://ivi.bupt.edu.cn/hls/cctv6.m3u8',
    },
    options: {
      type: Object,
      default: () => ({ isMuted: true, hideControl: false }),
    },
  },
  watch: {
    source() {
      this.destroyResource();
      this.playVideo();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.playVideo();
    });
  },
  methods: {
    async playVideo() {
      const hlsUrl = this.url;
      const hls = this.hls = new Hls();
      const videoEle = this.$refs.videoEle;
      if (!videoEle) {
        return;
      }
      if (!hlsUrl) {
        return;
      }
      hls.attachMedia(videoEle);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(hlsUrl);
        hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
          videoEle.play();
        });
      });
      hls.on(Hls.Events.ERROR, (ev, data) => {
        // console.log(data);
        if (data.fatal) {
          hls.destroy();
          this.playVideo();
        }
      });
    },
    destroyResource() {
      this.hls && this.hls.destroy();
    },
  },
  beforeDestroy() {
    this.destroyResource();
  },
};
</script>
<style lang="scss" scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}
</style>
