<template>
  <div class="PatentList">
    <div class="sub-title">变化趋势</div>
    <div class="chart" ref="lineChart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {};
  },
  mounted() {
    this.chart = echarts.init(this.$refs.lineChart);
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          icon: 'rect',
          itemWidth: 20,
          itemHeight: 20,
          itemGap: 50,
          top: 0,
          right: 0,
          textStyle: {
            color: '#fff',
            fontSize: 20,
          },
          data: ['发明专利', '外观设计专利', '实用新型'],
        },
        color: ['rgba(111, 216, 238, 1)', 'rgba(255, 151, 152, 1)', 'rgba(49, 234, 188, 1)'],
        grid: {
          left: '0%',
          top: '12%',
          right: '5%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgba(151, 151, 151, .5)',
              width: 1,
            },
          },
          axisLabel: {
            textStyle: {
              fontSize: '20',
              color: 'rgba(255, 255, 255, .7)',
            },
          },
          data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        },
        yAxis: {
          type: 'value',
          name: '人数',
          nameTextStyle: {
            fontSize: 20,
            color: 'rgba(255, 255, 255, .7)',
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(151, 151, 151, .5)',
              width: 1,
            },
          },
          axisLabel: {
            textStyle: {
              fontSize: '20',
              color: 'rgba(255, 255, 255, .7)',
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(151, 151, 151, .5)',
              width: 1,
            },
          },
        },
        series: [
          {
            name: '发明专利',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: '外观设计专利',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '实用新型',
            type: 'line',
            data: [60, 66, 50, 67, 45, 115, 105],
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.PatentList {
  margin-bottom: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.sub-title {
  font-size: 24px;
  line-height: 24px;
  min-height: 24px;
  color: #fff;
  margin-bottom: 20px;
}
.chart{
  flex: 1;
}
</style>
