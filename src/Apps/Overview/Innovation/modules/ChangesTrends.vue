<template>
  <div class="PatentList">
    <div class="sub-title">变化趋势</div>
    <div class="chart" ref="lineChart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { getPatentNumTrend } from '@/api/Overview/Innovation/api';
export default {
  data() {
    return {
      year: [],
      fmzlsl: [],
      wgsjzlsl: [],
      syxxzlsl: [],
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.lineChart);
    this.loadData();
  },
  methods: {
    loadData() {
      getPatentNumTrend()
        .request()
        .then((json) => {
          const data = json.sort(this.sortYear);
          this.year = data.map((item) => item.nf);
          this.fmzlsl = data.map((item) => item.fmzlsl);
          this.wgsjzlsl = data.map((item) => item.wgsjzlsl);
          this.syxxzlsl = data.map((item) => item.syxxzlsl);
          this.initEcharts();
        });
    },
    sortYear(a, b) {
      return a.nf - b.nf;
    },
    initEcharts() {
      const option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          icon: 'rect',
          itemWidth: 20,
          itemHeight: 20,
          itemGap: 50,
          top: 0,
          right: 0,
          textStyle: {
            color: '#fff',
            fontSize: 20,
          },
          data: ['发明专利', '外观设计专利', '实用新型'],
        },
        color: ['rgba(111, 216, 238, 1)', 'rgba(255, 151, 152, 1)', 'rgba(49, 234, 188, 1)'],
        grid: {
          left: '0%',
          top: '12%',
          right: '5%',
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
          data: this.year,
        },
        yAxis: {
          type: 'value',
          name: '人数',
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
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(151, 151, 151, .5)',
              width: 1,
            },
          },
        },
        series: [
          {
            name: '发明专利',
            type: 'line',
            data: this.fmzlsl,
          },
          {
            name: '外观设计专利',
            type: 'line',
            data: this.wgsjzlsl,
          },
          {
            name: '实用新型',
            type: 'line',
            data: this.syxxzlsl,
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.PatentList {
  margin-bottom: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.sub-title {
  font-size: 24px;
  line-height: 24px;
  min-height: 24px;
  color: #fff;
  margin-bottom: 20px;
}
.chart {
  flex: 1;
}
</style>
