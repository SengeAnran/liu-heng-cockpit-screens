<template>
  <div class="right">
    <div>
      <div>
        <BaseTitle title="监控视频" :width="800" />
        <Jiankong></Jiankong>
      </div>
      <div class="yuedu">
        <div style="display: flex; justify-content: space-between; cursor: pointer; width: 800px">
          <BaseTitle title="异常行为分析" tableWidth="300px" @onClick="showBehavior = true"/>
          <BaseTitle title="异常事件列表" tableWidth="300px" @onClick="showBehavior = false" />
        </div>
        <abnormalBehavior v-if="showBehavior"></abnormalBehavior>
        <behaviorList v-else></behaviorList>
      </div>
    </div>
    <div>
      <div>
        <BaseTitle title="本月事件办理量排行" :width="800" />
        <Banlixinxi></Banlixinxi>
      </div>
      <div class="yuedu">
        <BaseTitle title="月度明星" :width="800" />
        <Yuedumingxing></Yuedumingxing>
      </div>
    </div>
  </div>
</template>

<script>
import Banlixinxi from './RightItem/banlixinxi';
import behaviorList from './RightItem/behaviorList';
import Jiankong from './RightItem/jiankong';

import abnormalBehavior from './RightItem/abnormalBehavior';
import Yuedumingxing from './RightItem/yuedumingxing';

export default {
  components: { Jiankong, Banlixinxi, Yuedumingxing, abnormalBehavior, behaviorList },
  data() {
    return {
      showBehavior: true,
    }
  }
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
  z-index: 9999;
}
.yuedu {
  position: absolute;
  top: 500px;
  margin-top: 51px;
}

</style>
