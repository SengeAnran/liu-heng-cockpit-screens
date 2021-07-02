<template>
  <div class="item">
<!--    <Title>三类产业占比</Title>-->
    <div class="years">
      <ul>
        <li
          :class="{'active': currentTab === item.value}"
          v-for="(item, index) in timeList"
          :key="index"
          @click="getData(item.value)">{{item.value}}</li>
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
        // {
        //   value: '2015',
        // },
        // {
        //   value: '2016',
        // },
        // {
        //   value: '2017',
        // },
        // {
        //   value: '2018',
        // },
        // {
        //   value: '2019',
        // },
      ],
      currentTab: '',
    };
  },
  // components: { Title },
  mounted() {
    this.initChart();
    this.initYears();
  },
  methods: {
    async initYears() {
      const data = await economicAPI.threeTypeIndustriesYears();
      // console.log(data);
      this.timeList = data.map((d) => ({
        value: d.sj,
      }));
      // console.log(this.timeList);
      this.fetchData(this.timeList[this.timeList.length - 1].value);
      this.currentTab = this.timeList[this.timeList.length - 1].value;
    },
    initChart() {
      this.chart = echarts.init(this.$refs.eleChart);
      this.chart.setOption(getOptions(this.list));
    },
    async fetchData(year) {
      const data = await economicAPI.threeTypeIndustries(year);
      // console.log(data);
      const list = data.map((d) => ({
        name: d.cyfl,
        value: d.cyz,
      }));
      this.chart.setOption(getOptions(list));
    },
    getData(value) {
      // console.log(value);
      this.currentTab = value;
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
    width: 74rem;
    //color: white;
    ul{
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      li{
        cursor: pointer;
        //width: 6rem;
        font-size: 3.2rem;
        color: rgba(255, 255, 255, 0.3);
        //color: #FFFFFF;
        //opacity: 0.3;
        &.active{
          color: #FFFFFF;
          //border-bottom: 1px solid #ffffff;
          //border-bottom-width: 2.33rem;
        }
        &.active::after {
          content: '';
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top: 5px;
          //position: absolute;
          //left: 53px;
          //top: auto;
          //bottom: -11px;
          right: auto;
          width: 4.33rem;
          height: 5px;
          background-color: white;
        }
      }
    }
  }
  .bar-line {
    width: 707px;
    flex: auto;
    margin-left: 4rem;
    // outline: 1px solid red;
    height: 36rem;
  }
}

</style>
