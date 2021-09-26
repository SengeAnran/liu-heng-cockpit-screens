<template>
  <div class="teacher_compose">
    <div class="name">学校教师数量分布</div>
    <div class="bar_chart" ref="charts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getTeacherTrend } from '@/api/Overview/Education/api';
export default {
  name: 'LeftComponents',
  components: {},
  data() {
    return {
      charts: null,
      notOrganization: [],
      organization: [],
      xData: [],
      timmerOneAnim: null,
    };
  },
  mounted() {
    const charts = this.$refs.charts;
    this.charts = echarts.init(charts);
    this.loadData();
    var count = 0;
    if (this.timmerOneAnim) {
      clearInterval(this.timmerOneAnim);
    }
    this.timmerOneAnim = setInterval(() => {
      this.charts.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: count % 4,
      });
      count++;
    }, 4500);
  },
  methods: {
    loadData() {
      getTeacherTrend()
        .request()
        .then((res) => {
          const { fb, zb } = res;
          fb.forEach((itemFb) => {
            zb.forEach((itemZb) => {
              if (itemFb.xj === itemZb.xj) {
                this.xData.push(itemZb.xj);
                this.notOrganization.push(itemFb.sl);
                this.organization.push(itemZb.sl);
              }
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
        title: {
          text: '人数',
          textStyle: {
            align: 'center',
            color: '#fff',
          },
          top: '15%',
          left: '5%',
        },
        grid: {
          top: '25%',
          left: '10%',
          right: '3%',
          bottom: '15%',
        },
        legend: {
          data: ['在编教师', '非在编教师'],
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
          data: this.xData,
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
              fontFamily: 'DIN Alternate',
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
              color: 'rgba(255,255,255,0.4)',
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
            name: '在编教师',
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
                    color: 'rgba(133, 234, 255, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(133, 234, 255, 0.3)',
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
                fontFamily: 'DIN Alternate',
              },
            },
            barGap: '40%',
            data: this.organization,
          },
          {
            name: '在编教师',
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: ['-100%', '50%'],
            symbolSize: [20, 20],
          },
          {
            name: '在编教师',
            data: this.organization,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: ['-70%', '-50%'],
            symbolSize: [20, 15],
            zlevel: 2,
            itemStyle: {
              normal: {
                borderColor: '#8bead4',
                borderWidth: 2,
                color: '#8bead4',
              },
            },
          },

          {
            name: '非在编教师',
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
                    color: 'rgba(255, 151, 152, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(255, 151, 152, 0.3)',
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
                fontFamily: 'DIN Alternate',
              },
            },
            barGap: '40%',
            data: this.notOrganization,
          },
          {
            name: '非在编教师',
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: ['-100%', '50%'],
            symbolSize: [20, 20],
          },
          {
            name: '非在编教师',
            data: this.notOrganization,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: ['70%', '-50%'],
            symbolSize: [20, 15],
            zlevel: 2,
            itemStyle: {
              normal: {
                borderColor: 'rgba(255, 151, 152, 1)',
                borderWidth: 2,
                color: 'rgba(255, 151, 152, 1)',
              },
            },
          },
        ],
      };
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.teacher_compose {
  position: absolute;
  width: 855px;
  height: 520px;
  position: absolute;
  top: 300px;
  left: 0;
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
