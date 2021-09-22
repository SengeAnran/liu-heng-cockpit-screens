<template>
  <div class="danger-waste">
    <BaseTitle title="危险废物管理" />
    <div class="pie-chart" ref="pieChart" />
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getWasteControl } from '@/api/Strength/Environmental/api';
export default {
  name: 'DangerWaste',
  data() {
    return {
      list: [
        { value: 3.3, name: '产生量' },
        { value: 0.66, name: '处置量' },
        { value: 4.43, name: '库存量' },
        // { value: 0, name: '实际接受量' },
      ],
      title: '危险废物监管',
    };
  },
  components: {},
  mounted() {
    this.chart = echarts.init(this.$refs.pieChart);
    this.chart.setOption(this.optionData(this.list));
    // this.loadData();
  },
  methods: {
    loadData() {
      this.chart.setOption(this.optionData(this.list));
      // getWasteControl()
      //   .request()
      //   .then((json) => {
      //     this.list[0].value = json[0].cfl || 0;
      //     this.list[1].value = json[0].zyl || 0;
      //     this.list[2].value = json[0].ccl || 0;
      //     // this.list[3].value = json[0].sjssl || 0;

      //   });
    },
    optionData(data) {
      const total = data.reduce((prev, next) => prev + next.value, 0);
      data = data.map((item) => {
        item.percent = ((item.value / total) * 100).toFixed(1);
        return item;
      });
      return {
        title: {
          text: `${this.title.slice(0, 4)}\n${this.title.slice(4)}`,
          top: '37%',
          textAlign: 'center',
          left: '18.5%',
          textStyle: {
            color: '#fff',
            fontSize: 35,
            fontWeight: '400',
          },
        },
        tooltip: {
          show: false,
        },
        legend: {
          icon: 'circle',
          itemGap: 30,
          itemWidth: 20,
          itemHeight: 20,
          orient: 'vertical',
          top: '20%',
          right: '12%',
          formatter: function (name) {
            const cur = data.find((item) => item.name === name);
            return `{a|${name}}  {b|${cur.percent}%}`;
          },
          textStyle: {
            color: '#fff',
            fontSize: 24,
            rich: {
              a: {
                color: '#fff',
                fontSize: 28,
              },
              b: {
                color: '#fff',
                fontSize: 30,
                fontFamily: 'DIN Alternate',
                padding: [0, 0, 0, 10],
              },
            },
          },
        },
        series: [
          {
            type: 'pie',
            radius: ['42%', '61%'],
            center: ['19.5%', '45%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: data.map((item) => {
              item.percent = ((item.value / total) * 100).toFixed(1);
              return item;
            }),
          },
          {
            itemStyle: {
              color: '#333d49',
            },
            type: 'pie',
            hoverAnimation: false,
            radius: ['36%', '68%'],
            center: ['19.5%', '45%'],
            label: {
              show: false,
            },
            data: [
              {
                value: 1,
              },
            ],
            z: -1,
          },
        ],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.danger-waste {
  position: absolute;
  right: 125px;
  top: 200px;
  width: 835px;
  height: 535px;
  .pie-chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 460px;
  }
}
</style>
