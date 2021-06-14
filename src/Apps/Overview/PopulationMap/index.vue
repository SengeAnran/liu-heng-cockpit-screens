<template>
  <div class="population-map">
    <Register />
    <FloatPopulation />
    <AgeDistribution />
  </div>
</template>

<script>
import Register from './Register';
import FloatPopulation from './FloatPopulation';
import AgeDistribution from './AgeDistribution';
export default {
  name: 'PopulationMap',
  components: {
    Register,
    FloatPopulation,
    AgeDistribution,
  },
};
</script>
<style lang="scss" scoped>
.population-map {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  background-image: url('./img/overview-population.jpg');
}
</style>
