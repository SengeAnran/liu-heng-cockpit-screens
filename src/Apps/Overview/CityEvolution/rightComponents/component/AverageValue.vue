<template>
  <div class="community_area">
    <div class="item_wrapper">
      <div class="title">
        亩均产值
      </div>
      <div class="line_charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'CommunityArea',
  data() {
    return {
      charts: null,
    };
  },
  components: {
  },
  mounted() {
    const charts = this.$refs.charts;
    this.charts = echarts.init(charts);
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
      // 全市增幅
      const data2 = [10, 40, 51, 3.15, 114, 13, 24, 114, 13, 24, 22, 56];
      const option = {
        title: {
          text: '平方米',
          textStyle: {
            align: 'center',
            color: '#fff',
          },
          top: '5%',
          left: '3%',
        },
        grid: {
          top: '18%',
          left: '10%',
          right: '3%',
          bottom: '23%',
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
            name: '全市增幅',
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
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgba(89, 219, 230, 1)' },
                  { offset: 1, color: 'rgba(89, 219, 230, 0.1)' },

                ]),
              },
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
.community_area {
  position: absolute;
  width: 840px;
  height: 350px;
  top: 720px;
  left: 0;
  padding-left: 20px;
  box-sizing: border-box;
  // background: red;
  // opacity: 0.5;
  .item_wrapper {
    .title {
      height: 30px;
      line-height: 30px;
      font-size: 26px;
      color: white;
    }
    .line_charts {
      height: 350px;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
