<template>
  <div class="left-webview">
    <!-- 六横镇科技情况 -->
    <secondary-title name="港口货运能力" isLarge />
    <div class="left-container">
      <Chart1 />
      <Chart2 />
      <Chart3 />
      <Chart4 />
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import Chart1 from './chart1';
import Chart2 from './chart2';
import Chart3 from './chart3';
import Chart4 from './chart4';
import {
  proportionOfCargoTransportedByCategory,
  distributionOfTransportGoodsInCities,
} from '@/api/Vitality/PortEconomy/api';
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
      sortPercent: {
        title: '运输货物\n分类占比',
        data: [],
        color: ['#6182AE', '#66CCFF', '#31EABC', '#EDC063', '#ED9164', '#FFB1B1'],
      },
      citySpread: {
        title: '运输货物\n城市分布',
        data: [],
        color: ['#6182AE', '#66CCFF', '#31EABC', '#EDC063', '#ED9164', '#FFB1B1'],
        itemGap: 30,
      },
    };
  },
  mounted() {
    // this.loadData();
  },
  methods: {
    loadData() {
      // 获取运输货物分类占比
      this.getSortPercentData();
      // 获取运输货物城市分布
      this.getCitySpread();
    },
    // 获取运输货物分类占比
    getSortPercentData() {
      proportionOfCargoTransportedByCategory()
        .request()
        .then((json) => {
          json.map((item) => {
            item.name = item.yshwfl;
            item.value = item.yshwl;
          });
          this.sortPercent.data = json;
        });
    },
    // 获取运输货物城市分布
    getCitySpread() {
      distributionOfTransportGoodsInCities()
        .request()
        .then((json) => {
          json.map((item) => {
            item.name = item.csmc;
            item.value = item.yshwl;
          });
          this.citySpread.data = json;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
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
</style>
