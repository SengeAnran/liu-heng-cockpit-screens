<template>
  <div class="Education">
    <transition name="slide" appear> <LeftComponents :key="LeftComponents" /></transition>
    <transition name="slide1" appear> <RightComponents :key="RightComponents" /></transition>
    <Map />
  </div>
</template>

<script>
import LeftComponents from './leftComponents/index';
import RightComponents from './rightComponents/index';
import Map from './map/index';
export default {
  name: 'Education',
  components: {
    LeftComponents,
    RightComponents,
    Map,
  },
};
</script>
<style lang="scss" scoped>
@import url('../../../transform.css');
.Education {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  background: url('./images/education_bg.png') no-repeat;
  // background: url('./images/bg.jpg') no-repeat;
  // background-size: 100% 100%;
  // background-image: url('./images/education.jpg');
}
</style>
