<template>
  <div class="age-distribution">
    <BaseTitle title="出生与死亡情况" />
    <div ref="echarts" :style="{ width: '100%', height: '100%' }"></div>
  </div>
</template>

<script>
import { getBornAndDeathByYear } from '@/api/Overview/PopulationMap/api';
import * as echarts from 'echarts';
export default {
  name: 'AgeDistribution',
  data() {
    return {
      chart: null,
      chartData: [],
      timmerOneAnim: null,
    };
  },

  mounted() {
    this.loadData();
  },
  methods: {
    // 获取数据
    loadData() {
      getBornAndDeathByYear()
        .request()
        .then((json) => {
          if (json) {
            this.chartData = json.map((item) => {
              item.name = item.nf || '';
              item.value1 = item.chrks || '';
              item.value2 = item.swrks || '';
              return item;
            });
          }
          this.initdraw();
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
      const option = {
        grid: {
          top: '25%',
          bottom: '15%',
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
            show: true,
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
            show: false,
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
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 25],
            symbolOffset: [-38, -10],
            symbolPosition: 'end',
            z: 12,
            tooltip: {
              show: false,
            },
            label: {
              normal: {
                show: false,
                position: 'top',
                color: '#fff',
              },
            },
            color: '#FFF38A',
            data: seriesData1,
          },
          {
            name: '',
            type: 'pictorialBar',
            tooltip: {
              show: false,
            },
            symbolSize: [70, 30],
            symbolOffset: [-35, 15],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#2EA9E5',
                borderType: 'solid',
                borderWidth: 3,
              },
            },
            data: seriesData1,
          },
          {
            name: '',
            type: 'pictorialBar',
            tooltip: {
              show: false,
            },
            symbolSize: [90, 40],
            symbolOffset: [-35, 20],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#26B2E8',
                borderType: 'solid',
                borderWidth: 4,
              },
            },
            data: seriesData1,
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 25],
            tooltip: {
              show: false,
            },
            symbolOffset: [-35, 10],
            z: 12,
            color: '#EFB943',
            data: seriesData1,
          },
          {
            type: 'bar',
            name: '出生',
            barWidth: '50',
            barGap: '200%',
            barCateGoryGap: '10%',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#fff',
                fontSize: 40,
                opacity: 1,
                offset: [0, -20],
              },
            },
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: '#FFF38A',
                  },
                  {
                    offset: 1,
                    color: '#EFB943',
                  },
                ],
              },
            },
            data: seriesData1,
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [42, 25],
            symbolOffset: [42, -10],
            symbolPosition: 'end',
            z: 12,
            tooltip: {
              show: false,
            },
            label: {
              normal: {
                show: false,
                position: 'top',
                color: '#fff',
              },
            },
            color: '#A8FFB2',
            data: seriesData2,
          },
          {
            name: '',
            type: 'pictorialBar',
            tooltip: {
              show: false,
            },
            symbolSize: [70, 30],
            symbolOffset: [42, 15],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#20D3AB',
                borderType: 'solid',
                borderWidth: 3,
              },
            },
            data: seriesData2,
          },
          {
            name: '',
            type: 'pictorialBar',
            tooltip: {
              show: false,
            },
            symbolSize: [90, 40],
            symbolOffset: [42, 20],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#20D3AB',
                borderType: 'solid',
                borderWidth: 4,
              },
            },
            data: seriesData2,
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [42, 25],
            tooltip: {
              show: false,
            },
            symbolOffset: [42, 10],
            z: 12,
            color: '#54BC68',
            data: seriesData2,
          },
          {
            type: 'bar',
            name: '死亡',
            barWidth: '40',
            barGap: '70%',
            barCateGoryGap: '10%',
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#fff',
                fontSize: 40,
                offset: [0, -20],
              },
            },
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: '#A8FFB2',
                  },
                  {
                    offset: 1,
                    color: '#54BC68',
                  },
                ],
              },
            },
            data: seriesData2,
          },
        ],
      };
      myChart.setOption(option, true);
      var count = 0;
      if (this.timmerOneAnim) {
        clearInterval(this.timmerOneAnim);
      }
      this.timmerOneAnim = setInterval(() => {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: count % 3,
        });
        count++;
      }, 4000);
    },
  },
};
</script>
<style lang="scss" scoped>
.age-distribution {
  position: absolute;
  right: 976px;
  top: 162px;
  width: 835px;
  height: 585px;
}
</style>
