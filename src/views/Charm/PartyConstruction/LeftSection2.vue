<template>
  <div class="left-section2">
    <Title title="党员缴纳情况" />
    <div class="section-content">
      <div ref="lineChart" style="height: 32rem; width: 100%"></div>
    </div>
  </div>
</template>
<script>
import Title from './components/Title';
import { partyFeeSituation } from '@/api/Charm/PartyConstruction';
import * as echarts from 'echarts/core';
import {
  BarChart,
} from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
  CanvasRenderer,
} from 'echarts/renderers';

// 注册必须的组件
echarts.use(
  [TitleComponent, LegendComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer],
);
export default {
  components: {
    Title,
  },
  data () {
    return {
      chart: null,
      chartOpt: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999',
            },
          },
        },
        grid: {
          left: '1%',
          right: '2%',
          top: '18%',
          bottom: 0,
          containLabel: true,
        },
        legend: {
          itemWidth: 18,
          itemHeight: 18,
          itemGap: 20,
          textStyle: {
            fontSize: 24,
          },
          data: [
            { name: '党费缴纳', itemStyle: { color: '#6FEFB1' }, textStyle: { color: '#6FEFB1' } },
            { name: '党费支出', itemStyle: { color: '#6EBCF7' }, textStyle: { color: '#6EBCF7' } },
          ],
          right: 0,
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow',
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(151, 151, 151, .7)',
              },
            },
            axisLabel: {
              fontSize: 22,
              color: 'rgba(255, 255, 255, .7)',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '金额(元)',
            nameGap: 20,
            nameTextStyle: {
              fontSize: 26,
              color: 'rgba(255, 255, 255, 0.5)',
            },
            axisLabel: {
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: 22,
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(151, 151, 151, .24)',
              },
            },
          },
        ],
        series: [
          {
            name: '党费缴纳',
            type: 'bar',
            barWidth: 21,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(111, 239, 177, 1)', // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(111, 239, 177, .1)', // 100% 处的颜色
                }],
                global: false, // 缺省为 false
              },
            },
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          },
          {
            name: '党费支出',
            type: 'bar',
            barWidth: 21,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(110, 188, 247, 1)', // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(110, 188, 247, .1)', // 100% 处的颜色
                }],
                global: false, // 缺省为 false
              },
            },
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          },
        ],
      },
    };
  },
  mounted () {
    this.lineChart = echarts.init(this.$refs.lineChart);
    this.lineChart.setOption(this.chartOpt);
    this.getData();
  },
  methods: {
    async getData () {
      const result = await partyFeeSituation().request();
      this.chartOpt.xAxis.data = result.map((i) => {
        return parseInt(i.yf.slice(-2)) + '月';
      });
      this.chartOpt.series[0].data = result.map((i) => i.dfjn);
      this.chartOpt.series[1].data = result.map((i) => i.dfzc);
      this.lineChart.setOption(this.chartOpt);
    },
  },
};
</script>
