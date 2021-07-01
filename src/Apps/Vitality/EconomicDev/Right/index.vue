<template>
  <div class="right">
    <Title>对外经济和旅游业</Title>
    <div class="first-row">
      <BarLine
        :data="list1"
        :content="content1"
        :refresh-key="key1"
      />
      <BarLine
        :data="list2"
        :content="content2"
        :refresh-key="key2"
      />
    </div>
    <Title>人口经济情况</Title>
    <div class="second-row">
      <div>
        <Indicators />
        <PopulationEconomy />
      </div>
      <BarLine
        :data="list3"
        :content="content3"
        :refresh-key="key3"
      />
    </div>
  </div>
</template>
<script>
import Title from '../Title';
import BarLine from '../components/BarLine';
import Indicators from './Indicators';
import PopulationEconomy from './PopulationEconomy';
// import BarBar from '../components/BarBar';
// import DoubleBar from './DoubleBar';
import economicAPI from '@/api/Vitality/EconomicDev';

export default {
  components: {
    Title,
    Indicators,
    BarLine,
    PopulationEconomy,
    // DoubleBar,
    // Pie,
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
      list3: [],
      content3: {},
      key3: false,
    };
  },
  mounted() {
    this.foreignTradeAndGrowthRates();
    this.tourismReceptionIncome();
    this.perCapitaDisposableIncome();
  },
  methods: {
    // 外贸总额和增长率
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
    // 渔农村常住居民人均支配收入
    async perCapitaDisposableIncome() {
      const data = await economicAPI.perCapitaDisposableIncome();
      // console.log(data);
      this.list3 = data.map((d) => ({
        // ...d,
        name: d.sj,
        bar: d.rjkzpsr,
        line: d.zf,
      }));
      this.content3 = {
        title: '渔农村常住居民人均可支配收入',
        rightUnit: '（%）',
        leftUnit: '（元）',
        barName: '渔农村常住居民人均可支配收入',
        lineName: '增幅',
      };
      this.key3 = true;
      // console.log(data);
      // console.log(this.list1);
    },
  },
};
</script>
<style lang="scss" scoped>
.right {
  position: absolute;
  top: 26rem;
  right: 16rem;
  width: 165rem;
  .first-row {
    margin-top: 2rem;
    display: flex;
  }
  .second-row {
    // outline: 1px solid red;
    margin-top: 3rem;
    display: flex;
    //justify-content: space-between;
    .row-right{
      //margin-left: 6rem;
    }
  }
}
</style>
