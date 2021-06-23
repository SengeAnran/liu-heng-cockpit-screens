<template>
  <div ref="pieChart"></div>
</template>

<script>
import * as echarts from 'echarts/lib/echarts';

export default {
  props: {
    list: {
      type: Array,
      default: () => [
        { name: '大型企业', value: 12 },
        { name: '中型企业', value: 25 },
        { name: '小型企业', value: 123 },
        { name: '微型企业', value: 98 },
      ],
    },
    color: {
      type: Array,
      default: () => ['#6182AE', '#66CCFF', '#31EABC', '#EDC063'],
    },
    title: {
      type: String,
      default: '企业类型\n分布',
    },
    center: {
      type: Array,
      default: () => ['26%', 'center'],
    },
    isPercent: {
      type: Boolean,
      default: true,
    },
    unit: {
      type: String,
      default: '万元',
    },
    itemGap: {
      type: Number,
      default: 20,
    },
  },
  watch: {
    list: {
      handler: function (val) {
        if (typeof val === typeof []) {
          this.initChart();
        }
      },
      immediate: false,
      deep: true,
    },
  },
  data() {
    return {};
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.pieChart);
      this.chart.setOption(this.getOptions());
    },
    getOptions() {
      return {
        color: this.color,
        legend: {
          icon: 'circle',
          itemWidth: 21,
          itemHeight: 21,
          itemGap: this.itemGap,
          left: '54%',
          top: 'center',
          orient: 'vertical',
          textStyle: {
            color: '#fff',
            padding: [0, 0, 0, 8],
            rich: {
              name: {
                fontSize: 24,
                fontFamily: 'Source Han Sans CN',
                fontWeight: 400,
                color: '#FFFEFE',
                width: 140,
              },
              value: {
                fontSize: 24,
                fontFamily: 'Source Han Sans CN',
                fontWeight: 400,
                color: '#FFFEFE',
                width: 70,
                align: 'right',
              },
              percent: {
                fontSize: 24,
                fontFamily: 'DINPro',
                fontWeight: 400,
                color: '#fff',
                width: 110,
                align: 'right',
              },
            },
          },
          formatter: (name) => {
            const item = this.list.find((d) => d.name === name);
            if (this.isPercent) {
              return [`{name|${name}}`, `         {percent|${item.percent}}`].join('');
            } else {
              return [`{name|${name}}`, `         {percent|${item.value}${this.unit}}`].join('');
            }
          },
        },
        series: [
          {
            type: 'pie',
            radius: ['44%', '58%'],
            center: this.center,
            label: {
              position: 'center',
              formatter: this.title,
              color: '#fff',
              fontSize: 34,
              lineHeight: 46,
              verticalAlign: 'bottom',
              fontFamily: 'Oswald',
              fontWeight: 'bold',
            },
            data: this.list,
          },
          {
            type: 'pie',
            center: this.center,
            radius: ['39%', '64%'],
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
                    color: '#3551A45c',
                  },
                  {
                    offset: 0.5,
                    color: '#3D8EC45c',
                  },
                  {
                    offset: 1,
                    color: '#5ECDB05c',
                  },
                ],
                global: false,
              },
            },
            scale: false,
            label: {
              show: false,
            },
            data: [1],
            z: -1,
          },
        ],
      };
    },
  },
};
</script>
