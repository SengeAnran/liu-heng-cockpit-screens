<template>
  <div class="population-map">
    <transition name="slide" appear> <Register :key="Register" /></transition>
    <transition name="slide" appear> <FloatPopulation :key="Register" /></transition>
    <transition name="slide" appear> <FlowRank :key="Register" /></transition>
    <Map />
    <transition name="slide1" appear> <AgeDistribution :key="AgeDistribution" /></transition>
    <transition name="slide1" appear> <Degree :key="Degree" /></transition>
    <transition name="slide1" appear> <Single :key="Single" /></transition>
    <transition name="slide1" appear> <Work :key="Work" /></transition>
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
};
</script>
<style lang="scss" scoped>
@import url('../../../transform.css');
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
