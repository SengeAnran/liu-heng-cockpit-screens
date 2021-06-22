<template>
  <div class="Map">
    <div class="map-mask-persview"></div>
    <MedicalMap/>
  </div>
</template>

<script>
import MedicalMap from './components/map/index';
export default {
  name: 'MedicalMapBox',
  components: {
    MedicalMap,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.Map {
  width: 100%;
  height: 100%;
  background-position: center;
  position: absolute;
  top: 0px;
  // pointer-events: none;
  .map-mask-persview {
    width: 100%;
    // height: 1014px;
    height: 100%;
    position: absolute;
    top: 0;
    background: url('./images/map-mask.png') no-repeat;
    background-size: 100% 100%;
    background-position: center;
    z-index: 10;
    pointer-events: none;
  }
}
</style>
