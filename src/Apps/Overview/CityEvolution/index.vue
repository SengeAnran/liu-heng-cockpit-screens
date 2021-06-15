<template>
  <div class="CityEvolution">
    <LeftComponent />
    <RightComponent />
  </div>
</template>

<script>
import LeftComponent from './leftComponents/index';
import RightComponent from './rightComponents';
export default {
  name: 'CityEvolution',
  components: {
    LeftComponent,
    RightComponent,
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
}
</style>
