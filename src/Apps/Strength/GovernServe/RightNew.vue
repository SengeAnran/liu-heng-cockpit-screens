<template>
  <div class="right">
    <BaseTitle title="监控视频" :width="800" />
    <Jiankong></Jiankong>
    <Banlixinxi></Banlixinxi>
  </div>
</template>

<script>
import Banlixinxi from './RightItem/banlixinxi';
import Jiankong from './RightItem/jiankong';

export default {
  components: { Jiankong, Banlixinxi },
};
</script>


<style lang="scss" scoped>
.right {
  position: absolute;
  top: 200px;
  right: 160px;
  width: 1650px;
  height: 1027px;
  font-size: 24px;
  display: flex;
  color: #fff;
  z-index: 999;
}
</style>