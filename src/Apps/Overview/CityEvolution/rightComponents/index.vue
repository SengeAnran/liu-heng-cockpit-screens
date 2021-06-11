<template>
  <div class="right_component">
    <AreaLocation />
    <CommunityArea />
    <AverageValue />
  </div>
</template>

<script>
import AreaLocation from './component/AreaLocation';
import CommunityArea from './component/CommunityArea';
import AverageValue from './component/AverageValue';
export default {
  name: 'RightComponents',
  components: {
    AreaLocation,
    CommunityArea,
    AverageValue,
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
