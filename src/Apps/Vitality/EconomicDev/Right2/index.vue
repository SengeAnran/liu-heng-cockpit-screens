<template>
  <div class="right-2">
    <Title>人口宏观情况</Title>
    <Indicators />
    <Bar />
    <!-- 渔农村常住居民人均可支配收入   -->
    <BarLine
      :data="list1"
      :content="content1"
      :refresh-key="key1"
    />
  </div>
</template>
<script>
import Title from '../Title';
import Indicators from './Indicators';
import Bar from './Bar';
import BarLine from '../components/BarLine';
import economicAPI from '@/api/Vitality/EconomicDev';

export default {
  components: {
    Title,
    Indicators,
    Bar,
    BarLine,
  },
  data() {
    return {
      list1: [],
      content1: {},
      key1: false,
    };
  },
  mounted() {
    this.foreignTradeAndGrowthRates();
  },
  methods: {
    // 渔农村常住居民人均可支配收入
    async foreignTradeAndGrowthRates() {
      const data = await economicAPI.perCapitaDisposableIncome();
      // console.log(data);
      this.list1 = data.map((d) => ({
        // ...d,
        name: d.sj,
        bar: d.rjkzpsr,
        line: d.zf,
      }));
      this.content1 = {
        title: '渔农村常住居民人均可支配收入',
        rightUnit: '（%）',
        leftUnit: '（元）',
        barName: '渔农村常住居民人均可支配收入',
        lineName: '增幅',
      };
      this.key1 = true;
      // console.log(data);
      // console.log(this.list1);
    },
  },
};
</script>
<style lang="scss" scoped>
.right-2 {
  position: absolute;
  top: 26rem;
  right: 16rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
