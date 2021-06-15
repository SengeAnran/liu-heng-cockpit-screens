<template>
  <div class="community_age">
    <BaseTitle title="人口年龄性别比例" :width='720' />
    <div class="lengent">
      <div class="lengent_name">
        <span class="lengent_ract man"></span><span>男</span>
      </div>
      <div class="lengent_name">
        <span class="lengent_ract"></span><span>女</span>
      </div>
    </div>
    <div class="item_wrapper">
      <div class="charts_flex">
        <div class="left_charts" ref="leftCharts"></div>
      </div>
      <div class="charts_flex">
        <div class="left_charts" ref="rightCharts"></div>
      </div>
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
      leftCharts: null,
      rightCharts: null,
    };
  },
  components: {
    BaseTitle,
  },
  mounted() {
    const leftCharts = this.$refs.leftCharts;
    const rightCharts = this.$refs.rightCharts;
    this.leftCharts = echarts.init(leftCharts);
    this.rightCharts = echarts.init(rightCharts);
    this.loadData();
  },
  methods: {
    loadData() {
      this.setData();
    },
    setData() {
      this.leftCharts.clear();
      this.rightCharts.clear();
      this.leftCharts.setOption(this.getLeftOptions());
      this.rightCharts.setOption(this.getRightOptions());
    },
    getLeftOptions() {
      const option = {
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
        grid: {
          top: '3%',
          left: '3%',
          right: '0%',
          bottom: '5%',
          containLabel: true,
        },
        xAxis: [{
          type: 'value',
          inverse: true,
          axisTick: {
            show: false,
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
          splitNumber: 3,
        }],
        yAxis: {
          type: 'category',
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,0.2)',
            },
          },
          axisLine: {
            show: false,
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
          data: ['15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59'],
        },
        series: [
          {
            name: '男',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              borderRadius: [10, 0, 0, 10],
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(114, 220, 238, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(55, 133, 246, 1)',
                  },
                ],
                global: false,
              },
            },
            data: [444, 666, 777, 888, 888, 999, 100, 400, 800],
          },
        ],
      };
      return option;
    },
    getRightOptions() {
      const option = {
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
        grid: {
          top: '3%',
          left: '2%',
          right: '10%',
          bottom: '5%',
          containLabel: true,
        },
        xAxis: [{
          type: 'value',
          inverse: false,
          axisTick: {
            show: false,
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
          splitNumber: 3,
        }],
        yAxis: {
          type: 'category',
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,0.2)',
            },
          },
          axisLine: {
            show: false,
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
          data: ['15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59'],
        },
        series: [
          {
            name: '女',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              borderRadius: [0, 10, 10, 0],
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(255, 150, 151, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(255, 201, 201, 1)',
                  },
                ],
                global: false,
              },
            },
            data: [444, 666, 777, 888, 888, 999, 100, 400, 800],
          },
        ],
      };
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
  position: relative;
  .lengent {
    position: absolute;
    width: 100px;
    height: 200px;
    top: 90px;
    right: 10px;
    z-index: 999999;
    .lengent_name {
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: white;
        font-size: 20px;
        margin-left: 10px;
      }
      .lengent_ract {
        display: inline-block;
        height: 20px;
        width: 30px;
        // background: blue;
        background:-webkit-linear-gradient(left,rgba(255, 201, 201, 1),rgba(255, 150, 151, 1));
      }
      .man {
        background:-webkit-linear-gradient(left,rgba(114, 220, 238, 1),rgba(55, 133, 246, 1));
      }
    }
  }
  .item_wrapper {
    margin-top: 65px;
    height: 460px;
    position: relative;
    .charts_flex {
      display: inline-block;
      height: 100%;
      width: 100%;
      position: relative;
      &:first-child {
        position: absolute;
        left: 0;
        width: 55%;
        display: inline-block;
        background: black;
        z-index: 9999;
        .left_charts {
          display: inline-block;
          height: 460px;
          width: 100%;
        }
      }
      &:last-child {
        position: absolute;
        right: 0;
        display: inline-block;
        width: 55%;
        // background: palegoldenrod;
        .left_charts {
          display: inline-block;
          height: 460px;
          width: 100%;
        }
      }
    }
  }
}
</style>
