<template>
  <div class="third-page" :style="pageStyle">
    <iframe :src="url" frameborder="0"></iframe>
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
      default: 1620,
    },
  },
  computed: {
    pageStyle() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        transform: 'scale(1, 0.833)',
      };
    },
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
