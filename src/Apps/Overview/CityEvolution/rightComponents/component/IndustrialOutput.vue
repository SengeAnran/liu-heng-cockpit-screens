<template>
  <div class="community_address">
    <BaseTitle title="工业生产总值" :width="720" />
    <div class="item_wrapper">
      <div class="line_charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import BaseTitle from '../../components/BaseTitle';
import { getIndustryValueTrend } from '@/api/Overview/CityEvolution/api';
export default {
  data() {
    return {
      charts: null,
      industrialIncome: [],
      increaseRate: [],
      xAxisData: [],
      timmerOneAnim: null,
    };
  },
  components: {
    BaseTitle,
  },
  mounted() {
    const charts = this.$refs.charts;
    this.charts = echarts.init(charts);
    this.loadData();
    var count = 0;
    if (this.timmerOneAnim) {
      clearInterval(this.timmerOneAnim);
    }
    this.timmerOneAnim = setInterval(() => {
      this.charts.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: count % this.industrialIncome.length,
      });
      count++;
    }, 4000);
  },
  methods: {
    setData() {
      this.charts.clear();
      this.charts.setOption(this.getOptions());
    },
    getOptions() {
      const option = {
        grid: {
          top: '15%',
          left: '10%',
          right: '17%',
          bottom: '15%',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          textStyle: {
            color: '#fff',
            fontSize: 20,
          },
          borderColor: 'rgba(255, 255, 255, 0.4)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        xAxis: {
          data: this.xAxisData,
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.5)',
            },
          },
          axisTick: {
            show: false,
            alignWithLabel: true,
          },
          splitArea: {
            color: '#f00',
            lineStyle: {
              color: '#f00',
            },
          },
          axisLabel: {
            color: '#FFFFFF',
            textStyle: {
              fontSize: 20,
            },
          },
          splitLine: {
            show: false,
          },
          boundaryGap: true,
        },
        yAxis: [
          {
            type: 'value',
            name: '（亿元）',
            nameTextStyle: {
              align: 'center',
              color: '#fff',
              fontSize: 20,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,0.2)',
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#979797',
              },
            },
            axisLabel: {
              color: '#FFFFFF',
              margin: 10,
              textStyle: {
                fontSize: 20,
              },
            },
            axisTick: {
              show: true,
            },
          },
          {
            name: '(%)',
            type: 'value',
            position: 'right',
            nameTextStyle: {
              align: 'center',
              color: '#fff',
              fontSize: 20,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,0.2)',
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#979797',
              },
            },
            axisLabel: {
              color: '#FFFFFF',
              margin: 10,
              textStyle: {
                fontSize: 20,
              },
            },
            axisTick: {
              show: true,
            },
          },
        ],
        legend: {
          data: ['工业产值', '增速'],
          right: 30,
          top: 7,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 20,
            fontFamily: 'DIN Alternate',
          },
        },
        series: [
          {
            name: '工业产值',
            data: this.industrialIncome,
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 20,
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: '#FFAE9A',
                  },
                  {
                    offset: 1,
                    color: ' #BB6D3E',
                  },
                ],
              },
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#fff',
            },
          },
          {
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [20, 15],
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: '#FFAE9A',
                  },
                  {
                    offset: 1,
                    color: ' #BB6D3E',
                  },
                ],
              },
            },
          },
          {
            data: this.industrialIncome,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [20, 12],
            zlevel: 2,
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: '#FFAE9A',
                  },
                  {
                    offset: 1,
                    color: ' #BB6D3E',
                  },
                ],
              },
            },
          },
          {
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [20, 15],
            zlevel: -2,
          },
          {
            type: 'line',
            yAxisIndex: '1', // 第一个柱状图的数据
            name: '增速',
            barWidth: 20,
            itemStyle: {
              color: '#31EABC',
            },
            // itemStyle: {
            //   color: '#058cff',
            // },
            lineStyle: {
              color: '#058cff',
            },
            areaStyle: {
              color: 'rgba(57,86,119, 0.2)',
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#FFFFFF',
              textStyle: {
                fontSize: 20,
              },
              areaStyle: {
                color: 'rgba(5,140,255, 0.2)',
              },
            },
            data: this.increaseRate,
          },
        ],
      };
      return option;
    },
    async loadData() {
      const res = await getIndustryValueTrend().request();
      res
        .reverse()
        .slice(res.length - 6)
        .forEach((item, index) => {
          this.xAxisData.push(item.nf);
          this.industrialIncome.push(item.gycz);
          this.increaseRate.push(item.gyczzs);
        });
      this.setData();
    },
  },
};
</script>
<style lang="scss" scoped>
.community_address {
  position: absolute;
  width: 840px;
  height: 550px;
  top: 0;
  // top: 0;
  left: 850px;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  .item_wrapper {
    margin-top: 65px;
    height: 460px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .line_charts {
      height: 460px;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
