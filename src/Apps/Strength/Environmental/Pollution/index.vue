<template>
  <div class="pollution">
    <BaseTitle title="涉气污染源检测" />
    <span class="small-title-1">实时情况</span>
    <div class="top-box">
      <div>
        <div>
          <CountUp :num="topList[0].value" />
          <div>家</div>
        </div>
      </div>
      <div>
        <div class="first">
          <CountUp :num="topList[1].year" />
          <div>全年</div>
        </div>
        <div>
          <CountUp :num="topList[1].today" />
          <div>今日</div>
        </div>
      </div>
    </div>
    <div class="pie-chart" ref="pieChart" />
    <span class="small-title-2">污染物减排分析</span>
    <div class="bottom-box">
      <div v-for="(item, index) of bottomList" :key="index">
        <div class="status">{{ item.status }}</div>
        <CountUp :num="item.value" />
        <span class="percent">%</span>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
import { gasPollutionSourceDetection, getGasrelatedSources, getGasPollutionSources } from '@/api/Strength/Environmental/api';
export default {
  name: 'Pollution',
  data() {
    return {
      topList: [
        {
          name: '全区涉气污染源',
          value: 0,
        },
        {
          name: '预警值出现',
          year: 0,
          today: 0,
        },
      ],
      list: [],
      title: '排放分析',
      bottomList: [
        {
          name: '二氧化硫排放',
          value: 0,
          status: '完成',
        },
        {
          name: '二氧化碳排放',
          value: 0,
          status: '完成',
        },
      ],
    };
  },
  components: {
  },
  mounted() {
    this.chart = echarts.init(this.$refs.pieChart);
    this.loadData();
  },
  methods: {
    loadData() {
      gasPollutionSourceDetection().request().then((json) => {
        this.topList[0].value = json[0].qqsqwryjs || 0;
        this.topList[1].year = json[0].qnyjzcxcs || 0;
        this.topList[1].today = json[0].jryjzcxcs || 0;
      });

      getGasrelatedSources().request().then((json) => {
        this.list = json.map((item) => {
          item.name = item.wrwlx;
          item.value = item.pfl || 0;
          return item;
        });
        this.chart.setOption(this.optionData(this.list));
      });

      getGasPollutionSources().request().then((json) => {
        this.bottomList.forEach((item) => {
          json.forEach((item1) => {
            if (item.name.includes(item1.wrwlx)) {
              item.value = +((item1.jpwcl / item1.jpmbl) * 100).toFixed(0) || 0;
            }
          });
        });
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
          text: `${this.title.slice(0, 2)}\n${this.title.slice(2)}`,
          top: '37%',
          textAlign: 'center',
          left: '21%',
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
          top: '26%',
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
            radius: ['50%', '70%'],
            center: ['22%', '48%'],
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
            radius: ['45%', '77%'],
            center: ['22%', '48%'],
            label: {
              show: false,
            },
            data: [{
              value: 1,
            }],
            z: -1,
          },
        ],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.pollution {
  position: absolute;
  left: 1008px;
  top: 262px;
  width: 835px;
  height: 1060px;
  // background: rgba(0, 255, 255, 0.2);
  .small-title-1 {
    position: absolute;
    top: 85px;
    color: #fff;
    font-size: 24px;
  }
  .small-title-2 {
    position: absolute;
    top: 660px;
    color: #fff;
    font-size: 24px;
  }
  .top-box {
    position: absolute;
    top: 140px;
    width: 100%;
    height: 123px;
    display: flex;
    >div {
      width: 50%;
      color: #fff;
      &:first-child {
        background: url('./img/item-1.png') no-repeat;
        >div {
          margin-left: 150px;
          width: 230px;
          height: 100%;
          text-align: center;
          // background: rgba(0, 255, 255, 0.2);
          .count-up {
            display: inline-block;
            margin-top: 16px;
            font-size: 48px;
          }
          >div {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
      &:last-child {
        background: url('./img/item-2.png') no-repeat;
        display: flex;
        >div {
          width: 108px;
          height: 100%;
          text-align: center;
          .count-up {
            display: inline-block;
            margin-top: 16px;
            font-size: 48px;
          }
          >div {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.7);
          }
        }
        .first {
          margin-left: 165px;
        }
      }
    }
  }
  .pie-chart {
    position: absolute;
    top: 260px;
    width: 100%;
    height: 400px;
  }
  .bottom-box {
    position: absolute;
    bottom: 10px;
    width: 800px;
    height: 370px;
    background: url('./img/ball-bg.png');
    >div {
      position: absolute;
      top: 62px;
      width: 240px;
      height: 240px;
      text-align: center;
      .status {
        font-size: 32px;
        margin-top: 32px;
        font-family: 'SourceHanSansSC';
      }
      .count-up {
        font-size: 75px;
        font-family: 'Oswald';
      }
      .percent {
        font-size: 40px;
        font-family: 'Oswald';
      }
      .name {
        font-size: 25px;
      }

      &:first-child {
        left: 110px;
        color: #a0fcbf;
        .count-up {
          background-image:-webkit-linear-gradient(bottom, #a0fcbf, #d8feef);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
        .percent {
          background-image:-webkit-linear-gradient(bottom,#a0fcbf, #d8feef);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
      }
      &:last-child {
        left: 420px;
        color: #b3fdf1;
        .count-up {
          background-image:-webkit-linear-gradient(bottom, #b3fdf1, #e0fbfe);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
        .percent {
          background-image:-webkit-linear-gradient(bottom,#b3fdf1, #e0fbfe);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
      }
    }
  }
}
</style>
