<template>
  <div class="peace-security">
    <Supervision />
    <EventRank />
    <Department />
    <Complaint />
    <Satisfaction />
    <Keywords />
  </div>
</template>

<script>
import Supervision from './Supervision';
import EventRank from './EventRank';
import Department from './Department';
import Complaint from './Complaint';
import Satisfaction from './Satisfaction';
import Keywords from './Keywords';
export default {
  name: 'PeaceSecurity',
  components: {
    Supervision,
    EventRank,
    Department,
    Complaint,
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
}
</style>
