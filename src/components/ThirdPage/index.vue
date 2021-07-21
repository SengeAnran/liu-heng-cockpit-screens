<template>
  <div class="third-page" :style="pageStyle">
    <iframe
      :src="formatUrl"
      v-if="formatUrl"
      frameborder="0"
      ref="thirdPage"
    />
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 5760,
    },
    height: {
      type: Number,
      default: 1350,
    },
  },
  data() {
    return {
      scaleX: 1,
      scaleY: 1,
    };
  },
  computed: {
    pageStyle() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        // transform: 'scale(1, 0.833)',
      };
    },
    formatUrl() {
      if (this.scaleX && this.scaleY) {
        return this.url + `?scaleX=${this.scaleX}&scaleY=${this.scaleY}`;
      }
      return undefined;
    },
  },
  mounted() {
    let init = false;
    const url = this.url;
    const originIndex = url.indexOf('/', url.indexOf('://') + 3);
    const origin = originIndex > -1 ? url.substr(0, originIndex) : url;
    console.log(origin);
    const handler = (scaleX, scaleY) => {
      if (!init) {
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        init = true;
      } else {
        this.$refs.thirdPage.contentWindow.postMessage(JSON.stringify({
          scaleX,
          scaleY,
          source: 'scale',
        }), origin);
      }
    };
    window.globalScale.add(handler);
    this.$once('hook:beforeDestroy', () => {
      window.globalScale.remove(handler);
    });
  },
};
</script>
<style lang="scss" scoped>
.third-page {
  position: relative;
  transform-origin: top left;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
