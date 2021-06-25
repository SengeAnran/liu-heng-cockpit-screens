<template>
  <view-template class="flow-rank">
    <BaseTitle title="户籍人口排名" />
    <div class="bar-chart" ref="barChart"></div>
  </view-template>
</template>

<script>
import * as echarts from 'echarts';
import { getPopIn, getPopOut } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'FlowRank',
  data() {
    return {
      barData: [],
    };
  },
  components: {
  },
  mounted() {
    this.chart = echarts.init(this.$refs.barChart);
    this.loadData();
  },
  methods: {
    loadData() {
      if (this.activeIndex === 0) {
        getPopIn().request().then((json) => {
          this.barData = this.resolveData(json);
          this.chart.setOption(this.optionData(this.barData));
        });
      } else {
        getPopOut().request().then((json) => {
          this.barData = this.resolveData(json);
          this.chart.setOption(this.optionData(this.barData));
        });
      }
    },
    resolveData(data) {
      return data.map((item) => {
        item.label = item.sf;
        item.value = +item.rs;
        return item;
      });
    },
    optionData(data) {
      const colors = [['#f8f375', '#ffa340'], ['#75f8c3', '#befbe3']];
      return {
        grid: {
          top: 70,
          left: 33,
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
        series: [{
          name: 'label',
          type: 'bar',
          barWidth: 20,
          yAxisIndex: 0,
          label: {
            show: true,
            position: [10, -10],
            color: '#fff',
            fontSize: 24,
          },
          data: data.map((item, index) => {
            return {
              value: 0,
              label: {
                formatter() {
                  return `${index + 1}. ${item.label}`;
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
            offset: [10, 0],
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
            const color = index < 2 ? colors[0] : colors[1];
            return {
              value,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: color[0],
                },
                {
                  offset: 1,
                  color: color[1],
                }]),
              },
            };
          }),
        }],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.flow-rank {
  position: absolute;
  left: 1008px;
  top: 262px;
  width: 835px;
  height: 1050px;
  .bar-chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 980px;
  }
}
</style>
