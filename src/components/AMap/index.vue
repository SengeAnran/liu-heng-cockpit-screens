<template>
  <div class="map" ref="mapEle">
    <slot />
  </div>
</template>
<script>
export default {
  provide() {
    return {
      mapPromise: new Promise((resolve) => {
        this.resolveMap = resolve;
      }),
    };
  },
  mounted() {
    this.map = new AMap.Map(this.$refs.mapEle, {
      resizeEnable: true,
      zoom: 13,
      zooms: [3, 16],
      center: [122.13756, 29.678873],
      mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
    });
    this.resolveMap(this.map);
    window.amap = this.map;
  },
  beforeDestroy() {
    this.map.destroy();
  },
};
</script>
<style lang="scss" scoped>
.map {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1e1e1e;
  &::after {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: url('./img/mask.png') no-repeat;
    background-size: 100% 100%;
  }
  ::v-deep .amap-logo{
    display: none !important;
  }
}
</style>
