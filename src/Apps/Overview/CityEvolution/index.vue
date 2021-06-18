<template>
  <div class="CityEvolution">
    <LeftComponent />
    <RightComponent />
    <!-- <Map /> -->
  </div>
</template>

<script>
import LeftComponent from './leftComponents/index';
import RightComponent from './rightComponents';
// import Map from './map/index';
export default {
  name: 'CityEvolution',
  components: {
    LeftComponent,
    RightComponent,
    // Map,
  },
};
</script>
<style lang="scss" scoped>
.CityEvolution {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  // background-image: url('./images/bg.png');
  // background: url('./images/bg.jpg') no-repeat;
  // background-size: 100% 100%;
  background-image: url('./images/show-bg.png');
  // background-image: url('./images/empty_bg.png');
}
</style>
