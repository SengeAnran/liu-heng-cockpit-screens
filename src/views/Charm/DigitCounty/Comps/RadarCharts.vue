<template>
  <div ref="chart" class="echart-bar" />
</template>
<script>
/**
 * @name 雷达图
 */
export default {
  props: {
    indicatorData: {
      type: Array,
      default: () => [
        { name: '耕地', value: 4200, unit: 'km²', max: 6500 },
        { name: '林地', value: 3000, unit: 'km²', max: 16000 },
        { name: '建设用地', value: 20000, unit: 'km²', max: 30000 },
        { name: '水域', value: 35000, unit: 'km²', max: 38000 },
        { name: '其他农用地', value: 50000, unit: 'km²', max: 52000 },
      ],
    },
    dataList: {
      type: Array,
      default: () => [4200, 3000, 20000, 35000, 50000],
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
      const { indicatorData, dataList } = this;
      return { indicatorData, dataList };
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
      const _this = this;
      const options = {
        radar: {
          shape: 'circle',
          splitArea: {
            areaStyle: {
              color: ['rgba(132, 161, 193, .2)'],
              shadowBlur: 100,
            },
          },
          indicator: _this.indicatorData,
          radius: 120,
          name: {
            textStyle: {
              color: 'rgba(199, 228, 233, 1)',
              fontSize: 25,
            },
            formatter: function (value, item) {
              return item.value + item.unit + '\n' + value;
            },
          },
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                value: _this.dataList,
                name: '乡村规划',
              },
            ],
            areaStyle: {
              color: 'rgba(130, 226, 228, .5)',
            },
          },
        ],
      };
      this.chart.setOption(options);
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
