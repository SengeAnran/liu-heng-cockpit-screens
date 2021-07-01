<template>
  <div class="item">
<!--    <Title>三类产业占比</Title>-->
    <div class="years">
      <ul>
        <li v-for="(item, index) in timeList" :key="index" @click="getData(item.value)">{{item.value}}</li>
      </ul>
    </div>
    <div class="bar-line" ref="eleChart"></div>
  </div>
</template>

<script>
// import Title from '../../Title';
import * as echarts from 'echarts/lib/echarts';
import getOptions from './options';
import economicAPI from '@/api/Vitality/EconomicDev';

export default {
  data() {
    return {
      list: [
        { name: '第一产业', value: 53300 },
        { name: '第二产业', value: 482200 },
        { name: '第三产业', value: 285500 },
      ],
      timeList: [
        {
          value: '2015',
        },
        {
          value: '2016',
        },
        {
          value: '2017',
        },
        {
          value: '2018',
        },
        {
          value: '2019',
        },
      ],
    };
  },
  // components: { Title },
  mounted() {
    this.initChart();
    this.fetchData(this.timeList[0].value);
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.eleChart);
      this.chart.setOption(getOptions(this.list));
    },
    async fetchData(year) {
      const data = await economicAPI.threeTypeIndustries(year);
      console.log(data);
      const list = data.map((d) => ({
        name: d.cyfl,
        value: d.cyz,
      }));
      this.chart.setOption(getOptions(list));
    },
    getData(value) {
      console.log(value);
      this.fetchData(value);
    },
  },
};
</script>
<style lang="scss" scoped>
.item{
  width: 80rem;
  margin-right: 8rem;
  .years{
    width: 60rem;
    color: white;
    ul{
      width: 100%;
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      li{
        cursor: pointer;
        //width: 6rem;
        font-size: 3.2rem;
      }
    }
  }
  .bar-line {
    width: 707px;
    flex: auto;
    margin-left: 4rem;
    // outline: 1px solid red;
    height: 37rem;
  }
}

</style>
