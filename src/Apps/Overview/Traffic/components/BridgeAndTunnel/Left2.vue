<template>
  <div class="left-2">
    <Title>隧道</Title>
    <!--    <BarPie />-->
    <div class="block">
      <div class="block-top">
        <div class="top-left item">
          <div class="top-left-img">
            <img src="./img/sdtj.png" />
          </div>
          <div class="top-left-name sdcolor">隧道统计</div>
        </div>
        <div class="top-cancer item">
          <div class="item-span-number sdcolor">
            <digital :loop="loop" :endNum="9 || 0" :data="data" :config="config"></digital>
          </div>
          <div class="item-span-name">隧道数量</div>
        </div>
        <div class="top-right item">
          <div class="item-span-number sdcolor">
            <digital :loop="loop" :endNum="4217 || 0" :data="data" :config="config"></digital>
          </div>
          <div class="item-span-name">总长(米)</div>
        </div>
      </div>
      <div @mouseenter="mouseEnter(highway)" @mouseleave="mouseleave(highway)">
        <div class="line titles">
          <div class="second_item">隧道名称</div>
          <div class="second_item">路线名称</div>
          <div class="second_item">长度(米)</div>
          <div class="second_item">分类</div>
        </div>
        <swiper ref="mySwiper" :options="swiperOption" v-if="highway.length > 3">
          <swiper-slider v-for="(item, index) in highway" :key="index">
            <div class="line">
              <div class="second_item">{{ item.name }}</div>
              <div class="second_item">{{ item.startName }}</div>
              <div class="second_item" style="color: #63ceb3">{{ item.length }}</div>
              <div class="second_item">{{ item.endName }}</div>
            </div>
          </swiper-slider>
        </swiper>
        <div v-else class="line" v-for="(item, index) in highway" :key="index">
          <div class="second_item">{{ item.name }}</div>
          <div class="second_item">{{ item.startName }}</div>
          <div class="second_item" style="color: #63ceb3">{{ item.length }}</div>
          <div class="second_item">{{ item.endName }}</div>
        </div>
      </div>
    </div>
    <Title>桥梁</Title>
    <div class="block">
      <div class="block-top">
        <div class="top-left item">
          <div class="top-left-img">
            <img src="./img/qltj.png" />
          </div>
          <div class="top-left-name qlcolor">桥梁统计</div>
        </div>
        <div class="top-cancer item">
          <div class="item-span-number qlcolor">
            <digital :loop="loop" :endNum="27 || 0" :data="data" :config="config"></digital>
          </div>
          <div class="item-span-name">桥梁数量</div>
        </div>
        <div class="top-right item">
          <div class="item-span-number qlcolor">
            <!-- 637.2 -->
            <digital :loop="loop" :endNum="637.2 || 0" :data="data" :config="config"></digital>
          </div>
          <div class="item-span-name">总长(米)</div>
        </div>
      </div>
      <div @mouseenter="mouseEnter(passenger)" @mouseleave="mouseleave(passenger)">
        <div class="line titles">
          <div class="second_item">桥梁名称</div>
          <div class="second_item" style="text-align: center">全长</div>
          <div class="second_item">跨径总长</div>
          <div class="second_item">跨径分类</div>
        </div>
        <swiper ref="mySwiper" :options="swiperOption" v-if="passenger.length > 3">
          <swiper-slider v-for="(item, index) in passenger" :key="index">
            <div class="line">
              <div class="second_item">{{ item.name }}</div>
              <div class="second_item" style="text-align: center; color: #63ceb3">{{ item.startName }}</div>
              <div class="second_item" style="color: #63ceb3">{{ item.endName }}</div>
              <div class="second_item">{{ item.length }}</div>
            </div>
          </swiper-slider>
        </swiper>
        <div v-else class="line" v-for="(item, index) in passenger" :key="index">
          <div class="second_item">{{ item.name }}</div>
          <div class="second_item" style="text-align: center; color: #63ceb3">{{ item.startName }}</div>
          <div class="second_item" style="color: #63ceb3">{{ item.endName }}</div>
          <div class="second_item">{{ item.length }}</div>
        </div>
      </div>
      <!--      <div class="line" v-for="(item, index) in passenger" :key="index">-->
      <!--        <div class="second_item">{{ item.name }}</div>-->
      <!--        <div class="second_item" style="text-align: center; color: #63CEB3;">{{ item.startName }}</div>-->
      <!--        <div class="second_item" style="color:#63CEB3">{{ item.endName }}</div>-->
      <!--        <div class="second_item">{{ item.length }}</div>-->
      <!--      </div>-->
    </div>
    <!--    <Bar1 />-->
  </div>
