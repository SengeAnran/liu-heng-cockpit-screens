<template>
  <div class="left-webview">
    <!-- 六横镇科技情况 -->
    <secondary-title name="六横镇科技情况" isLarge />
    <div class="left-container">
      <!-- 吞吐量 -->
      <pier-situation />
      <!-- 码头吞吐量分析 -->
      <pier-analysis />
      <!-- 运输货物分类占比 -->
      <pie-chart :list="sortPercent.data" :title="sortPercent.title" :color="sortPercent.color" />
      <!-- 运输货物城市分布 -->
      <pie-chart :list="citySpread.data" :title="citySpread.title" :color="citySpread.color" :itemGap="citySpread.itemGap" />
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import PierSituation from './PierSituation';
import PierAnalysis from './PierAnalysis';
import PieChart from '../components/PieChart';
import {
  proportionOfCargoTransportedByCategory,
  distributionOfTransportGoodsInCities,
} from '@/api/Vitality/PortEconomy/api';
export default {
  components: {
    SecondaryTitle,
    PierSituation,
    PierAnalysis,
    PieChart,
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
    this.loadData();
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
