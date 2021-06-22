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
      center: [122.13, 29.73],
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1e1e1e;
  ::v-deep .amap-logo{
    display: none !important;
  }
}
</style>
