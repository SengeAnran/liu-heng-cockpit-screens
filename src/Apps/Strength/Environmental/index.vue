<template>
  <div class="environmental">
    <AirQuality :style="{ left: Showleft + 'px' }" />
    <Pollution :style="{ left: Showleft1 + 'px' }" />
    <Map />
    <DangerWaste :style="{ right: Showleft + 'px' }" />
    <Punishment :style="{ right: Showleft + 'px' }" />
    <WaterQuality :style="{ right: Showleft1 + 'px' }" />
  </div>
</template>

<script>
import AirQuality from './AirQuality';
import Pollution from './Pollution';
import Map from './Map';
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
  data() {
    return {
      Showleft: -1900,
      timer: null,
      Showleft1: -1000,
      timer1: null,
    };
  },
  computed: {},
  mounted() {
    this.timer = setInterval(() => {
      this.Showleft += 150;
      if (this.Showleft >= 160) {
        this.Showleft = 160;
        clearInterval(this.timer);
      }
    }, 150);
    this.timer1 = setInterval(() => {
      this.Showleft1 += 150;
      if (this.Showleft1 >= 1020) {
        this.Showleft1 = 1020;
        clearInterval(this.timer1);
      }
    }, 150);
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
  > div:not(.map-container) {
    z-index: 999;
  }
}
</style>
