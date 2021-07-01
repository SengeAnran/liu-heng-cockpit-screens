<template>
  <div class="economic-dev">
    <Map />
    <Left />
    <Right />
<!--    <Right2 />-->
  </div>
</template>
<script>
import Left from './Left';
import Right from './Right';
// import Right2 from './Right2';
import Map from './Map';

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
.economic-dev {
  position: fixed;
  top: 0;
  width: 100%;
  height: 135rem;
  // background: url('./bg.webp');
}
</style>
