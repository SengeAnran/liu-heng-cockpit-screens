<template>
  <div class="TradingTotal">
    <secondary-title name="六横航运贸易总额" />
    <div class="line_charts" ref="charts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import SecondaryTitle from '../components/SecondaryTitle';
export default {
  data() {
    return {
      charts: null,
    };
  },
  components: {
    SecondaryTitle,
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
      const data = [2887, 3581, 3006, 3899, 3611, 3017, 1866];
      const xData = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
      const option = {
        title: {
          text: '贸易总额',
          textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 24,
          },
        },
        grid: {
          top: '21%',
          left: '10%',
          right: '3%',
          bottom: '10%',
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
            },
          },
          splitLine: {
            show: false,
          },
          boundaryGap: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        yAxis: {
          name: '万元',
          nameTextStyle: {
            fontSize: 20,
            color: 'rgba(255, 255, 255, 1)',
            align: 'right',
          },
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
        series: [
          {
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
                    color: '#66CCFF',
                  },
                  {
                    offset: 1,
                    color: '#72DCEE',
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
            data: data,
          },
        ],
      };
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.TradingTotal {
  display: flex;
  flex-direction: column;
  .line_charts {
    flex: 1;
    margin-top: 20px;
  }
}
</style>
