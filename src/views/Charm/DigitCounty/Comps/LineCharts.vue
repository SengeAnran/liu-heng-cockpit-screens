<template>
  <div ref="chart" class="echart-bar" />
</template>
<script>
/**
 * @name 折线图
 * xData 月份
 * yData1 用电量
 * yData2 用水量
 */
import * as echarts from 'echarts';
export default {
  props: {
    xData: {
      type: Array,
      default: () => ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yData1: {
      type: Array,
      default: () => [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
    },
    yData2: {
      type: Array,
      default: () => [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.chart = this.$echarts.init(this.$refs.chart);
    this.updateOptions();
  },
  computed: {
    values() {
      const { xData, yData1, yData2 } = this;
      return { xData, yData1, yData2 };
    },
  },
  watch: {
    values: {
      deep: true,
      handler() {
        this.updateOptions();
      },
    },
  },
  methods: {
    updateOptions() {
      const _this = this;
      const colors = ['rgba(85, 221, 166, 1)', 'rgba(243, 248, 117, 1)', '#EE6666'];
      const options = {
        color: colors,
        legend: {
          data: ['用电趋势', '用水趋势'],
          icon: 'square',
          right: '25%',
          top: '3%',
          itemGap: 50,
          textStyle: {
            color: 'white',
            fontSize: 20,
          },
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            data: _this.xData,
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '千瓦时/kW·h',
            nameTextStyle: {
              fontSize: 20,
            },
            min: 0,
            max: 450,
            position: 'right',
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(151, 151, 151, .5)',
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(151, 151, 151, 1)',
              },
            },
            axisLabel: {
              fontSize: 20,
              color: 'rgba(151, 151, 151, 1)',
            },
          },
          {
            type: 'value',
            name: '砘/t',
            nameTextStyle: {
              fontSize: 20,
            },
            min: 0,
            max: 25,
            position: 'left',
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(151, 151, 151, 1)',
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(151, 151, 151, 1)',
              },
            },
            axisLabel: {
              fontSize: 20,
              color: 'rgba(151, 151, 151, 1)',
            },
          },
        ],
        series: [
          {
            name: '用电趋势',
            type: 'line',
            label: {
              show: true,
              position: 'top',
              color: 'white',
              fontSize: 20,
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(117, 248, 195, 1)',
                },
                {
                  offset: 1,
                  color: 'rgba(117, 248, 195, 0)',
                },
              ]),
            },
            data: _this.yData1,
          },
          {
            name: '用水趋势',
            type: 'line',
            // areaStyle: {
            //   color: 'rgba(243, 248, 117, 1)',
            // },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(243, 248, 117, 1)',
                },
                {
                  offset: 1,
                  color: 'rgba(243, 248, 117, 0)',
                },
              ]),
            },
            data: _this.yData2,
          },
        ],
      };
      this.chart.setOption(options);
    },
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  },
};
</script>
