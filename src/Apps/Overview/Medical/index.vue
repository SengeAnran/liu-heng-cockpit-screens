<template>
  <div class="Medical">
    <transition name="slide" appear>
      <MedicalLeft :key="MedicalLeft" />
    </transition>
    <MedicalMap />

    <transition name="slide1" appear>
      <MedicalRight :key="MedicalRight" />
    </transition>
  </div>
</template>

<script>
import MedicalLeft from './Left';
import MedicalRight from './Right';
import MedicalMap from './Map';
export default {
  name: 'Medical',
  components: { MedicalLeft, MedicalRight, MedicalMap },
};
</script>
<style lang="scss" scoped>
@import url('../../../transform.css');
.Medical {
  position: relative;
  color: #fff;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  // background-image: url('./images/map-bg.png');
}
</style>
