<template>
  <div class="population-map">
    <Register />
    <FloatPopulation />
    <FlowRank />
    <AgeDistribution />
    <Degree />
    <Single />
    <Work />
  </div>
</template>

<script>
import Register from './Register';
import FloatPopulation from './FloatPopulation';
import FlowRank from './FlowRank';
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
    AgeDistribution,
    Degree,
    Single,
    Work,
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
}
</style>
