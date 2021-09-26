<template>
  <div class="water-quality">
    <BaseTitle title="饮用水源地水质状况" />
    <div class="nav">
      <div class="nav-item" v-for="(item, index) in list" :key="index">
        <div class="name">
          <div>
            <img :src="item.url" />
          </div>
          <div>
            {{ item.name }}
          </div>
        </div>
        <div class="value" v-if="index === 2 || index === 3">
          <CountUp :num="item.value" />
        </div>
        <div class="value" v-else>{{ item.value }}</div>
      </div>
    </div>
    <div class="chart">
      <BaseTitle title="涉水污染源检测" />
      <div>实时情况</div>
      <div class="nav-box">
        <div class="item" v-for="(item, index) in list1" :key="index">
          <div class="name">
            <div>{{ item.name }}</div>
            <div class="sub-title">{{ item.subTitle }}</div>
          </div>
          <div class="number">
            <CountUp :num="item.number" />
            <div class="unit">{{ item.unit }}</div>
          </div>
          <div class="number" v-show="item.number1">
            <CountUp :num="item.number1" />
            <div class="unit">{{ item.unit1 }}</div>
          </div>
        </div>
      </div>
      <div class="chart-box">
        <LineChart title="排放量" height="300" :chartData="lineData" :colors="['#31EABC', '#59DBE6']" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  getDrinkingWaterSources,
  getWaterPollutionSourceDetection,
  getMonthlySewage,
} from '@/api/Strength/Environmental/api';
import LineChart from '../components/lineChart';
export default {
  name: 'WaterQuality',
  components: {
    LineChart,
  },
  data() {
    return {
      keyValues: {
        codpfl: 'COD排放',
        adpfl: '氨氮排放',
      },
      lineData: {
        // xAxisData: ['1', '1', '2', '2', '3', '3', '3'],
        data: [
          {
            name: 'COD排放',
            data: [3.3, 3.1, 1.8, 4.4, 2.7],
          },
          {
            name: '氨氮排放',
            data: [0.06, 0.08, 0.18, 0.03, 0.03],
          },
        ],
      },
      list: [
        {
          name: '水质质量',
          value: '达标',
          url: require('./img/shuizhi.png'),
        },
        {
          name: '水质等级',
          value: 'I级',
          url: require('./img/shuizhidengji.png'),
        },
        {
          name: '酸碱度',
          value: 0,
          url: require('./img/suanjiandu.png'),
        },
        {
          name: '溶解氧',
          value: 0,
          url: require('./img/yangqi.png'),
        },
      ],
      list1: [
        { name: '全区涉水', subTitle: '污染源', number: 0, unit: '家' },
        { name: '预警值', subTitle: '出现', number: 0, unit: '全年', number1: 0, unit1: '今日' },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getDrinkingWaterSources()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }

          this.list[0].value = json[0].szzk || '';
          this.list[1].value = json[0].szzk || '';
          this.list[2].value = json[0].sjd || 0;
          this.list[3].value = json[0].rjy || 0;
        });
      getWaterPollutionSourceDetection()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.list1[0].number = json[0].qqsswryjs || 0;
          this.list1[1].number = json[0].qnyjzcxcs || 0;
          this.list1[1].number1 = json[0].jryjzcxcs || 0;
        });
      // getMonthlySewage()
      //   .request()
      //   .then((json) => {
      //     if (!json) {
      //       return;
      //     }
      //     const data = [];
      //     // this.lineData.xAxisData = json.map((item) => item.yf);
      //     Object.keys(this.keyValues).forEach((key) => {
      //       data.push({ name: this.keyValues[key], data: json.map((item) => item[key]) });
      //     });
      //     this.lineData.data = data;
      //   });
    },
  },
};
</script>
<style lang="scss" scoped>
$font-family: ' Source Han Sans CN';
.water-quality {
  position: absolute;
  top: 200px;
  left: 3950px;
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
      }
    }
    .nav-item:nth-child(3),
    .nav-item:nth-child(4) {
      > div:nth-child(2) {
        color: #66ccff;
      }
    }
  }
  .chart {
    margin-top: 127px;
    .font-color {
      text-decoration: none;
      background-image: linear-gradient(to bottom, #fff 0%, #26c4bf 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .nav-box {
      // width: 800px;
      margin-top: 10px;
      @extend .flex;
      .item {
        @extend .flex;
        background: url(../img/bg-item1.png);
        width: 382px;
        height: 123px;
        text-align: center;
        .name {
          @extend .font-color;
          font-size: 24px;
          .sub-title {
            color: #26c4bf;
          }
        }
        .count-up {
          font-size: 48px;
          font-weight: 500;
          color: #ffffff;
        }
        .unit {
          font-size: 22px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
        }
      }
      .item:nth-child(1) {
        > div:nth-child(1) {
          width: 148px;
          text-align: center;
        }
        > div:nth-child(2) {
          width: 170px;
          text-align: center;
        }
      }
      .item:nth-child(2) {
        > div:nth-child(1) {
          width: 148px;
          text-align: center;
        }
        > div:nth-child(2),
        > div:nth-child(3) {
          width: 90px;
          text-align: center;
        }
      }
    }
    .chart-box {
      height: 360px;
      width: 100%;
      .line-chart {
        margin-top: 15px;
      }
    }
  }
}
</style>
