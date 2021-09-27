<template>
  <div ref="echarts" :style="{ width: '820px', height: '456px' }"></div>
</template>

<script>
const echarts = require('echarts/lib/echarts');
// 引入柱状图组件
require('echarts/lib/chart/bar');
// 引入提示框和title组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
  props: {
    lineData: {
      type: Array,
      default: () => {},
    },
  },

  data() {
    return {
      yData: [],
      yData1: [],
      XData: [],
    };
  },
  watch: {
    lineData() {
      this.initDraw();
    },
  },
  mounted() {
    this.initDraw();
  },
  methods: {
    initDraw() {
      const myChart = echarts.init(this.$refs.echarts);
      // 整理x轴y轴的数据
      this.lineData.forEach((item) => {
        this.XData.push(item.gldmx);
        this.yData.push(item.cws);
        this.yData1.push(item.glfs);
      });
      console.log(this.lineData, '1111111');
      const option = {
        grid: {
          top: '100',
          right: '70',
          left: '100',
          bottom: '40', // 图表尺寸大小
        },
        legend: {
          textStyle: {
            color: '#90979c',
            fontSize: 22,
          },
        },
        tooltip: {
          trigger: 'axis',
          fontSize: 24,
        },
        xAxis: {
          type: 'category',
          color: '#59588D',
          data: this.XData,
          axisLabel: {
            margin: 10,
            color: '#EEEEEE',
            textStyle: {
              fontSize: 12,
            },
          },
          axisLine: {
            lineStyle: {
              color: '#477AA5',
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: [
          {
            // min: 0,
            // max: 120,
            axisLabel: {
              formatter: '{value}个',
              color: '#EEEEEE',
              textStyle: {
                fontSize: 24,
              },
            },
            axisLine: {
              lineStyle: {
                color: '#477AA5',
                type: 'dashed',
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
          {
            axisLabel: {
              formatter: '{value}个',
              color: '#EEEEEE',
              textStyle: {
                fontSize: 24,
              },
            },
            axisLine: {
              lineStyle: {
                color: '#477AA5',
                type: 'dashed',
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: 'bar',
            name: '隔离房数',
            data: this.yData1,
            barWidth: '16',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(59, 93, 246, 0.51)',
                  },
                  {
                    offset: 1,
                    color: '#436FF6',
                  },
                ]),
                borderRadius: [4, 4, 4, 4],
                shadowColor: 'blue',
                // barBorderRadius: [30, 30, 0, 0], // 圆角大小
              },
            },
            label: {
              normal: {
                show: false,
                fontSize: 16,
                fontWeight: 'bold',
                color: '#333',
                position: 'top',
              },
            },
          },
          {
            type: 'bar',
            name: '房数',
            data: this.yData,
            barWidth: '16',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#51F9FF',
                  },
                  {
                    offset: 1,
                    color: '#51F9FF',
                  },
                ]),
                borderRadius: [4, 4, 4, 4],
                // barBorderRadius: [30, 30, 0, 0], // 圆角大小
              },
            },
            label: {
              normal: {
                show: false,
                fontSize: 16,
                fontWeight: 'bold',
                color: '#333',
                position: 'top',
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style>
</style>
