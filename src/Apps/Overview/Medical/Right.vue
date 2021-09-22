<template>
  <view-template class="Medical-Right" :interval="300" @interval="getData">
    <div>
      <BaseTitle title="隔离点人数趋势图" :width="780" />
      <div class="chart-box">
        <LineChart :line-data="lineData" />
      </div>
      <BaseTitle title="疫苗接种趋势" :width="780" :top="630" />
      <div class="chart-box box1">
        <LineBarChart :data="lineBarData" />
      </div>
    </div>
    <div class="right-right">
      <BaseTitle title="隔离点信息" :width="780" />
      <div class="chart-box tables">
        <!-- <PieChart :data="pieTypeData" legendType="pec" title="患者挂号科室占比" /> -->
        <div class="flex">
          <div>隔离点名称</div>
          <div>隔离房数</div>
          <div>床位</div>
        </div>
        <div v-for="(item, i) in isoList" :key="`iso-place-${i}`" class="flex">
          <div>{{ item.gldmx }}</div>
          <div>{{ item.glfs }}</div>
          <div>{{ item.cws }}</div>
        </div>
      </div>
      <BaseTitle title="疫苗接种点信息" :width="780" :top="630" />
      <div class="chart-box box1 tables">
        <!-- <PieChart :data="pieAgeData"
                  legendType="pec"
                  title="患者年龄占比" /> -->
        <div class="flex">
          <div>疫苗接种点</div>
          <div>接种能力</div>
        </div>
        <div v-for="(item, i) in ymPlaces" :key="`ym-place-${i}`" class="flex">
          <div>{{ item.jzdmc }}</div>
          <div>{{ item.jznl }}剂/日</div>
        </div>
      </div>
    </div>
  </view-template>
</template>

<script>
import BaseTitle from './components/BaseTitle';
import LineChart from './components/LineChart';
// import PieChart from './components/PieChart';
import LineBarChart from './components/LineBarChart';
import {
  getIsolatedPointNum,
  getIsolationPlaceInfo,
  getPlaceInfo,
  getVaccinateTrend,
} from '@/api/Overview/Medical/api';

export default {
  name: 'MedicalRight',
  components: { BaseTitle, LineChart, LineBarChart },
  data() {
    return {
      isoList: [],
      ymPlaces: [],
      isoNames: [],
      pieTypeData: [
        { name: '内科', value: 10 },
        { name: '外科', value: 20 },
        { name: '妇科', value: 30 },
        { name: '皮肤科', value: 40 },
        { name: '精神科', value: 10 },
        { name: '其他', value: 20 },
      ],
      pieAgeData: [
        { name: '3岁以下', value: 10 },
        { name: '3-10岁', value: 20 },
        { name: '11-18岁', value: 30 },
        { name: '19-40岁', value: 40 },
        { name: '41-65岁', value: 30 },
        { name: '65岁以上', value: 40 },
      ],
      lineData: {
        title: '图表',
        name1: '患者住院人数',
        name2: '患者门诊人数',
        lineColor11: 'rgba(111, 216, 238, 1)',
        lineColor21: 'rgba(255, 151, 152, 1)',
        showArea: false,
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 6, 8, 9, 12],
        data2: [10, 31, 5, 16, 18, 9, 12],
      },
      lineBarData: {
        title: '图表',
        name1: '增长率',
        name2: '人数',
        lineColor: 'rgba(89, 219, 230, 1)',
        barColor1: 'rgba(245, 165, 100, .8)',
        barColor2: 'rgba(245, 165, 100, .3)',
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 26, 8, 49, 99], // 增长率
        data2: [10, 31, 5, 163, 18, 9, 199], // 人数
      },
    };
  },
  computed: {},
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.getIsolationPlaceInfo();
      this.getPlaceInfo();
      this.getVaccinateTrend();
    },
    // 隔离点信息
    async getIsolationPlaceInfo() {
      const res = await getIsolationPlaceInfo()
        .request()
        .then((res) => {
          this.isoList = res;
          res &&
            res.length &&
            res.map((item) => {
              this.isoNames.push(item.gldmx);
            });
          return this.isoNames;
        });
      // // 隔离点人数趋势图
      for (let i = 0; i < 2; i++) {
        const place = res[i];
        getIsolatedPointNum({ place })
          .request()
          .then((res) => {
            const xData = [];
            const yData = [];
            if (i === 0) {
              res &&
                res.length &&
                res.map((item) => {
                  this.lineData.name1 = item.gld;
                  xData.push(item.yf);
                  yData.push(item.glrs);
                });
              this.lineData.xData = xData;
              this.lineData.data1 = yData;
            } else {
              const data2 = [];
              res &&
                res.length &&
                res.map((item) => {
                  this.lineData.name2 = item.gld;
                  data2.push(item.glrs);
                });
              this.lineData.data2 = data2;
            }
          });
      }
    },
    getPlaceInfo() {
      getPlaceInfo()
        .request()
        .then((res) => {
          this.ymPlaces = res;
        });
    },
    getVaccinateTrend() {
      getVaccinateTrend()
        .request()
        .then((res) => {
          const xData = [];
          const data1 = [];
          const data2 = [];
          res &&
            res.length &&
            res.map((item) => {
              xData.push(item.yf);
              data1.push(item.zzl * 100);
              data2.push(item.jzrs);
            });
          this.lineBarData.xData = xData.reverse();
          this.lineBarData.data1 = data1.reverse();
          this.lineBarData.data2 = data2.reverse();
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.Medical-Right {
  width: 1650px;
  height: 977px;
  position: absolute;
  top: 150px;
  right: 159px;
  display: flex;
  z-index: 1000;
  .flex {
    display: flex;
    justify-content: space-between;
  }
  > div {
    height: 100%;
    width: 50%;
  }
  .right-right {
    right: 0;
    margin-left: 12px;
    .tables {
      font-size: 28px;
      text-align: center;
      > div {
        &:nth-child(1) {
          width: 100%;
          height: 100px;
          line-height: 100px;
        }
        &:not(:first-child) {
          margin-top: 32px;
        }
        > div {
          width: 30%;
        }
      }
    }
  }
  .chart-box {
    height: 415px;
    width: 50%;
    position: absolute;
    top: 100px;
    .pieChart {
      margin-top: 50px;
      height: 360px;
    }
  }
  .box1 {
    top: 690px;
  }
}
</style>
