<template>
  <div class="left-2">
    <Title>水路信息</Title>
    <div class="flex">
      <div class="content-xinxi" :class="clickIndex === 1 ? 'active' : ''" @click="clickIndex = 1">水路客运</div>
      <div class="content-xinxi" :class="clickIndex === 2 ? 'active' : ''" @click="clickIndex = 2">航线信息</div>
    </div>

    <div class="block" v-if="clickIndex == 1">
      <div class="line titles">
        <div class="second_item">类型</div>
        <div class="second_item">数量</div>
        <div class="second_item">客位</div>
        <div class="second_item">车位(个)</div>
      </div>
      <div class="line" v-for="(item, index) in passenger" :key="index">
        <div class="second_item">{{ item.name }}</div>
        <div class="second_item">{{ item.number }}</div>
        <div class="second_item">{{ item.seat }}</div>
        <div class="second_item">{{ item.shiftLine }}</div>
      </div>
    </div>
    <div class="block1" v-if="clickIndex == 2">
      <div class="hangxianxxinxi" v-for="(item, index) in dataHangxian" :key="index">
        <div class="title">
          <div>{{ item.name }}</div>
          <div>-----</div>
          <div>{{ item.name1 }}</div>
        </div>
        <div class="body">
          <div class="title">
            <div>客船类型</div>
            <div>时刻表</div>
          </div>
          <div class="body-content" :class="index == 1 ? 'font1' : ''" v-for="(it, index) in item.time" :key="index">
            <div style="width: 300px; margin-left: 20px">{{ it.name }}</div>
            <div class="time">
              <div v-for="(time, index) in it.time" :key="index">{{ time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Title>道路货运及维修</Title>
    <div class="second_block">
      <div class="item" v-for="(item, index) in dataList" :key="index">
        <div class="first_item">
          <div style="font-size: 48px">
            <!-- {{ item.number }} -->
            <digital :loop="loop" :endNum="item.number || 0" :data="data" :config="config"></digital>
          </div>
          <div style="margin-top: 20px; margin-left: 30px">
            {{ item.unit }}
          </div>
          <!-- {{ item.unit }} -->
        </div>
        <div class="second_item">{{ item.name }}</div>
      </div>
    </div>
    <!--    <LineChart />-->
  </div>
</template>
<script>
import Title from './Title';
// import Indicator from './Indicator';
// import LineChart from './LineChart';
import {
  getWaterwayRoute,
  getWaterwayTransport,
  getRoadMaintain,
} from '@/api/Overview/Traffic';

export default {
  components: {
    Title,
    // Indicator,
    // LineChart,
  },
  data() {
    return {
      // 记录点击的位置
      clickIndex: 2,
      data: {
        content: 1000,
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
          fontSize: '4rem',
          fontFamily: 'DINPro',
          color: '#6AD1F7',
        },
        unit: {
          fontSize: '2rem',
          color: '#6AD1F7',
        },
      },
      passenger: [
        {
          name: '滚动船',
          number: '7艘',
          seat: 1611,
          shiftLine: 7,
        },
        {
          name: '客船',
          number: '14艘',
          seat: 3041,
          shiftLine: '-',
        },
        {
          name: '市际班车',
          number: '7条',
          seat: '-',
          shiftLine: '-',
        },
        {
          name: '码头',
          number: '4座',
          seat: '-',
          shiftLine: '-',
        },
      ],
      dataList: [
        {
          name: '工程车总数',
          number: 68,
          unit: '辆',
        },
        {
          name: '普通货车总数',
          number: 40,
          unit: '辆',
        },
        {
          name: '危运企业',
          number: 2,
          unit: '家',
        },
        {
          name: '二三类维修厂总数',
          number: 13,
          unit: '家',
        },
        {
          name: '从业人员总数',
          number: 548,
          unit: '人',
        },
        {
          name: '危险品车总数',
          number: 29,
          unit: '辆',
        },
      ],
      dataHangxian: [
        {
          name: '大岙',
          name1: '沈家门',
          time: [
            {
              name: '普通客船（对开）',
              time: ['07:30', '12:30', '15:40'],
            },
            {
              name: '高速客船（对开）',
              time: ['08:20 ', '09:30 ', '10:30 ', ' 14:00', ' 16:20'],
            },
          ],
        },
        {
          name: '大岙',
          name1: '定海（高速船）',
          time: [
            {
              name: '大岙开',
              time: ['07:20', '10:00', '13:00', '14:20', '16:10'],
            },
            {
              name: '定海开',
              time: ['07:30', '10:00', '13:00', '14:30', '16:10'],
            },
          ],
        },
        {
          name: '大岙',
          name1: '长峙',
          time: [
            {
              name: '客滚船 （对开）',
              time: ['07:30', '09:20', '11:00', '13:00', '15:00', '17:00', '19:00'],
            },
            {
              name: '高速客船 长峙开',
              time: ['07:15', '14:00'],
            },
            {
              name: '大岙开',
              time: ['10:20', '16:30'],
            },
          ],
        },
        {
          name: '台门',
          name1: '沈家门（普通客船）',
          time: [
            {
              name: '台门开',
              time: ['07:30 ', '12:30', '15:30'],
            },
            {
              name: '沈家门开',
              time: ['07:30 ', '12:30', '15:30'],
            },
          ],
        },
        {
          name: '沙岙',
          name1: '郭巨（客滚船）',
          time: [
            {
              name: '沙岙开',
              time: ['17:30', '18:30 ', '19:30', ' 20:30', '22:10'],
            },
            {
              name: '郭巨开',
              time: ['17:30 ', '18:30', '19:30', '20:30', '21:20', '23:00'],
            },
          ],
        },
        {
          name: '佛渡',
          name1: '沙岙（客滚船）',
          time: [
            {
              name: '佛渡开',
              time: ['06:40', '08:50', '10:20', '11:30 ', '14:00', '14:50', '17:00'],
            },
            {
              name: '沙岙开',
              time: ['07:10', '09:20', '10:50 ', '12:00', '14:30', '15:20', ' 17:30'],
            },
          ],
        },
        {
          name: '台门',
          name1: '悬山各小岛（渡船）',
          time: [
            {
              name: '台门开',
              time: ['06:40(停靠黄沙)', ' 08:00', ' 09:20(停靠黄沙)', '10:20 ', ' 13:00 ', '14:10', '16:00'],
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getWaterwayRoute();
      this.getWaterwayTransport();
      this.getRoadMaintain();
      this.getRoadMonitor();
    },
    // 水路信息航线信息
    async getWaterwayRoute() {
      const res = await getWaterwayRoute();
      // console.log(res, 111111);
    },
    // 水路信息客运信息
    async getWaterwayTransport() {
      const res = await getWaterwayTransport();
      this.passenger = res.map((item) => {
        return {
          name: item.type,
          number: item.count,
          seat: item.seat || '-',
          shiftLine: item.parkNum || '-',
        };
      });
    },
    // 道路货运及维修
    async getRoadMaintain() {
      const res = await getRoadMaintain();
      this.dataList[0].number = res[0].vehicle;
      this.dataList[1].number = res[0].trunck;
      this.dataList[2].number = res[0].danger;
      this.dataList[3].number = res[0].repair;
      this.dataList[4].number = res[0].employee;
      this.dataList[5].number = res[0].dangerVehicle;
    },
  },
};
</script>
<style lang="scss" scoped>
.hangxianxxinxi {
  margin-top: 20px;
  width: 800px;
  height: 261px;
  border: 1px solid;
  border-image: linear-gradient(0deg, #ffffff) 10 10;
  background: url('./img/biaodan-bg.png') no-repeat 100% 100%;
  opacity: 0.8;
  border-radius: 14px;
  .title {
    // width: 250px;
    line-height: 70px;
    display: flex;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    div {
      width: auto;
      padding: 0px 0px 0px 20px;
    }
  }
  .body {
    margin: 20px;
    height: 170px;
    border: 1px solid;
    overflow: auto;
    .title {
      display: flex;
      line-height: normal;
      div {
        width: 300px;
      }
    }
    .body-content {
      font-size: 28px;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: #77ffff;
      display: flex;
      .time {
        overflow: auto;
        height: 60px;
        width: 500px;
        div {
          float: left;
          width: 100px;
          margin-left: 20px;
        }
      }
    }
    .font1 {
      color: #edbf83;
    }
  }
}

.content-xinxi {
  font-size: 28px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.2;
  padding: 20px 30px 0px 0px;
}
.active {
  opacity: 1;
}
.flex {
  display: flex;
}
.left-2 {
  position: absolute;
  top: 26.4rem;
  left: 100rem;
  width: 80rem;
  .block {
    margin-top: 27px;
    margin-bottom: 15px;
    .titles {
      .second_item {
        font-size: 24px;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .line {
      margin: 1.4rem 0;
      width: 793px;
      height: 64px;
      line-height: 44px;
      background: url('./img/list-bg.png') no-repeat 100% 100%;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: #aecaca;
      display: flex;
      justify-content: space-around;
      &:first-child {
        height: 74px;
        line-height: 55px;
      }
      .item {
        width: 15rem;
        padding: 0.9rem;
      }
      .second_item {
        font-size: 24px;
        width: 17rem;
        padding: 0.9rem;
        text-align: right;
        &:first-child {
          width: 12rem;
          text-align: left;
          margin-left: 2rem;
        }
        &:nth-child(2) {
          width: 11rem;
        }
        &:last-child {
          margin-right: 4rem;
        }
      }
    }
  }
  .block1 {
    width: 850px;
    height: 400px;
    // margin-top: 27px;
    overflow: auto;
  }
  .second_block {
    font-size: 22px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15.1px;
    .item {
      width: 265px;
      height: 175px;
      background: url('./img/dlhyjwx.png') 100% 100%;
      margin-bottom: 18px;
      //margin: 2rem;
      .first_item {
        align-items: center;
        display: flex;
        justify-content: center;
        font-family: DINPro;
        font-weight: 500;
        text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.24);
        margin-top: 40px;
        text-align: center;
        background: linear-gradient(180deg, #ffffff 0%, #4ecdd8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .second_item {
        margin-top: 5px;
        text-align: center;
        font-family: DINPro;
        font-weight: 500;
        color: #ffffff;
        line-height: 44px;
        text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.24);
        background: linear-gradient(180deg, #ffffff 0%, #4ecdd8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  // outline: 1px solid red;
}
</style>
