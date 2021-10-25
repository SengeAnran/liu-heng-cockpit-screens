<template>
  <div class="event-rank">
    <BaseTitle title="执法部门处置事件排名" />
    <div class="bar-chart" ref="barChart"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
import { getIndustryRank } from '@/api/Overview/PeaceSecurity/api';
export default {
  name: 'Complaint',
  data() {
    return {
      barData: [
        // {
        //   label: '海事',
        //   value: 12,
        // },
        // {
        //   label: '边检',
        //   value: 10,
        // },
        // {
        //   label: '公安',
        //   value: 9,
        // },
        // {
        //   label: '渔政',
        //   value: 8,
        // },
        // {
        //   label: '城管',
        //   value: 7,
        // },
        // {
        //   label: '海关',
        //   value: 6,
        // },
        // {
        //   label: '交通',
        //   value: 4,
        // },
      ],
      yData: ['海事', '边检', '公安', '渔政', '城管', '海关', '交通'],
    };
  },
  components: {},
  mounted() {
    this.chart = echarts.init(this.$refs.barChart);
    this.loadData();
  },
  methods: {
    loadData() {
      getIndustryRank()
        .request()
        .then((json) => {
          if (json[0].je !== 999999999) {
            this.barData = json.map((item, index) => {
              item.label = item.hymc;
              item.value = item.je;
              this.yData[index] = item.hymc;
              return item;
            });
          }
          this.chart.setOption(this.optionData(this.barData));
          // console.log(json, '排名');
        });
    },
    optionData(data) {
      return {
        grid: {
          top: 5,
          // left: 10,
          // right: 210,
          // bottom: 20,
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          show: false,
        },
        yAxis: {
          splitLine: {
            show: false,
          },
          axisLine: {
            // y轴
            show: false,
          },
          type: 'category',
          axisTick: {
            show: false,
          },
          inverse: true,
          data: this.yData,
          axisLabel: {
            color: '#A7D6F4',
            fontSize: 24,
          },
        },
        series: [
          {
            name: 'value',
            type: 'bar',
            barWidth: 18,
            barMinHeight: 20, // 最小高度
            yAxisIndex: 0,
            label: {
              show: true,
              position: 'right',
              color: '#fff',
              offset: [10, 0],
              formatter({ value }) {
                return `{c|''}{a|${value}} {b|件}`;
              },
              rich: {
                a: {
                  padding: [0, 0, 0, 30],
                  fontSize: 26,
                  fontFamily: 'DIN Alternate',
                },
                b: {
                  fontSize: 24,
                },
                c: {
                  padding: [0, 0, 0, -15],
                  width: 0,
                  height: 18,
                  align: 'left',
                  backgroundColor: '#ff6ed',
                },
              },
            },
            data: data.map(({ value }, index) => {
              return {
                value,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: 'rgba(92, 111, 255, 0.1)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(92, 111, 255, 1)',
                    },
                  ]),
                },
              };
            }),
          },
        ],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.event-rank {
  position: absolute;
  left: 157px;
  top: 705px;
  width: 835px;
  height: 535px;
  .bar-chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 460px;
  }
}
</style>
