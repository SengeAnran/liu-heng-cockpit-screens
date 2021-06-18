<template>
  <div class="Innovation">
    <div class="left-webview">
      <!-- 六横镇科技情况 -->
      <secondary-title name="六横镇科技情况" />
      <div class="left-container">
        <!-- 吞吐量 -->
        <throughout-capacity />
        <!-- 码头吞吐量分析 -->
        <pier-analysis />
        <!-- 运输货物分类占比 -->
        <sort-percent />
        <!-- 运输货物城市分布 -->
        <city-spread />
      </div>
    </div>
    <div class="center-webview"></div>
    <div class="right-webview">
      <div class="right-webview_l">
        <!-- 六横航运贸易总额 -->
        <trading-total />
        <!-- 主要商品贸易额占比TOP5 -->
        <trading-percent />
      </div>
      <!-- 主要城市贸易额排名TOP10 -->
      <div class="right-webview_r">
        <secondary-title name="主要城市贸易额排名TOP10" />
        <trading-rank />
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from './components/SecondaryTitle';
import ThroughoutCapacity from './modules/ThroughoutCapacity';
import PierAnalysis from './modules/PierAnalysis';
import SortPercent from './modules/SortPercent';
import CitySpread from './modules/CitySpread';
import TradingTotal from './modules/TradingTotal';
import TradingPercent from './modules/TradingPercent';
import TradingRank from './modules/TradingRank';
export default {
  name: 'PortEconomy',
  components: {
    SecondaryTitle,
    ThroughoutCapacity,
    PierAnalysis,
    SortPercent,
    CitySpread,
    TradingTotal,
    TradingPercent,
    TradingRank,
  },
};
</script>
<style lang="scss" scoped>
.Innovation {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 263px 160px 0;
  & > div {
    width: 1650px;
    height: 980px;
    overflow: hidden;
  }
  .left-webview {
    display: flex;
    flex-direction: column;
  }
  .left-container {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    & > div {
      width: 800px;
      height: 446px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      &:nth-child(-n + 2) {
        margin-bottom: 50px;
        height: 420px;
      }
    }
  }
  .right-webview {
    display: flex;
    justify-content: space-between;
    & > div {
      width: 800px;
      display: flex;
      flex-direction: column;
    }
    .right-webview_l {
      display: flex;
      flex-direction: column;
      & > div {
        flex: 1;
        &:first-child {
          margin-bottom: 40px;
        }
      }
    }
  }
}
</style>
