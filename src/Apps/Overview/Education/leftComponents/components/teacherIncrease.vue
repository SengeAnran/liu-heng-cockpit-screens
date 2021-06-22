<template>
  <div class="teacher_increase">
    <div class="name">升学情况</div>
    <div class="bar_chart" ref="charts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getPromotionTrendNew } from '@/api/Overview/Education/api';
export default {
  name: 'TeacherIncrease',
  components: {
  },
  data() {
    return {
      charts: null,
      highSchool: [], // 初中升高中
      university: [], // 高中升大学
      xData: [],
    };
  },
  mounted() {
    const charts = this.$refs.charts;
    this.charts = echarts.init(charts);
    this.loadData();
  },
  methods: {
    loadData() {
      getPromotionTrendNew().request().then((res) => {
        const { csg, gksx } = res; // 初升高 高考升学
        csg.forEach((itemC) => {
          gksx.forEach((itemG) => {
            if (itemC.nf === itemG.nf) {
              this.xData.push(itemC.nf);
              this.highSchool.push(itemC.sl);
              this.university.push(itemG.sl);
            };
          });
        });
        this.setData();
      });
    },
    setData() {
      this.charts.clear();
      this.charts.setOption(this.getOptions());
    },
    getOptions() {
      const option = {
        grid: {
          top: '25%',
          left: '10%',
          right: '3%',
          bottom: '15%',
        },
        legend: {
          data: ['初升高', '高考升学'],
          right: 10,
          top: 7,
          orient: 'vertical',
          textStyle: {
            color: '#FFFFFF',
            fontSize: 20,
            fontFamily: 'DIN Alternate',
          },
          icon: 'rect',
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
          data: this.xData,
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
            name: '初升高',
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
            data: this.highSchool,
          },
          {
            name: '高考升学',
            type: 'line',
            showAllSymbol: true,
            symbolSize: 6,
            itemStyle: {
              color: 'rgba(200, 114, 242, 1)',
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
                  { offset: 0, color: 'rgba(200, 114, 242, 1)' },
                  { offset: 1, color: 'rgba(200, 114, 242, 0)' },
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
            data: this.university,
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
