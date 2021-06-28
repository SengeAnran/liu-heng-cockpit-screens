<template>
  <div class="register">
    <BaseTitle title="户籍人口" />
    <div class="top-box">
      <div class="total">
        总人数: <CountUp :num="total.hjzrs" />人
      </div>
      <div class="rate">
        <span class="last-year">比上年 {{ (total.rkzzl * 100).toFixed(2)}}%</span>
        <CountUp :num="total.hjxzrs" />人
      </div>
    </div>
    <div class="line-chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getNewPopulationTrend } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Register',
  data() {
    return {
      chart: null,
      total: {
        hjzrs: 0,
        hjxzrs: 0,
        rkzzl: 0,
      },
    };
  },
  computed: {
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.loadData();
  },
  methods: {
    loadData() {
      getNewPopulationTrend().request().then((json) => {
        this.total.hjzrs = json.hjrks.hjzrs || 0;
        this.total.hjxzrs = json.hjrks.hjxzrs || 0;
        this.total.rkzzl = json.hjrks.rkzzl || 0;
        this.chart.setOption(this.getOptions(json.hjrkqs));
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
          data: data.map((item) => item.hjnf),
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
            data: data.map((item) => item.hjrs),
          },
        ],
      };
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.register {
  position: absolute;
  left: 157px;
  top: 262px;
  width: 835px;
  height: 535px;
  .top-box {
    position: absolute;
    top: 70px;
    right: 0;
    font-size: 22px;
    color: #fff;
    width: 70%;
    display: flex;
    >div {
      flex-grow: 1;
      text-align: center;
      &.total {
        .count-up {
          font-size: 35px;
          color: #ffa800;
          font-family: 'DIN Alternate';
        }
      }
       &.rate {
        .last-year {
          display: inline-block;
          margin-right: 20px;
        }
        .count-up {
          font-size: 35px;
          color: #60f2bb;
          font-family: 'DIN Alternate';
        }
      }
    }
  }
  .line-chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 460px;
  }
}
</style>
