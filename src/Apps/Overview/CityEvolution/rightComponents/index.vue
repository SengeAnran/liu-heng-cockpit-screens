<template>
  <div class="right_component">
    <AreaLocation />
  </div>
</template>

<script>
import AreaLocation from './component/AreaLocation';
export default {
  name: 'RightComponents',
  components: {
    AreaLocation,
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
