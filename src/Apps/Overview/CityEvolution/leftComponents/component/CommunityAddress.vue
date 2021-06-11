<template>
  <div class="community_address">
    <BaseTitle title="各社区人口分布" :width='720' />
    <div class="item_wrapper">
      <div class="line_charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import BaseTitle from '../../components/BaseTitle';
export default {
  name: 'CityEvolution',
  data() {
    return {
      charts: null,
    };
  },
  components: {
    BaseTitle,
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
          text: '（人）',
          textStyle: {
            align: 'center',
            color: '#fff',
          },
          top: '5%',
          left: '1%',
        },
        grid: {
          top: '15%',
          left: '10%',
          right: '3%',
          bottom: '10%',
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
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
                  color: '#66CCFF',
                },
                {
                  offset: 1,
                  color: '#72DCEE',
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
.community_address {
  position: absolute;
  width: 840px;
  height: 550px;
  top: 550px;
  left: 0;
  padding-top: 20px;
  padding-left: 20px;
  // opacity: 0.9;
  // background: #ED7F64;
  box-sizing: border-box;
  .item_wrapper {
    margin-top: 65px;
    height: 460px;
    background: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .line_charts {
      height: 460px;
      width: 100%;
      box-sizing: border-box;
      // background: red;
    }
  }
}
</style>
