<template>
  <div class="right_component">
    <AreaLocation />
    <CommunityArea />
    <AverageValue />
    <CycleCharts />
  </div>
</template>

<script>
import AreaLocation from './component/AreaLocation';
import CommunityArea from './component/CommunityArea';
import AverageValue from './component/AverageValue';
import CycleCharts from './component/CycleCharts';
export default {
  name: 'RightComponents',
  components: {
    AreaLocation,
    CommunityArea,
    AverageValue,
    CycleCharts,
  },
};
</script>
<style lang="scss" scoped>
.right_component {
  position: absolute;
  width: 1700px;
  height: 100%;
  top: 240px;
  right: 140px;
}
</style>
