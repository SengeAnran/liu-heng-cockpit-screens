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
      data: [],
      sj: [],
      name: [],
      line: [],
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
      this.data = await getMajorEnterprisesImports().request();
      const nameData = this.data.map((d) => d.zdqymc);
      const sjData = this.data.map((d) => d.sj);
      this.name.push(nameData[0]);
      this.sj.push(sjData[0]);
      // 获取企业名字
      for (let j = 0; j < nameData.length; j++) {
        for (let i = 0; i < this.name.length && nameData[j] !== this.name[i]; i++) {
          if (i + 1 === this.name.length) {
            this.name.push(nameData[j]);
          }
        }
      }
      // 获取时间
      for (let j = 0; j < sjData.length; j++) {
        for (let i = 0; i < this.sj.length && sjData[j] !== this.sj[i]; i++) {
          if (i + 1 === this.sj.length) {
            this.sj.push(sjData[j]);
          }
        }
      }
      console.log(this.name);
      for (let i = 0; i < this.name.length; i++) {
        this.line.push(this.getLine(this.name[i]));
      }
      console.log(this.line);
      this.initEcharts();
    },
    // 提取每个数组的数据
    getLine(name) {
      const line = [];
      for (let j = 0; j < this.data.length; j++) {
        if (name === this.data[j].zdqymc) {
          line.push(this.data[j].qyjkze / 10000);
        }
      }
      return line;
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
          data: this.sj,
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
            name: this.name[0],
            type: 'line',
            data: this.line[0],
          },
          {
            name: this.name[1],
            type: 'line',
            data: this.line[1],
          },
          {
            name: this.name[2],
            type: 'line',
            data: this.line[2],
          },
          {
            name: this.name[3],
            type: 'line',
            data: this.line[3],
          },
          {
            name: this.name[4],
            type: 'line',
            data: this.line[4],
          },
          {
            name: this.name[5],
            type: 'line',
            data: this.line[5],
          },
          // {
          //   name: '鑫亚船舶',
          //   type: 'line',
          //   data: [13714, 11008, 11239, 28955, 44761],
          // },
          // {
          //   name: '龙山船厂',
          //   type: 'line',
          //   data: [6389, 3435, 4737, 6847, 15696],
          // },
          // {
          //   name: '金润石油',
          //   type: 'line',
          //   data: [2656, 12573, 2073, 19121, 34712],
          // },
          // {
          //   name: '海港中奥',
          //   type: 'line',
          //   data: [0, 0, 0, 13156, 1973],
          // },
          // {
          //   name: '宏基水产',
          //   type: 'line',
          //   data: [1537, 922, 765, 553, 390],
          // },
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
