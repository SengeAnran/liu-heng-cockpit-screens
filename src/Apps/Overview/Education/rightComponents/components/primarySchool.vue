<template>
  <div class="teacher_increase">
    <div class="name">小学</div>
    <div class="line_chart" ref="charts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'TeacherIncrease',
  components: {},
  props: {
    dataMessage: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  watch: {
    dataMessage(newValue, oldValue) {
      this.setData();
    },
  },
  data() {
    return { timmerOneAnim: null };
  },
  mounted() {
    const charts = this.$refs.charts;
    this.charts = echarts.init(charts);
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
    setData() {
      this.charts.clear();
      this.charts.setOption(this.getOptions());
    },
    getOptions() {
      const option = {
        grid: {
          top: '18%',
          left: '10%',
          right: '3%',
          bottom: '10%',
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
          data: this.dataMessage.xAxis,
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
        legend: {
          data: ['班级数', '总人数'],
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
        series: [
          {
            name: '班级数',
            type: 'bar',
            barWidth: 20,
            barGap: 0.5,
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
            },
            data: this.dataMessage.classNum,
          },
          {
            name: '总人数',
            type: 'bar',
            barWidth: 20,
            barGap: 0.5,
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
                    color: 'rgba(89, 219, 230, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(89, 219, 230, 0.5)',
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
            },
            data: this.dataMessage.allPeople,
          },
          {
            name: '总人数',
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: ['100%', '50%'],
            symbolSize: [20, 20],
          },
          {
            name: '总人数',
            data: this.dataMessage.allPeople,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: ['70%', '-50%'],
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
  height: 400px;
  position: absolute;
  top: 140px;
  right: 10px;
  z-index: 101010;
  .line_chart {
    height: 400px;
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
