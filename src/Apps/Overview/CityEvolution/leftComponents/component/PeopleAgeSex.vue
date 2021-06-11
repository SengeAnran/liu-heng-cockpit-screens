<template>
  <div class="community_age">
    <BaseTitle title="人口年龄性别比例" :width='720' />
    <div class="item_wrapper">
      <div class="line_charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import BaseTitle from '../../components/BaseTitle';
export default {
  name: 'PeopleAgeSex',
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
      const myData = ['15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59'].reverse();
      const lineData = [100, 100, 100, 100, 100, 100, 100];
      const lastYearData = {
        1: [44, 68, 89, 3, 20, 62, 34, 55, 65, 33],
      };
      const thisYearData = {
        1: [62, 34, 55, 11, 38, 23, 39, 66, 66, 79],
      };
      const timeLineData = [1];
      const option = {
        baseOption: {
          timeline: {
            show: false,
            top: 0,
            data: [],
          },
          legend: {
            top: '5%',
            left: '31%',
            itemWidth: 22,
            itemHeight: 22,
            itemGap: 343,
            icon: 'horizontal',
            textStyle: {
              color: '#ffffff',
              fontSize: 20,
            },
            data: ['2017', '2018'],
          },
          grid: [{
            show: false,
            left: '5%',
            top: '10%',
            bottom: '8%',
            containLabel: true,
            width: '37%',
          }, {
            show: false,
            left: '51%',
            top: '10%',
            bottom: '11%',
            width: '0%',
          }, {
            show: false,
            right: '2%',
            top: '10%',
            bottom: '8%',
            containLabel: true,
            width: '37%',
          }],
          xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            position: 'bottom',
            axisLabel: {
              show: true,
              textStyle: {
                color: 'white',
                fontSize: 22,
              },
            },
            splitLine: {
              show: false,
            },
          }, {
            gridIndex: 1,
            show: false,
          }, {
            gridIndex: 2,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            position: 'bottom',
            axisLabel: {
              show: true,
              interval: 0,
              textStyle: {
                color: 'white',
                fontSize: 22,
              },
            },
            splitLine: {
              show: false,
            },
          }],
          yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            data: myData,
          }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#ffffff',
                fontSize: 20,
              },
            },
            data: myData.map(function (value) {
              return {
                value: value,
                textStyle: {
                  align: 'center',
                },
              };
            }),
          }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            data: myData,
          }],
          series: [],
        },
        options: [],
      };
      option.baseOption.timeline.data.push(timeLineData[0]);
      option.options.push({
        series: [{
          type: 'pictorialBar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)',
            },
          },
          barWidth: 10,
          data: lineData,
          barGap: '-100%',
          barCategoryGap: 0,
          label: {
            show: false,
            formatter: (series) => {
              return lastYearData[timeLineData[0]][series.dataIndex] + '%';
            },
            position: 'insideTopLeft',
            textStyle: {
              color: '#ffffff',
              fontSize: 20,
            },
            offset: [0, -10],
          },
          z: -100,
          animationEasing: 'elasticOut',
          animationDelay: function (dataIndex, params) {
            return params.index * 30;
          },
        }, {
          name: '2017',
          type: 'bar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: '#039372',
            },
          },
          data: lastYearData[timeLineData[0]],
        },
        {
          type: 'pictorialBar',
          xAxisIndex: 2,
          yAxisIndex: 2,
          symbol: 'rect',
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)',
            },
          },
          barWidth: 10,
          symbolRepeat: true,
          symbolSize: 14,
          data: lineData,
          barGap: '-100%',
          barCategoryGap: 0,
          label: {
            normal: {
              show: false,
              formatter: (series) => {
                return thisYearData[timeLineData[0]][series.dataIndex] + '%';
              },
              position: 'insideTopRight',
              textStyle: {
                color: '#ffffff',
                fontSize: 20,
              },
              offset: [0, -10],
            },
          },
          z: -100,
          animationEasing: 'elasticOut',
          animationDelay: function (dataIndex, params) {
            return params.index * 30;
          },
        },
        {
          name: '2018',
          type: 'bar',
          xAxisIndex: 2,
          yAxisIndex: 2,
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: '#36d7b6',
            },
          },
          data: thisYearData[timeLineData[0]],
        }],
      });
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.community_age {
  position: absolute;
  width: 840px;
  height: 550px;
  top: 550px;
  left: 0;
  padding-top: 20px;
  left: 850px;
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
      // background: red;
    }
  }
}
</style>
