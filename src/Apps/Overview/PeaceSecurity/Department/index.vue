<template>
  <div class="department">
    <BaseTitle title="部门办理" />
    <div class="pie-chart" ref="pieChart" />
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getDeptType } from '@/api/Overview/PeaceSecurity/api';
export default {
  name: 'Degree',
  data() {
    return {
      list: [
        { value: 1048, name: '建议占比' },
        { value: 735, name: '投诉占比' },
        { value: 580, name: '咨询占比' },
      ],
      title: `50次 \n 截止2021年5月`,
    };
  },
  components: {},
  mounted() {
    this.chart = echarts.init(this.$refs.pieChart);
    this.loadData();
    let curIndex = 0;
    setInterval(() => {
      console.log(this.list.length);
      var dataLen = this.list.length;
      this.chart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: curIndex });
      curIndex = (curIndex + 1) % dataLen;
      this.chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: curIndex,
      });
    }, 2000);
  },
  methods: {
    loadData() {
      getDeptType()
        .request()
        .then((json) => {
          this.list = json.map((item) => {
            item.name = item.bmbl;
            item.value = item.blcs || 0;
            return item;
          });
          this.chart.setOption(this.optionData(this.list));
        });
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
          top: '35%',
          textAlign: 'center',
          left: '18.5%',
          textStyle: {
            color: '#fff',
            fontSize: 25,
            fontWeight: '400',
          },
        },
        tooltip: {
          show: true,
        },
        legend: {
          icon: 'circle',
          itemGap: 30,
          itemWidth: 20,
          itemHeight: 20,
          orient: 'vertical',
          top: '25%',
          right: '5%',
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
            center: ['19.5%', '43%'],
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
            center: ['19.5%', '43%'],
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
.department {
  position: absolute;
  left: 1008px;
  top: 262px;
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
