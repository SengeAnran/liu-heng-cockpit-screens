<template>
  <div ref="chart" class="echart-bar" />
</template>
<script>
/**
 * @name 渐变柱形图
 * @param {Object} options 配置项
 * @param {Array} xAxisData x轴数据
 * @param {Array} yAxisData y轴系列1数据
 */
import { deepMerge } from '@/utils/object';
const defaultOptions = {
  xAxis: {
    type: 'value',
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
};
export default {
  props: {
    options: {
      type: Object,
      default: () => deepMerge({}, defaultOptions),
    },
    xAxisData: {
      type: Array,
      default: () => [8, 13, 27, 15, 3, 8],
    },
    yAxisData: {
      type: Array,
      default: () => ['0～16岁', '17～25岁', '26～40岁', '27～65岁', '65岁以上'],
    },
    bgColor: {
      type: Array,
      default: () => [
        { offset: 0, color: 'rgba(117, 248, 195, 1)' },
        { offset: 0.98, color: 'rgba(185, 251, 224, 1)' },
        { offset: 0.98, color: '#fff' },
        { offset: 1, color: '#fff' },
      ],
    },
    unit: {
      type: String,
      default: () => '人',
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.chart = this.$echarts.init(this.$refs.chart);
    this.updateOptions();
  },
  computed: {
    values() {
      const { options, xAxisData, yAxisData } = this;
      return { options, xAxisData, yAxisData };
    },
  },
  watch: {
    values: {
      deep: true,
      handler() {
        this.updateOptions();
      },
    },
  },
  methods: {
    updateOptions() {
      const mergedOptions = deepMerge({}, defaultOptions, this.options);
      const options = this.getOptions(mergedOptions, this.xAxisData, this.yAxisData, this.bgColor);
      this.chart.setOption(options);
    },
    getOptions(opts = {}, xData = [], yData = [], bgColor = []) {
      const seriesData = [];
      const _this = this;
      xData.map((item) => {
        seriesData.push(0);
      });
      return {
        xAxis: opts.xAxis,
        yAxis: {
          type: 'category',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 20,
            color: '#fff',
          },
          data: yData,
        },
        series: [
          {
            data: xData,
            type: 'bar',
            barWidth: 20,
            label: {
              show: true,
              position: 'right',
              fontSize: 20,
              color: '#fff',
              formatter: function (params) {
                return params.value + _this.unit;
              },
            },
            itemStyle: {
              color: _this.$echarts.graphic.LinearGradient(0, 0, 1, 0, bgColor),
            },
          },
        ],
      };
    },
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  },
};
</script>
