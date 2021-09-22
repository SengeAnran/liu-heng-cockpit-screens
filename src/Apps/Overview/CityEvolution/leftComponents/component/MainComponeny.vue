<template>
  <div class="community_address">
    <BaseTitle title="六横主要企业进出口总额" :width="720" />
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
      dataList: [],
      option: {},
    };
  },
  components: {
    BaseTitle,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    // 获取数据
    loadData() {
      getExportImportTotal()
        .request()
        .then((res) => {
          this.data = res;
          this.dataList = res;
          this.dealDataList();
        });
    },
    // 整理数据
    dealDataList() {
      const myChart = echarts.init(this.$refs.charts);
      var angle = 0; //角度，用来做简单的动画效果的
      var value = 55.33;
      const bgColor = [
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(122,74,255, 0.4)',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#458657' },
            { offset: 1, color: '#88E49A' },
          ]),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(236,102,255, 0.4)',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#DC745B' },
            { offset: 1, color: '#F6AD6D' },
          ]),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(245,114,164, 0.4)',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#F6CB6D' },
            { offset: 1, color: '#E5AD34' },
          ]),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(253,157,0,0.6)' },
            { offset: 1, color: 'rgba(250,100,0,0.6)' },
          ]),
          shadowColor: 'rgba(238,101,0,0.4)',
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowColor: 'rgba(247,181,0, 0.4)',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#A09BE0' },
            { offset: 1, color: '#4A42B2' },
          ]),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(130,221,0, 0.4)',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#6CF5E0' },
            { offset: 1, color: '#2FAD82' },
          ]),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(114, 151, 255, 0.4)',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#7FACFF' },
            { offset: 1, color: 'rgba(54,75,236,0.7)' },
          ]),
        },
        {
          shadowBlur: 15,
          shadowOffsetX: -10,
          shadowOffsetY: 0,
          shadowColor: 'rgba(49, 189, 209, 0.4)',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(49,189,209,0.7)' },
            { offset: 1, color: 'rgba(67,136,198,0.7)' },
          ]),
        },
      ];
      this.data.map((item, index) => {
        item.value = item.jcke;
        item.name = item.qymc;
        item.itemStyle = bgColor[index];
      });
      console.log(this.data);
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          right: '0%',
          top: '18%',
          bottom: '0%',
          orient: 'vertical',
          data: this.data.map((item) => item.qymc),
          icon: 'rect',
          formatter: (params) => {
            const dataAll = this.data.map((item) => Number(item.jcke));
            const jcke = dataAll.reduce((x, y) => parseInt(x, 10) + parseInt(y, 10));
            const value = Number(this.data.filter((item) => item.qymc === params)[0].jcke);
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
        grid: {},
        series: [
          {
            // center: ['30%', '50%'],
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.75,
                  startAngle: ((0 + angle) * Math.PI) / 180,
                  endAngle: ((90 + angle) * Math.PI) / 180,
                },
                style: {
                  stroke: '#0CD3DB',
                  fill: 'transparent',
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: 'ring5',

            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.75,
                  startAngle: ((180 + angle) * Math.PI) / 180,
                  endAngle: ((270 + angle) * Math.PI) / 180,
                },
                style: {
                  stroke: '#0CD3DB',
                  fill: 'transparent',
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.8,
                  startAngle: ((270 + -angle) * Math.PI) / 180,
                  endAngle: ((40 + -angle) * Math.PI) / 180,
                },
                style: {
                  stroke: '#0CD3DB',
                  fill: 'transparent',
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.8,
                  startAngle: ((90 + -angle) * Math.PI) / 180,
                  endAngle: ((220 + -angle) * Math.PI) / 180,
                },
                style: {
                  stroke: '#0CD3DB',
                  fill: 'transparent',
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              let x0 = api.getWidth() / 2;
              let y0 = api.getHeight() / 2;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.8;
              let point = getCirlPoint(x0, y0, r, 90 + -angle);
              return {
                type: 'circle',
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4,
                },
                style: {
                  stroke: '#0CD3DB', //粉
                  fill: '#0CD3DB',
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: 'ring5', //绿点
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              const x0 = api.getWidth() / 2;
              const y0 = api.getHeight() / 2;
              const r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.8;
              const point = getCirlPoint(x0, y0, r, 270 + -angle);
              return {
                type: 'circle',
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4,
                },
                style: {
                  stroke: '#0CD3DB',
                  fill: '#0CD3DB',
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            type: 'pie',
            radius: ['40%', '70%'],
            // center: ['40%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: this.data,
          },
        ],
      };
      // myChart.setOption(option, true);
      angle = angle + 3;
      myChart.setOption(option, true);
      let curIndex = 0;
      setInterval(function () {
        var dataLen = option.series[0].data.length;
        myChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex });
        curIndex = (curIndex + 1) % dataLen;
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: curIndex,
        });
      }, 2000);
      // setInterval(function () {
      //   myChart.setOption(option, true);
      //   angle = angle + 3;
      // }, 100);
    },
  },
};
function getCirlPoint(x0, y0, r, angle) {
  const x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
  const y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
  return {
    x: x1,
    y: y1,
  };
}
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
