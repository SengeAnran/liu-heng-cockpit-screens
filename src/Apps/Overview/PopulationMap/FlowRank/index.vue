<template>
  <div class="flow-rank">
    <BaseTitle title="户籍人口流动排名" />
    <div class="btn-list">
      <div
        @click="handleClick(index)"
        :class="{active: activeIndex===index}"
        v-for="(item, index) of btnList"
        :key="index">
        {{ item }}
      </div>
    </div>
    <div class="bar-chart" ref="barChart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'FlowRank',
  data() {
    return {
      activeIndex: 0,
      btnList: ['迁入', '迁出'],
      barData: [
        {
          label: '黑龙江',
          value: 1.2,
        },
        {
          label: '山西',
          value: 0.9,
        },
        {
          label: '武汉',
          value: 0.8,
        },
        {
          label: '银川',
          value: 0.7,
        },
        {
          label: '西宁',
          value: 0.6,
        },
        {
          label: '拉萨',
          value: 0.5,
        },
        {
          label: '昆明',
          value: 0.4,
        },
        {
          label: '长沙',
          value: 0.3,
        },
        {
          label: '福建',
          value: 0.2,
        },
      ],
    };
  },
  components: {
  },
  mounted() {
    this.chart = echarts.init(this.$refs.barChart);
    this.chart.setOption(this.optionData(this.barData));
  },
  methods: {
    handleClick(index) {
      this.activeIndex = index;
    },
    optionData(data) {
      const colors = [['#f8f375', '#ffa340'], ['#75f8c3', '#befbe3']];
      return {
        grid: {
          top: 70,
          left: 33,
          right: 150,
          bottom: 15,
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          show: false,
        },
        yAxis: {
          show: true,
          inverse: true,
          type: 'category',
          axisLine: {
            show: false,
          },
        },
        series: [{
          name: 'label',
          type: 'bar',
          barWidth: 20,
          yAxisIndex: 0,
          label: {
            show: true,
            position: [10, -10],
            color: '#fff',
            fontSize: 24,
          },
          data: data.map((item, index) => {
            return {
              value: 0,
              label: {
                formatter() {
                  return `${index + 1}. ${item.label}`;
                },
              },
            };
          }),
        },
        {
          name: 'value',
          type: 'bar',
          barWidth: 24,
          barMinHeight: 20, // 最小高度
          yAxisIndex: 0,
          label: {
            show: true,
            position: 'right',
            color: '#fff',
            offset: [10, 0],
            formatter({ value }) {
              return `{c|''}{a|${value}} {b|万人}`;
            },
            rich: {
              a: {
                padding: [0, 0, 0, 50],
                fontSize: 40,
                fontFamily: 'DIN Alternate',
              },
              b: {
                fontSize: 24,
              },
              c: {
                padding: [0, 0, 0, -15],
                width: 0,
                height: 24,
                align: 'left',
                backgroundColor: '#ff6ed',
              },
            },
          },
          data: data.map(({ value }, index) => {
            const color = index < 2 ? colors[0] : colors[1];
            return {
              value,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: color[0],
                },
                {
                  offset: 1,
                  color: color[1],
                }]),
              },
            };
          }),
        }],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.flow-rank {
  position: absolute;
  left: 1008px;
  top: 262px;
  width: 835px;
  height: 1050px;
  .btn-list {
    position: absolute;
    top: 0;
    right: 60px;
    width: 200px;
    height: 64px;
    display: flex;
    >div {
      position: relative;
      cursor: pointer;
      width: 50%;
      height: 100%;
      line-height: 64px;
      font-size: 24px;
      color: #fff;
      text-align: center;
      &.active {
        text-shadow: 1px 1px 5px deepskyblue;
      }
      &.active:before {
        position: absolute;
        left: 10px;
        top: 25px;
        width: 10px;
        height: 10px;
        content: '';
        display: block;
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }
  .bar-chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 980px;
  }
}
</style>
