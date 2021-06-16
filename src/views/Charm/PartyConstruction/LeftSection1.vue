<template>
  <div class="left-section1">
    <Title title="党员基本情况" />
    <div class="section-content">
      <div class="left-area">
        <div class="top-indi">
          <div class="party-icon">
            <img src="@/assets/images/Charm/party-icon.png">
            <p>基本情况</p>
          </div>
          <div class="indi-wrapper">
            <div class="indi-item" v-for="(item, index) in indiData" :key="index">
              <a class="vertical-line" v-show="index !== 0"></a>
              <p class="top-text">
                <span class="value">{{item.value}}</span>
                <span class="unit">{{item.unit}}</span>
              </p>
              <p class="bottom-text">{{item.label}}</p>

            </div>
          </div>
        </div>

        <div class="bottom-chart">
          <div ref="lineChart" style="width: 100%;height: 26rem;"></div>
        </div>
      </div>

      <div class="right-area">
        <ul class="tab-bar">
          <li>性别年龄结构</li>
          <li>学历结构</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Title from './components/Title';
import * as echarts from 'echarts/core';
import {
  LineChart,
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
  [TitleComponent, LegendComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer],
);
export default {
  components: {
    Title,
  },
  data() {
    return {
      indiData: [
        {
          label: '正式党员',
          value: 275,
          unit: '人',
        },
        {
          label: '正式党员',
          value: 275,
          unit: '人',
        },
        {
          label: '正式党员',
          value: 275,
          unit: '人',
        },
      ],
      chart: null,
      chartOpt: {
        tooltip: {},
        color: ['#87E086', '#B07EF7', '#6B8CE6'],
        grid: {
          left: '9%',
          right: '4%',
        },
        legend: {
          icon: 'rect',
          itemWidth: 18,
          itemHeight: 18,
          right: 0,
          top: 10,
          textStyle: {
            fontSize: 24,
          },
          data: [{
            name: '发展党员',
            textStyle: {
              color: '#87E086',
            },
          }, {
            name: '预备党员',
            textStyle: {
              color: '#B07EF7',
            },
          }, {
            name: '正式党员',
            textStyle: {
              color: '#6B8CE6',
            },
          }],
        },
        xAxis: {
          data: ['2015', '2016', '2017', '2018', '2019', '2020'],
          axisLine: {
            lineStyle: {
              color: 'rgba(151, 151, 151, .7)',
            },
          },
          axisLabel: {
            fontSize: 22,
            color: 'rgba(255, 255, 255, .7)',
          },
          axisTick: {
            alignWithLabel: true,
            color: 'rgba(255, 255, 255, .7)',
          },
        },
        yAxis: {
          name: '人数趋势(人)',
          nameGap: 22,
          nameTextStyle: {
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.7)',
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
        series: [{
          name: '发展党员',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20],
        }, {
          name: '预备党员',
          type: 'line',
          data: [20, 36, 10, 10, 20, 5],
        }, {
          name: '正式党员',
          type: 'line',
          data: [10, 10, 20, 5, 20, 36],
        }],
      },
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.lineChart);
    this.chart.setOption(this.chartOpt);
  },
  beforeDestroy() {
    this.chart && this.chart.dispose();
  },
};
</script>
<style lang="scss" scoped>
.left-section1{
  p{
    margin: 0;
  }
  .section-content{
    display: flex;
    justify-content: space-between;
    .left-area{
      width: 49%;
      .top-indi{
        background: linear-gradient(90deg,rgba(129, 157, 186, .06) 100%, rgba(129, 157, 186, 0) 0%);
        display: flex;
        align-items: center;
        margin-top: 3rem;
        .party-icon{
          display: inline-block;
          width: 10rem;
          text-align: center;
          p{
            background-image: -webkit-linear-gradient(bottom, #4ECDD8, white);
            font-size: 2.2rem;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }
        }
        .indi-wrapper{
          .indi-item{
            display: inline-block;
            text-align: center;
            width: 22rem;
            position: relative;
            .value{
              background-image: -webkit-linear-gradient(bottom, #4ECDD8, white);
              font-size: 4.8rem;
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
            }
            .unit{
              font-size: 2.2rem;
              color: #fff;
            }
            .bottom-text{
              font-size: 2.2rem;
              color: rgba(255, 255, 255, .5);
            }
            .vertical-line{
              display: inline-block;
              position: absolute;
              left: 0;
              top: 2.4rem;
              width: .1rem;
              background: #fff;
              height: 5.6rem;
            }
          }

        }
      }
      .bottom-chart{
        margin-top: 1.6rem;
      }
    }
    .right-area{
      width: 49%;
    }
  }
}
</style>
