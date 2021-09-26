<template>
  <div class="community_address">
    <BaseTitle title="渔农村常住居民人均可支配收入" :width="720" />
    <div class="item_wrapper">
      <div class="line_charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import BaseTitle from '../../components/BaseTitle';
import { getPCDI } from '@/api/Overview/CityEvolution/api';
export default {
  name: 'CityEvolution',
  data() {
    return {
      charts: null,
      xAxisData: [],
      incomeData: [],
      increaseRate: [],
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

    // tooltip定时移动 vue项目中  myChart换成自己初始化的名称(我的是areaChart)
    var count = 0;
    if (this.timmerOneAnim) {
      clearInterval(this.timmerOneAnim);
    }
    this.timmerOneAnim = setInterval(() => {
      this.charts.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: count % this.incomeData.length,
      });
      count++;
    }, 5000);
  },
  methods: {
    setData() {
      this.charts.clear();
      this.charts.setOption(this.getOptions());
    },
    getOptions() {
      // var color = ['#CC1CAA', '#8D67FF', '#00FFFF', '#48DE13', '#FFC516', '#DC3E14', '#8E16F8'];
      console.log(this.incomeData);
      var dom = 800;
      var barWidth = dom / 20;
      var colors = [];
      for (let i = 0; i < this.incomeData.length; i++) {
        colors.push({
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#55D9BC', // 最左边
            },
            {
              offset: 0.5,
              color: '#38B88F', // 左边的右边 颜色
            },
            {
              offset: 0.5,
              color: '#38B88F', // 右边的左边 颜色
            },
            {
              offset: 1,
              color: '#39B78C',
            },
          ],
        });
      }
      const option = {
        grid: {
          left: '10%',
          right: '10%',
          top: '20%',
          bottom: '10%',
        },
        legend: {
          data: ['渔农村常住居民人均可支配收入', '增幅'],
          right: 30,
          top: 7,
          orient: 'vertical',
          textStyle: {
            color: '#FFFFFF',
            fontSize: 20,
            fontFamily: 'DIN Alternate',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          textStyle: {
            color: '#fff',
            fontSize: 22,
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
            name: '收入（元）',
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
            name: '增长（%）',
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
        series: [
          {
            type: 'bar',
            barWidth: barWidth,
            itemStyle: {
              color: function (params) {
                return new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#38B88F', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(85, 217, 188, 0.32)', // 100% 处的颜色
                    },
                  ],
                  false,
                );
              },
            },
            label: {
              show: false,
              position: [barWidth / 2, -(barWidth + 20)],
              color: '#ffffff',
              fontSize: 14,
              fontStyle: 'bold',
              align: 'center',
            },
            data: this.incomeData,
          },
          {
            z: 2,
            type: 'pictorialBar',
            data: this.incomeData,
            symbol: 'diamond',
            symbolOffset: ['-80%', '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
              color: function (params) {
                return new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#38B88F', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(85, 217, 188, 0.32)', // 100% 处的颜色
                    },
                  ],
                  false,
                );
              },
            },
          },
          {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: this.incomeData,
            symbol: 'diamond',
            symbolOffset: ['-80%', '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
              normal: {
                color: function (params) {
                  return colors[params.dataIndex % 7];
                },
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
            yAxisIndex: '1',
            name: '增幅',
            barWidth: 20,
            itemStyle: {
              color: '#31EABC',
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#FFFFFF',
              textStyle: {
                fontSize: 20,
              },
            },
            data: this.increaseRate,
          },
        ],
      };
      return option;
    },
    async loadData() {
      const res = await getPCDI().request();
      res.reverse().forEach((item, index) => {
        this.xAxisData.push(item.nf);
        this.incomeData.push(item.nrjsr);
        this.increaseRate.push(item.srzf * 100);
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
  top: 550px;
  left: 0;
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
