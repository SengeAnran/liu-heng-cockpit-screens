<template>
  <div class="pieChart" ref="pieChart" />
</template>

<script>
/*
参数说明
data: 传入数据;
legendType: 图例展示样式 all--名称+数据+占比,value--名称+数据, pec--名称+占比, default--名称，默认为default;
chartStyle:
{radius: [], // 圆环大小 center: [], // 圆环位置 position: [left, top], //
环内贴图位置 scale: [], // 环内贴图缩放比例 legendStyle: [top, right, bottom,
left], // 图例位置 }
*/
import circle from '../images/circle-bg.png';
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/graphic';
import 'echarts/lib/component/grid';
export default {
  name: 'PieChart',
  data() {
    return {
      chart: null,
      total: 0,
      option: {
        title: {
          text: '医务人员工龄结构',
          left: '25%',
          top: '42%',
          textAlign: 'center',
          textStyle: {
            fontSize: 34,
            fontFamily: 'Source Han Sans CN',
            color: '#fff',
            width: 140,
            overflow: 'break',
          },
        },
        tooltip: {
          show: false,
        },
        grid: {
          top: 20,
          left: 0,
          bottom: 20,
          // containLabel: true,
        },
        graphic: {
          elements: [
            {
              type: 'image',
              z: 3,
              style: {
                image: circle,
                width: 143,
                height: 150,
              },
              left: '16%',
              top: '21%',
              scaleX: 1,
              scaleY: 1,
            },
          ],
        },
        legend: {
          y: 'center',
          right: '10%',
          align: 'left',
          orient: 'vertical',
          top: 'center',
          icon: 'circle',
          itemGap: 25,
          itemWidth: 21,
          itemHeight: 21,
          height: '95%',
          textStyle: {
            color: '#fefefe',
            fontSize: 29,
            rich: {
              a: {
                fontSize: 29,
                fontFamily: 'Source Han Sans SC',
                width: 180,
              },
              b: {
                fontSize: 29,
                color: '#fff',
                fontFamily: 'DINPro',
              },
            },
          },
          formatter: '',
        },
        toolbox: {
          show: false,
        },
        series: [
          {
            type: 'pie',
            clockwise: true,
            radius: [],
            center: [],
            top: 0,
            left: 0,
            bottom: 20,
            hoverAnimation: false,
            emphasis: { scale: false },
            label: {
              show: false,
            },
            itemStyle: {
              borderWidth: 0,
            },
            data: [],
          },
        ],
      },
    };
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return [
          { name: 'Ⅰ类', value: 0 },
          { name: 'Ⅱ类', value: 0 },
          { name: 'Ⅲ类', value: 0 },
          { name: 'Ⅳ类', value: 0 },
          { name: 'Ⅴ类', value: 0 },
          { name: '劣Ⅴ类', value: 0 },
        ];
      },
    },
    chartStyle: {
      type: Object,
      default: function () {
        return {
          scale: [],
        };
      },
    },
    legendType: {
      type: String,
      default: function () {
        return 'default';
      },
    },
    title: {
      type: String,
      default: function () {
        return '标题';
      },
    },
    tooltip: {
      type: Object,
      default: function () {
        return { show: true };
      },
    },
    color: {
      type: Array,
      default: function () {
        return [
          'rgba(97, 130, 174, 1)',
          'rgba(142, 220, 125, 1)',
          'rgba(1, 161, 245, 1)',
          'rgba(85, 230, 243, 1)',
          'rgba(235, 225, 128, 1)',
          'rgba(219, 181, 167, 1)',
        ];
      },
    },
  },
  watch: {
    data: {
      handler: function (val) {
        if (typeof val === typeof []) {
          this.getData();
        }
      },
      immediate: false,
      deep: true,
    },
    legendType(val) {
      if (typeof val === 'string') {
        this.getData();
      }
    },
    chartStyle: {
      handler: function () {
        this.getData();
      },
      immediate: false,
      deep: true,
    },
    tooltip: {
      handler: function () {
        this.getData();
      },
      immediate: false,
      deep: true,
    },
  },
  mounted() {
    this.initChart();
    this.getData();
  },
  methods: {
    initChart() {
      if (!this.chart) {
        this.chart = echarts.init(this.$refs.pieChart);
        this.chart.setOption(this.option);
      }
    },
    getData() {
      this.option.series[0].data = [];
      this.option.legend.data = [];
      this.total = 0;
      const seriesData = [];
      const legendData = [];
      this.data.forEach((item) => {
        this.total = this.total + item.value;
      });
      this.data.forEach((item, i) => {
        seriesData.push({
          value: item.value,
          name: item.name,
          itemStyle: {
            borderWidth: 0,
          },
          tooltip: {
            textStyle: {
              fontSize: 29,
            },
          },
        });
        legendData.push(item.name);
      });
      this.option.title.text = this.title;
      this.option.color = this.color;
      this.option.series[0].data = seriesData;
      this.option.legend.data = legendData;
      this.option.series[0].radius = this.chartStyle.radius || ['66%', '83%'];
      this.option.series[0].center = this.chartStyle.center || ['26%', '55%'];
      this.option.tooltip.show = this.tooltip?.show;
      const that = this;
      this.option.tooltip.formatter = function (params) {
        const html =
          "<div style='font-size: 20px'>" + params.marker + params.name + ':  ' + params.value + that.tooltip?.unit ||
          '' + '</div>';
        return html;
      };
      this.option.graphic.elements[0].left = this.chartStyle.position ? this.chartStyle.position[0] : '6.2%';
      this.option.graphic.elements[0].top = this.chartStyle.position ? this.chartStyle.position[1] : '5.88%';
      this.option.graphic.elements[0].scaleX = this.chartStyle.scale[0] || 2.3;
      this.option.graphic.elements[0].scaleY = this.chartStyle.scale[1] || 2.2;

      if (this.chartStyle.legendStyle && this.chartStyle.legendStyle.length) {
        this.option.legend.top = this.chartStyle.legendStyle[0] || 0;
        this.option.legend.right = this.chartStyle.legendStyle[1] || 0;
        this.option.legend.bottom = this.chartStyle.legendStyle[2] || 0;

        this.option.legend.left = this.chartStyle.legendStyle[3] || 0;
      }
      this.option.legend.formatter = function (name) {
        const checkData = that.data.filter((item) => {
          return item.name === name;
        });
        return that.legendSwitch(checkData, name);
      };
      this.chart.clear();
      this.chart.setOption(this.option);
      console.log(this.option.series[0].data);
    },
    legendSwitch(checkData, name) {
      let html = name;
      switch (this.legendType) {
        case 'all':
          html = [
            '{a|' + name + '}',
            '{b|' + checkData[0].value + '}',
            '{b|' + Math.floor((checkData[0].value / this.total) * 10000) / 100 + '%}',
          ];
          break;
        case 'value':
          html = ['{a|' + name + '}', '{b|' + checkData[0].value + '}'];
          break;
        case 'pec':
          html = ['{a|' + name + '}' + '{b|' + Math.floor((checkData[0].value / this.total) * 10000) / 100 + '%}'];
          break;
        default:
          break;
      }
      return html;
    },
    // setInterval1() {
    //   let curIndex = 0;
    //   setInterval(() => {
    //     var dataLen = this.option.series[0].data.length;
    //     console.log(curIndex);
    //     this.chart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex });
    //     curIndex = (curIndex + 1) % dataLen;
    //     this.chart.dispatchAction({
    //       type: 'highlight',
    //       seriesIndex: 0,
    //       dataIndex: curIndex,
    //     });
    //   }, 2000);
    // },
  },
};
</script>
<style lang="scss" scoped>
.pieChart {
  margin-top: 0px;
  // width: 100%;
  height: 100%;
}
</style>
