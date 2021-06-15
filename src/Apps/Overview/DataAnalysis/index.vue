<template>
  <div class="DataAnalysis">
    <div class="left-webview">
      <!-- 宜居之岛 -->
      <livable-island />
      <!-- 产业之岛 -->
      <industry-island />
    </div>
    <div class="center-webview">
      <!-- 奋斗之岛 -->
      <struggle-island />
      <!-- 平安之岛 -->
      <safe-island />
    </div>
    <div class="right-webview">
      <!-- 中枢之岛 -->
      <hub-island />
      <!-- 制造之岛 -->
      <create-island />
    </div>
  </div>
</template>

<script>
import LivableIsland from './modules/LivableIsland';
import IndustryIsland from './modules/IndustryIsland';
import StruggleIsland from './modules/StruggleIsland';
import SafeIsland from './modules/SafeIsland';
import HubIsland from './modules/HubIsland';
import CreateIsland from './modules/CreateIsland';

export default {
  name: 'DataAnalysis',
  components: {
    LivableIsland,
    IndustryIsland,
    StruggleIsland,
    SafeIsland,
    HubIsland,
    CreateIsland,
  },
};
</script>
<style lang="scss" scoped>
.DataAnalysis {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 2070px;
  display: flex;
  justify-content: space-between;
  padding: 244px 160px 0;
  & > div {
    width: 1650px;
    overflow: hidden;
    & > div {
      height: 502px;
      display: flex;
      flex-direction: column;
      margin-bottom: 45px;
    }
  }
}
</style>
