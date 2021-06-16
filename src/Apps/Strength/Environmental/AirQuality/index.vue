<template>
  <div class="air-quality">
    <BaseTitle title="全县空气质量状况" />
    <div class="nav">
      <div class="nav-item" v-for="(item, index) in list" :key="index">
        <div class="name">{{ item.name }}</div>
        <div class="value" v-if="item.unit">
          <CountUp :num="item.value" /><span class="unit">{{ item.unit }}</span>
        </div>
        <div class="value" v-else>{{ item.value }}</div>
      </div>
    </div>
    <div class="chart">
      <BaseTitle title="空气质量变化趋势" />
      <LineChart title="优良率" :chartData="lineData" />
    </div>
  </div>
</template>

<script>
import LineChart from '../components/lineChart';
export default {
  name: 'AirQuality',
  components: {
    LineChart,
  },
  data() {
    return {
      lineData: {
        yAxisData: [
          { min: 0, max: 100, splitNumber: 5, interval: 25, unit: '%' },
          {
            max: 50,
            splitNumber: 6,
            interval: 10,
            unit: 'ug',
          },
        ],
        xAxisData: ['1', '1', '2', '2', '3', '3', '3'],
        data: [
          {
            name: 'PM2.5',
            data: [12, 22, 33, 55, 34, 66],
          },
          {
            name: '优良率',
            data: [12, 32, 33, 4, 9, 88],
          },
        ],
      },
      list: [
        {
          name: '空气质量',
          value: '优',
        },
        {
          name: 'AQI',
          value: 100,
          unit: '%',
        },
        {
          name: 'PM2.5',
          value: 23,
          unit: 'ug/m3',
        },
        {
          name: '空气等级',
          value: 'II 清新',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
$font-family: ' Source Han Sans CN';
.air-quality {
  position: absolute;
  top: 263px;
  left: 160px;
  width: 825px;
  height: 1027px;
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .nav {
    @extend .flex;
    margin-top: 30px;
    .nav-item {
      @extend .flex;
      background: url(../img/bg-item.png);
      width: 391px;
      height: 191px;
      > .name {
        width: 168px;
        text-align: center;
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        background-image: -webkit-linear-gradient(bottom, #4ecdd8, white);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
      > .value {
        width: 168px;
        text-align: center;
        font-size: 36px;
        font-family: font-family;
        font-weight: 400;
        color: #99ff99;
        .unit {
          font-size: 18px;
          font-family: font-family;
          font-weight: 500;
          color: #66ccff;
        }
      }
    }
    .nav-item:nth-child(2) {
      > div:nth-child(2) {
        color: #ffe566;
      }
    }
    .nav-item:nth-child(3) {
      > div:nth-child(2) {
        color: #66ccff;
      }
    }
  }
  .chart {
    margin-top: 65px;
    .line-chart {
      margin-top: 15px;
    }
  }
}
</style>
