<template>
  <div class="economic-dev">
    <Map />
    <transition name="slide" appear> <Left :key="Left" /></transition>
    <transition name="slide1" appear> <Right :key="Right" /></transition>
  </div>
</template>
<script>
import Left from './Left';
import Right from './Right';
// import Right2 from './Right2';
import Map from './newMap';

export default {
  components: {
    Map,
    Left,
    Right,
    // Right2,
  },
};
</script>
<style lang="scss" scoped>
@import url('../../../transform.css');
.economic-dev {
  position: fixed;
  top: 0;
  width: 100%;
  height: 135rem;
  // background: url('./bg.webp');
}
</style>
