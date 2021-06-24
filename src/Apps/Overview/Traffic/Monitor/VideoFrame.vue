<template>
  <div class="video-frame" id="playWnd">
    <iframe :src="videoUrl" frameborder="0" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoUrl: '/video/test.html',
    };
  },
  mounted() {
    const onResize = this.onResize.bind(this);
    window.globalScale.resizeCbs.push(onResize);
    this.$once('hook:beforeDestroy', () => {
      const index = window.globalScale.resizeCbs.indexOf(onResize);
      window.globalScale.resizeCbs.splice(index, 1);
    });
  },
  methods: {
    onResize(scaleX, scaleY) {
      console.log(scaleX, scaleY);
    },
  },
};
</script>
<style lang="scss" scoped>
.video-frame {
  height: 31.5rem;
  position: relative;
  iframe {
    position: absolute;
    outline: 5px solid red;
    width: 100%;
    height: 100%;
  }
}
</style>
