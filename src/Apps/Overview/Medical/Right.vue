<template>
  <div class="Medical-Right">
    <BaseTitle title="医务业务量"/>
  </div>
</template>

<script>
import BaseTitle from './components/BaseTitle';
export default {
  name: 'MedicalRight',
  components: { BaseTitle },
};
</script>
<style lang="scss" scoped>
.Medical-Right {
  width: 1650px;
  height: 977px;
  position: absolute;
  top: 263px;
  right: 159px;
  .BaseTitle{
    width: 1650px;
  }
}
</style>
