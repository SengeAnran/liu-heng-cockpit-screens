<template>
  <div class="teacher_increase">
    <div class="name">截止2021年，教职工人数增加24人</div>
    <div class="bar_chart" ref="charts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'TeacherIncrease',
  components: {
  },
  data() {
    return {
      charts: null,
    };
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
      const xAxisData = ['2016', '2017', '2018', '2019', '2020', '2021'];
      const data1 = [112, 332, 224, 978, 703, 430, 531, 415, 455, 768, 566, 414];
      const option = {
        grid: {
          top: '25%',
          left: '10%',
          right: '3%',
          bottom: '15%',
        },
        title: {
          text: '人数',
          textStyle: {
            align: 'center',
            color: '#fff',
          },
          top: '15%',
          left: '5%',
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
          data: xAxisData,
        },
        yAxis: {
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
            name: '人数',
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
            data: data1,
          },
        ],
      };
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.teacher_increase {
  position: absolute;
  width: 855px;
  height: 360px;
  position: absolute;
  top: 290px;
  right: 0;
  z-index: 101010;
  // background: blue;
  // opacity: 0.8;
  .bar_chart {
    height: 360px;
    width: 100%;
    box-sizing: border-box;
  }
  .name {
    position: absolute;
    top: 5px;
    left: 30px;
    font-size: 24px;
    color: white;
  }
}
</style>
