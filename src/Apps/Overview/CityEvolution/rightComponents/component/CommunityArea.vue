<template>
  <div class="community_area">
    <div class="item_wrapper">
      <div class="title">
        各社区面积分布
      </div>
      <div class="bar_charts" ref="charts"></div>
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
      const data = [990, 175, 43, 532, 222, 898];
      const xData = ['A社区', 'B社区', 'C社区', 'D社区', 'E社区', 'F社区'];
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
            type: 'shadow',
          },
          textStyle: {
            color: '#fff',
            fontSize: 22,
          },
          borderColor: 'rgba(255, 255, 255, 0.4)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        xAxis: {
          data: xData,
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.2)',
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
        series: [{
          type: 'bar',
          barWidth: 20,
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
                  color: '#FFAE9A',
                },
                {
                  offset: 1,
                  color: '#BB6D3E',
                },
              ],
              global: false,
            },
          },
          label: {
            show: true,
            position: 'top',
            distance: 10,
            color: '#FFFFFF',
            textStyle: {
              fontSize: 22,
            },
            // formatter: (params) => {
            //   const { data, dataIndex } = params;
            //   const eachD = ['起', '条', '个', '人'];
            //   return `{a|${data}}{b|${eachD[dataIndex]}}`;
            // },
            // rich: {
            //   a: {
            //     color: 'rgba(24, 227, 255, 1)',
            //     fontSize: 22,
            //     fontFamily: 'DIN Alternate',
            //   },
            //   b: {
            //     color: 'rgba(24, 227, 255, 1)',
            //     fontSize: 22,
            //   },
            // },
          },
          data: data,
        }],
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
  top: 370px;
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
    .bar_charts {
      height: 350px;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
