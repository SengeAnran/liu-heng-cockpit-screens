<template>
  <div class="right-webview">
    <div class="right-webview_l">
      <div>
        <secondary-title name="外贸进出口总额与增速" />
        <Chart1 />
      </div>
      <div>
        <secondary-title name="进口总额及增速" />
        <Chart2 />
      </div>
    </div>
    <div class="right-webview_r">
      <div>
        <secondary-title name="出口总额及增速" />
        <Chart3 />
      </div>
      <div>
        <secondary-title name="主要企业进出口总额" />
        <Chart4 />
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import Chart1 from './chart1';
import Chart2 from './chart2';
import Chart3 from './chart3';
import Chart4 from './chart4';
// import { topFiveMajorCommodityTradeAccounted } from '@/api/Vitality/PortEconomy/api';
export default {
  components: {
    SecondaryTitle,
    Chart1,
    Chart2,
    Chart3,
    Chart4,
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
    // topFiveMajorCommodityTradeAccounted()
    //   .request()
    //   .then((json) => {
    //     json.map((item) => {
    //       item.name = item.spzl;
    //       item.value = item.mye;
    //     });
    //     this.tradingPercent.data = json;
    //   });
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
  .right-webview_l,
  .right-webview_r {
    display: flex;
    flex-direction: column;
    & > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      &:nth-child(2){
        margin-top: 24px;
      }
      & > div {
        &:nth-child(2) {
          flex:1;
          margin-top: 24px;
        }
      }
      .chart {
        flex: 1;
      }
    }
  }
}
</style>
