<template>
  <div class="IndustryField">
    <div class="sub-title">申报产业领域 Top{{ barData.length }}</div>
    <div class="bar-chart" ref="barChart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getIndustrialField } from '@/api/Overview/Innovation/api';
export default {
  data() {
    return {
      chart: null,
      barData: [],
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.barChart);
    this.loadData();
  },
  methods: {
    loadData() {
      getIndustrialField()
        .request()
        .then((json) => {
          json.map((item) => {
            item.name = item.cylymc;
            item.value = item.sl;
          });
          this.barData = json;
          this.chart.setOption(this.optionData(this.barData));
        });
    },
    optionData(data) {
      return {
        grid: [
          {
            width: '100%',
            left: '0%',
            top: '2%',
            right: '0%',
            bottom: '0',
          },
        ],
        xAxis: [
          {
            gridIndex: 0,
            show: false,
          },
        ],
        yAxis: [
          {
            gridIndex: 0,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              align: 'left',
              padding: [0, 0, 15, 15],
              textStyle: {
                color: '#FFFFFF',
                fontSize: '24',
              },
            },
            data: this.barData.map((item, index) => 'Top' + (index + 1) + ' ' + item.name),
            inverse: true,
          },
          {
            gridIndex: 0,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              padding: [0, 0, 0, -100],
              textStyle: {
                color: '#fff',
                fontSize: '24',
              },
              formatter: function (value) {
                return value + '%';
              },
            },
            data: this.barData.map((item) => item.value),
            inverse: true,
          },
        ],
        series: [
          {
            name: '外框',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barGap: '-100%',
            data: new Array(10).fill(this.barData[0].value * 1.05),
            barWidth: 26,
            itemStyle: {
              normal: {
                color: 'rgba(158, 158, 158, .1)',
              },
            },
            z: 0,
          },
          {
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: this.barData.map((item) => item.value),
            barWidth: 26,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  ['rgba(92, 111, 255, .01)', 'rgba(92, 111, 255, .9)'].map((color, offset) => ({
                    color,
                    offset,
                  })),
                ),
              },
            },
            z: 2,
          },
          {
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  1,
                  1,
                  ['rgba(255, 255, 255, .01)', 'rgba(255, 255, 255, .8)'].map((color, offset) => ({
                    color,
                    offset,
                  })),
                ),
              },
            },
            symbol: 'rect',
            symbolSize: [16, 26],
            z: 12,
            data: this.barData.map((item) => {
              return {
                value: item.value,
                symbolPosition: 'end',
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
.IndustryField {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.sub-title {
  font-size: 24px;
  line-height: 24px;
  min-height: 24px;
  color: #fff;
  margin-bottom: 25px;
}
.bar-chart {
  flex: 1;
}
</style>
