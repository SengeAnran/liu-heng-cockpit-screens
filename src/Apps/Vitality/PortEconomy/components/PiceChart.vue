<template>
  <div class="chart" ref="pieChart"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
    color: {
      type: Array,
      default: () => ['#6182AE', '#E772DD', '#01A1F5', '#90FFED', '#65C986'],
    },
    title: {
      type: String,
      default: '',
    },
    unit: {
      type: String,
      default: '%',
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.pieChart);
    this.initEcharts();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  },
  methods: {
    initEcharts() {
      const option = {
        color: this.color,
        title: {
          text: this.title,
          left: '27%',
          top: '40%',
          textAlign: 'center',
          textStyle: {
            fontSize: 34,
            lineHeight: 40,
            fontFamily: 'Source Han Sans CN',
            color: '#fff',
            width: 140,
            overflow: 'break',
          },
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          icon: 'circle',
          orient: 'vertical',
          itemWidth: 24,
          itemHeight: 24,
          itemGap: 32,
          top: 'center',
          left: '450',
          textStyle: {
            color: '#fff',
            rich: {
              name: {
                align: 'left',
                fontSize: 24,
                width: 160,
              },
              value: {
                align: 'left',
                fontSize: 24,
              },
            },
          },
          data: this.chartData.map((item) => item.name),
          formatter: (name) => {
            let value = '';
            const sum = this.chartData.reduce((value, item) => Number(value) + Number(item.value), 0);
            value = this.chartData.filter((item) => item.name === name)[0].value;
            return '{name| ' + name + '}  ' + '{value|' + ((value / sum) * 100).toFixed(2) + this.unit + '}';
          },
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['60%', '80%'],
            center: ['27%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              show: false,
            },
            itemStyle: {
              normal: {
                shadowBlur: 30,
                shadowColor: 'rgba(44, 142, 196, 1)',
              },
            },
            labelLine: {
              show: false,
            },
            data: this.chartData,
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>
<style lang="scss">
.chart {
  height: 100%;
}
</style>
