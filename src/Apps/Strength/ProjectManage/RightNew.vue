<template>
  <view-template class="ProjectManage-right flex" :interval="300" @interval="getData">
    <div>
      <BaseTitle title="六横招商地块推介图层" :width="1650" />
    </div>
    <div style="top: 80px; position: absolute">
      <right-item></right-item>
    </div>
  </view-template>
</template>

<script>
import BaseTitle from '../../Overview/Medical/components/BaseTitle';
import RightItem from './RightItem';
export default {
  name: 'ProjectManageRight',
  components: { BaseTitle, RightItem },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.ProjectManage-right {
  position: absolute;
  top: 200px;
  right: 200px;
  width: 1650px;
  height: 1027px;
  font-size: 24px;
  display: flex;
  color: #fff;
  z-index: 999;
}
</style>
