<template>
  <div class="Medical">
    <MedicalLeft :style="{ left: Showleft + 'px' }" />
    <MedicalMap />
    <MedicalRight :style="{ right: Showleft + 'px' }" />
  </div>
</template>

<script>
import MedicalLeft from './Left';
import MedicalRight from './Right';
import MedicalMap from './Map';
export default {
  name: 'Medical',
  components: { MedicalLeft, MedicalRight, MedicalMap },
  data() {
    return {
      show: true,
      Showleft: -1900,
      timer: null,
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
  },
};
</script>
<style lang="scss" scoped>
.Medical {
  position: relative;
  color: #fff;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  // background-image: url('./images/map-bg.png');
}
</style>
