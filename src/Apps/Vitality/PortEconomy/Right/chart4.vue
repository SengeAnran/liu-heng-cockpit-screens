<template>
  <div class="PierAnalysis">
    <div class="chart" ref="lineChart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getMajorEnterprisesImports } from '@/api/Vitality/PortEconomy/api';
export default {
  data() {
    return {
      chart: null,
      isYear: true,
      sj: [],
      name: [],
      line: [],
      line2: [],
      line3: [],
      line4: [],
      line5: [],
      line6: [],
    };
  },
  watch: {
    isYear() {
      this.getData();
    },
  },
  mounted() {
    this.chart = echarts.init(this.$refs.lineChart);
    this.getData();
  },
  methods: {
    async getData() {
      const data = await getMajorEnterprisesImports().request();
      const nameData = data.map((d) => d.zdqymc);
      this.name.push(nameData[0]);
      for (let j = 0; j < nameData.length; j++) {
        for (let i = 0; i < this.name.length && nameData[j] !== this.name[i]; i++) {
          if (i + 1 === this.name.length) {
            this.name.push(nameData[j]);
          }
        }
      }
      console.log(this.name);
      this.initEcharts();
    },
    initEcharts() {
      const option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          // orient: 'vertical',
          width: 800,
          icon: 'rect',
          itemWidth: 20,
          itemHeight: 20,
          itemGap: 30,
          top: 0,
          right: 0,
          textStyle: {
            color: '#fff',
            fontSize: 20,
          },
          data: ['中远船务', '鑫亚船舶', '龙山船厂', '金润石油', '海港中奥', '宏基水产'],
        },
        color: ['#6FD8EE', '#FF9798', '#31EABC'],
        grid: {
          left: '2%',
          top: '20%',
          right: '3%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          // boundaryGap: false,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgba(151, 151, 151, .5)',
              width: 1,
            },
          },
          axisLabel: {
            textStyle: {
              fontSize: '20',
              color: 'rgba(255, 255, 255, .7)',
            },
          },
          data: this.xData,
        },
        yAxis: [
          {
            type: 'value',
            name: '万美元',
            nameTextStyle: {
              fontSize: 20,
              color: 'rgba(255, 255, 255, .7)',
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(151, 151, 151, .5)',
                width: 1,
              },
            },
            axisLabel: {
              textStyle: {
                fontSize: '20',
                color: 'rgba(255, 255, 255, .7)',
              },
              formatter: (num) => num,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(151, 151, 151, .5)',
                width: 1,
              },
            },
          },
        ],
        series: [
          {
            name: '中远船务',
            type: 'line',
            data: [48185, 26439, 37862, 64187, 62225],
          },
          {
            name: '鑫亚船舶',
            type: 'line',
            data: [13714, 11008, 11239, 28955, 44761],
          },
          {
            name: '龙山船厂',
            type: 'line',
            data: [6389, 3435, 4737, 6847, 15696],
          },
          {
            name: '金润石油',
            type: 'line',
            data: [2656, 12573, 2073, 19121, 34712],
          },
          {
            name: '海港中奥',
            type: 'line',
            data: [0, 0, 0, 13156, 1973],
          },
          {
            name: '宏基水产',
            type: 'line',
            data: [1537, 922, 765, 553, 390],
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.PierAnalysis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  .chart {
    flex: 1;
  }
  .tab-wrap {
    position: absolute;
    left: 192px;
    top: 10px;
    z-index: 9999999;
    span {
      font-size: 18px;
      line-height: 18px;
      color: #999;
      cursor: pointer;
      &.active {
        color: #fff;
      }
    }
    i {
      font-style: normal;
      color: #fff;
      font-size: 16px;
      margin: 0 4px;
    }
  }
}
</style>
