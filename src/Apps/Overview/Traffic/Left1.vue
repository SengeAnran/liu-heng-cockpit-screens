<template>
  <div class="left-1">
    <Title>客运量分布情况</Title>
    <BarPie />
    <Title>全镇客源量</Title>
    <Bar1 />
  </div>
</template>
<script>
import Title from './Title';
import BarPie from './BarPie';
import Bar1 from './Bar1';

export default {
  components: {
    Title,
    BarPie,
    Bar1,
  },
};
</script>
<style lang="scss" scoped>
.left-1 {
  position: absolute;
  top: 26.4rem;
  left: 16rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
