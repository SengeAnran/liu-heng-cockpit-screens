<template>
  <div class="Medical">
    <MedicalLeft/>
    <MedicalRight/>
  </div>
</template>

<script>
import MedicalLeft from './Left';
import MedicalRight from './Right';
export default {
  name: 'Medical',
  components: { MedicalLeft, MedicalRight },
};
</script>
<style lang="scss" scoped>
.Medical {
  position: relative;
  color: #fff;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  // background-image: url('./images/overview-medical.jpg');
}
</style>
