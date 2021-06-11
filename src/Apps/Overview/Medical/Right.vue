<template>
  <div class="Medical-Right">
    <BaseTitle title="医务业务量" :width="780" />
    <div class="chart-box">
      <LineChart :line-data="lineData" />
    </div>
    <BaseTitle title="居民基本医疗保险增长趋势" :width="780" :top="530"/>
    <div class="chart-box box1">
      <LineChart :line-data="lineData" />
    </div>
  </div>
</template>

<script>
import BaseTitle from './components/BaseTitle';
import LineChart from './components/LineChart';

export default {
  name: 'MedicalRight',
  components: { BaseTitle, LineChart },
  data() {
    return {
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
  .chart-box {
    height: 415px;
    width: 50%;
    position: absolute;
    top: 60px;
  }
  .box1{
    top: 590px;
  }
}
</style>
