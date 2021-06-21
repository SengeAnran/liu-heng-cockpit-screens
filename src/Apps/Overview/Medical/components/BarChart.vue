<template>
  <div class="Bar-Chart" ref="barChart"></div>
</template>

<script>
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';

export default {
  name: 'BarChart',
  components: {},
  props: {
    barData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      barChart: null,
    };
  },
  computed: {},
  watch: {
    barData: {
      handler() {
        this.$nextTick(() => {
          this.barChart.setOption(this.option());
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
      this.barChart = echarts.init(this.$refs.barChart);
      this.barChart.setOption(this.option());
    },
    option() {
      const { title, xData, name1, name2, areaColor11, areaColor12, areaColor21, areaColor22, data1, data2 } = this.barData;
      const option = {
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
          itemWidth: 20,
          itemHeight: 20,
          orient: 'vertical',
          textStyle: {
            color: '#fff',
            fontSize: 20,
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
        },
        series: [
          {
            name: name1,
            type: 'bar',
            data: data1,
            label: {
              show: true,
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
                    color: areaColor11,
                  },
                  {
                    offset: 1,
                    color: areaColor12,
                  },
                ],
              },
            },
          },
        ],
      };
      if (name2 && data2 && data2.length) {
        option.legend.data = [name1, name2];
        option.series.push({
          name: name2,
          type: 'bar',
          data: data2,
          label: {
            show: true,
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
                  color: areaColor21,
                },
                {
                  offset: 1,
                  color: areaColor22,
                },
              ],
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
.Bar-Chart{
  width: 100%;
  height: 100%;
}
</style>
