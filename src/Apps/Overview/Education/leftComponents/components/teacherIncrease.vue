<template>
  <div class="teacher_increase">
    <div>
      <div class="bar-chart" ref="barChart" :style="{ width: '800px', height: '246px' }"></div>
    </div>
    <div>
      <div class="bar-chart" ref="barChart1" :style="{ width: '800px', height: '226px' }"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getPromotionTrendNew } from '@/api/Overview/Education/api';
export default {
  name: 'TeacherIncrease',
  components: {},
  data() {
    return {
      charts: null,
      highSchool: [], // 初中升高中
      university: [], // 高中升大学
      xData: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getPromotionTrendNew()
        .request()
        .then((res) => {
          const { csg, gksx } = res; // 初升高 高考升学
          console.log(res);
          csg.forEach((item) => {
            item.name = item.sxlb;
            item.value = item.sl;
            item.label = item.nf;
          });
          this.highSchool = csg;
          gksx.forEach((item) => {
            item.name = item.sxlb;
            item.value = item.sl;
            item.label = item.nf;
          });
          this.university = gksx;
          this.initchuzhong();
          this.initgaozhong();
        });
      console.log(this.highSchool);
    },
    initchuzhong() {
      this.charts = echarts.init(this.$refs.barChart);
      const option = {
        title: {
          text: '初中升高中',
          textStyle: {
            fontSize: 25,
            color: '#ffffff',
          },
          padding: [5, 0, 0, 30],
        },
        grid: {
          top: 55,
          left: 10,
          right: 10,
          bottom: 0,
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          show: false,
        },
        yAxis: {
          show: false,
          inverse: true,
          type: 'category',
          axisLine: {
            show: false,
          },
        },
        series: [
          {
            name: 'label',
            type: 'bar',
            barWidth: 24,
            yAxisIndex: 0,
            label: {
              show: true,
              position: [10, -10],
              color: '#fff',
              fontSize: 22,
            },
            data: this.highSchool.map((item, index) => {
              return {
                value: 0,
                label: {
                  formatter() {
                    return item.label;
                  },
                },
              };
            }),
          },
          {
            name: 'value',
            type: 'bar',
            barWidth: 18,
            barMinHeight: 20, // 最小高度
            yAxisIndex: 0,
            label: {
              show: true,
              position: 'right',
              color: '#fff',
              offset: [10, 0],
              formatter({ value }) {
                return `{c|''}{a|${value}} {b|人}`;
              },
              rich: {
                a: {
                  padding: [0, 0, 0, 30],
                  fontSize: 26,
                  fontFamily: 'DIN Alternate',
                },
                b: {
                  fontSize: 24,
                },
                c: {
                  padding: [0, 0, 0, -15],
                  width: 0,
                  height: 18,
                  align: 'left',
                  backgroundColor: '#ff6ed',
                },
              },
            },
            data: this.highSchool.map(({ value }, index) => {
              return {
                value,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: 'rgba(92, 111, 255, 0.1)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(92, 111, 255, 1)',
                    },
                  ]),
                },
              };
            }),
          },
        ],
      };
      this.charts.setOption(option);
    },
    initgaozhong() {
      this.charts = echarts.init(this.$refs.barChart1);
      const option = {
        title: {
          text: '高中升大学',
          textStyle: {
            fontSize: 25,
            color: '#ffffff',
          },
          padding: [5, 0, 0, 30],
        },
        grid: {
          top: 35,
          left: 10,
          right: 80,
          bottom: 10,
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          show: false,
        },
        yAxis: {
          show: false,
          inverse: true,
          type: 'category',
          axisLine: {
            show: false,
          },
        },
        series: [
          {
            name: 'label',
            type: 'bar',
            barWidth: 24,
            yAxisIndex: 0,
            label: {
              show: true,
              position: [10, -10],
              color: '#fff',
              fontSize: 22,
            },
            data: this.university.map((item, index) => {
              return {
                value: 0,
                label: {
                  formatter() {
                    return item.label;
                  },
                },
              };
            }),
          },
          {
            name: 'value',
            type: 'bar',
            barWidth: 18,
            barMinHeight: 20, // 最小高度
            yAxisIndex: 0,
            label: {
              show: true,
              position: 'right',
              color: '#fff',
              offset: [10, 0],
              formatter({ value }) {
                return `{c|''}{a|${value}} {b|人}`;
              },
              rich: {
                a: {
                  padding: [0, 0, 0, 30],
                  fontSize: 26,
                  fontFamily: 'DIN Alternate',
                },
                b: {
                  fontSize: 24,
                },
                c: {
                  padding: [0, 0, 0, -15],
                  width: 0,
                  height: 18,
                  align: 'left',
                  backgroundColor: '#ff6ed',
                },
              },
            },
            data: this.university.map(({ value }, index) => {
              return {
                value,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: 'rgba(77,198,180, 0.1)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(77,198,180, 1)',
                    },
                  ]),
                },
              };
            }),
          },
        ],
      };
      this.charts.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.teacher_increase {
  position: absolute;
  width: 855px;
  height: 520px;
  position: absolute;
  top: 310px;
  right: 0;
  z-index: 101010;
  // background: blue;
  // opacity: 0.8;
  .bar_chart {
    height: 490px;
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
