<template>
  <div class="right-section3">
    <Title title="维权统计" />
    <div class="section-content">
      <ul class="loop-tab">
        <li
          :class="{'active': currentTab === item.name}"
          v-for="(item, index) in tabList"
          :key="index"
          @click="selectTab(item.name, index)">{{item.name}}</li>
      </ul>
      <div class="total-legend">
        维权总数 <span class="value">{{totalNum}}</span> 件
      </div>
      <div ref="lineChart" style="height: 30rem; width: 100%"></div>
    </div>
  </div>
</template>
<script>
import Title from './components/Title';
import { protectRights } from '@/api/Charm/PartyConstruction';
import { sumBy } from 'lodash';
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
  data() {
    return {
      chart: null,
      tabList: [
        { name: '工会' },
        { name: '妇联' },
        { name: '团委' },
      ],
      currentTab: '工会',
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
          left: '2%',
          right: '2%',
          top: '24%',
          bottom: 0,
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow',
            },
            axisTick: {
              alignWithLabel: true,
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
            name: '维权数/件',
            nameGap: 20,
            nameTextStyle: {
              fontSize: 22,
              color: 'rgba(255, 255, 255, 0.5)',
            },
            axisLabel: {
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: 21,
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
            label: {
              show: true,
              position: 'top',
              color: '#fff',
              fontSize: 22,
            },
            itemStyle: {
              // shadowColor: 'rgba(125, 249, 253, 1)',
              // shadowOffsetX: 4,
              // shadowBlur: 4,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(67, 111, 246, 1)', // 0% 处的颜色
                }, {
                  offset: 0.95, color: 'rgba(59, 93, 246, 0.51)', // 100% 处的颜色
                }, {
                  offset: 1, color: 'rgba(125, 249, 253, 1)', // 100% 处的颜色
                }],
                global: false, // 缺省为 false
              },
            },
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          },
        ],
      },
      totalNum: 0,
    };
  },
  mounted() {
    this.lineChart = echarts.init(this.$refs.lineChart);
    // this.lineChart.setOption(this.chartOpt);
    this.getData();
  },
  methods: {
    selectTab(name, index) {
      this.currentTab = name;
    },
    async getData() {
      const result = await protectRights().request();
      this.totalNum = sumBy(result, 'wqsl');
      this.chartOpt.xAxis[0].data = result.map((i) => i.jgmc);
      this.chartOpt.series[0].data = result.map((i) => i.wqsl);
      this.lineChart.setOption(this.chartOpt);
    },
  },
};
</script>
<style lang="scss" scoped>
.right-section3{
  .section-content{
    position: relative;
    .loop-tab{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 7rem;
      list-style: none;
      width: 100%;
      overflow-x: auto;
      padding: 0;
      margin: 1rem 0rem -2rem 0;
      &::-webkit-scrollbar
      {
          width:16px;
          height:16px;
          background-color:#413f3f;
      }
      /*定义滚动条轨道
      内阴影+圆角*/
      &::-webkit-scrollbar-track
      {
          -webkit-box-shadow:inset 0 0 6px rgba(20, 34, 49, 0.3);
          // border-radius:10px;
          background-color:#0d1f38;
      }
      /*定义滑块
      内阴影+圆角*/
      &::-webkit-scrollbar-thumb
      {
          // border-radius:10px;
          -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
          background-color:rgb(70, 70, 70);
      }
      li{
        font-size: 3.4rem;
        color: rgba(255, 255, 255, .3);
        padding: 0 3rem;
        cursor: pointer;
        width: 14rem;;
        text-align: center;
        &.active{
          color: white;
          background: url('~@/assets/images/Charm/tab-active.png') no-repeat center;
          background-size: 160%;
        }
      }
    }
    .total-legend{
      position: absolute;
      // top: 0;
      right: 1rem;
      font-size: 2.1rem;
      color: rgba(255,255 ,255, .7);
      .value{
        color: rgba(112, 146, 244, 1);
        font-size: 4.8rem;
      }
    }
  }
}

</style>
