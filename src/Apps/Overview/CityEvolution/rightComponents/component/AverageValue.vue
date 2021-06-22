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
  props: {
    xAxisData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    lineData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
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
    setTimeout(() => {
      this.loadData();
    }, 500);
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
      const option = {
        grid: {
          top: '18%',
          left: '9%',
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
          boundaryGap: false,
          data: this.xAxisData,
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
            data: this.lineData,
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
