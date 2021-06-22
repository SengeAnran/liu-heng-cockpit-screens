<template>
  <div class="AmapMap">
    <div class="preview"></div>
    <div class="mask"></div>
    <div class="map" ref="map"></div>
  </div>
</template>

<script>
import AMap from 'AMap';
export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new AMap.Map(this.$refs.map, {
        resizeEnable: true,
        zoom: 13,
        zooms: [3, 16],
        center: [122.128762, 29.751102],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.AmapMap {
  position: relative;
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
    height: 100%;
    background: url('../images/mask.png') no-repeat;
    background-size: 100% 100%;
    z-index: 9;
    pointer-events: none;
  }
  .map {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
