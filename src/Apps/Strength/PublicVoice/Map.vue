<template>
  <div class="Map">
    <div class="map-mask-persview"></div>
    <MapBox/>
  </div>
</template>

<script>
import MapBox from './component/map/index';
export default {
  name: 'Map',
  data() {
    return {
    };
  },
  components: {
    MapBox,
  },
};
</script>

<style lang="scss" scoped>
.Map {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  .map-mask-persview {
    width: 100%;
    height: 1014px;
    position: absolute;
    top: 263px;
    background: url('./img/map-mask.png') no-repeat;
    background-size: 100% 100%;
    background-position: center;
    z-index: 10;
    pointer-events: none;
  }
}
</style>
