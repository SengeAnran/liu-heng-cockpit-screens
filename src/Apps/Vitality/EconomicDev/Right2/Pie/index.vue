<template>
  <div class="pie-wrapper">
    <div class="pie" ref="eleChart"></div>
    <div class="tab-list">
      <div
        class="tab-item"
        v-for="item in tabs"
        :class="{ active: item === activeTab }"
        @click="changeTab(item)"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts/lib/echarts';
import getOptions from './options';
import economicAPI from '@/api/Vitality/EconomicDev';

export default {
  data() {
    const tabs = [
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
    ];
    return {
      list: [
        // { name: '第一产业产值', value: 12 },
        // { name: '第二产业产值', value: 25 },
        // { name: '第三产业产值', value: 123 },
      ],
      tabs: tabs,
      activeTab: tabs[0],
    };
  },
  mounted() {
    this.initChart();
    this.fetchData();
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
      this.fetchData();
    },
    initChart() {
      this.chart = echarts.init(this.$refs.eleChart);
      this.chart.setOption(getOptions(this.list));
    },
    async fetchData() {
      const data = await economicAPI.distributionByYear(this.activeTab);
      const list = data
        .map((d) => ({
          ...d,
          name: d.cyfl,
          value: d.cyz,
        }));
      this.chart.setOption(getOptions(list));
    },
  },
};
</script>
<style lang="scss" scoped>
.pie-wrapper {
  flex: auto;
  margin-top: 4rem;
  // outline: 1px solid red;
  height: 40rem;
  position: relative;
  .pie {
    width: 100%;
    height: 100%;
  }
  .tab-list {
    // outline: 1px solid red;
    position: absolute;
    top: 10rem;
    left: 40rem;
    color: #fff;
    display: flex;
    .tab-item {
      font-size: 2.9rem;
      font-family: DIN;
      font-weight: 500;
      color: #FFFEFE;
      width: 70px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 1rem;
      &.active {
        background: #FFFFFF;
        color: #010102;
      }
    }
  }
}

</style>
