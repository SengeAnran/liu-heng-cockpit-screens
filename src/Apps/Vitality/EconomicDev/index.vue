<template>
  <div class="economic-dev">
    <Map />
    <Left :style="{ left: Showleft + 'px' }" />
    <Right :style="{ right: Showleft + 'px' }" />
    <!--    <Right2 />-->
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
  data() {
    return {
      Showleft: -1900,
      timer: null,
    };
  },
  computed: {},
  mounted() {
    this.timer = setInterval(() => {
      this.Showleft += 150;
      if (this.Showleft >= 160) {
        this.Showleft = 160;
        clearInterval(this.timer);
      }
    }, 150);
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
