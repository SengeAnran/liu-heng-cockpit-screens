<template>
  <div class="right-webview">
    <div class="right-webview_l">
      <!-- 六横航运贸易总额 -->
      <trading-total />
      <!-- 主要商品贸易额占比TOP5 -->
      <div>
        <secondary-title name="主要商品贸易额占比TOP5" />
        <pie-chart
          class="chart"
          :list="tradingPercent.data"
          :title="tradingPercent.title"
          :color="tradingPercent.color"
          :isPercent="tradingPercent.isPercent"
          :itemGap="tradingPercent.itemGap"
        />
      </div>
    </div>
    <div class="right-webview_r">
      <!-- 主要城市贸易额排名TOP10 -->
      <trading-rank />
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import TradingTotal from './TradingTotal';
import PieChart from '../components/PieChart';
import TradingRank from './TradingRank';
import { topFiveMajorCommodityTradeAccounted } from '@/api/Vitality/PortEconomy/api';
export default {
  components: {
    SecondaryTitle,
    TradingTotal,
    PieChart,
    TradingRank,
  },
  data() {
    return {
      tradingPercent: {
        title: '贸易额\n占比',
        data: [],
        color: ['#6182AE', '#66CCFF', '#31EABC', '#EDC063', '#ED9164', '#FFB1B1'],
        isPercent: false,
        itemGap: 30,
      },
    };
  },
  mounted() {
    topFiveMajorCommodityTradeAccounted()
      .request()
      .then((json) => {
        console.log(json);
        json.map((item) => {
          item.name = item.spzl;
          item.value = item.mye;
        });
        this.tradingPercent.data = json;
      });
  },
};
</script>
<style lang="scss" scoped>
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      &:first-child {
        margin-bottom: 60px;
        flex: 1.2;
      }
      .chart {
        flex: 1;
        padding-top: 20px;
      }
    }
  }
}
</style>
