<template>
  <div class="age-distribution">
    <BaseTitle title="户籍人口年龄分布" />
    <div class="bar-chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getAgeDistribution } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'AgeDistribution',
  data() {
    return {
      chart: null,
    };
  },
  components: {
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.loadData();
  },
  methods: {
    loadData() {
      getAgeDistribution().request().then((json) => {
        this.chart.setOption(this.getOptions(json));
      });
    },
    getOptions(data) {
      // const data = [99, 75, 43, 52, 122, 38];
      // const xData = ['18岁以下', '18～25岁', '26～40岁', '41～60岁', '60岁以上'];
      const option = {
        grid: {
          top: '10%',
          left: '6%',
          right: '4%',
          bottom: '16%',
        },
        xAxis: {
          data: data.map((item) => item.nld),
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
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        yAxis: {
          name: '人数(万)',
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
        series: [{
          type: 'bar',
          barWidth: 35,
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
              fontFamily: 'DIN Alternate',
            },
          },
          data: data.map((item) => item.rs),
        }],
      };
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.age-distribution {
  position: absolute;
  right: 976px;
  top: 262px;
  width: 835px;
  height: 535px;
  .bar-chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 460px;
  }
}
</style>
