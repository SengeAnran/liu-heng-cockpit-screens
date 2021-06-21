<template>
  <div class="left_componemt">
    <PeopleComposeIndex />
    <CommunityAddress />
    <PeopleComposeCharts />
    <PeopleAgeSex />
  </div>
</template>

<script>
import PeopleComposeIndex from './component/PeopleComposeIndex';
import PeopleComposeCharts from './component/PeopleComposeCharts';
import CommunityAddress from './component/CommunityAddress';
import PeopleAgeSex from './component/PeopleAgeSex';
export default {
  name: 'LeftComponents',
  components: {
    PeopleComposeIndex,
    PeopleComposeCharts,
    CommunityAddress,
    PeopleAgeSex,
  },
};
</script>
<style lang="scss" scoped>
.left_componemt {
  position: absolute;
  width: 1710px;
  height: 1076px;
  top: 240px;
  left: 140px;
  // background: red;
  // opacity: 0.6;
  z-index: 100;
}
</style>
