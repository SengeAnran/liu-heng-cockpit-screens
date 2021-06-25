<template>
  <div class="line-chart" :style="{width: `${width}px`, height: `${height}px`}"  ref="lineChart" />
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
      default: () => [],
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
  },
  watch: {
    chartData: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            this.initChart(val);
          });
        }
      },
      immediate: false,
      deep: true,
    },
  },
  mounted() {
    this.chart = echarts.init(this.$refs.lineChart);
  },
  methods: {
    initChart(val) {
      this.chart.setOption(this.optionData(val));
    },
    optionData(data) {
      const total = data.pieData.reduce((prev, next) => prev + next.value, 0);
      data.pieData = data.pieData.map((item) => {
        item.percent = ((item.value / total) * 100).toFixed(1);
        return item;
      });
      return {
        grid: {
          top: '25%',
          left: '10%',
          right: '3%',
          bottom: '15%',
        },
        legend: {
          data: ['初升高', '高考升学'],
          right: 10,
          top: 7,
          orient: 'vertical',
          textStyle: {
            color: '#FFFFFF',
            fontSize: 20,
            fontFamily: 'DIN Alternate',
          },
          icon: 'rect',
        },
        title: {
          text: '人数',
          textStyle: {
            align: 'center',
            color: '#fff',
          },
          top: '15%',
          left: '5%',
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
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.5)',
            },
          },
          axisTick: {
            show: false,
            alignWithLabel: true,
          },
          splitArea: {
            color: '#f00',
            lineStyle: {
              color: '#f00',
            },
          },
          axisLabel: {
            color: '#FFFFFF',
            textStyle: {
              fontSize: 22,
            },
          },
          splitLine: {
            show: false,
          },
          boundaryGap: false,
          data: this.xData,
        },
        yAxis: {
          type: 'value',
          nameTextStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.2)',
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#979797',
            },
          },
          axisLabel: {
            color: '#FFFFFF',
            margin: 10,
            textStyle: {
              fontSize: 22,
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: '初升高',
            type: 'line',
            showAllSymbol: true,
            symbolSize: 6,
            itemStyle: {
              color: '#59DBE6',
              borderColor: '#fff',
              borderWidth: 3,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 10,
              shadowOffsetY: 10,
              shadowOffsetX: 10,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgba(89, 219, 230, 1)' },
                  { offset: 1, color: 'rgba(89, 219, 230, 0.1)' },
                ]),
              },
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#FFFFFF',
              textStyle: {
                fontSize: 22,
                fontFamily: 'DIN Alternate',
              },
            },
            tooltip: {
              show: true,
            },
            markPoint: {
              label: {
                normal: {
                  textStyle: {
                    color: '#fff',
                  },
                },
              },
            },
            data: this.highSchool,
          },
          {
            name: '高考升学',
            type: 'line',
            showAllSymbol: true,
            symbolSize: 6,
            itemStyle: {
              color: 'rgba(200, 114, 242, 1)',
              borderColor: '#fff',
              borderWidth: 3,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 10,
              shadowOffsetY: 10,
              shadowOffsetX: 10,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgba(200, 114, 242, 1)' },
                  { offset: 1, color: 'rgba(200, 114, 242, 0)' },
                ]),
              },
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#FFFFFF',
              textStyle: {
                fontSize: 22,
                fontFamily: 'DIN Alternate',
              },
            },
            tooltip: {
              show: true,
            },
            markPoint: {
              label: {
                normal: {
                  textStyle: {
                    color: '#fff',
                  },
                },
              },
            },
            data: this.university,
          },
        ],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.line-chart {
  position: absolute;
  bottom: 0;
}
</style>
