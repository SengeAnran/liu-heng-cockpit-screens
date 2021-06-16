<template>
  <div class="Education">
    <LeftComponents />
  </div>
</template>

<script>
import LeftComponents from './leftComponents/index';
export default {
  name: 'Education',
  components: {
    LeftComponents,
  },
};
</script>
<style lang="scss" scoped>
.Education {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  // background-image: url('./images/education.jpg');
}
</style>
