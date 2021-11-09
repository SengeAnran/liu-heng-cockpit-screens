<template>
  <div class="peace-security">
    <transition name="slide" appear> <Supervision :key="Supervision" /></transition>
    <transition name="slide" appear> <EventRank :key="EventRank" /></transition>
    <transition name="slide" appear> <Department :key="Department" /></transition>
    <transition name="slide" appear> <Complaint :key="Complaint" /></transition>
    <SurveillanceVideo></SurveillanceVideo>
<!--    <Map />-->
    <transition name="slide1" appear> <Satisfaction :key="Satisfaction" /></transition>
    <transition name="slide1" appear> <Keywords :key="Keywords" /></transition>
    <!-- <Satisfaction />
    <Keywords /> -->
  </div>
</template>

<script>
import Supervision from './Supervision';
import EventRank from './EventRank';
import Department from './Department';
import Complaint from './Complaint';
import SurveillanceVideo from './SurveillanceVideo';
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
    SurveillanceVideo,
  },
};
</script>
<style lang="scss" scoped>
@import url('../../../transform.css');
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
