<template>
  <div class="center-webview">
    <div class="AmapMap">
      <div class="preview"></div>
      <div class="mask"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.center-webview {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  & > div {
    flex: 1;
  }
}
.AmapMap {
  position: relative;
  .preview {
    width: 100%;
    height: 100%;
    background: url(./images/map_mask.png) no-repeat top center;
    background-size: 5740px auto;
    position: relative;
    z-index: 11;
    pointer-events: none;
  }
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('./images/mask.png') no-repeat;
    background-size: 100% 100%;
    z-index: 9;
    pointer-events: none;
  }
}
</style>
