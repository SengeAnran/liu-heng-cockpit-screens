<template>
  <div class="degree">
    <BaseTitle title="劳动力资源情况" />
    <div ref="echarts" :style="{ width: '100%', height: '100%' }"></div>
    <!-- <LineChart :lineData="{ title: ['男', '女'], min: 10000, max: 35000, interval: 5000, chartData }" /> -->
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getLabourByYear } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Degree',
  data() {
    return {
      chartData: [],
    };
  },

  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getLabourByYear()
        .request()
        .then((json) => {
          if (json) {
            this.chartData = json.map((item) => {
              item.name = item.nf || '';
              item.value1 = item.manldl || '';
              item.value2 = item.felmanldl || '';
              return item;
            });
          }
          this.initdraw();
          // this.personData = this.resolveData(json);
        });
    },

    // 加载图形
    initdraw() {
      const myChart = echarts.init(this.$refs.echarts);
      console.log(this.chartData);
      var xAxisData = [];
      var seriesData1 = [];
      var seriesData2 = [];
      var sum = 0;
      this.chartData.forEach((item) => {
        xAxisData.push(item.name);
        seriesData1.push(item.value1);
        seriesData2.push(item.value2);
      });

      let dom = 800;
      let barWidth = dom / 20;
      const option = {
        // tooltip: {
        //   show: true,
        //   trigger: 'axis',
        //   textStyle: {
        //     fontSize: 30,
        //   },
        // },
        tooltip: {
          trigger: 'axis',
          formatter: '女:{b} : 男:{c}',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            fontSize: 30,
          },
        },
        grid: {
          top: '15%',
          bottom: '25%',
        },
        legend: {
          show: false,
          itemWidth: 25,
          itemHeight: 18,
          textStyle: {
            color: '#fff',
            fontSize: 40,
          },
          right: 20,
          top: 7,
        },
        xAxis: {
          data: xAxisData,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
          },
          axisLabel: {
            show: true,
            margin: 25,
            align: 'center',
            formatter: function (params, index) {
              return '{a|' + ((seriesData1[index] / sum) * 100).toFixed(2) + '%}' + '\n' + '{b|' + params + '}';
            },
            textStyle: {
              fontSize: 14,
              color: '#ffffff',
              rich: {
                a: {
                  fontSize: 0,
                  color: '#ffffff',
                },
                b: {
                  height: 20,
                  fontSize: 40,
                  color: '#ffffff',
                },
              },
            },
          },
          interval: 0,
        },
        yAxis: {
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 24,
              color: '#ffffff',
            },
          },
        },
        series: [
          {
            name: '男',
            type: 'bar',
            barWidth: 40,
            itemStyle: {
              color: {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: '#80DAFF',
                  },
                  {
                    offset: 1,
                    color: '#48ABFF',
                  },
                ],
              },
            },
            data: seriesData1,
          },
          {
            z: 2,
            type: 'pictorialBar',
            data: seriesData1,
            symbol: 'diamond',
            symbolOffset: ['-63%', '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
              color: {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: '#80DAFF',
                  },
                  {
                    offset: 1,
                    color: '#48ABFF',
                  },
                ],
              },
            },
          },
          {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: seriesData1,
            symbol: 'diamond',
            symbolOffset: ['-63%', '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
              color: {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: '#80DAFF',
                  },
                  {
                    offset: 1,
                    color: '#48ABFF',
                  },
                ],
              },
            },
          },
          // ---------------------分割线---------------------
          {
            name: '女',
            type: 'bar',
            barWidth: barWidth,
            itemStyle: {
              color: {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: '#FDE2FF',
                  },
                  {
                    offset: 1,
                    color: '#AD8FF9',
                  },
                ],
              },
            },
            data: seriesData2,
          },
          {
            z: 2,
            type: 'pictorialBar',
            data: seriesData2,
            symbol: 'diamond',
            symbolOffset: ['63%', '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
              color: {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: '#FDE2FF',
                  },
                  {
                    offset: 1,
                    color: '#AD8FF9',
                  },
                ],
              },
            },
          },
          {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: seriesData2,
            symbol: 'diamond',
            symbolOffset: ['63%', '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
              color: {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: '#FDE2FF',
                  },
                  {
                    offset: 1,
                    color: '#AD8FF9',
                  },
                ],
              },
            },
          },
        ],
      };
      myChart.setOption(option, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.degree {
  position: absolute;
  right: 976px;
  top: 805px;
  width: 835px;
  height: 535px;
  .pie-chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 460px;
  }
}
</style>
