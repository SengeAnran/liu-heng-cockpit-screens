<template>
  <div class="left_componemt">
    <PeopleComposeIndex />
    <CommunityAddress />
    <CityAddress />
    <MainComponeny />
  </div>
</template>

<script>
import PeopleComposeIndex from './component/PeopleComposeIndex';
import CommunityAddress from './component/CommunityAddress';
import CityAddress from './component/CityAddress';
import MainComponeny from './component/MainComponeny';
export default {
  name: 'LeftComponents',
  components: {
    PeopleComposeIndex,
    CommunityAddress,
    CityAddress,
    MainComponeny,
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
  z-index: 100;
}
</style>
