<template>
  <div class="Education">
    <LeftComponents :style="{ left: Showleft + 'px' }" />
    <RightComponents :style="{ right: Showleft + 'px' }" />
    <Map />
  </div>
</template>

<script>
import LeftComponents from './leftComponents/index';
import RightComponents from './rightComponents/index';
import Map from './map/index';
export default {
  name: 'Education',
  components: {
    LeftComponents,
    RightComponents,
    Map,
  },
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
.Education {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  background: url('./images/education_bg.png') no-repeat;
  // background: url('./images/bg.jpg') no-repeat;
  // background-size: 100% 100%;
  // background-image: url('./images/education.jpg');
}
</style>
