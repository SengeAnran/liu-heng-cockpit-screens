<template>
  <div class="right-1">
<!-- 工业生产总值与工业企业数   -->
    <BarLine
      title="对外经济增长和旅游业"
      :data="list1"
      :content="content1"
      :refresh-key="key1"
    />
<!-- 旅游接待人数和旅游收入   -->
    <BarLine
      :data="list2"
      :content="content2"
      :refresh-key="key2"
    />

  </div>
</template>
<script>

import BarLine from '../components/BarLine';
import economicAPI from '@/api/Vitality/EconomicDev';

export default {
  components: {
    BarLine,
  },
  data() {
    return {
      data: '',
      list1: [],
      content1: {},
      key1: false,
      list2: [],
      content2: {},
      key2: false,
    };
  },
  mounted() {
    this.foreignTradeAndGrowthRates();
    this.tourismReceptionIncome();
  },
  methods: {
    // 工业生产总值与工业企业数
    async foreignTradeAndGrowthRates() {
      const data = await economicAPI.foreignTradeAndGrowthRates();
      // console.log(data);
      this.list1 = data.map((d) => ({
        // ...d,
        name: d.sj,
        bar: d.jckze,
        line: d.zf,
      }));
      this.content1 = {
        title: '外贸总额和增长率',
        rightUnit: '（%）',
        leftUnit: '（元）',
        barName: '进出口总额',
        lineName: '增幅',
      };
      this.key1 = true;
      // console.log(data);
      // console.log(this.list1);
    },
    // 旅游接待人数和旅游收入
    async tourismReceptionIncome() {
      const data = await economicAPI.tourismReceptionIncome();
      // console.log(data);
      this.list2 = data.map((d) => ({
        // ...d,
        name: d.sj,
        bar: d.jdrs,
        line: d.lysr,
      }));
      this.content2 = {
        title: '旅游接待人数和旅游收入',
        rightUnit: '（亿元）',
        leftUnit: '（万人次）',
        barName: '接待人数',
        lineName: '旅游收入',
      };
      this.key2 = true;
      // console.log(data);
      // console.log(this.list1);
    },
  },
};
</script>
<style lang="scss" scoped>
.right-1 {
  position: absolute;
  top: 26rem;
  right: 101rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
