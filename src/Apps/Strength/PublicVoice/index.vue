<template>
  <div class="public-voice">
    <transition name="slide" appear> <Left1 :key="Left1" /></transition>
    <transition name="slide" appear> <Left2 :key="Left2" /></transition>
    <!-- <Right /> -->
    <transition name="slide1" appear> <Right :key="Right" /></transition>
    <Map />
  </div>
</template>
<script>
import Left1 from './Left1';
import Left2 from './Left2';
import Right from './Right';
import Map from './Map';

export default {
  components: {
    Left1,
    Left2,
    Right,
    Map,
  },
};
</script>
<style lang="scss" scoped>
@import url('../../../transform.css');
.public-voice {
  position: fixed;
  top: 0;
  width: 100%;
  height: 135rem;
  // background: url('./bg.webp');
}
</style>
