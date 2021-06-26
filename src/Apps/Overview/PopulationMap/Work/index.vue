<template>
  <div class="work">
    <BaseTitle title="财政供给人员情况" />
    <div class="line-chart" ref="chart"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
import { getFinancialSupportNum } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Work',
  data() {
    return {
      personData: [],
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
      getFinancialSupportNum().request().then((json) => {
        this.chart.setOption(this.getOptions(json));
      });
    },
    resolveData(data) {
      return data.map((item) => {
        item.name = item.dsman;
        item.value = +item.rs;
        return item;
      });
    },
    getOptions(data) {
      const option = {
        grid: {
          top: '15%',
          left: '10%',
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
          data: data.map((item) => item.nf),
        },
        yAxis: {
          name: '人数',
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
            data: data.map((item) => item.cwgjrs),
          },
        ],
      };
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.work {
  position: absolute;
  right: 125px;
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
