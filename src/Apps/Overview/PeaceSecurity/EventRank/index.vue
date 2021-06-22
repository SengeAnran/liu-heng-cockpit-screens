<template>
  <div class="event-rank">
    <BaseTitle title="事件涉及行业排名" />
    <div class="bar-chart" ref="barChart"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
import { getIndustryRank } from '@/api/Overview/PeaceSecurity/api';
export default {
  name: 'Complaint',
  data() {
    return {
      barData: [
        {
          label: '黑龙江',
          value: 1.2,
        },
        {
          label: '山西',
          value: 0.9,
        },
        {
          label: '武汉',
          value: 0.8,
        },
        {
          label: '银川',
          value: 0.7,
        },
        {
          label: '西宁',
          value: 0.6,
        },
      ],
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
      getIndustryRank().request().then((json) => {
        this.barData = json.map((item) => {
          item.label = item.hymc;
          item.value = item.je;
          return item;
        });
        this.chart.setOption(this.optionData(this.barData));
        // console.log(json, '排名');
      });
    },
    optionData(data) {
      return {
        grid: {
          top: 15,
          left: 10,
          right: 210,
          bottom: 60,
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
          barWidth: 24,
          yAxisIndex: 0,
          label: {
            show: true,
            position: [10, -10],
            color: '#fff',
            fontSize: 22,
          },
          data: data.map((item, index) => {
            return {
              value: 0,
              label: {
                formatter() {
                  return item.label;
                },
              },
            };
          }),
        },
        {
          name: 'value',
          type: 'bar',
          barWidth: 18,
          barMinHeight: 20, // 最小高度
          yAxisIndex: 0,
          label: {
            show: true,
            position: 'right',
            color: '#fff',
            offset: [10, 0],
            formatter({ value }) {
              return `{c|''}{a|${value}} {b|亿元}`;
            },
            rich: {
              a: {
                padding: [0, 0, 0, 30],
                fontSize: 26,
                fontFamily: 'DIN Alternate',
              },
              b: {
                fontSize: 24,
              },
              c: {
                padding: [0, 0, 0, -15],
                width: 0,
                height: 18,
                align: 'left',
                backgroundColor: '#ff6ed',
              },
            },
          },
          data: data.map(({ value }, index) => {
            return {
              value,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: 'rgba(92, 111, 255, 0.1)',
                },
                {
                  offset: 1,
                  color: 'rgba(92, 111, 255, 1)',
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
.event-rank {
  position: absolute;
  left: 157px;
  top: 805px;
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
