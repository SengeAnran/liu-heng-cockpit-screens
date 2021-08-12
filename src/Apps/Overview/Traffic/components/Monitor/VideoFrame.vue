<template>
  <div class="video-frame">
    <iframe
      frameborder="0"
      ref="iframeEle"
      :key="cameraIndexCode"
    />
  </div>
</template>
<script>
export default {
  props: {
    cameraIndexCode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      scaleX: 1,
      scaleY: 1,
      // videoUrl: '',
    };
  },
  mounted() {
    const onResize = this.onResize.bind(this);
    const changeVideoPos = this.changeVideoPos.bind(this);
    window.globalScale.add(onResize);
    window.addEventListener('message', changeVideoPos);
    this.$once('hook:beforeDestroy', () => {
      window.globalScale.remove(onResize);
      window.removeEventListener('message', changeVideoPos);
    });
    this.setIframe();
  },
  methods: {
    setIframe() {
      const iframeWin = this.$refs.iframeEle;
      const { clientWidth, clientHeight } = iframeWin.parentNode;
      iframeWin.style.width = clientWidth * this.scaleX + 'px';
      iframeWin.style.height = clientHeight * this.scaleY + 'px';
      setTimeout(() => {
        iframeWin.src = this.videoUrl + '#' + this.cameraIndexCode;
      }, 1000);
    },
    onResize(scaleX = 1, scaleY = 1) {
      this.scaleX = scaleX;
      this.scaleY = scaleY;
    },
    changeVideoPos(e) {
      const iframeWin = this.$refs.iframeEle;
      console.log(iframeWin.getBoundingClientRect());
      if (e && e.data) {
        switch (e.data.action) {
          case 'updateInitParam':
            iframeWin.contentWindow.postMessage({
              action: 'updateInitParam',
              msg: '更新Pos',
              iframeClientPos: iframeWin.getBoundingClientRect(),
            });
            break;
          default:
            break;
        }
      }
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
    // outline: 5px solid red;
    width: 100%;
    height: 100%;
  }
}
</style>
