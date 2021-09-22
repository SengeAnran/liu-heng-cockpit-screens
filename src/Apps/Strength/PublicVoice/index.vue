<template>
  <div class="public-voice">
    <Left1 :style="{ left: Showleft + 'px' }" />
    <Left2 :style="{ left: Showleft1 + 'px' }" />
    <Right :style="{ right: Showleft + 'px' }" />
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
  data() {
    return {
      Showleft: -1900,
      timer: null,
      Showleft1: -1000,
      timer1: null,
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
    this.timer1 = setInterval(() => {
      this.Showleft1 += 150;
      if (this.Showleft1 >= 1020) {
        this.Showleft1 = 1020;
        clearInterval(this.timer1);
      }
    }, 150);
  },
};
</script>
<style lang="scss" scoped>
.public-voice {
  position: fixed;
  top: 0;
  width: 100%;
  height: 135rem;
  // background: url('./bg.webp');
}
</style>
