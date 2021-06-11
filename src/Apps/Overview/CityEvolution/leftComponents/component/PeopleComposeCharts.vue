<template>
  <div class="people_compose">
    <BaseTitle title="人口组成情况-图表" :width='720' />
    <div class="item_wrapper">
      <div class="line_charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '../../components/BaseTitle';
import * as echarts from 'echarts';
export default {
  name: 'CityEvolution',
  components: {
    BaseTitle,
  },
  data() {
    return {
      charts: null,
    };
  },
  mounted() {
    this.charts = echarts.init(this.$refs.charts);
    this.loadData();
  },
  methods: {
    loadData() {
      this.setData();
    },
    setData() {
      this.charts.clear();
      this.charts.setOption(this.getOptions());
    },
    getOptions() {
      const xAxisData = [];
      for (let i = 1; i <= 12; i++) {
        const temp = i + '月';
        xAxisData.push(temp);
      }
      // 全区增幅
      const data1 = [114, 13, 24, 9.78, 180, 40, 51, 3.15, 45, 78, 66, 44];
      // 全市增幅
      const data2 = [10, 40, 51, 3.15, 114, 13, 24, 114, 13, 24, 22, 56];
      const option = {
        title: {
          text: '单位（人）',
          textStyle: {
            align: 'center',
            color: '#fff',
          },
          top: '0%',
          left: '3%',
        },
        grid: {
          top: '10%',
          left: '8%',
          right: '0%',
          bottom: '13%',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              type: 'dashed',
            },
          },
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
          data: xAxisData,
        },
        yAxis: {
          type: 'value',
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
        legend: {
          data: ['全区增幅', '全市增幅'],
          right: 30,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 20,
          },
          icon: 'rect',
        },
        series: [
          {
            name: '全区增幅',
            type: 'line',
            showAllSymbol: true,
            symbolSize: 6,
            itemStyle: {
              color: '#59DBE6',
              borderColor: '#fff',
              borderWidth: 3,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 10,
              shadowOffsetY: 10,
              shadowOffsetX: 10,
            },
            label: {
              show: false,
              position: 'top',
              distance: 10,
              color: '#FFFFFF',
              textStyle: {
                fontSize: 22,
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
          {
            name: '全市增幅',
            type: 'line',
            showAllSymbol: true,
            symbolSize: 6,
            itemStyle: {
              color: '#ED7F64',
              borderColor: '#fff',
              borderWidth: 3,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 10,
              shadowOffsetY: 10,
              shadowOffsetX: 10,
            },
            label: {
              show: false,
              position: 'top',
              distance: 10,
              color: '#FFFFFF',
              textStyle: {
                fontSize: 22,
              },
            },
            tooltip: {
              show: true,
            },
            data: data2,
          },
        ],
      };
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.people_compose {
  position: absolute;
  width: 840px;
  height: 550px;
  top: 0;
  left: 850px;
  padding-top: 20px;
  padding-left: 20px;
  // background: red;
  // opacity: 0.6;
  box-sizing: border-box;
  .item_wrapper {
    margin-top: 90px;
    height: 440px;
    // background: palegreen;
    .line_charts {
      height: 440px;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
