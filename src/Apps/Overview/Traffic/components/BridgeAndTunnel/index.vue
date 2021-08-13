<template>
    <div>
      <Map />
      <Left1 />
      <Left2 />
      <Right1 />
      <Right2 />
    </div>
</template>

<script>
import Map from '../TrafficOverview/Map';
import Left1 from './Left1';
import Left2 from './Left2';
import Right1 from './Right1';
import Right2 from './Right2';
export default {
  components: {
    Map,
    Left1,
    Left2,
    Right1,
    Right2,
  },
};
</script>

<style scoped>

</style>
