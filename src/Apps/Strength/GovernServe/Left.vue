<template>
  <div class="left">
    <BaseTitle title="预约情况分布" :width="1650" />
    <div class="flex">
      <div class="to-left">
        <div>实时情况</div>
        <div class="top-box flex">
          <div class="item flex" v-for="(item, index) in list" :key="index">
            <div class="total-name" v-if="index === 0">{{ item.name }}</div>
            <div class="name" v-else>
              <div>{{ item.name }}</div>
              <div class="sub-title">{{ item.subTitle }}</div>
            </div>
            <div>
              <div class="number">
                <span class="sign" v-show="item.hasSign"
                  ><span v-if="item.number > 0">+</span><span v-else>-</span></span
                >
                <digital :loop="loop" :endNum="item.number || 0" :data="data" :config="config"></digital>
                <!-- <CountUp :num="item.number" /> -->
              </div>
              <div class="unit">件</div>
            </div>
          </div>
        </div>
        <div class="chart-box">
          <PieChart :data="pieTypeData" :color="colors" legendType="pec" title="预约情况分析" />
        </div>
      </div>
      <div class="to-right">
        <div>实时情况</div>
        <div class="top-box flex">
          <div class="item flex" v-for="(item, index) in list1" :key="index">
            <div class="name">
              <div>{{ item.name }}</div>
              <div class="sub-title">{{ item.subTitle }}</div>
            </div>
            <div class="number">
              <digital :loop="loop" :endNum="item.number || 0" :data="data" :config="config"></digital>
              <div class="unit">件</div>
            </div>
          </div>
        </div>
        <div class="chart-box">
          <LineChart :line-data="lineData" />
        </div>
      </div>
    </div>
    <div class="to-bottom">
      <div class="title">实时预约</div>
      <div class="flex">
        <div class="picker">
          <div
            class="picker-item"
            v-for="(item, index) in dateList"
            :key="index"
            @click="onClick(item, index)"
            :class="{ active: active === index }"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="list">
          <div class="item flex" v-for="(item, index) in tableList" :key="index">
            <div class="name">
              <span>姓名：</span><span>{{ item.xm }}</span>
            </div>
            <div class="time">
              <span>预约时间：</span><span>{{ item.yysj }}</span>
            </div>
            <div class="desc">
              <span>预约事项：</span><span>{{ item.yysx }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import PieChart from '../../Overview/Medical/components/PieChart';
import LineChart from '../../Overview/Medical/components/LineChart';
import {
  getRealtimeBooking,
  getAppointmentAnalysis,
  getBookingTrend,
  getRealtimeReservationDetails,
} from '@/api/Strength/GovernServe/api';
export default {
  name: 'ProjectManageLeft',
  components: { PieChart, LineChart },
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
      list: [
        { name: '预约总数', number: 0 },
        { name: '预约总数', subTitle: '较上月', number: 0, hasSign: true },
      ],
      list1: [
        { name: '预约今日', subTitle: '数量', number: 0 },
        { name: '等待办理', subTitle: '数量', number: 0 },
      ],
      tableList: [],
      dateList: [
        { name: '前7日', value: moment().subtract('days', 6).format('YYYY-MM-DD') },
        { name: '昨日', value: moment().subtract('days', 1).format('YYYY-MM-DD') },
        { name: '今天', value: moment().format('YYYY-MM-DD') },
        { name: '明天', value: moment().add(1, 'days').format('YYYY-MM-DD') },
        { name: '后7天', value: moment().add(7, 'days').format('YYYY-MM-DD') },
      ],
      pieTypeData: [
        { name: '已受理', value: 0 },
        { name: '已取消', value: 0 },
        { name: '未到达', value: 0 },
      ],
      lineData: {
        title: '预约趋势',
        yname1: '件数',
        showArea: true,
        lineColor11: 'rgba(89, 219, 230, 1)',
        areaColor11: 'rgba(89, 219, 230, 1)',
        areaColor12: 'rgba(89, 219, 230, 0)',
        xData: [1, 2, 3, 4, 5, 6, 7],
        data1: [1, 3, 5, 6, 8, 9, 12],
      },
      colors: ['rgba(1, 94, 234, 1)', 'rgba(247, 114, 209, 1)', 'rgba(97, 130, 174, 1)'],
      active: 2,
      time: moment().format('YYYY-MM-DD'),
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    onClick(item, index) {
      this.active = index;
      this.time = item.value;
      this.fetchDetails();
    },
    loadData() {
      getRealtimeBooking()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.list[0].number = json[0].yyzs || 0;
          this.list[1].number = json[0].jsyzs || 0;
          this.list1[0].number = json[0].yyjnsl || 0;
          this.list1[1].number = json[0].ddblsl || 0;
        });
      getAppointmentAnalysis()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.pieTypeData = json.map((item) => {
            return { name: item.yyzt, value: item.yyzs };
          });
        });
      getBookingTrend()
        .request()
        .then((json) => {
          if (!json) {
            return;
          }
          this.lineData.xData = json.map((item) => item.sj);
          this.lineData.data1 = json.map((item) => item.yys);
        });
      this.fetchDetails();
    },
    fetchDetails() {
      getRealtimeReservationDetails()
        .request({ yysj: this.time })
        .then((json) => {
          if (!json) {
            return;
          }
          this.tableList = json;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$main-font: 24px;
.font-color {
  text-decoration: none;
  background-image: linear-gradient(to bottom, #fff 0%, #26c4bf 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.left {
  position: absolute;
  top: 200px;
  left: 200px;
  width: 1650px;
  height: 1027px;
  font-size: 24px;
  color: #fff;
  z-index: 999;
  .to-left,
  .to-right {
    margin-top: 50px;
    flex: 1;
    .top-box {
      width: 800px;
      margin-top: 10px;
      .item {
        .name {
          @extend .font-color;
          font-size: $main-font;
          .sub-title {
            color: #26c4bf;
          }
        }
        .total-name {
          @extend .font-color;
          font-size: 30px;
        }
        .unit {
          font-size: 22px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }
    .chart-box {
      height: 360px;
      width: 100%;
      .pieChart {
        height: 360px;
      }
    }
    .count-up {
      font-size: 48px;
    }
  }
  .to-left {
    .item {
      background: url(./img/bg-title1.png) 100% 100%;
      width: 382px;
      height: 123px;
      align-items: center;
      .number {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 48px;
        .sign {
          display: inline-block;
        }
      }
      > div:nth-child(1) {
        width: 158px;
        text-align: center;
      }
      > div:nth-child(2) {
        width: 224px;
        text-align: center;
      }
    }
  }
  .to-right {
    .item {
      background: url(./img/bg-title2.png) 100% 100%;
      width: 382px;
      height: 123px;
      align-items: center;
      > div:nth-child(1) {
        width: 188px;
        text-align: center;
      }
      > div:nth-child(2) {
        width: 194px;
        text-align: center;
      }
    }
  }
  .to-bottom {
    margin-top: 100px;
    .title {
      margin-bottom: 30px;
    }
    .picker {
      background: url(./img/bg-picker.png);
      width: 400px;
      height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      overflow-y: scroll;
      .picker-item {
        height: 40px;
        text-align: center;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.6);
        font-size: 24px;
        line-height: 40px;
      }
      .active {
        background: url(./img/picker-selected.png);
        width: 400px;
        height: 40px;
        color: #fff;
        font-size: 30px;
      }
    }
    .list {
      height: 240px;
      padding-right: 10px;
      overflow-y: scroll;
      .item {
        background: url(./img/bg-list.png);
        width: 1210px;
        height: 110px;
        margin-bottom: 20px;
        align-items: center;
        font-size: 30px;
        padding: 0 55px;
        box-sizing: border-box;
        .time {
          font-family: 'DIN Alternate';
        }
        div {
          > span:nth-child(1) {
            color: rgba(95, 221, 232, 1);
          }
        }
      }
    }
    .list::-webkit-scrollbar {
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, rgba(22, 40, 47, 0.8), rgba(16, 31, 37, 0.8));
      border: 1px solid rgba(168, 247, 237, 0.2);
      border-radius: 1px;
    }
    .list::-webkit-scrollbar-thumb {
      width: 4px;
      height: 10px;
      background: #77ffff;
      border-radius: 1px;
    }
  }
}
</style>
