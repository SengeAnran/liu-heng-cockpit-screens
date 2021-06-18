<template>
  <div class="line-chart" :style="{ width: `${width}px`, height: `${height}px` }" ref="lineChart" />
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'LineChart',
  data() {
    return {
      chart: null,
    };
  },
  props: {
    chartData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    width: {
      type: String,
      default: '835',
    },
    height: {
      type: String,
      default: '460',
    },
    title: {
      type: String,
      default: '',
    },
    colors: {
      type: Array,
      default: () => {
        return [
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(200, 251, 255, 1)',
            },
            {
              offset: 1,
              color: 'rgba(89, 219, 230, 1)',
            },
          ]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255, 192, 177, 1)',
            },
            {
              offset: 1,
              color: 'rgba(237, 127, 100, 1)',
            },
          ]),
        ];
      },
    },
  },
  watch: {
    chartData: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            this.initChart();
          });
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.chart = echarts.init(this.$refs.lineChart);
  },
  computed: {
    getStyle() {
      return (unit = '') => {
        return {
          type: 'value',
          axisLabel: {
            color: 'rgba(255,255,255,0.7)',
            fontSize: 21,
            fontFamily: 'DIN Alternate',
            formatter: `{value}${unit}`,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(151, 151, 151, 0.5)',
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(151, 151, 151, 0.2)',
            },
          },
        };
      };
    },
  },
  methods: {
    initChart() {
      const legendArr = this.chartData.data.map((item) => item.name);
      const seriesArr = this.chartData.data.map((item) => {
        return {
          ...item,
          type: 'line',
          itemStyle: {
            normal: {
              lineStyle: {
                width: 3,
              },
            },
          },
        };
      });
      const yAxisData = this.chartData.yAxisData
        ? this.chartData.yAxisData.map((item) => {
          return {
            ...this.getStyle(item.unit),
            ...item,
          };
        })
        : this.getStyle();
      const options = {
        grid: {
          left: 50,
        },
        title: {
          text: this.title,
          textStyle: {
            color: 'rgba(255,255,255,0.7)',
            fontSize: 21,
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              type: 'dashed',
            },
          },
          textStyle: {
            color: '#fff',
            fontSize: 22,
          },
          borderColor: 'rgba(255, 255, 255, 0.4)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        color: this.colors,
        legend: {
          data: legendArr,
          icon: 'rect',
          itemHeight: 20,
          itemWidth: 20,
          right: 20,
          textStyle: {
            fontSize: '20',
            fontFamily: 'Source Han Sans SC',
            fontWeight: 400,
            color: '#FFFFFF',
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.chartData.xAxisData,
          axisLabel: {
            color: 'rgba(255,255,255,0.7)',
            fontSize: 21,
            fontFamily: 'DIN Alternate',
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(151, 151, 151, 0.5)',
            },
          },
        },
        yAxis: yAxisData,
        series: seriesArr,
      };
      this.chart.setOption(options);
    },
  },
};
</script>
<style lang="scss" scoped></style>
