<template>
  <div class="air-quality">
    <BaseTitle title="全县空气质量状况" />
    <div class="nav">
      <div class="nav-item" v-for="(item, index) in list" :key="index">
        <div class="name">
          <div>
            <img :src="item.url" />
          </div>
          <div>{{ item.name }}</div>
        </div>
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
import { getCountyAirQualityStatus, getAirQualityTrends } from '@/api/Strength/Environmental/api';
export default {
  name: 'AirQuality',
  components: {
    LineChart,
  },
  data() {
    return {
      keyValues: {
        pm: 'PM2.5',
        yll: '优良率',
      },
      lineData: {
        yAxisData: [
          { min: 0, max: 100, splitNumber: 5, interval: 25, unit: '%' },
          {
            min: 0,
            max: 50,
            splitNumber: 6,
            interval: 10,
            unit: 'ug',
          },
        ],
        xAxisData: [],
        data: [
          {
            name: 'PM2.5',
            data: [],
          },
          {
            name: '优良率',
            data: [],
          },
        ],
      },
      list: [
        {
          name: '空气质量',
          value: '',
          url: require('./img/kongqi.png'),
        },
        {
          name: 'AQI',
          value: 0,
          unit: '',
          url: require('./img/aqi-wx.png'),
        },
        {
          name: 'PM2.5',
          value: 0,
          unit: 'ug/m3',
          url: require('./img/PM2.5.png'),
        },
        {
          name: '空气等级',
          value: '',
          url: require('./img/dengji.png'),
        },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getCountyAirQualityStatus()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.list[0].value = json[0].kqzl || '';
          this.list[1].value = json[0].aqi || '';
          this.list[2].value = json[0].pm25 || '';
          this.list[3].value = json[0].kqdj || '';
          // console.log(json);
        });
      getAirQualityTrends()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          const data = [];
          this.lineData.xAxisData = json.yll.map((item) => item.value);
          Object.keys(this.keyValues).forEach((item) => {
            data.push({ name: this.keyValues[item], data: json[item].map((item) => item.label) });
          });
          this.lineData.data = data;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
$font-family: ' Source Han Sans CN';
.air-quality {
  position: absolute;
  top: 200px;
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
      padding: 10px;
      box-sizing: border-box;
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
      .value,
      .unit {
        color: #ffe566;
      }
    }
    .nav-item:nth-child(3) {
      > .value {
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
