<template>
  <div class="right">
    <div>
      <div>
        <BaseTitle title="监控视频" :width="800" />
        <Jiankong></Jiankong>
      </div>
      <div class="yuedu">
        <BaseTitle title="月度明星" :width="800" />
        <Yuedumingxing></Yuedumingxing>
      </div>
    </div>
    <div>
      <BaseTitle title="本月事件办理量排行" :width="800" />
      <Banlixinxi></Banlixinxi>
    </div>
  </div>
</template>

<script>
import Banlixinxi from './RightItem/banlixinxi';
import Jiankong from './RightItem/jiankong';

import Yuedumingxing from './RightItem/yuedumingxing';

export default {
  components: { Jiankong, Banlixinxi, Yuedumingxing },
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
.yuedu {
  position: absolute;
  top: 500px;
}
</style>