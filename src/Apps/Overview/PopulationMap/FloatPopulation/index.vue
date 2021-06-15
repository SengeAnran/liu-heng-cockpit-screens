<template>
  <div class="float-population">
    <BaseTitle title="流动人口" />
    <div class="line-chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'Register',
  data() {
    return {
      chart: null,
    };
  },
  components: {
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.loadData();
  },
  methods: {
    loadData() {
      this.setData();
    },
    setData() {
      this.chart.clear();
      this.chart.setOption(this.getOptions());
    },
    getOptions() {
      const xAxisData = [];
      for (let i = 1; i <= 12; i++) {
        const temp = i + '月';
        xAxisData.push(temp);
      }
      const data1 = [24, 33, 24, 9.78, 70, 40, 51, 15, 45, 78, 56, 44];
      const option = {
        grid: {
          top: '18%',
          left: '6%',
          right: '5%',
          bottom: '16%',
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
          data: xAxisData,
        },
        yAxis: {
          name: '指数',
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
            type: 'line',
            showAllSymbol: true,
            symbolSize: 6,
            itemStyle: {
              color: '#e1f875',
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
                  { offset: 0, color: 'rgba(225, 248, 117, 1)' },
                  { offset: 1, color: 'rgba(225, 248, 117, 0.1)' },
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
            data: data1,
          },
        ],
      };
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.float-population {
  position: absolute;
  left: 157px;
  top: 805px;
  width: 835px;
  height: 535px;
  .line-chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 460px;
  }
}
</style>
