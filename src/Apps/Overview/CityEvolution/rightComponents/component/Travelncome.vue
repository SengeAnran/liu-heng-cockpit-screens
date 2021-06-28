<template>
  <div class="community_address">
    <BaseTitle title="旅游接待人数和旅游收入" :width='720' />
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
      data: [],
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
    setData() {
      this.charts.clear();
      this.charts.setOption(this.getOptions());
    },
    getOptions() {
      const option = {
        grid: {
          top: '15%',
          left: '10%',
          right: '17%',
          bottom: '15%',
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
          data: [2015, 2016, 2017, 2018, 2019, 2020],
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.5)',
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
        yAxis: [{
          type: 'value',
          name: '（万人次）',
          nameTextStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
          },
          splitLine: {
            show: false,
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
            show: true,
          },
        }, {
          name: '（亿元）',
          type: 'value',
          position: 'right',
          nameTextStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
          },
          splitLine: {
            show: false,
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
            show: true,
          },
        }],
        legend: {
          data: ['接待人数', '旅游收入'],
          bottom: 7,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 20,
            fontFamily: 'DIN Alternate',
          },
        },
        series: [{
          type: 'bar',
          name: '接待人数',
          barWidth: 20,
          yAxisIndex: '0', // 第一个柱状图的数据
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
            position: 'inside',
            distance: 10,
            color: '#FFFFFF',
            textStyle: {
              fontSize: 22,
            },
          },
          data: [145.7, 165.2, 190.9, 229, 261.3, 300.4],
        }, {
          type: 'line',
          yAxisIndex: '1', // 第一个柱状图的数据
          name: '旅游收入',
          barWidth: 20,
          itemStyle: {
            color: '#31EABC',
          },
          label: {
            show: true,
            position: 'top',
            distance: 10,
            color: '#FFFFFF',
            textStyle: {
              fontSize: 22,
            },
          },
          data: [8.01, 9.22, 10.88, 13.28, 15.16, 17.04],
        }],
      };
      return option;
    },
    loadData() { // 社区信息
      this.setData();
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
  // top: 0;
  left: 850px;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  .item_wrapper {
    margin-top: 65px;
    height: 460px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .line_charts {
      height: 460px;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
