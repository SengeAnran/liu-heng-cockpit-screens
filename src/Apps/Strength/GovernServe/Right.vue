<template>
  <div class="right">
    <div>
      <BaseTitle title="办理情况分布" :width="750" />
      <div class="title">实时情况</div>
      <div class="top-box flex">
        <div class="item flex" v-for="(item, index) in list" :key="index">
          <div class="name">
            <div>{{ item.name }}</div>
            <div class="sub-title">办理量</div>
          </div>
          <div>
            <digital :loop="loop" :endNum="item.number || 0" :data="data" :config="config"></digital>
            <!-- <CountUp :num="item.number" /> -->
            <div class="unit">件</div>
          </div>
        </div>
      </div>
      <div class="chart-box">
        <LineChart :line-data="lineData" />
      </div>
      <div class="bar-box">
        <div class="name">热门事项Top5</div>
        <Bar v-for="(item, index) in barList" :key="index" :barData="{ ...item, index: index + 1 }" />
      </div>
    </div>
    <div class="to-right">
      <BaseTitle title="评价分析" :width="750" />
      <div class="title">实时情况</div>
      <div class="top-box flex">
        <div class="item flex" v-for="(item, index) in list1" :key="index">
          <div class="name">
            <div>{{ item.name }}</div>
            <div class="sub-title">{{ item.subTitle }}</div>
          </div>
          <div>
            <div class="number">
              <span class="sign" v-show="item.hasSign"><span v-if="item.number > 0">+</span><span v-else>-</span></span>
              <digital :loop="loop" :endNum="item.number || 0" :data="data" :config="config"></digital>
              <!-- <CountUp :num="item.number" /> -->
            </div>
            <div class="unit">件</div>
          </div>
        </div>
      </div>
      <div class="chart-box">
        <PieChart :data="pieTypeData" :color="pieColor" legendType="pec" title="资金占比分析" />
      </div>
      <div class="bar-box">
        <div class="name">本月事项满意度排行Top5</div>
        <Bar
          v-for="(item, index) in barList1"
          :color="'221, 114, 227'"
          :key="index"
          :barData="{ ...item, index: index + 1 }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  getRealtimeHandling,
  getEvaluationSituation,
  getTrendOfHandlingVolume,
  getEvaluationPercent,
  geTopFiveHotIssues,
  getTopFiveSatisfactionRank,
} from '@/api/Strength/GovernServe/api';
import LineChart from '../../Overview/Medical/components/LineChart';
import PieChart from '../../Overview/Medical/components/PieChart';
import Bar from './component/Bar';
export default {
  name: 'Right',
  components: { LineChart, PieChart, Bar },
  data() {
    return {
      data: {
        content: 1000,
        // unit: '人',
      },
      loop: {
        // 是否开启数值循环
        loop1: true,
        // 多久循环一次
        time: 10000,
        // 循环几次
        count: 99999,
        // 精确的小数位数
        decimals: 0,
        // 是否开启四舍五入 类型(0是不做什么取值操作,1去掉小数部分,2.向上取整,3.下取整,4.四舍五入)
        round: 1,
        decimal: '.',
        // 整数 分割器
        separator: ',',
      },
      config: {
        content: {
          fontSize: '5rem',
          fontFamily: 'DINPro',
          color: '#6AD1F7',
        },
        unit: {
          fontSize: '2rem',
          color: '#6AD1F7',
        },
      },
      pieTypeData: [],
      lineData: {
        title: '办理量趋势',
        yname1: '件',
        name1: '当前',
        name2: '昨日',
        lineColor11: 'rgba(89, 219, 230, 1)',
        lineColor12: 'rgba(153, 170, 255, 1)',
        showArea: false,
        xData: [],
        data1: [],
        data2: [],
      },
      pieColor: ['#6182AE', ' #E772DD', '#01A1F5'],
      list: [
        {
          name: '今日',
          number: 0,
        },
        {
          name: '本周',
          number: 0,
        },
        {
          name: '月度',
          number: 0,
        },
      ],
      list1: [
        { name: '评价总数', number: 0 },
        { name: '评价总数', subTitle: '较昨日', hasSign: true, number: 0 },
      ],
      barList: [
        { name: '不动产登记', percent: 90 },
        { name: '公积金个人业务', percent: 80 },
        { name: '社保业务', percent: 60 },
        { name: '养老金业务', percent: 50 },
        { name: '出入境业务', percent: 40 },
      ],
      barList1: [
        { name: '综合受理', percent: 90 },
        { name: '残疾人，计生服务', percent: 80 },
        { name: '经济发展', percent: 60 },
        { name: '不动产', percent: 50 },
        { name: '签证', percent: 40 },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getRealtimeHandling()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.list[0].number = json[0].jrbll || 0;
          this.list[1].number = json[0].bzbll || 0;
          this.list[2].number = json[0].ydbll || 0;
        });
      getEvaluationSituation()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.list1[0].number = json[0].pjzs || 0;
          this.list1[1].number = json[0].jzrpjzs || 0;
        });
      getTrendOfHandlingVolume()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.lineData.xData = json.today.map((item) => item.sj);
          this.lineData.data1 = json.today.map((item) => item.blajs);
          this.lineData.data2 = json.last.map((item) => item.blajs);
        });
      getEvaluationPercent()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.pieTypeData = json.map((item) => {
            return { name: item.pjzt, value: item.pjzs };
          });
        });
      geTopFiveHotIssues()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.barList = json.map((item) => {
            return { name: item.sj, percent: item.blajs };
          });
        });
      getTopFiveSatisfactionRank()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.barList1 = json.map((item) => {
            return { name: item.sxfl, percent: item.pjzs };
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.right {
  position: absolute;
  top: 200px;
  right: 160px;
  width: 1650px;
  height: 1027px;
  font-size: 24px;
  display: flex;
  color: #fff;
  z-index: 999;
  > div {
    height: 100%;
    width: 50%;
  }
  .title {
    margin-top: 50px;
  }
  .top-box {
    margin-top: 20px;
    .item {
      background: url(./img/bg-title.png);
      width: 286px;
      height: 123px;
      align-items: center;
      .count-up {
        font-size: 48px;
      }
      .name {
        text-decoration: none;
        background-image: linear-gradient(to bottom, #fff 0%, #26c4bf 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .sub-title {
        color: #26c4bf;
      }
      .number {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 48px;
        .sign {
          display: inline-block;
        }
      }
      .unit {
        font-size: 22px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.5);
      }
      > div:nth-child(1) {
        width: 128px;
        text-align: center;
      }
      > div:nth-child(2) {
        width: 128px;
        text-align: center;
      }
    }
  }
  .to-right {
    padding-left: 25px;
    .item {
      background: url(./img/bg-title2.png);
      width: 382px;
      height: 123px;
      > div:nth-child(1) {
        width: 189px;
        text-align: center;
      }
      > div:nth-child(2) {
        width: 193px;
        text-align: center;
      }
    }
  }
  .chart-box {
    margin-top: 50px;
    height: 350px;
    width: 100%;
  }
  .bar-box {
    margin-top: 50px;
    width: 800px;
    .name {
      margin: 15px 0;
    }
  }
}
</style>
