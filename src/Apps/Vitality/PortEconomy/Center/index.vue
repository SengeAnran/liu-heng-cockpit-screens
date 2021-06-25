<template>
  <div class="center-webview">
    <div>
      <div class="preview"></div>
      <div class="mask"></div>
      <chart-map />
    </div>
  </div>
</template>

<script>
import ChartMap from './map';
export default {
  components: {
    ChartMap,
  },
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
    position: relative;
  }
}

.preview {
  width: 100%;
  height: 100%;
  background: url(../images/map_mask.png) no-repeat top center;
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
  height: 207rem;
  background: url(../images/mask.png) no-repeat center bottom;
  background-size: 100% 100%;
  z-index: 9;
  pointer-events: none;
}
</style>
