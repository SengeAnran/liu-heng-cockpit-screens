<template>
  <div class="PierAnalysis">
    <div class="tab-wrap">
      <span :class="{active:isYear}" @click="isYear=true">历年</span>
      <i>/</i>
      <span :class="{active:!isYear}" @click="isYear=false">历月</span>
    </div>
    <div class="chart" ref="lineChart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { terminalThroughputAnalysis } from '@/api/Vitality/PortEconomy/api';
export default {
  data() {
    return {
      chart: null,
      isYear: true,
      xData: [],
      da: [], // 大岙码头
      sa: [], // 沙岙码头
      tm: [], // 台门码头
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
      const params = {
        type: this.isYear ? 0 : 1,
      };
      terminalThroughputAnalysis()
        .request(params)
        .then((json) => {
          this.xData = json.da.map((item) => item.sj);
          this.da = json.da.map((item) => item.ttl);
          this.sa = json.sa.map((item) => item.ttl);
          this.tm = json.tm.map((item) => item.ttl);
          this.initEcharts();
        });
    },
    initEcharts() {
      const option = {
        title: {
          text: '码头吞吐量分析',
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
          // orient: 'vertical',
          icon: 'rect',
          itemWidth: 20,
          itemHeight: 20,
          itemGap: 30,
          top: 10,
          right: 0,
          textStyle: {
            color: '#fff',
            fontSize: 20,
          },
          data: ['大岙码头', '沙岙码头', '台门码头'],
        },
        color: ['#6FD8EE', '#FF9798', '#31EABC'],
        grid: {
          left: '0%',
          top: '18%',
          right: '0%',
          bottom: '3%',
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
        yAxis: {
          type: 'value',
          name: '吨',
          nameTextStyle: {
            align: 'right',
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
        series: [
          {
            name: '大岙码头',
            type: 'line',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  fontSize: '22',
                  color: 'rgba(255, 255, 255, 1)',
                },
              },
            },
            data: this.da,
          },
          {
            name: '沙岙码头',
            type: 'line',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  fontSize: '22',
                  color: 'rgba(255, 255, 255, 1)',
                },
              },
            },
            data: this.sa,
          },
          {
            name: '台门码头',
            type: 'line',
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  fontSize: '22',
                  color: 'rgba(255, 255, 255, 1)',
                },
              },
            },
            data: this.tm,
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
    i{
      font-style: normal;
      color: #fff;
      font-size: 16px;
      margin: 0 4px;
    }
  }
}
</style>
