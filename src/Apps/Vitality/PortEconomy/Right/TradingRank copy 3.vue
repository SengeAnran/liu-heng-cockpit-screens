<template>
  <div class="bar-chart" ref="barChart"></div>
</template>

<script>
import * as echarts from 'echarts';
import { tradeVolumeOfMajorCitiesRanked } from '@/api/Vitality/PortEconomy/api';
export default {
  data() {
    return {
      chart: null,
      chartList: [],
      color: ['rgba(92, 111, 255, .1)', 'rgba(92, 111, 255, 1)'],
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.barChart);
    tradeVolumeOfMajorCitiesRanked()
      .request()
      .then((json) => {
        console.log(json);
        const total = json.map((item) => item.mye).reduce((m, n) => m + n);
        json.map((item) => {
          item.label = item.csmc;
          item.value = item.mye;
          item.percent = ((item.mye / total) * 100).toFixed(2);
        });
        this.barData = json;
        this.chart.setOption(this.optionData(this.barData));
      });
  },
  methods: {
    optionData(data) {
      return {
        grid: {
          top: 0,
          left: 0,
          right: 150,
          bottom: 15,
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          show: false,
        },
        yAxis: {
          show: true,
          inverse: true,
          type: 'category',
          axisLine: {
            show: false,
          },
        },
        series: [
          {
            name: 'label',
            type: 'bar',
            barWidth: 20,
            yAxisIndex: 0,
            label: {
              show: true,
              position: [0, 0],
              color: '#fff',
              fontSize: 24,
            },
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
            data: data.map((item, index) => {
              return {
                value: 0,
                label: {
                  formatter() {
                    return `Top${index + 1} ${item.label}`;
                  },
                },
              };
            }),
          },
          {
            name: 'value',
            type: 'bar',
            barWidth: 24,
            barMinHeight: 20, // 最小高度
            yAxisIndex: 0,
            label: {
              show: true,
              position: 'right',
              color: '#fff',
              offset: [0, 0],
              formatter({ value }) {
                return `{c|''}{a|${value}} {b|万人}`;
              },
              rich: {
                a: {
                  padding: [0, 0, 0, 50],
                  fontSize: 40,
                  fontFamily: 'DIN Alternate',
                },
                b: {
                  fontSize: 24,
                },
                c: {
                  padding: [0, 0, 0, -15],
                  width: 0,
                  height: 24,
                  align: 'left',
                  backgroundColor: '#ff6ed',
                },
              },
            },
            data: data.map(({ value }, index) => {
              return {
                value,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: this.color[0],
                    },
                    {
                      offset: 1,
                      color: this.color[1],
                    },
                  ]),
                },
              };
            }),
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.bar-chart {
  flex: 1;
}
</style>
