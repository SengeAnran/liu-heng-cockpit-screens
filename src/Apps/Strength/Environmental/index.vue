<template>
  <div class="environmental">
    <Pollution />
    <DangerWaste />
    <Punishment />
  </div>
</template>

<script>
import Pollution from './Pollution';
import DangerWaste from './DangerWaste';
import Punishment from './Punishment';
export default {
  name: 'Environmental',
  components: {
    Pollution,
    DangerWaste,
    Punishment,
  },
};
</script>
<style lang="scss" scoped>
.environmental {
  position: relative;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  background-image: url('./img/bg.png');
}
</style>
