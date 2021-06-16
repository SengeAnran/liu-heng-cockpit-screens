<template>
  <div class="environmental">
    <AirQuality />
    <Pollution />
    <DangerWaste />
    <Punishment />
    <WaterQuality />
  </div>
</template>

<script>
import AirQuality from './AirQuality';
import Pollution from './Pollution';
import DangerWaste from './DangerWaste';
import Punishment from './Punishment';
import WaterQuality from './WaterQuality';
export default {
  name: 'Environmental',
  components: {
    AirQuality,
    Pollution,
    DangerWaste,
    Punishment,
    WaterQuality,
  },
};
</script>
<style lang="scss" scoped>
.environmental {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  // background-image: url('./img/bg.png');
}
</style>
