<template>
  <div class="satisfaction">
    <BaseTitle title="社会满意度" />
    <div class="bar-chart" ref="barChart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'Satisfaction',
  data() {
    return {
      chart: null,
      list: [
        {
          name: '幸福小区',
          value: 24,
        },
        {
          name: '蓝色小区',
          value: 40,
        },
        {
          name: '西湖小区',
          value: 54,
        },
        {
          name: '绿洲小区',
          value: 72,
        },
        {
          name: '新华小区',
          value: 64,
        },
        {
          name: '凤凰小区',
          value: 58,
        },
        {
          name: '东隅小区',
          value: 68,
        },
        {
          name: '金陵小区',
          value: 84,
        },
        {
          name: '白树小区',
          value: 29,
        },
        {
          name: '晨曦小区',
          value: 43,
        },
      ],
    };
  },
  components: {
  },
  mounted() {
    this.chart = echarts.init(this.$refs.barChart);
    this.chart.setOption(this.optionData(this.list));
  },
  methods: {
    optionData(data) {
      return {
        grid: {
          top: '10%',
          left: '3.5%',
          right: '5%',
          bottom: '14%',
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.5)',
            },
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
            length: 12,
            lineStyle: {
              color: '#fff',
              width: 2,
            },
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
              fontSize: 23,
            },
          },
          splitLine: {
            show: false,
          },
          boundaryGap: true,
          data: data.map((item) => item.name),
        },
        yAxis: {
          name: '满意度指数',
          type: 'value',
          nameTextStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 22,
          },
          splitLine: {
            show: true,
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
            show: false,
          },
        },
        series: [{
          data: data.map((item) => {
            return item.value;
          }),
          type: 'bar',
          barWidth: 18,
          label: {
            show: true,
            position: 'top',
            distance: 10,
            color: '#FFFFFF',
            textStyle: {
              fontSize: 22,
              fontFamily: 'DIN Alternate',
            },
          },
          itemStyle: {
            borderColor: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [{
                offset: 0,
                color: 'rgba(0, 234, 235, 0.4)',
              },
              {
                offset: 1,
                color: '#00eaeb',
              },
              ]),
            shadowColor: 'blue',
            shadowBlur: 12,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            borderWidth: 2,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: this.resolveOpacity('0, 255, 255'),
            },
          },
        }],
      };
    },
    resolveOpacity(rc) {
      const opacity = [0.5, 0.3, 0.2, 0.3, 0.5];
      const cS = [];
      for (let i = 0; i < 5; i++) {
        cS.push({
          offset: i / 4,
          color: `rgba(${rc}, ${opacity[i]})`,
        });
      }
      return cS;
    },
  },
};
</script>
<style lang="scss" scoped>
.satisfaction {
  position: absolute;
  right: 160px;
  top: 262px;
  width: 1650px;
  height: 535px;
  .bar-chart {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 460px;
  }
}
</style>
