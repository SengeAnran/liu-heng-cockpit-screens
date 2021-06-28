<template>
  <div class="community_address">
    <BaseTitle title="六横主要企业进出口总额" :width='720' />
    <div class="item_wrapper">
      <div class="line_charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import BaseTitle from '../../components/BaseTitle';
export default {
  name: 'CityEvolution',
  data() {
    return {
      charts: null,
      data: [],
    };
  },
  components: {
    BaseTitle,
  },
  mounted() {
    const charts = this.$refs.charts;
    this.charts = echarts.init(charts);
    this.loadData();
  },
  methods: {
    setData() {
      this.charts.clear();
      this.charts.setOption(this.getOptions());
    },
    getOptions1() {
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
            fontSize: 22,
          },
          borderColor: 'rgba(255, 255, 255, 0.4)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        xAxis: {
          data: [2015, 2016, 2017, 2018, 2019, 2020],
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
              fontSize: 22,
            },
          },
          splitLine: {
            show: false,
          },
          boundaryGap: true,
        },
        yAxis: [{
          type: 'value',
          name: '（万人次）',
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
              fontSize: 22,
            },
          },
          axisTick: {
            show: true,
          },
        }, {
          name: '（亿元）',
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
              fontSize: 22,
            },
          },
          axisTick: {
            show: true,
          },
        }],
        legend: {
          data: ['接待人数', '旅游收入'],
          bottom: 7,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 20,
            fontFamily: 'DIN Alternate',
          },
        },
        series: [{
          type: 'bar',
          name: '接待人数',
          barWidth: 20,
          yAxisIndex: '0', // 第一个柱状图的数据
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#66CCFF',
                },
                {
                  offset: 1,
                  color: '#72DCEE',
                },
              ],
              global: false,
            },
          },
          label: {
            show: true,
            position: 'inside',
            distance: 10,
            color: '#FFFFFF',
            textStyle: {
              fontSize: 22,
            },
          },
          data: [145.7, 165.2, 190.9, 229, 261.3, 300.4],
        }, {
          type: 'line',
          yAxisIndex: '1', // 第一个柱状图的数据
          name: '旅游收入',
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
              fontSize: 22,
            },
          },
          data: [8.01, 9.22, 10.88, 13.28, 15.16, 17.04],
        }],
      };
      return option;
    },
    getOptions() {
      const mockData = [
        { total: '62225', detail: '中远船务' },
        { total: '44761', detail: '鑫亚船舶' },
        { total: '15696', detail: '龙山船厂' },
        { total: '34712', detail: '金润石油' },
        { total: '1973', detail: '海港中奥' },
        { total: '390', detail: '宏基水产' },
      ];
      const dataItems = [
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(122,74,255, 0.4)',
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#9B66FF' },
              { offset: 1, color: '#6236FF' },
            ],
          ),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(236,102,255, 0.4)',
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#EC66FF' },
              { offset: 1, color: '#B620E0' },
            ],
          ),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(245,114,164, 0.4)',
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#F572A4' },
              { offset: 1, color: '#D72552' },
            ],
          ),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#FD9D00' },
              { offset: 1, color: '#FA6400' },
            ],
          ),
          shadowColor: 'rgba(238,101,0,0.4)',
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowColor: 'rgba(247,181,0, 0.4)',
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#FCDB00' },
              { offset: 1, color: '#F7B500' },
            ],
          ),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(130,221,0, 0.4)',
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#A6EC00' },
              { offset: 1, color: '#6DD400' },
            ],
          ),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(114, 151, 255, 0.4)',
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#7297FF' },
              { offset: 1, color: '#364BEC' },
            ],
          ),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(49, 189, 209, 0.4)',
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#31BDD1' },
              { offset: 1, color: '#4388C6' },
            ],
          ),
        },
      ];
      const chartsData = mockData.map((item, index) => {
        return {
          value: item.total,
          name: item.detail,
          itemStyle: dataItems[index],
        };
      });
      const option = {
        grid: {
          left: 0,
        },
        legend: {
          right: '0%',
          top: '18%',
          left: '60%',
          bottom: '0%',
          orient: 'vertical',
          data: mockData.map((item) => item.detail),
          icon: 'circle',
          formatter: (params) => {
            const dataAll = mockData.map((item) => Number(item.total));
            const total = dataAll.reduce((x, y) => parseInt(x, 10) + parseInt(y, 10));
            const value = Number(mockData.filter((item) => item.detail === params)[0].total);
            if (total === 0) {
              return `{a|${params}：}{b}`;
            }
            const name = params;
            return `{a|${name}：}{b|${((value * 100) / total).toFixed(2)}%}`;
          },
          textStyle: {
            rich: {
              a: {
                color: 'white',
                width: 90,
                fontSize: 20,
                fontWeight: 'bold',
                align: 'left',
              },
              b: {
                color: 'white',
                width: 90,
                fontSize: 20,
                fontWeight: 'bold',
              },
            },
          },
          selectorPosition: 'start',
          align: 'left',
          itemHeight: 8,
          itemWidth: 8,
          itemGap: 30,
        },
        tooltip: {
          trigger: 'item',
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
        series: [
          {
            name: '',
            type: 'pie',
            center: ['30%', '50%'],
            clockwise: false,
            avoidLabelOverlap: false,
            hoverOffset: 10,
            legendHoverLink: true,
            label: {
              show: true,
              position: 'inside',
              fontSize: '20',
              formatter: (params) => {
                return `${params.value}`;
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                borderColor: '#ffffff',
              },
            },
            data: chartsData,
          },
        ],
      };
      return option;
    },
    loadData() { // 社区信息
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
