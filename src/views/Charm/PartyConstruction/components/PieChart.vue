<template>
  <div class="pie-chart-wrapper">
    <div class="pie-chart" ref="pieChart"></div>

    <div class="legend-wrap" v-if="type === 'sexAge' ">
      <div class="top-legend legend-block">
        <div class="legend-label">
          男性占比
        </div>
        <div class="legend-list">
          <p v-for="(item, index) in legendMale" :key="index">
            <span class="color-block" :style="{'background': sexAgeColor[item.index]}"></span>
            <span class="legend-text">{{item.label}}占比</span>
            <span class="legend-percent">{{item.percent}}</span>
          </p>
        </div>
      </div>

      <div class="bottom-legend legend-block">
        <div class="legend-label">
          女性占比
        </div>
        <div class="legend-list">
          <p v-for="(item, index) in legendFemale" :key="index">
            <span class="color-block" :style="{'background': sexAgeColor[item.index]}"></span>
            <span class="legend-text">{{item.label}}占比</span>
            <span class="legend-percent">{{item.percent}}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="legend-wrap" v-else>
      <div class="legend-list-education">
        <div v-for="(item, index) in formatEducation" :key="index" class="list-item">
          <span class="color-block" :style="{'background': educationColor[index]}"></span>
          <span class="legend-text">{{item.label}}占比</span>
          <span class="legend-percent">{{item.percent}}</span>
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

import { sumBy, round } from 'lodash';

// 注册必须的组件
echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, PieChart, CanvasRenderer],
);
export default {
  data() {
    return {
      chart: null,
      sexAgeColor: ['#fde8c2', '#f9dba6', '#f1c579', '#eab65d', '#c0f5f0', '#a9e4e2', '#7ad5d2', '#4cbfbb'],
      educationColor: ['#77ff5c', '#8680ef', '#357cff', '#4fb7f3', '#77ffff', '#ffe477', '#f1b348', '#f29477'],
      chartOpt: {
        tooltip: {
          trigger: 'item',
        },
        grid: {
          left: '16%',
          top: '2%',
        },
        color: ['#fde8c2', '#f9dba6', '#f1c579', '#eab65d', '#c0f5f0', '#a9e4e2', '#7ad5d2', '#4cbfbb'],
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
            silent: true,
          },
          {
            name: '性别',
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
            // silent: true,
          },
          {
            name: '性别年龄结构',
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
      formatSexAge: null,
      legendMale: [],
      legendFemale: [],
      formatEducation: null,
    };
  },
  props: ['type', 'sexAgeData', 'educationData'],
  mounted() {
    this.chart = echarts.init(this.$refs.pieChart);
    this.chart.setOption(this.chartOpt);
  },
  watch: {
    type: function (val, oldVal) {
      if (val === 'sexAge') {
        this.chartOpt.color = this.sexAgeColor;
        this.chartOpt.series[0].data[0].name = '性别年龄结构';
        this.chartOpt.series[2].name = '性别年龄结构';
        this.renderSexAgeData();
      } else {
        this.chartOpt.color = this.educationColor;
        this.chartOpt.series[0].data[0].name = '学历结构';
        this.chartOpt.series[2].name = '学历结构';
        this.chartOpt.series[1].data = [];
        if (this.formatEducation) {
          this.chartOpt.series[2].data = this.formatEducation.map((i) => {
            return {
              value: i.sum,
              name: i.xl,
            };
          });
        }
      }
      this.chart.setOption(this.chartOpt);
    },
    sexAgeData: {
      handler: function (val, oldVal) {
        if (val) {
          this.formatSexAge = val.map((item) => {
            const sumArray = item.data.map((item2) => {
              return {
                label: item2.nld,
                sex: item.sex,
                sum: item2.zsdyrs + item2.fzdyrs + item2.ybdyrs,
              };
            });
            return {
              sex: item.sex,
              sum: sumBy(sumArray, 'sum'),
              data: sumArray,
            };
          });
          this.renderSexAgeData();
          this.chart.setOption(this.chartOpt);
        }
      },
      deep: true,
    },
    educationData: {
      handler: function (val, oldVal) {
        if (val) {
          const tempSumData = val.map((i) => {
            return {
              label: i.xl,
              sum: i.fzdyrs + i.ybdyrs + i.zsdyrs,
            };
          });
          const total = sumBy(tempSumData, 'sum');
          this.formatEducation = tempSumData.map((i) => {
            return {
              ...i,
              percent: round(i.sum / total * 100, 2) + '%',
            };
          });
        }
      },
      deep: true,
    },
  },
  methods: {
    renderSexAgeData() {
      this.chartOpt.series[1].data = this.formatSexAge.map((item, index) => {
        return {
          value: item.sum,
          name: item.sex,
          itemStyle: { color: index === 0 ? '#E7A32A' : '#00A9A7' },
        };
      });
      this.chartOpt.series[2].data = this.formatSexAge[0].data.concat(this.formatSexAge[1].data).map((item) => {
        return {
          value: item.sum,
          name: item.sex + ' ' + item.label,
        };
      });
      const total = sumBy(this.formatSexAge, 'sum');
      this.legendMale = this.formatSexAge[0].data.map((i, index) => {
        return {
          ...i,
          percent: round(i.sum / total * 100, 2) + '%',
          index: index,
        };
      });
      this.legendFemale = this.formatSexAge[1].data.map((i, index) => {
        return {
          ...i,
          percent: round(i.sum / total * 100, 2) + '%',
          index: index + this.legendMale.length,
        };
      });
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
    padding-left: 3rem;
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
        font-size: 2.4rem;
        p{
          line-height: 1.6;
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
      margin-bottom: 2rem;
    }
    .legend-list-education{
      display: flex;
      flex-direction: column;
      color: #FFFEFE;
      font-size: 2.8rem;
      margin-top: 1.2rem;
      .list-item{
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
  }
}
</style>