</template>
<script>
import Title from './Title';
// import Indicator from './Indicator';
// import LineChart from './LineChart';
import swiper from '@/components/Swiper';
import SwiperSlider from '@/components/SwiperSlider';
import {
  getTunnel,
  getBridge,
} from '@/api/Overview/Traffic';
export default {
  components: {
    Title,
    // Indicator,
    // LineChart,
    swiper,
    SwiperSlider,
  },
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
        decimals: 2,
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
      highway: [
        {
          name: '龙山隧道右',
          startName: '台台线',
          endName: '短隧道',
          length: '385',
        },
        {
          name: '龙山隧道左',
          startName: '台台线',
          endName: '短隧道',
          length: '367',
        },
        {
          name: '双屿隧道右',
          startName: '台台线',
          endName: '短隧道',
          length: '290',
        },
        {
          name: '双屿隧道左',
          startName: '台台线',
          endName: '短隧道',
          length: '361',
        },
        {
          name: '棕榈湾隧道',
          startName: '台台线',
          endName: '短隧道',
          length: '305',
        },
        {
          name: '竹湾隧道',
          startName: '台台线',
          endName: '短隧道',
          length: '232',
        },
        {
          name: '小湖隧道',
          startName: '台台线',
          endName: '中隧道',
          length: '744',
        },
        {
          name: '苍洞隧道',
          startName: '台台线',
          endName: '中隧道',
          length: '929',
        },
        {
          name: '田岙隧道',
          startName: '台台线',
          endName: '中隧道',
          length: '604',
        },
      ],
      passenger: [
        {
          name: '台门桥',
          startName: '13.6',
          endName: '13',
          length: '小桥',
        },
        {
          name: '后山弄桥',
          startName: '14.8',
          endName: '6',
          length: '小桥',
        },
        {
          name: '外湾桥',
          startName: '13.54',
          endName: '8',
          length: '小桥',
        },
        {
          name: '孙家1号桥',
          startName: '13.54',
          endName: '10',
          length: '小桥',
        },
        {
          name: '石柱头１号桥',
          startName: '15.54',
          endName: '10',
          length: '小桥',
        },
        {
          name: '石柱头2号桥',
          startName: '15.54',
          endName: '10',
          length: '小桥',
        },
        {
          name: '石柱头3号桥',
          startName: '15.54',
          endName: '10',
          length: '小桥',
        },
        {
          name: '浦西桥',
          startName: '182',
          endName: '178',
          length: '大桥',
        },
        {
          name: '龙浦桥',
          startName: '41',
          endName: '39',
          length: '中桥',
        },
        {
          name: '小通桥',
          startName: '17',
          endName: '13',
          length: '小桥',
        },
      ],
      swiperOption: {
        direction: 'vertical',
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        // autoplay: true,
      },
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getTunnel();
      // this.getBridge();
    },
    // 隧道
    async getTunnel() {
      const res = await getTunnel();
      this.highway = res.map((item) => {
        return {
          name: item.tunnel,
          startName: item.route,
          endName: item.classification,
          length: item.length,
        };
      });
    },
    // 桥梁
    async getBridge() {
      const res = await getBridge();
      this.passenger = res.map((item) => {
        return {
          name: item.road,
          startName: item.start,
          endName: item.point,
          length: item.length,
        };
      });
    },
    mouseEnter(lists) {
      if (lists.length < 3) {
        return;
      }
      this.swiper.autoplay.stop();
    },
    mouseleave(lists) {
      if (lists.length < 3) {
        return;
      }
      this.swiper.autoplay.start();
    },
  },
};
</script>
<style lang="scss" scoped>
.left-2 {
  position: absolute;
  top: 26.4rem;
  left: 100rem;
  width: 80rem;
  .block {
    margin-top: 2rem;
    margin-bottom: 6rem;
    .block-top {
      background: url('./img/sjbj.png') 100% 100%;
      height: 106px;
      display: flex;
      .item {
        text-align: center;
        height: 106px;
        .xdcolor {
          background: linear-gradient(180deg, #ffffff 0%, #4ecdd8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cdcolor {
          background-image: -webkit-linear-gradient(bottom, #53e9a1, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .sdcolor {
          background-image: -webkit-linear-gradient(bottom, #e1d35e, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .qlcolor {
          background-image: -webkit-linear-gradient(bottom, #ce954c, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .item-span-number {
          margin-top: 20px;
          text-align: center;
          height: 44px;
          font-size: 40px;
          font-family: DINPro;
          font-weight: 500;
          color: #ffffff;
          line-height: 44px;
          text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.24);
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
      .top-left {
        width: 191px;
        font-size: 22px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: 44px;
        .top-left-img {
          margin-top: 22px;
          height: 40px;
        }
        .top-left-name {
          text-align: center;
          height: 36px;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          //color: #FFFFFF;
          line-height: 44px;
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
      .top-cancer {
        width: 260px;
      }
      .top-right {
        width: 330px;
      }
    }
    .titles {
      .second_item {
        font-size: 29px;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .line {
      margin: 1.2rem 0;
      width: 793px;
      height: 59px;
      line-height: 35px;
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
        font-size: 24px;
        width: 17rem;
        padding: 0.9rem;
        text-align: left;

        &:first-child {
          width: 13rem;
          margin-left: 2rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        &:nth-child(2) {
          width: 11rem;
        }
        &:nth-child(3) {
          width: 20rem;
          text-align: center;
        }
        &:last-child {
          //margin-right: 4rem;
        }
      }
    }
  }
  // outline: 1px solid red;
  .swiper-container {
    width: 100%;
    height: 227px;
    .swiper-slide {
      //height: 76px;
      box-sizing: border-box;
    }
  }
}
</style>
