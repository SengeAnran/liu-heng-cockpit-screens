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
          <div ref="lineChart" style="width: 100%;height: 45rem;"></div>
        </div>
      </div>

      <div class="right-area">
        <ul class="tab-bar">
          <li :class="{'active': currentTab === 'sexAge'}" @click="selectTab('sexAge')">性别年龄结构</li>
          <li :class="{'active': currentTab === 'education'}" @click="selectTab('education')">学历结构</li>
        </ul>

        <div class="pie-chart-wrap">
          <PieChart :type="currentTab" :sexAgeData="sexAgeData" :educationData="educationData" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from './components/Title';
import PieChart from './components/PieChart';
import * as echarts from 'echarts/core';
import {
  getPartyMemberBasicSit,
  getQuantityTrend,
  getSexAndAgeStructure,
  getPartyGroupEduStructure,
  peopleBasicInfo,
} from '@/api/Charm/PartyConstruction';
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
import { sort } from '@/utils/common';
// 注册必须的组件
echarts.use(
  [TitleComponent, LegendComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer],
);
export default {
  components: {
    Title,
    PieChart,
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
          label: '预备党员',
          value: 275,
          unit: '人',
        },
        {
          label: '发展党员',
          value: 275,
          unit: '人',
        },
      ],
      sexAgeData: null,
      educationData: null,
      currentTab: 'sexAge',
      lineChart: null,
      chartOpt: {
        tooltip: {
          trigger: 'axis',
        },
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
    this.lineChart = echarts.init(this.$refs.lineChart);
    this.lineChart.setOption(this.chartOpt);
    this.getData();
  },
  beforeDestroy() {
    this.lineChart && this.lineChart.dispose();
  },
  methods: {
    selectTab(val) {
      this.currentTab = val;
    },
    async getData() {
      const data = {
        auth: {
          serviceId: '09a3fe0aa4634c608b9c103b053480d3', // 数据开放服务Id
          subServiceId: '1f73865f63b84465934ee1c71fa83916', // 数据开放订阅服务Id
          // signature: localStorage.autograph, // 请求参数签名
          signatureVersion: '2.0', // 当前使用的签名版本
          timestamp: new Date().getTime(), // 请求的时间戳
        }, // 认证参数
        size: 100,
        includeColumns: false,
        params: [],
      };
      const data2 = {
        auth: {
          serviceId: '01f02290599d4d3b97bb76ae6a000f9e', // 数据开放服务Id
          subServiceId: '43a43c2d3fbd45d1bf97016c7d43d776', // 数据开放订阅服务Id
          // signature: localStorage.autograph, // 请求参数签名
          signatureVersion: '2.0', // 当前使用的签名版本
          timestamp: new Date().getTime(), // 请求的时间戳
        }, // 认证参数
        size: 100,
        includeColumns: false,
        params: [],
      };
      const data3 = {
        auth: {
          serviceId: '3527aac315134f5c98b4224022e08d41', // 数据开放服务Id
          subServiceId: 'c2efcab4c2af4b5097ec1d497cc18a5f', // 数据开放订阅服务Id
          // signature: localStorage.autograph, // 请求参数签名
          signatureVersion: '2.0', // 当前使用的签名版本
          timestamp: new Date().getTime(), // 请求的时间戳
        }, // 认证参数
        size: 100,
        includeColumns: false,
        params: [],
      };
      const data4 = {
        auth: {
          serviceId: 'b9d383418e0b4f71856311ef2914f45a', // 数据开放服务Id
          subServiceId: 'b8b5f9ee37e847c3ae5d32f22fcf2433', // 数据开放订阅服务Id
          // signature: localStorage.autograph, // 请求参数签名
          signatureVersion: '2.0', // 当前使用的签名版本
          timestamp: new Date().getTime(), // 请求的时间戳
        }, // 认证参数
        size: 100,
        includeColumns: false,
        params: [],
      };
      const res = await getPartyMemberBasicSit(data);
      const res2 = await getQuantityTrend(data2);
      const res3 = await getSexAndAgeStructure(data3);
      const res4 = await getPartyGroupEduStructure(data4);
      console.log(res3, res4);
      const result = await peopleBasicInfo().request();

      if (res) {
        const { education, sexAndAge } = result;
        this.indiData[0].value = res.list[0].zsdyrs;
        this.indiData[1].value = res.list[0].ybdyrs;
        this.indiData[2].value = res.list[0].fzdyrs;

        this.sexAgeData = sexAndAge;
        this.educationData = education;
      }
      if (res2) {
        const renderList = sort(res2.list, 'nf');
        this.renderChartData(renderList);
      }
    },
    renderChartData(data) {
      this.chartOpt.xAxis.data = data.map((i) => i.nf);
      const fzdyByYear = data.map((i) => i.fzdyrs);
      const ybdyByYear = data.map((i) => i.ybdyrs);
      const zsdyByYear = data.map((i) => i.zsdyrs);
      this.chartOpt.series[0].data = fzdyByYear;
      this.chartOpt.series[1].data = ybdyByYear;
      this.chartOpt.series[2].data = zsdyByYear;
      this.lineChart.setOption(this.chartOpt);
    },
  },
};
</script>
<style lang="scss" scoped>
.left-section1{
  // height: 85rem;
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
        margin-top: 6rem;
        height: 33rem;
        padding-left: 3rem;
        .party-icon{
          display: inline-block;
          width: 12rem;
          text-align: center;
          p{
            background-image: -webkit-linear-gradient(bottom, #4ECDD8, white);
            font-size: 2.4rem;
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
              font-size: 5.6rem;
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
            }
            .unit{
              font-size: 2.4rem;
              color: #fff;
            }
            .bottom-text{
              font-size: 2.4rem;
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
      height: 80rem;
      .tab-bar{
        margin-top: 2rem;
        height: 6rem;
        list-style: none;
        display: flex;
        align-items: center;
        li{
          height: 6rem;
          cursor: pointer;
          font-size: 3.4rem;
          padding: 0 3rem;
          color: #fff;
          margin-right: 2rem;
          &.active{
            background: url('~@/assets/images/Charm/tab-active.png') no-repeat center;
            background-size: 130% 100%;
          }
        }
      }
    }
  }
}
</style>
