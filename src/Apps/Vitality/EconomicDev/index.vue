<template>
  <div class="economic-dev">
    <Left />
    <Right1 />
    <Right2 />
  </div>
</template>
<script>
import Left from './Left';
import Right1 from './Right1';
import Right2 from './Right2';
export default {
  components: {
    Left,
    Right1,
    Right2,
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
