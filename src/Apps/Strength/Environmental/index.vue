<template>
  <div class="environmental">
    <Map />
    <transition name="slide" appear> <AirQuality :key="AirQuality" /></transition>
    <transition name="slide" appear> <Pollution :key="Pollution" /></transition>

    <transition name="slide1" appear> <DangerWaste :key="DangerWaste" /></transition>
    <transition name="slide1" appear> <Punishment :key="Punishment" /></transition>
    <transition name="slide1" appear> <WaterQuality :key="WaterQuality" /></transition>
  </div>
</template>

<script>
import AirQuality from './AirQuality';
import Pollution from './Pollution';
// import Map from './Map';
import Map from './newMap';
import DangerWaste from './DangerWaste';
import Punishment from './Punishment';
import WaterQuality from './WaterQuality';
export default {
  name: 'Environmental',
  components: {
    AirQuality,
    Pollution,
    Map,
    DangerWaste,
    Punishment,
    WaterQuality,
  },
};
</script>
<style lang="scss" scoped>
@import url('../../../transform.css');
.environmental {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  // background-image: url('./img/bg.png');
  > div:not(.map-container) {
    z-index: 999;
  }
}
</style>
