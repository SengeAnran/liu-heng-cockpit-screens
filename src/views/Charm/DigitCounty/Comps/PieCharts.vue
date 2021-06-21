<template>
  <div class="wrapper">
    <div class="chart-box">
      <div ref="chart" class="echart-bar" style="width: 100%; height: 100%" />
    </div>
    <div class="legent-box">
      <div class="contain">
        <div v-for="(item, index) in pieData" :key="index" class="con-box">
          <div class="first">
            <span class="circle" :style="'background: ' + pieInnerColorList[index]"></span>
            <p>{{ item.name }}</p>
          </div>
          <div>{{ item.value }} {{ item.unit }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * @name 饼状图
 * @param {Array} pieData 数据
 */
export default {
  props: {
    pieData: {
      type: Array,
      default: () => [
        { value: 12, name: '中共党员', unit: '人' },
        { value: 34, name: '共青团员', unit: '人' },
        { value: 18, name: '群众', unit: '人' },
      ],
    },
    pieInnerColorList: {
      type: Array,
      default: () => ['rgba(251, 231, 106, 1)', 'rgba(140, 212, 251, 1)', 'rgba(196, 250, 197, 1)'],
    },
    pieBorderColorList: {
      type: Array,
      default: () => ['rgba(251, 231, 106, .5)', 'rgba(140, 212, 251, .5)', 'rgba(196, 250, 197, .5)'],
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.chart = this.$echarts.init(this.$refs.chart);
    this.updateOptions();
  },
  computed: {
    values() {
      const { pieData, pieInnerColorList, pieBorderColorList } = this;
      return { pieData, pieInnerColorList, pieBorderColorList };
    },
  },
  watch: {
    values: {
      deep: true,
      handler() {
        this.updateOptions();
      },
    },
  },
  methods: {
    updateOptions() {
      const piedata = this.pieData;
      var data1 = piedata.map((i, ind) => {
        return { ...i, itemStyle: { color: this.pieInnerColorList[ind] } };
      });
      var data2 = piedata.map((i, ind) => {
        return { ...i, itemStyle: { color: this.pieBorderColorList[ind] } };
      });
      const options = {
        series: [
          {
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '55%'],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: data1,
          },
          {
            type: 'pie',
            radius: ['55%', '60%'],
            label: {
              show: false,
            },
            data: data2,
          },
        ],
      };
      this.chart.setOption(options);
    },
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  .chart-box {
    width: 40rem;
    height: 100%;
    background: url('../../../../assets/images/Charm/bg_bt.png') no-repeat center center;
  }
  .legent-box {
    flex: 1;
    height: 100%;
    .contain {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      .con-box {
        display: flex;
        color: white;
        width: 80%;
        font-size: 2.9rem;
        justify-content: space-between;
        align-items: center;
        .first {
          display: flex;
          align-items: center;
          .circle {
            display: block;
            width: 2.11rem;
            height: 2.11rem;
            border-radius: 50%;
          }
          p{
            margin-left: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
