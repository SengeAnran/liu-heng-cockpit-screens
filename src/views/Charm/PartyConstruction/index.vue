<template>
  <div class="party-construction">
    <div class="left-part">
      <LeftSection1 class="section-item" />
      <LeftSection2 class="section-item" />
    </div>

    <div class="right-part">
      <RightSection1 class="section-item"/>
      <RightSection2 class="section-item"/>
      <RightSection3 class="section-item"/>
      <RightSection4 class="section-item"/>
    </div>
  </div>
</template>
<script>
import LeftSection1 from './LeftSection1';
import LeftSection2 from './LeftSection2';
import RightSection1 from './RightSection1';
import RightSection2 from './RightSection2';
import RightSection3 from './RightSection3';
import RightSection4 from './RightSection4';
export default {
  components: {
    LeftSection1,
    LeftSection2,
    RightSection1,
    RightSection2,
    RightSection3,
    RightSection4,
  },
};
</script>
<style lang="scss" scoped>
.party-construction{
  p{
    margin: 0;
  }
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
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50rem 42rem;
    grid-row-gap: 3rem;
    grid-column-gap: 4rem;
  }
}
</style>
