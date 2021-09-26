<template>
  <div class="CityEvolution">
    <transition name="slide" appear> <LeftComponent :key="LeftComponent" /></transition>
    <transition name="slide1" appear>
       <RightComponent :key="RightComponent" />
       </transition>
    <Map />
  </div>
</template>

<script>
import LeftComponent from './leftComponents/index';
import RightComponent from './rightComponents';
import Map from './map/index';
export default {
  name: 'CityEvolution',
  components: {
    LeftComponent,
    RightComponent,
    Map,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
// 添加入场和离场动画
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translate3d(-100%, 0, 0);
}
// 添加入场和离场动画
.slide1-enter-active,
.slide1-leave-active {
  transition: all 0.5s;
}

.slide1-enter,
.slide1-leave-to {
  transform: translate3d(100%, 0, 0);
}

c .CityEvolution {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  // background-image: url('./images/bg.png');
  // background: url('./images/bg.jpg') no-repeat;
  // background-size: 100% 100%;
  // background-image: url('./images/show-bg.png');
  // background-image: url('./images/empty_bg.png');
}
</style>
