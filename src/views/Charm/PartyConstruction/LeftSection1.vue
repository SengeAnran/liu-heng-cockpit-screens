<template>
  <div class="left-section1">
    <Title title="党员基本情况" />
    <div class="section-content">
      <div class="left-area">
        <div class="top-indi">
          <div class="party-icon">
            <img src="@/assets/images/Charm/party-icon.png" />
            <p>基本情况</p>
          </div>
          <div class="indi-wrapper">
            <div class="indi-item" v-for="(item, index) in indiData" :key="index">
              <a class="vertical-line" v-show="index !== 0"></a>
              <p class="top-text">
                <digital
                  :loop="loop"
                  :endNum="item.value || 0"
                  :data="data"
                  :config="index == 0 ? config : index == 1 ? config1 : index == 2 ? config2 : ''"
                ></digital>
              </p>
              <p class="bottom-text">{{ item.label }}</p>
            </div>
          </div>
        </div>

        <div class="bottom-chart">
          <div ref="lineChart" :style="{ width: '100%', height: '50%' }"></div>
          <div class="zhanbi">
            <div>
              男性占比
              <span class="nanxing">66%</span>
            </div>
            <div style="margin-right: 100px">
              <span class="nvxing">34%</span>
              女性占比
            </div>
          </div>
        </div>
        <div class="dangyuanchart">
          <div class="title">党员行业分布</div>
          <div ref="echartsPie" :style="{ width: '100%', height: '400px' }"></div>
        </div>
      </div>
      <div :style="{ width: '49%', height: '90rem', marginTop: '6rem' }">
        <div ref="hengEcharts" :style="{ width: '100%', height: '100%' }"></div>
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

// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent } from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
import { sort } from '@/utils/common';
// 注册必须的组件
echarts.use([TitleComponent, LegendComponent, TooltipComponent, GridComponent, CanvasRenderer]);

