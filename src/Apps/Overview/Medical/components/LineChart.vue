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
          title: '医务人员数量分布',
          name1: '累计死亡',
          lineColor11: '#f8218b',
          lineColor12: '#ffc12c',
          areaColor11: 'rgba(251, 47, 47, 0.3)',
          areaColor12: 'rgba(251, 47, 47, 0)',
          name2: '累计治愈',
          lineColor21: '#3efb2a',
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
    };
  },
  computed: {},
  watch: {
    lineData() {
      this.lineChart.setOption(this.option());
    },
    deep: true,
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.lineChart = echarts.init(this.$refs.lineChart);
      this.lineChart.setOption(this.option());
    },
    option() {
      const { title, xData, name1, name2, lineColor11, areaColor11, areaColor12, lineColor21, areaColor21, areaColor22, data1, data2 } = this.lineData;
      const option = {
        title: {
          text: title || '',
        },
        legend: {
          top: 22,
          right: 40,
          itemWidth: 34,
          itemHeight: 4,
          textStyle: {
            color: '#fff',
          },
          data: [],
        },
        grid: {
          // top: 10,
          // left: 30,
          // right: 30,
          bottom: 20,
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
        yAxis: {
          type: 'value',
          name: '人数',
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
            margin: 8,
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
              color: '#fff',
            },
            // 线条渐变
            lineStyle: {
              width: 1,
              color: lineColor11,
            },
            // 阴影渐变
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: areaColor11,
                  },
                  {
                    offset: 1,
                    color: areaColor12,
                  },
                ],
              },
            },
            data: data1,
            emphasis: {
              label: {
                show: true,
                position: 'top',
                // formatter: '{c}',
                fontSize: 16,
                fontFamily: 'DINPro',
                color: '#fff',
              },
            },
          },
        ],
      };
      if (name2 && data2 && data2.length) {
        option.series.push({
          name: name2,
          type: 'line',
          symbol: 'emptyCircle',
          symbolSize: 2,
          itemStyle: {
            color: '#fff',
          },
          lineStyle: {
            width: 1,
            color: lineColor21,
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: areaColor21,
                },
                {
                  offset: 1,
                  color: areaColor22,
                },
              ],
            },
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
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.Line-Chart{
  width: 100%;
  height: 100%;
}
</style>
