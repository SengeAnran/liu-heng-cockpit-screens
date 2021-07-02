<template>
  <div class="left">
    <Title>工业生产总值与工业企业数</Title>
    <div class="first-row">
      <BarLine
        :data="list1"
        :content="content1"
        :refresh-key="key1"
      />
      <Pie />
<!--      <BarLine />-->
    </div>
    <Title>渔业</Title>
    <div class="second-row">

<!--      <DoubleBar />-->
      <BarBar
        :data="list2"
        :content="content2"
        :refresh-key="key2"
      />
      <span class="row-right">
        <BarBar
          :data="list3"
          :content="content3"
          :refresh-key="key3"
        />
      </span>
    </div>
  </div>
</template>
<script>
import Title from '../Title';
import BarLine from '../components/BarLine';
import BarBar from '../components/BarBar';
// import DoubleBar from './DoubleBar';
import Pie from './Pie';
import economicAPI from '@/api/Vitality/EconomicDev';

export default {
  components: {
    Title,
    // Indicators,
    BarLine,
    BarBar,
    // DoubleBar,
    Pie,
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
    this.industrialAndEnterprises();
    this.fishAndAgricultural();
    this.aquaticProductsTotal();
  },
  methods: {
    // 工业生产总值与工业企业数
    async industrialAndEnterprises() {
      const data = await economicAPI.industrialAndEnterprises();
      // console.log(data);
      this.list1 = data.map((d) => ({
        // ...d,
        name: d.sj,
        bar: d.gycl,
        line: d.gyqys,
      }));
      this.content1 = {
        title: '工业生产总值',
        rightUnit: '工业企业数',
        leftUnit: '（亿元）',
        barName: '工业产值',
        lineName: '工业企业数',
      };
      this.key1 = true;
      // console.log(data);
      // console.log(this.list1);
    },
    // 渔农业总产值
    async fishAndAgricultural() {
      const data = await economicAPI.fishAndAgricultural();
      // console.log(data);
      this.list2 = data.map((d) => ({
        // ...d,
        name: d.sj,
        bar: d.yyzcz,
        line: d.nyzcz,
      }));
      this.content2 = {
        title: '渔农业总产值',
        // rightUnit: '（亿元）',
        leftUnit: '（亿元）',
        barName: '渔业总产值',
        lineName: '农业总产值',
      };
      this.key2 = true;
      // console.log(data);
      // console.log(this.list1);
    },
    // 全年水产品总产量
    async aquaticProductsTotal() {
      const data = await economicAPI.aquaticProductsTotal();
      // console.log(data);
      this.list3 = data.map((d) => ({
        // ...d,
        name: d.sj,
        bar: d.yzcl,
        line: d.blcl,
      }));
      this.content3 = {
        title: '全年水产品总产量',
        // rightUnit: '（亿元）',
        leftUnit: '亿吨',
        barName: '捕捞产量',
        lineName: '养殖产量',
      };
      this.key3 = true;
      // console.log(data);
      // console.log(this.list1);
    },
  },
};
</script>
<style lang="scss" scoped>
.left {
  position: absolute;
  top: 26rem;
  left: 16rem;
  width: 165rem;
  z-index: 999;
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