export default {
  components: {
    Title,
    PieChart,
  },
  data() {
    return {
      data: {
        content: 1000,
        unit: '人',
      },
      loop: {
        // 是否开启数值循环
        loop1: true,
        // 多久循环一次
        time: 10000,
        // 循环几次
        count: 99999,
        // 精确的小数位数
        decimals: 0,
        // 是否开启四舍五入 类型(0是不做什么取值操作,1去掉小数部分,2.向上取整,3.下取整,4.四舍五入)
        round: 1,
        decimal: '.',
        // 整数 分割器
        separator: ',',
      },
      config: {
        content: {
          fontSize: '6rem',
          fontFamily: 'DINPro',
          color: '#6AD1F7',
        },
        unit: { fontSize: '2rem' },
      },
      config1: {
        content: {
          fontSize: '6rem',
          fontFamily: 'DINPro',
          color: '#47D6AA',
        },
        unit: { fontSize: '2rem' },
      },
      config2: {
        content: {
          fontSize: '6rem',
          fontFamily: 'DINPro',
          color: '#DF7B7A',
        },
        unit: { fontSize: '2rem' },
      },
      indiData: [
        {
          label: '正式党员',
          value: 0,
          unit: '人',
        },
        {
          label: '预备党员',
          value: 0,
          unit: '人',
        },
        {
          label: '发展党员',
          value: 0,
          unit: '人',
        },
      ],
      sexAgeData: null,
      educationData: null,
      currentTab: 'sexAge',
      lineChart: null,
      pieChart: null,
      hengcharts: null,
    };
  },
  mounted() {
    this.getData();
    this.initdram();
    this.initPie();
    this.inithengecharts();
  },
  beforeDestroy() {
    this.lineChart && this.lineChart.dispose();
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
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
      // const res = await getPartyMemberBasicSit(data);
      const res = await peopleBasicInfo().request();
      const res2 = await getQuantityTrend(data2);
      // const res3 = await getSexAndAgeStructure(data3);
      const res4 = await getPartyGroupEduStructure(data4);
      console.log(res4, res, res2, 'json');
      const ageSexData = [];
      // ageSexData.push(this.SexAge(res3.list, '男'));
      // ageSexData.push(this.SexAge(res3.list, '女'));

      this.indiData[0].value = res.list[0].zsdyrs;
      this.indiData[1].value = res.list[0].ybdyrs;
      // this.indiData[2].value = res.list[0].fzdyrs;
      this.sexAgeData = ageSexData;
      console.log(res4.list.sort(this.SortBai));
      this.educationData = res4.list;
    },
    SortBai(a, b) {
      return a.zsdyrs - b.zsdyrs;
    },
    SexAge(arr, str) {
      const SexData = arr.filter((item) => {
        return item.xb === str;
      });
      const obj = {
        data: SexData,
        sex: str,
      };
      return obj;
    },
    initdram() {
      this.lineChart = echarts.init(this.$refs.lineChart);
      var labelRight = {
        position: 'right',
      };
      const option = {
        baseOption: {
          timeline: {
            show: false,
            top: 0,
            data: [],
          },
          grid: [
            // 左边柱子
            {
              show: false,
              left: '10',
              top: '10%',
              bottom: '0',
              containLabel: true,
              width: '40%',
            },
            // 中间年龄
            {
              show: false,
              left: '51%',
              top: '10%',
              bottom: '2.5%',
              width: '0%',
            },
            // 右边柱子
            {
              show: false,
              right: '10',
              top: '10%',
              bottom: '0',
              containLabel: true,
              width: '40%',
            },
          ],
          xAxis: [
            {
              type: 'value',
              inverse: true,
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: true,
                color: '#08093f',
              },
              splitLine: {
                show: false,
              },
            },
            {
              gridIndex: 1,
              show: false,
            },
            {
              gridIndex: 2,
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: true,
                color: '#08093f',
              },
              splitLine: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              type: 'category',
              inverse: true,
              position: 'right',
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              data: ['男女占比'],
            },
            {
              gridIndex: 1,
              type: 'category',
              inverse: true,
              position: 'center',
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: true,
                textStyle: {
                  align: 'center',
                  color: '#9AA6E1',
                  fontSize: 15,
                },
              },
              data: ['男女占比'],
            },
            {
              gridIndex: 2,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              data: ['男女占比'],
            },
          ],
          series: [],
        },
        options: [
          {
            series: [
              {
                name: '2017',
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                barWidth: 10,
                itemStyle: {
                  normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: '#3BE6FF',
                      },
                      {
                        offset: 1,
                        color: '#395E90',
                      },
                    ]),
                  },
                },
                label: {
                  normal: {
                    show: true,
                    formatter: (series) => {
                      return series.data + '人';
                    },
                    position: 'insideTopLeft',
                    textStyle: {
                      color: '#ffffff',
                      fontSize: 12,
                    },
                    offset: [0, -25],
                  },
                },
                data: [2560],
              },
              {
                name: '女性',
                type: 'bar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                barWidth: 10,
                itemStyle: {
                  normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: '#EE95C5',
                      },
                      {
                        offset: 1,
                        color: '#95438E',
                      },
                    ]),
                  },
                },
                label: {
                  normal: {
                    show: true,
                    formatter: (series) => {
                      return series.data + '人';
                    },
                    position: 'insideTopRight',
                    textStyle: {
                      color: '#ffffff',
                      fontSize: 12,
                    },
                    offset: [0, -25],
                  },
                },
                data: [1098],
              },
            ],
          },
        ],
      };
      this.lineChart.setOption(option);
    },
    // 加载饼图
    initPie() {
      this.pieChart = echarts.init(this.$refs.echartsPie);
      const option = {
        tooltip: {
          trigger: 'item',
        },
        color: ['#6182AE', '#55CC7C', '#015EEA', '#F772D1'],
        legend: {
          top: '5%',
          right: '0%',
          orient: 'vertical',
          // eslint-disable-next-line no-dupe-keys
          top: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 29,
          },
        },
        series: [
          {
            name: '行业类型分布',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            //  机关事业单位：251人   农村党员：2808    退休党员：174人       非公党员：162人       其他：233人
            data: [
              { value: 251, name: ' 机关事业单位' },
              { value: 2808, name: ' 农村党员' },
              { value: 174, name: '退休党员' },
              { value: 168, name: ' 非公党员' },
              { value: 233, name: '  其他' },
            ],
            label: {
              normal: {
                show: true,
                position: 'center',
                color: '#9A9EBA',
                formatter: '行业类\n型分布',
                fontSize: 34,
              },
              emphasis: {
                show: true,
              },
            },
          },
        ],
      };

      this.pieChart.setOption(option);
    },
    // 加载横向柱状图
    inithengecharts() {
      this.hengcharts = echarts.init(this.$refs.hengEcharts);
      var charts = {
        // 按顺序排列从大到小
        cityList: ['初中学历', '小学学历', '高中学历', '大专学历', '本科学历', '中专学历', '中技学历', '研究生学历'],
        cityData: [1171, 625, 621, 610, 386, 161, 30, 24],
      };
      var top10CityList = charts.cityList;
      var top10CityData = charts.cityData;
      var color = ['rgba(86,104,232'];

      let lineY = [];
      for (var i = 0; i < charts.cityList.length; i++) {
        var x = i;
        if (x > color.length - 1) {
          x = color.length - 1;
        }
        var data = {
          name: charts.cityList[i],
          color: color[x] + ')',
          value: top10CityData[i],
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: color[x] + ', 0.3)',
                  },
                  {
                    offset: 1,
                    color: color[x] + ', 1)',
                  },
                ],
                false,
              ),
              barBorderRadius: 10,
            },
            emphasis: {
              shadowBlur: 15,
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            },
          },
        };
        lineY.push(data);
      }
      let MaxData = [];
      for (let index = 0; index < charts.cityData.length; index++) {
        MaxData.push(Math.max(...charts.cityData) + 100);
      }
      console.log(lineY);
      const option = {
        // backgroundColor: '#000',
        title: {
          text: '党员学历结构',
          textStyle: {
            fontSize: 30,
            color: '#ffffff',
          },
          padding: [
            5, // 上
            10, // 右
            20, // 下
            40, // 左
          ],
        },
        tooltip: {
          trigger: 'item',
        },
        grid: {
          borderWidth: 0,
          top: '10%',
          left: '5%',
          right: '15%',
          bottom: '3%',
        },
        color: color,
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
              inside: false,
            },
            data: top10CityList,
          },
          {
            type: 'category',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            data: top10CityData,
          },
        ],
        xAxis: {
          type: 'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        series: [
          {
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: '20px',
            data: lineY,
            animationDuration: 1500,
            label: {
              normal: {
                color: '#b3ccf8',
                show: true,
                position: [0, '-44px'],
                textStyle: {
                  fontSize: 28,
                },
                formatter: function (a, b) {
                  return a.name + a.value + '人';
                },
              },
            },
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: MaxData,
            itemStyle: {
              normal: {
                color: '#1B375E',
                barBorderRadius: 0,
              },
            },
          },
        ],
        // animationEasing: 'cubicOut',
      };

      this.hengcharts.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.left-section1 {
  // height: 85rem;
  p {
    margin: 0;
  }
  .section-content {
    display: flex;
    justify-content: space-between;
    .left-area {
      width: 49%;
      .top-indi {
        background: linear-gradient(90deg, rgba(129, 157, 186, 0.06) 100%, rgba(129, 157, 186, 0) 0%);
        display: flex;
        align-items: center;
        margin-top: 6rem;
        height: 16rem;
        padding-left: 3rem;
        .party-icon {
          display: inline-block;
          width: 12rem;
          text-align: center;
          p {
            background-image: -webkit-linear-gradient(bottom, #4ecdd8, white);
            font-size: 2.4rem;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }
        }
        .indi-wrapper {
          .indi-item {
            display: inline-block;
            text-align: center;
            width: 22rem;
            position: relative;
            .value {
              background-image: -webkit-linear-gradient(bottom, #4ecdd8, white);
              font-size: 5.6rem;
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
            }
            .unit {
              font-size: 2.4rem;
              color: #fff;
            }
            .bottom-text {
              font-size: 2.4rem;
              color: rgba(255, 255, 255, 0.5);
            }
            .vertical-line {
              display: inline-block;
              position: absolute;
              left: 0;
              top: 2.4rem;
              width: 0.1rem;
              background: #fff;
              height: 5.6rem;
            }
          }
        }
      }
      .bottom-chart {
        margin-top: 1.6rem;
        width: 830px;
        height: 206px;
        background: linear-gradient(90deg, rgba(129, 157, 186, 0.06) 100%, rgba(129, 157, 186, 0) 0%);
        .zhanbi {
          width: 100%;
          display: flex;
          font-family: 'Source Han Sans CN';
          font-weight: 400;
          color: #f0f5f7;
          justify-content: space-between;
          font-size: 32px;
          margin-left: 50px;
          .nanxing {
            display: inline-block;
            font-size: 56px;
            font-family: 'DIN';
            font-weight: bold;
            color: #3ab7d9;
            margin-left: 50px;
          }
          .nvxing {
            display: inline-block;
            font-size: 56px;
            font-family: 'DIN';
            font-weight: bold;
            color: #e485bd;
            margin-right: 50px;
          }
        }
      }
      .dangyuanchart {
        height: 500px;
        .title {
          margin-top: 30px;
          font-size: 34px;
          font-family: 'Source Han Sans CN';
          font-weight: 500;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
