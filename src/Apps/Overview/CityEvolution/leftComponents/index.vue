<template>
  <div class="left_componemt">
    <PeopleCompose />
  </div>
</template>

<script>
import PeopleCompose from './component/PeopleCompose';
export default {
  name: 'LeftComponents',
  components: {
    PeopleCompose,
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
}
</style>
