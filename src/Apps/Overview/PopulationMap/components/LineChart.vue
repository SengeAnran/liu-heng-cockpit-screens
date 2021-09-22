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
    lineData: {
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
  },
  watch: {
    lineData: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            // console.log(val);
            this.chart.setOption(this.optionData(val));
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
    optionData(data) {
      return {
        grid: {
          top: '15%',
          left: '10%',
          right: '3%',
          bottom: '15%',
        },
        legend: {
          data: data.title,
          // left: 'center',
          right: 30,
          top: 7,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 24,
            fontFamily: 'DIN Alternate',
          },
          icon: 'rect',
          itemWidth: 30,
          itemHeight: 20,
          itemGap: 25,
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
          boundaryGap: true,
          data: data.chartData.map((item) => item.name),
        },
        yAxis: {
          type: 'value',
          name: '人数',
          min: data.min,
          max: data.max,
          interval: data.interval,
          nameTextStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.2)',
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
            name: data.title[0],
            type: 'line',
            showAllSymbol: true,
            symbolSize: 6,
            itemStyle: {
              color: '#75f8c3',
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
                  { offset: 0, color: 'rgba(117, 248, 195, 1)' },
                  { offset: 1, color: 'rgba(117, 248, 195, 0.1)' },
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
            data: data.chartData.map((item) => item.value1),
          },
          {
            name: data.title[1],
            type: 'line',
            showAllSymbol: true,
            symbolSize: 6,
            itemStyle: {
              color: 'rgb(253, 200, 83)',
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
                  { offset: 0, color: 'rgba(253, 200, 83, 1)' },
                  { offset: 1, color: 'rgba(253, 200, 83, 0.1)' },
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
            data: data.chartData.map((item) => item.value2),
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
