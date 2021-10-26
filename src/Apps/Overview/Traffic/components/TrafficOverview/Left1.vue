<template>
  <div class="left-1">
    <Title>公路桥隧</Title>
    <!--    <BarPie />-->
    <div class="top-block">
      <div class="item" v-for="(item, index) in highway" :key="index">
        <div class="item-top">
          <div class="item-top-img">
            <img :src="item.src" alt="" />
          </div>
          <div
            class="item-top-name"
            :class="{ xdcolor: index === 0, cdcolor: index === 1, sdcolor: index === 2, qlcolor: index === 3 }"
          >
            {{ item.name }}统计
          </div>
        </div>
        <div class="item-bottom">
          <div class="item-span">
            <div class="item-span-number">
              <!-- {{ item.number }} -->
              <digital :loop="loop" :endNum="item.number || 0" :data="data" :config="config"></digital>
            </div>
            <div class="item-span-name">{{ item.name }}数量</div>
          </div>
          <div class="item-span">
            <div class="item-span-number">
              <!-- {{ item.length }} -->
              <digital :loop="loop" :endNum="item.length || 0" :data="data" :config="config"></digital>
            </div>
            <div class="item-span-name">总长({{ item.unit }})</div>
          </div>
        </div>
      </div>
    </div>
    <Title>道路客运</Title>
    <div class="block">
      <div class="line titles">
        <div class="second_item">车辆类型</div>
        <div class="second_item">数量(辆)</div>
        <div class="second_item">客位</div>
        <div class="second_item">班线(条)</div>
      </div>
      <div class="line" v-for="(item, index) in passenger" :key="index">
        <div class="second_item">{{ item.name }}</div>
        <div class="second_item">{{ item.number }}</div>
        <div class="second_item">{{ item.seat }}</div>
        <div class="second_item">{{ item.shiftLine }}</div>
      </div>
    </div>
    <!--    <Bar1 />-->
  </div>
</template>
<script>
import Title from './Title';
// import BarPie from './BarPie';
// import Bar1 from './Bar1';
import {
  getStatistics,
  getRoadTransport,
} from '@/api/Overview/Traffic';

export default {
  components: {
    Title,
    // BarPie,
    // Bar1,
  },
  data() {
    return {
      highway: [
        {
          name: '县道',
          number: '4',
          length: '',
          src: require('./img/xdtj.png'),
          unit: '公里',
        },
        {
          name: '村道',
          number: '90',
          length: '109.683',
          src: require('./img/cdtj.png'),
          unit: '公里',
        },
        {
          name: '隧道',
          number: '9',
          length: '4217',
          src: require('./img/sdtj.png'),
          unit: '米',
        },
        {
          name: '桥梁',
          number: '27',
          length: '637.2',
          src: require('./img/qltj.png'),
          unit: '米',
        },
      ],
      passenger: [
        {
          name: '公交车',
          number: 20,
          seat: 849,
          shiftLine: 7,
        },
        {
          name: '农村班车',
          number: 25,
          seat: 412,
          shiftLine: 15,
        },
        {
          name: '市际班车',
          number: 25,
          seat: 412,
          shiftLine: 15,
        },
        {
          name: '出租车',
          number: 28,
          seat: '-',
          shiftLine: '-',
        },
      ],
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
          fontSize: '4rem',
          fontFamily: 'DINPro',
          color: '#6AD1F7',
        },
        unit: {
          fontSize: '2rem',
          color: '#6AD1F7',
        },
      },
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getStatistics();
      this.getRoadTransport();
    },
    // 公路桥隧
    async getStatistics() {
      const res = await getStatistics();
      res.forEach((item, index) => {
        this.highway[index].name = item.type;
        this.highway[index].number = item.count;
        this.highway[index].length = item.length;
      });
      // console.log(this.highway);
    },
    // 道路运营
    async getRoadTransport() {
      const res = await getRoadTransport();
      this.passenger = res.map((item) => {
        return {
          name: item.type,
          number: item.count,
          seat: item.seat || '-',
          shiftLine: item.lineNum || '-',
        };
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.left-1 {
  position: absolute;
  top: 26.4rem;
  left: 16rem;
  //width: 80rem;
  width: 799px;
  .top-block {
    display: flex;
    flex-flow: wrap;
    margin-bottom: 20px;
    margin-top: 19.1px;
    .item {
      width: 387px;
      height: 197px;
      border: 1px solid;
      background: url('./img/glqsitembg.png') 100% 100%;
      border-radius: 15px;
      margin-right: 10px;
      margin-bottom: 22px;
      .item-top {
        height: 84px;
        .item-top-img {
          height: 30px;
          text-align: center;
        }
        .item-top-name {
          text-align: center;
          height: 36px;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          //color: #FFFFFF;
          line-height: 44px;
          //background: linear-gradient(180deg, rgba(247, 241, 150, 0) 0%);
        }
        .xdcolor {
          background-image: -webkit-linear-gradient(bottom, #f7f196, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cdcolor {
          background-image: -webkit-linear-gradient(bottom, #f6b25a, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .sdcolor {
          background-image: -webkit-linear-gradient(bottom, #6cd9e2, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .qlcolor {
          background-image: -webkit-linear-gradient(bottom, #78d2a7, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .item-bottom {
        display: flex;
        .item-span {
          width: 191px;
          height: 123px;
          border: 1px solid;
          border-radius: 15px;
          .item-span-number {
            text-align: center;
            height: 44px;
            font-size: 40px;
            font-family: DINPro;
            font-weight: 500;
            color: #ffffff;
            line-height: 44px;
            text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.24);
            background: linear-gradient(180deg, #ffffff 0%, #4ecdd8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .item-span-name {
            text-align: center;
            height: 21px;
            font-size: 22px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #ffffff;
            line-height: 44px;
            opacity: 0.5;
          }
        }
      }
    }
  }
  .block {
    margin-top: 2rem;
    margin-bottom: 6rem;
    .titles {
      .second_item {
        font-size: 24px;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .line {
      margin: 1.2rem 0;
      width: 793px;
      height: 61.7px;
      line-height: 42px;
      background: url('./img/list-bg.png') no-repeat 100% 100%;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: #aecaca;
      display: flex;
      justify-content: space-around;
      .item {
        width: 15rem;
        padding: 0.9rem;
      }
      .second_item {
        font-size: 26px;
        width: 17rem;
        padding: 0.9rem;
        text-align: right;
        &:first-child {
          width: 12rem;
          text-align: left;
          margin-left: 2rem;
        }
        &:nth-child(2) {
          width: 15rem;
        }
        &:last-child {
          margin-right: 4rem;
        }
      }
    }
  }
  // outline: 1px solid red;
}
</style>
