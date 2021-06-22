<template>
  <div class="ProjectManageMap">
    <div class="map-mask-persview"></div>
    <MedicalMap/>
  </div>
</template>

<script>
import MedicalMap from '../../Overview/Medical/components/map';
export default {
  name: 'ProjectManageMap',
  components: {
    MedicalMap,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.ProjectManageMap {
  width: 100%;
  height: 100%;
  background-position: center;
  position: absolute;
  top: 0px;
  // pointer-events: none;
  .map-mask-persview {
    width: 100%;
    height: 1014px;
    position: absolute;
    top: 263px;
    background: url('./images/map-mask.png') no-repeat;
    background-size: 100% 100%;
    background-position: center;
    z-index: 10;
    pointer-events: none;
  }
}
</style>
