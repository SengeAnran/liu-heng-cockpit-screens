<template>
  <div class="Medical-Right">
    <div>
      <BaseTitle title="医务业务量" :width="780" />
      <div class="chart-box">
        <LineChart :line-data="lineData" />
      </div>
      <BaseTitle title="居民基本医疗保险增长趋势" :width="780" :top="530" />
      <div class="chart-box box1">
        <LineBarChart :data="lineBarData" />
      </div>
    </div>
    <div class="right-right">
      <BaseTitle title="患者挂号科室占比" :width="780" />
      <div class="chart-box">
        <PieChart :data="pieTypeData" legendType="pec" title="患者挂号科室占比" />
      </div>
      <BaseTitle title="患者年龄占比" :width="780" :top="530" />
      <div class="chart-box box1">
        <PieChart :data="pieAgeData" legendType="pec" title="患者年龄占比" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from './components/BaseTitle';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import LineBarChart from './components/LineBarChart';
export default {
  name: 'MedicalRight',
  components: { BaseTitle, LineChart, PieChart, LineBarChart },
  data() {
    return {
      pieTypeData: [
        { name: '内科', value: 10 },
        { name: '外科', value: 20 },
        { name: '妇科', value: 30 },
        { name: '皮肤科', value: 40 },
        { name: '精神科', value: 10 },
        { name: '其他', value: 20 },
      ],
      pieAgeData: [
        { name: '3岁以下', value: 10 },
        { name: '3-10岁', value: 20 },
        { name: '11-18岁', value: 30 },
        { name: '19-40岁', value: 40 },
        { name: '41-65岁', value: 30 },
        { name: '65岁以上', value: 40 },
      ],
      lineData: {
        title: '图表',
        name1: '患者住院人数',
        name2: '患者门诊人数',
        lineColor11: 'rgba(111, 216, 238, 1)',
        lineColor21: 'rgba(255, 151, 152, 1)',
        showArea: false,
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 6, 8, 9, 12],
        data2: [10, 31, 5, 16, 18, 9, 12],
      },
      lineBarData: {
        title: '图表',
        name1: '增长率',
        name2: '人数',
        lineColor: 'rgba(89, 219, 230, 1)',
        barColor1: 'rgba(245, 165, 100, .8)',
        barColor2: 'rgba(245, 165, 100, .3)',
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 26, 8, 49, 99], // 增长率
        data2: [10, 31, 5, 163, 18, 9, 199], // 人数
      },
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.Medical-Right {
  width: 1650px;
  height: 977px;
  position: absolute;
  top: 263px;
  right: 159px;
  display: flex;
  >div{
    height: 100%;
    width: 50%;
  }
  .right-right{
    right:0
  }
  .chart-box {
    height: 415px;
    width: 50%;
    position: absolute;
    top: 60px;
    .pieChart{
      margin-top: 50px;
      height: 360px;
    }
  }
  .box1 {
    top: 590px;
  }
}
</style>
