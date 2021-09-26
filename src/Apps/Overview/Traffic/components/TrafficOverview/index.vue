<template>
  <div>
    <Map />
    <transition name="slide" appear>
      <Left1 :key="Left1" />
    </transition>
    <transition name="slide" appear>
      <Left2 :key="Left2" />
    </transition>
    <transition name="slide1" appear>
      <Right1 :key="Right1" />
    </transition>
    <transition name="slide1" appear>
      <Right2 :key="Right2" />
    </transition>
  </div>
</template>

<script>
import Map from './Map';
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

<style scoped lang="scss">
@import url('../../../../../transform.css');
</style>
