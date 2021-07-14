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
import { getExportImportTotal } from '@/api/Overview/CityEvolution/api';
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
    getOptions() {
      const mockData = this.data;
      const dataItems = [
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(122,74,255, 0.4)',
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: 'rgba(155, 102, 255, 0.7)' },
              { offset: 1, color: 'rgba(98, 54, 255, 0.7)' },
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
              { offset: 0, color: 'rgba(236,102,255,0.7)' },
              { offset: 1, color: 'rgba(182,32,224,0.7)' },
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
              { offset: 0, color: 'rgba(245,114,164,0.7)' },
              { offset: 1, color: 'rgba(215,37,82,0.7)' },
            ],
          ),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: 'rgba(253,157,0,0.6)' },
              { offset: 1, color: 'rgba(250,100,0,0.6)' },
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
              { offset: 0, color: 'rgba(252,219,0,0.6)' },
              { offset: 1, color: 'rgba(247,181,0,0.6)' },
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
              { offset: 0, color: 'rgba(166,236,0,0.6)' },
              { offset: 1, color: 'rgba(109,212,0,0.6)' },
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
              { offset: 0, color: 'rgba(114,151,255,0.7)' },
              { offset: 1, color: 'rgba(54,75,236,0.7)' },
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
              { offset: 0, color: 'rgba(49,189,209,0.7)' },
              { offset: 1, color: 'rgba(67,136,198,0.7)' },
            ],
          ),
        },
      ];
      const chartsData = mockData.map((item, index) => {
        return {
          value: item.jcke,
          name: item.qymc,
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
          data: mockData.map((item) => item.qymc),
          icon: 'rect',
          formatter: (params) => {
            const dataAll = mockData.map((item) => Number(item.jcke));
            const jcke = dataAll.reduce((x, y) => parseInt(x, 10) + parseInt(y, 10));
            const value = Number(mockData.filter((item) => item.qymc === params)[0].jcke);
            if (jcke === 0) {
              return `{a|${params}：}{b}`;
            }
            const name = params;
            return `{a|${name}：}{b|${((value * 100) / jcke).toFixed(2)}%}`;
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
          itemHeight: 10,
          itemWidth: 10,
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
    loadData() {
      getExportImportTotal().request().then((res) => {
        this.data = res;
        this.setData();
      });
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
