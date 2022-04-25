<template>
  <div v-if="cameraIndexCode" class="video-frame">
    <iframe
      frameborder="0"
      ref="iframeEle"
    />
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  props: {
    cameraIndexCode: {
      type: String,
      default: '',
    },
  },
  watch: {
    cameraIndexCode() {
      const iframeWin = this.$refs.iframeEle;
      iframeWin.contentWindow.postMessage({
        action: 'updateCameraIndexCode',
        msg: '更新cameraIndexCode',
        cameraIndexCode: this.cameraIndexCode,
      }, '*');
    },
    fullScreenCameraIndexCode() {
      if (this.fullScreenCameraIndexCode) {
        if (this.fullScreenCameraIndexCode !== this.cameraIndexCode) {
          const iframeWin = this.$refs.iframeEle;
          iframeWin.contentWindow.postMessage({
            action: 'hideWin',
            msg: '隐藏窗口',
          }, '*');
        }
      }
    },
    exitFullScreenCameraIndexCode() {
      if (this.exitFullScreenCameraIndexCode) {
        if (this.exitFullScreenCameraIndexCode !== this.cameraIndexCode) {
          const iframeWin = this.$refs.iframeEle;
          iframeWin.contentWindow.postMessage({
            action: 'showWin',
            msg: '展示窗口',
          }, '*');
        }
      }
    },
  },
  computed: {
    ...mapGetters(['fullScreenCameraIndexCode', 'exitFullScreenCameraIndexCode']),
  },
  data() {
    return {
      scaleX: 1,
      scaleY: 1,
      videoUrl: '/video/demo_embedded_for_iframe.html',
    };
  },
  mounted() {
    // console.log(this);
    const onResize = this.onResize.bind(this); // onResize 绑定新函数 可以使用当前组件的属性和方法
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
    ...mapMutations(['setFullScreenCameraIndexCode', 'setExitFullScreenCameraIndexCode']),
    setIframe() {
      // console.log(this.cameraIndexCode);
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
      // console.log(iframeWin);
      // console.log(iframeWin.getBoundingClientRect());
      if (e && e.data) {
        switch (e.data.action) {
          case 'updateInitParam':
            iframeWin.contentWindow.postMessage({
              action: 'updateInitParam',
              msg: '更新Pos',
              iframeClientPos: iframeWin.getBoundingClientRect(),
            });
            break;
          case 'fullScreen': {
            const fullScreenCameraIndexCode = e.data.cameraIndexCode;
            this.setFullScreenCameraIndexCode(fullScreenCameraIndexCode);
            this.setExitFullScreenCameraIndexCode('');
          }
            break;
          case 'exitFullScreen': {
            const fullScreenCameraIndexCode = e.data.cameraIndexCode;
            this.setExitFullScreenCameraIndexCode(fullScreenCameraIndexCode);
            this.setFullScreenCameraIndexCode('');
          }
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
  //height: 42.5rem;
  //height: 31.5rem;
  width: 1287px;
  height: 733px;
  position: relative;
  iframe {
    position: absolute;
    // outline: 5px solid red;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
