<template>
  <div class="PierAnalysis">
    <div class="chart" ref="lineChart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getCargoShipCapacity } from '@/api/Vitality/PortEconomy/api';
export default {
  data() {
    return {
      chart: null,
      isYear: true,
      list: [],
      // xData: [],
      // da: [], // 大岙码头
      // sa: [], // 沙岙码头
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
    async getData() {
      const data = await getCargoShipCapacity().request();
      this.list = data.map((d) => ({
        name: d.sj,
        da: d.hycbs,
        sa: d.hycbyl,
      }));
      this.initEcharts();
    },
    initEcharts() {
      const option = {
        title: {
          text: '货运船舶运力',
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
          data: ['货运船舶数', '货运船舶运力'],
        },
        color: ['#6FD8EE', '#FF9798', '#31EABC'],
        grid: {
          left: '2%',
          top: '20%',
          right: '3%',
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
          data: this.list.map((d) => d.name),
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
            name: '货运船舶数',
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
            name: '货运船舶数',
            type: 'line',
            yAxisIndex: 1,
            // itemStyle: {
            //   normal: {
            //     label: {
            //       show: true,
            //       fontSize: '22',
            //       color: 'rgba(255, 255, 255, 1)',
            //     },
            //   },
            // },
            data: this.list.map((d) => d.da),
          },
          {
            name: '货运船舶运力',
            type: 'line',
            // itemStyle: {
            //   normal: {
            //     label: {
            //       show: true,
            //       fontSize: '22',
            //       color: 'rgba(255, 255, 255, 1)',
            //     },
            //   },
            // },
            data: this.list.map((d) => d.sa),
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
