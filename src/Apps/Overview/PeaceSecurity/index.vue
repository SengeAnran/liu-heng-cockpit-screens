<template>
  <div class="peace-security">
    <Supervision />
    <EventRank />
    <Department />
    <Complaint />
    <Map />
    <Satisfaction />
    <Keywords />
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
};
</script>
<style lang="scss" scoped>
.peace-security {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  // background-image: url('./img/bg.jpg');
  >div:not(.map-container) {
    z-index: 999;
  }
}
</style>
