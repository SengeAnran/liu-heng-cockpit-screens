<template>
  <div class="party-construction">
    <div class="left-part">
      <LeftSection1 class="section-item" />
      <LeftSection2 class="section-item" />
    </div>

    <div class="right-part"></div>
  </div>
</template>
<script>
import LeftSection1 from './LeftSection1';
import LeftSection2 from './LeftSection2';
export default {
  components: {
    LeftSection1,
    LeftSection2,
  },
};
</script>
<style lang="scss" scoped>
.party-construction{
  .left-part{
    position: absolute;
    width: 170rem;
    top: 26.3rem;
    left: 16rem;
  }
  .right-part{
    position: absolute;
    width: 170rem;
    right: 16rem;
    top: 26.3rem;
  }
}
</style>
