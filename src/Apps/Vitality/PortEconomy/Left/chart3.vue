<template>
  <div class="PierAnalysis">
    <div class="chart" ref="lineChart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
// import { terminalThroughputAnalysis } from '@/api/Vitality/PortEconomy/api';
export default {
  data() {
    return {
      chart: null,
      isYear: true,
      xData: [],
      da: [], // 大岙码头
      sa: [], // 沙岙码头
    };
  },
  watch: {
    isYear() {
      this.getData();
    },
  },
  mounted() {
    this.chart = echarts.init(this.$refs.lineChart);
    this.getData();
  },
  methods: {
    getData() {
      // const params = {
      //   type: this.isYear ? 0 : 1,
      // };
      // terminalThroughputAnalysis()
      // .request(params)
      // .then((json) => {
      this.xData = [2015, 2016, 2018, 2019, 2020];
      // this.da = [60, 51, 75, 71, 63];
      // this.sa = [35.3, 26.9, 28.6, 21.7, 24.4];
      this.initEcharts();
      // });
    },
    initEcharts() {
      const option = {
        title: {
          text: '煤炭进出口货运总量与增长率',
          textStyle: {
            color: '#fff',
            fontSize: 24,
          },
          left: 0,
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          icon: 'rect',
          itemWidth: 20,
          itemHeight: 20,
          itemGap: 30,
          top: 10,
          right: '3%',
          textStyle: {
            color: '#fff',
            fontSize: 20,
          },
          data: ['煤炭进出口货运总量', '增长率'],
        },
        color: ['#6FD8EE', '#FF9798', '#31EABC'],
        grid: {
          left: '0%',
          top: '20%',
          right: '3%',
          bottom: '5%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          // boundaryGap: false,
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
          data: this.xData,
        },
        yAxis: [
          {
            type: 'value',
            name: '万吨',
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
              formatter: (num) => num,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(151, 151, 151, .5)',
                width: 1,
              },
            },
          },
          {
            type: 'value',
            name: '%',
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
              formatter: (num) => num,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(151, 151, 151, .5)',
                width: 1,
              },
            },
          },
        ],
        series: [
          {
            name: '煤炭进出口货运总量',
            type: 'bar',
            barWidth: 40,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#66CCFF',
                  },
                  {
                    offset: 1,
                    color: '#72DCEE',
                  },
                ],
                global: false,
              },
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#FFFFFF',
              textStyle: {
                fontSize: 20,
              },
            },
            data: [2134.5, 2041.3, 2073, 2100.2, 1884],
          },
          {
            name: '增长率',
            type: 'line',
            color: '#FF9798',
            yAxisIndex: 1,
            data: [-0.5, -4.3, 9.8, 1.3, -10.3],
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.PierAnalysis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  .chart {
    flex: 1;
  }
  .tab-wrap {
    position: absolute;
    left: 192px;
    top: 10px;
    z-index: 9999999;
    span {
      font-size: 18px;
      line-height: 18px;
      color: #999;
      cursor: pointer;
      &.active {
        color: #fff;
      }
    }
    i {
      font-style: normal;
      color: #fff;
      font-size: 16px;
      margin: 0 4px;
    }
  }
}
</style>
