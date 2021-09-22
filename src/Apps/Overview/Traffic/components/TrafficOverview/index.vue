<template>
  <div>
    <Map />
    <Left1 :style="{ left: Showleft + 'px' }" />
    <Left2 :style="{ left: Showleft1 + 'px' }" />
    <Right1 :style="{ right: Showleft + 'px' }" />
    <Right2 :style="{ right: Showleft1 + 'px' }" />
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
  data() {
    return {
      show: true,
      Showleft: -1900,
      Showleft1: -1000,
      timer: null,
      timer1: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.Showleft += 150;
      if (this.Showleft >= 140) {
        this.Showleft = 140;
        clearInterval(this.timer);
      }
    }, 150);
    this.timer1 = setInterval(() => {
      this.Showleft1 += 150;
      if (this.Showleft1 >= 990) {
        this.Showleft1 = 990;
        clearInterval(this.timer1);
      }
    }, 150);
  },
};
</script>

<style scoped>
</style>
