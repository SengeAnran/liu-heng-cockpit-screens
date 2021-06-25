<template>
  <div class="float-population">
    <BaseTitle title="户籍人口性别情况" />
    <div class="line-chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getPopuliationBySex } from '@/api/Overview/PopulationMap/api';
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
      getPopuliationBySex().request().then((json) => {
        console.log('户籍人口性别', json);
        // this.chart.setOption(this.getOptions(json));
      });
    },
    getOptions(data) {
      // const xAxisData = [];
      // for (let i = 1; i <= 12; i++) {
      //   const temp = i + '月';
      //   xAxisData.push(temp);
      // }
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
          boundaryGap: true,
          data: data.map((item) => item.ldyf),
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
            data: data.map((item) => item.ldrs),
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
