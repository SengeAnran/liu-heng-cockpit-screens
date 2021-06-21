<template>
  <div class="complaint">
    <BaseTitle title="信访投诉方式占比" />
    <div class="box">
      <div class="pie-chart" ref="pieChart" />
      <div class="legend">
        <div class="legend-item" v-for="(item, index) in list" :key="index">
          <div class="cir" :style="{ background: colors[index] }"></div>
          <div class="name">{{ item.name }}</div>
          <BarItem :rate="(item.value / getTotal) * 100" :color="colors[index]" />
          <div class="rate">{{ ((item.value / getTotal) * 100).toFixed(1) }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BarItem from './barItem';
import * as echarts from 'echarts';
export default {
  name: 'Complaint',
  data() {
    return {
      list: [
        { value: 1048, name: '电话信访' },
        { value: 735, name: '来信信访' },
        { value: 580, name: '网络举报' },
        { value: 580, name: '其他方式' },
      ],
      colors: ['#357CFF', '#77FF5C', '#FFAC5B', '#77FFFF'],
    };
  },
  components: { BarItem },
  mounted() {
    this.chart = echarts.init(this.$refs.pieChart);
    this.chart.setOption(this.optionData(this.list));
  },
  computed: {
    getTotal() {
      return this.list.reduce((sum, cur) => {
        return sum + cur.value;
      }, 0);
    },
  },
  methods: {
    optionData(data) {
      return {
        title: {
          text: `{a|${this.getTotal}}次 \n {b|截止2021-05}`,
          top: '35%',
          textAlign: 'center',
          left: '18.5%',
          textStyle: {
            color: '#fff',
            rich: {
              a: {
                fontSize: 56,
                fontFamily: 'DIN Alternate',
              },
              b: {
                fontSize: 22,
                fontFamily: 'DIN Alternate',
                padding: [0, 0, 0, 10],
              },
            },
          },
        },
        color: this.colors,
        tooltip: {
          show: false,
        },
        legend: {
          show: false,
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
            data: data,
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
.complaint {
  position: absolute;
  left: 1008px;
  top: 805px;
  width: 835px;
  height: 535px;
  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .pie-chart {
      width: 100%;
      height: 460px;
    }
    .legend {
      position: absolute;
      font-size: 28px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #fcfcff;
      right: 0;
      .legend-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        .cir {
          width: 12px;
          height: 12px;
          margin-right: 10px;
          background: #357cff;
          border-radius: 50%;
        }
        .rate {
          font-family: DIN Alternate;
        }
      }
    }
  }
}
</style>
