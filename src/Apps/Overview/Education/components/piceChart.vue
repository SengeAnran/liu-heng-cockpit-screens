<template>
  <div class="pie-chart" :style="{width: `${width}px`, height: `${height}px`}" ref="pieChart" />
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'PieChart',
  data() {
    return {
      chart: null,
    };
  },
  props: {
    chartData: {
      type: Object,
      default: () => [],
    },
    width: {
      type: String,
      default: '835',
    },
    height: {
      type: String,
      default: '460',
    },
    title: {
      type: String,
      default: '',
    },
    legendTop: {
      type: String,
      default: '23%',
    },
    legendRight: {
      type: String,
      default: '20%',
    },
    color: {
      type: Array,
      default: function () {
        return [
          'rgba(97, 130, 174, 1)',
          'rgba(142, 220, 125, 1)',
          'rgba(1, 161, 245, 1)',
          'rgba(85, 230, 243, 1)',
          'rgba(235, 225, 128, 1)',
          'rgba(219, 181, 167, 1)',
        ];
      },
    },
  },
  watch: {
    chartData: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            this.initChart(val);
          });
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.chart = echarts.init(this.$refs.pieChart);
  },
  methods: {
    initChart(val) {
      this.chart.setOption(this.optionData(val));
    },
    optionData(data) {
      const colorList = this.color;
      const total = data.pieData.reduce((prev, next) => prev + next.value, 0);
      data.pieData = data.pieData.map((item) => {
        item.percent = ((item.value / total) * 100).toFixed(1);
        return item;
      });
      return {
        title: {
          text: `${data.title.slice(0, 4)}\n${data.title.slice(4)}`,
          top: '38%',
          textAlign: 'center',
          left: '21.5%',
          textStyle: {
            color: '#fff',
            fontSize: 35,
            fontWeight: '400',
          },
        },
        tooltip: {
          show: false,
        },
        legend: {
          icon: 'circle',
          itemGap: 30,
          itemWidth: 20,
          itemHeight: 20,
          orient: 'vertical',
          top: this.legendTop,
          right: this.legendRight,
          formatter: function (name) {
            const cur = data.pieData.find((item) => item.name === name);
            return `{a|${name}}  {b|${cur.percent}%}`;
          },
          textStyle: {
            color: '#fff',
            fontSize: 24,
            rich: {
              a: {
                color: '#fff',
                fontSize: 24,
              },
              b: {
                color: '#fff',
                fontSize: 26,
                fontFamily: 'DIN Alternate',
                padding: [0, 0, 0, 20],
              },
            },
          },
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['42%', '61%'],
            center: ['21.5%', '46%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            itemStyle: {
              color: (params) => {
                return colorList[params.dataIndex];
              },
            },
            labelLine: {
              show: false,
            },
            data: data.pieData,
          },
          {
            itemStyle: {
              color: 'rgba(62,109,255,0.4)',
            },
            type: 'pie',
            hoverAnimation: false,
            radius: ['42%', '68%'],
            center: ['21.5%', '46%'],
            label: {
              show: false,
            },
            data: [{
              value: 1,
            }],
            z: -1,
          },
        ],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.pie-chart {
  position: absolute;
  top: 0px;
}
</style>
