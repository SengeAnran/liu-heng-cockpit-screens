<template>
  <div class="pie-chart-wrapper">
    <div class="pie-chart" ref="pieChart"></div>

    <div class="legend-wrap">
      <div class="top-legend legend-block">
        <div class="legend-label">
          男性占比
        </div>
        <div class="legend-list">
          <p>
            <span class="color-block" style="background: #FAECBE"></span>
            <span class="legend-text">17-26岁占比</span>
            <span class="legend-percent">17%</span>
          </p>
          <p>
            <span class="color-block"></span>
            <span class="legend-text">17-26岁占比</span>
            <span class="legend-percent">17%</span>
          </p>
          <p>
            <span class="color-block"></span>
            <span class="legend-text">17-26岁占比</span>
            <span class="legend-percent">17%</span>
          </p>
        </div>
      </div>

      <div class="bottom-legend legend-block">
        <div class="legend-label">
          女性占比
        </div>
        <div class="legend-list">
          <p>
            <span class="color-block" style="background: #FAECBE"></span>
            <span class="legend-text">17-26岁占比</span>
            <span class="legend-percent">17%</span>
          </p>
          <p>
            <span class="color-block"></span>
            <span class="legend-text">17-26岁占比</span>
            <span class="legend-percent">17%</span>
          </p>
          <p>
            <span class="color-block"></span>
            <span class="legend-text">17-26岁占比</span>
            <span class="legend-percent">17%</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts/core';
import {
  PieChart,
} from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
  CanvasRenderer,
} from 'echarts/renderers';

// 注册必须的组件
echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, PieChart, CanvasRenderer],
);
export default {
  data() {
    return {
      chart: null,
      chartOpt: {
        tooltip: {
          trigger: 'item',
        },
        grid: {
          left: '16%',
          top: '2%',
        },
        color: ['#FAECBE', '#FFE58F', '#FFC53D', '#BDF5EF', '#87E8DE', '#36CFC9'],
        series: [
          {
            name: 'series1',
            type: 'pie',
            radius: ['44%', '45%'],
            label: {
              position: 'center',
              color: '#fff',
              fontSize: 24,
            },
            data: [
              { value: 1000, name: '性别年龄结构', itemStyle: { color: 'transparent' } },
            ],
          },
          {
            name: '访问来源2',
            type: 'pie',
            radius: ['45%', '60%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1000, name: '搜索引擎', itemStyle: { color: '#E7A32A' } },
              { value: 1000, name: '直接访问', itemStyle: { color: '#00A9A7' } },
            ],
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['60%', '88%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1000, name: '搜索引擎' },
              { value: 500, name: '直接访问' },
              { value: 500, name: '邮件营销' },
              { value: 500, name: '联盟广告' },
              { value: 500, name: '视频广告' },
              { value: 1000, name: '视频广告1' },
            ],
          },
        ],
      },
    };
  },
  props: ['type'],
  mounted() {
    this.chart = echarts.init(this.$refs.pieChart);
    this.chart.setOption(this.chartOpt);
  },
  watch: {
    type: function (val, oldVal) {
      console.log('watch val:', val);
      if (val === 'sexAge') {
        this.chartOpt.series[0].data[0].name = '性别年龄结构';
      } else {
        this.chartOpt.series[0].data[0].name = '学历结构';
      }
      this.chart.setOption(this.chartOpt);
    },
  },
};
</script>
<style lang="scss" scoped>
.pie-chart-wrapper{
  display: flex;
  p{
    margin: 0;
  }
  .pie-chart{
    margin-left: 6rem;
    width: 33rem;
    height: 33rem;
  }
  .legend-wrap{
    padding-left: 5rem;
    .legend-block{
      display: flex;
      .legend-label{
        line-height: 1.3;
        width: 3rem;
        font-size: 2.8rem;
        color: #FFFEFE;
      }
      .legend-list{
        margin-left: 3rem;
        color: #FFFEFE;
        font-size: 2.8rem;
        p{
          line-height: 1.7;
        }
        .color-block{
          display: inline-block;
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
        }
        .legend-text{
          margin: 0 3rem;
        }
      }
    }
    .top-legend{
      margin-bottom: 3rem;
    }
  }
}
</style>
