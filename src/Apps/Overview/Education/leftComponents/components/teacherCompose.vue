<template>
  <div class="teacher_compose">
    <div class="name">学校教师数量分布</div>
    <div class="bar_chart" ref="charts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'LeftComponents',
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
      const data = [990, 175, 43, 532, 222, 22];
      const data1 = [456, 456, 445, 33, 345, 33];
      const xData = ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'];
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
          data: ['高级教师', '初级教师'],
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
        series: [{
          name: '高级教师',
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
          data: data,
        },
        {
          name: '初级教师',
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
          data: data1,
        }],
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
  height: 360px;
  position: absolute;
  top: 290px;
  left: 0;
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
