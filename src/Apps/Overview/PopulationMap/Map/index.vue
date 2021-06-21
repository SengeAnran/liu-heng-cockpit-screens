<template>
  <div class="map-container" >
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
  </div>
</template>

<script>
import AMap from 'AMap';
export default {
  name: 'Map',
  components: {
  },
  data() {
    return {
      map: null,
      mapDom: null,
    };
  },
  mounted() {
    this.mapDom = this.$refs.map;
    this.map = new AMap.Map(this.mapDom, {
      resizeEnable: true,
      zoom: 13.4,
      zooms: [3, 16],
      center: [122.200254, 29.717613],
      mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
    });
    const marker = new AMap.Marker({
      position: [122.200254, 29.767613],
      content: "<div style='display: inline-block; width: 20px; height: 20px; background: red;'>13444</div>",
    });
    console.log(marker);
    marker.setMap(this.map);
  },
};
</script>
<style lang="scss" scoped>
.map-container {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  .mask {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2070px;
    z-index: 6;
    pointer-events: none;
    background-size: 100% 100%;
    background: url('./img/mask.png') no-repeat;
  }
  .main-map {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2070px;
  }
}
</style>
