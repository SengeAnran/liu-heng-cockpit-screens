<template>
  <div class="lineBarChart" ref="lineBarChart"></div>
</template>

<script>
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';

export default {
  name: 'LineBarChart',
  components: {},
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          name1: '累计死亡',
          lineColor: '#f8218b',
          barColor1: 'rgba(251, 47, 47, 0.3)',
          barColor2: 'rgba(251, 47, 47, 0)',
          name2: '累计治愈',
          xData: ['1.20', '1.21', '1.22', '1.23', '1.24', '1.25', '1.26', '1.27', '1.28', '1.29'],
          data1: [1, 3, 5, 6, 8, 9, 12, 33, 12, 55],
          data2: [5, 6, 7, 4, 3, 21, 2, 3, 4, 5],
        };
      },
    },
  },
  data() {
    return {
      lineBarChart: null,
    };
  },
  computed: {},
  watch: {
    data() {
      this.lineBarChart.setOption(this.option());
    },
    deep: true,
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.lineBarChart = echarts.init(this.$refs.lineBarChart);
      this.lineBarChart.setOption(this.option());
    },
    option() {
      const { title, xData, data1, data2, name1, name2, lineColor, barColor1, barColor2 } = this.data;
      const option = {
        colors: [lineColor, barColor1],
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
          orient: 'vertical',
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
          data: [name1, name2],
        },
        grid: {
          top: 120,
          left: 0,
          bottom: 0,
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
            },
          },
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
        yAxis: [{
          type: 'value',
          name: `${name1}/${name2}`,
          nameTextStyle: {
            color: 'rgba(225,225,225,.7)',
            fontSize: 21,
          },
          max: 100,
          splitNumber: 10,
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
            margin: 45,
            color: 'rgba(225,225,225,.7)',
            fontSize: 21,
            fontFamily: 'DINPro',
            formatter: function (value, index) {
              console.log(value, index);
              return value + (index !== 0 ? '% /' : '');
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        }, {
          type: 'value',
          name: '',
          splitNumber: 10,
          nameTextStyle: {
            color: 'rgba(225,225,225,.7)',
            fontSize: 21,
          },
          position: 'left',
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
            margin: 8,
            color: 'rgba(225,225,225,.7)',
            fontSize: 21,
            fontFamily: 'DINPro',
            // formatter: function (value, index) {
            //   console.log(value, index);
            //   return value + (index !== 0 ? '/' : '');
            // },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        }],
        series: [
          {
            name: name1,
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 2,
            itemStyle: {
              color: lineColor,
            },
            lineStyle: {
              width: 3,
            },
            data: data1,
            label: {
              show: false,
              position: 'top',
              formatter: '{c}',
              fontSize: 20,
              fontFamily: 'DINPro',
              color: '#fff',
            },
          }, {
            name: name2,
            type: 'bar',
            yAxisIndex: 1,
            data: data2,
            label: {
              show: false,
              position: 'outside',
              color: '#fff',
              fontSize: 20,
              fontFamily: 'DINPro',
            },
            barWidth: 16,
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
                    color: barColor1,
                  },
                  {
                    offset: 1,
                    color: barColor2,
                  },
                ],
              },
            },
          },
        ],
      };
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.lineBarChart{
  width: 100%;
  height: 100%;
}
</style>
