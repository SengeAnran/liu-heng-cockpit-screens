<template>
  <div class="govern-serve">
    <Left :style="{ left: Showleft + 'px' }" />
    <Map />
    <Right :style="{ right: Showleft + 'px' }" />
  </div>
</template>

<script>
import Left from './Left';
import Map from './Map';
import Right from './Right';

export default {
  name: 'GovernServe',
  components: { Left, Map, Right },
  data() {
    return {
      show: true,
      Showleft: -1900,
    };
  },
  computed: {},
  mounted() {
    this.timer = setInterval(() => {
      this.Showleft += 150;
      if (this.Showleft >= 180) {
        this.Showleft = 180;
        clearInterval(this.timer);
      }
    }, 150);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.govern-serve {
  width: 100%;
  height: 2070px;
  background-position: center;
  // background: url('./img/bg.png') no-repeat 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
