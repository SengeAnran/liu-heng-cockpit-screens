<template>
  <div class="map_wrapper" >
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
  </div>
</template>

<script>
import AMap from 'AMap';
export default {
  name: 'CityEvolution',
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
      zoom: 13,
      center: [122.200254, 29.717613],
      style: {
        borderWidth: 1,
        borderColor: 'red',
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.map_wrapper {
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
