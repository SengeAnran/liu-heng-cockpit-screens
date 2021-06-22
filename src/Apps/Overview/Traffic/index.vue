<template>
  <div class="traffic">
    <Left1 />
    <Left2 />
    <Right1 />
    <Right2 />
  </div>
</template>
<script>
import Left1 from './Left1';
import Left2 from './Left2';
import Right1 from './Right1';
import Right2 from './Right2';

export default {
  components: {
    Left1,
    Left2,
    Right1,
    Right2,
  },
};
</script>
<style lang="scss" scoped>
.traffic {
  position: fixed;
  top: 0;
  width: 100%;
  height: 135rem;
  // background: url('/imgs/overview-traffic.jpg');
}
</style>
