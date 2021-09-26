<template>
  <div class="Line-Chart" ref="lineChart"></div>
</template>

<script>
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';

export default {
  name: 'LineChart',
  components: {},
  props: {
    lineData: {
      type: Object,
      default: () => {
        return {
          title: '年门诊趋势图',
          name1: '累计死亡',
          showArea: true,
          lineColor11: '#f8218b',
          lineColor12: '#ffc12c',
          areaColor11: 'rgba(251, 47, 47, 0.3)',
          areaColor12: 'rgba(251, 47, 47, 0)',
          name2: '累计治愈',
          lineColor21: '#3efb2a',
          legendOrient: '',
          lineColor22: '#bdffc0',
          areaColor21: 'rgba(110, 238, 89, 0.3)',
          areaColor22: 'rgba(110, 238, 89, 0)',
          xData: ['1.20', '1.21', '1.22', '1.23', '1.24', '1.25', '1.26', '1.27', '1.28', '1.29'],
          data1: [1, 3, 5, 6, 8, 9, 12, 33, 12, 55],
          data2: [5, 6, 7, 4, 3, 21, 2, 3, 4, 5],
        };
      },
    },
  },
  data() {
    return {
      lineChart: null,
      timmerOneAnim: null,
    };
  },
  computed: {},
  watch: {
    lineData: {
      handler() {
        this.$nextTick(() => {
          this.lineChart.setOption(this.option());
        });
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.lineChart = echarts.init(this.$refs.lineChart);
      this.lineChart.setOption(this.option());
      var count = 0;
      if (this.timmerOneAnim) {
        clearInterval(this.timmerOneAnim);
      }
      this.timmerOneAnim = setInterval(() => {
        this.lineChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: count % 4,
        });
        count++;
      }, 4500);
    },
    option() {
      const {
        title,
        xData,
        showArea,
        name1,
        name2,
        yname1,
        lineColor11,
        areaColor11,
        areaColor12,
        lineColor21,
        legendOrient,
        areaColor21,
        areaColor22,
        data1,
        data2,
      } = this.lineData;
      const option = {
        colors: [lineColor11, lineColor21],
        title: {
          text: title || '',
          textStyle: {
            height: 26,
            color: '#fff',
            fontSize: 24,
            fontWeight: 500,
            fontFamily: 'Source Han Sans CN',
          },
          top: 30,
        },
        legend: {
          top: 22,
          right: 40,
          orient: legendOrient || 'vertical',
          itemWidth: 20,
          itemHeight: 20,
          icon: 'rect',
          textStyle: {
            color: '#fff',
            fontSize: 20,
          },
          itemStyle: {
            color: 'inherit',
          },
          data: [],
        },
        grid: {
          top: 120,
          left: 0,
          bottom: 0,
          containLabel: true,
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          textStyle: {
            color: '#fff',
            fontSize: 22,
          },
          borderColor: 'rgba(255, 255, 255, 0.4)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        xAxis: {
          type: 'category',
          data: xData,
          axisLabel: {
            margin: 8,
            color: 'rgba(225,225,225,.7)',
            fontSize: 21,
            fontFamily: 'DINPro',
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(151, 151, 151, 1)',
              opacity: 0.5,
              width: 2,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          name: yname1 || '人数',
          nameTextStyle: {
            color: 'rgba(225,225,225,.7)',
            fontSize: 21,
          },
          splitLine: {
            show: true,
            interval: '0',
            lineStyle: {
              color: 'rgba(151, 151, 151, 1)',
              opacity: 0.5,
            },
          },
          minInterval: 1,
          axisLabel: {
            show: true,
            margin: 18,
            color: 'rgba(225,225,225,.7)',
            fontSize: 21,
            fontFamily: 'DINPro',
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: name1,
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 2,
            itemStyle: {
              color: lineColor11,
            },
            // 线条渐变
            lineStyle: {
              width: 3,
              color: lineColor11,
            },
            data: data1,
            label: {
              show: true,
              position: 'top',
              formatter: '{c}',
              fontSize: 20,
              fontFamily: 'DINPro',
              color: '#fff',
            },
            emphasis: {
              label: {
                show: true,
                position: 'top',
                formatter: '{c}',
                fontSize: 20,
                fontFamily: 'DINPro',
                color: '#fff',
              },
            },
          },
        ],
      };
      if (name2 && data2 && data2.length) {
        option.legend.data = [name1, name2];
        option.series.push({
          name: name2,
          type: 'line',
          symbol: 'emptyCircle',
          symbolSize: 2,
          itemStyle: {
            color: lineColor21,
          },
          lineStyle: {
            width: 3,
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            fontSize: 20,
            fontFamily: 'DINPro',
            color: '#fff',
          },
          data: data2,
          emphasis: {
            label: {
              show: false,
              position: 'top',
              formatter: '{c}',
              fontSize: 16,
              fontFamily: 'DINPro',
              color: '#fff',
            },
          },
        });
      }
      if (showArea) {
        // 阴影渐变
        option.series.map((item, i) => {
          item.areaStyle = {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: i === 0 ? areaColor11 : areaColor21,
                },
                {
                  offset: 1,
                  color: i === 0 ? areaColor12 : areaColor22,
                },
              ],
            },
          };
        });
      }
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.Line-Chart {
  width: 100%;
  height: 450px;
}
</style>
