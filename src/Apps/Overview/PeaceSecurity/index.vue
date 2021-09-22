<template>
  <div class="peace-security">
    <Supervision :style="{ left: Showleft + 'px' }" />
    <EventRank :style="{ left: Showleft1 + 'px' }" />
    <Department :style="{ left: Showleft2 + 'px' }" />
    <Complaint :style="{ left: Showleft2 + 'px' }" />
    <Map />
    <Satisfaction :style="{ right: Showleft + 'px' }" />
    <Keywords :style="{ right: Showleft + 'px' }" />
  </div>
</template>

<script>
import Supervision from './Supervision';
import EventRank from './EventRank';
import Department from './Department';
import Complaint from './Complaint';
import Map from './Map';
import Satisfaction from './Satisfaction';
import Keywords from './Keywords';
export default {
  name: 'PeaceSecurity',
  components: {
    Supervision,
    EventRank,
    Department,
    Complaint,
    Map,
    Satisfaction,
    Keywords,
  },
  data() {
    return {
      show: true,
      Showleft: -1900,
      timer: null,
      Showleft1: -1900,
      timer1: null,
      Showleft2: -1000,
      timer2: null,
      Showleft3: -1900,
      timer3: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.Showleft += 150;
      if (this.Showleft >= 150) {
        this.Showleft = 150;
        clearInterval(this.timer);
      }
    }, 150);
    this.timer1 = setInterval(() => {
      this.Showleft1 += 150;
      if (this.Showleft1 >= 150) {
        this.Showleft1 = 150;
        clearInterval(this.timer1);
      }
    }, 150);
    this.timer2 = setInterval(() => {
      this.Showleft2 += 150;
      if (this.Showleft2 >= 990) {
        this.Showleft2 = 990;
        clearInterval(this.timer2);
      }
    }, 150);
    this.timer3 = setInterval(() => {
      this.Showleft3 += 150;
      if (this.Showleft3 >= 990) {
        this.Showleft3 = 990;
        clearInterval(this.timer3);
      }
    }, 150);
  },
};
</script>
<style lang="scss" scoped>
.peace-security {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  // background-image: url('./img/bg.jpg');
  > div:not(.map-container) {
    z-index: 999;
  }
}
</style>
