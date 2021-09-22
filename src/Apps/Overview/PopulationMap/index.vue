<template>
  <div class="population-map">
    <!-- <div :style="{ right: Showleft + 'px' }"></div> -->
    <Register :style="{ left: Showleft + 'px' }" />
    <FloatPopulation :style="{ left: Showleft1 + 'px' }" />
    <FlowRank :style="{ left: Showleft2 + 'px' }" />

    <Map />

    <AgeDistribution :style="{ right: Showleft2 + 'px' }" />
    <Degree :style="{ right: Showleft2 + 'px' }" />
    <Single :style="{ right: Showleft + 'px' }" />
    <Work :style="{ right: Showleft1 + 'px' }" />
  </div>
</template>

<script>
import Register from './Register';
import FloatPopulation from './FloatPopulation';
import FlowRank from './FlowRank';
import Map from './Map';
import AgeDistribution from './AgeDistribution';
import Degree from './Degree';
import Single from './Single';
import Work from './Work';
export default {
  name: 'PopulationMap',
  components: {
    Register,
    FloatPopulation,
    FlowRank,
    Map,
    AgeDistribution,
    Degree,
    Single,
    Work,
  },
  data() {
    return {
      show: true,
      Showleft: -1900,
      timer: null,
      Showleft1: -1900,
      timer1: null,
      Showleft2: -1000,
      timer2: null,
      Showleft3: -1900,
      timer3: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.Showleft += 150;
      if (this.Showleft >= 150) {
        this.Showleft = 150;
        clearInterval(this.timer);
      }
    }, 150);
    this.timer1 = setInterval(() => {
      this.Showleft1 += 150;
      if (this.Showleft1 >= 150) {
        this.Showleft1 = 150;
        clearInterval(this.timer1);
      }
    }, 150);
    this.timer2 = setInterval(() => {
      this.Showleft2 += 150;
      if (this.Showleft2 >= 990) {
        this.Showleft2 = 990;
        clearInterval(this.timer2);
      }
    }, 150);
    this.timer3 = setInterval(() => {
      this.Showleft3 += 150;
      if (this.Showleft3 >= 990) {
        this.Showleft3 = 990;
        clearInterval(this.timer3);
      }
    }, 150);
  },
};
</script>
<style lang="scss" scoped>
.population-map {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  background-image: url('./img/show-bg.png');
  > div:not(.map-container) {
    z-index: 999;
  }
}
</style>
