<template>
  <div class="left-1">
    <Title>县道</Title>
    <div class="block">
      <div class="block-top">
        <div class="top-left item">
          <div class="top-left-img">
            <img src="./img/xdtj.png" />
          </div>
          <div class="top-left-name xdcolor">县道统计</div>
        </div>
        <div class="top-cancer item">
          <div class="item-span-number xdcolor">
            <digital :loop="loop" :endNum="countyHighwayStatistics.count || 0" :data="data" :config="config"></digital>
          </div>
          <div class="item-span-name">县道数量</div>
        </div>
        <div class="top-right item">
          <div class="item-span-number xdcolor">
            <digital :loop="loop" :endNum="countyHighwayStatistics.length || 0" :data="data" :config="config"></digital>
          </div>
          <div class="item-span-name">总长({{countyHighwayStatistics.unit}})</div>
        </div>
      </div>
      <div @mouseenter="mouseEnter(highway)" @mouseleave="mouseleave(highway)">
        <div class="line titles">
          <div class="second_item">线路名称</div>
          <div class="second_item">起点名称</div>
          <div class="second_item">里程总计(公里)</div>
          <div class="second_item">迄点名称</div>
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
    <Title>村道</Title>
    <div class="block">
      <div class="block-top">
        <div class="top-left item">
          <div class="top-left-img">
            <img src="./img/cdtj.png" />
          </div>
          <div class="top-left-name cdcolor">村道统计</div>
        </div>
        <div class="top-cancer item">
          <div class="item-span-number cdcolor">
            <digital :loop="loop" :endNum="villageRoadStatistics.count || 0" :data="data" :config="config"></digital>
          </div>
          <div class="item-span-name">村道数量</div>
        </div>
        <div class="top-right item">
          <div class="item-span-number cdcolor">
            <digital :loop="loop" :endNum="villageRoadStatistics.length || 0" :data="data" :config="config"></digital>
          </div>
          <div class="item-span-name">总长({{villageRoadStatistics.unit}})</div>
        </div>
      </div>
      <div @mouseenter="mouseEnter(passenger)" @mouseleave="mouseleave(passenger)">
        <div class="line titles">
          <div class="second_item">线路名称</div>
          <div class="second_item">起点名称</div>
          <div class="second_item">里程总计(公里)</div>
          <div class="second_item">迄点名称</div>
        </div>
        <swiper ref="mySwiper" :options="swiperOption" v-if="passenger.length > 3">
          <swiper-slider v-for="(item, index) in passenger" :key="index">
            <div class="line">
              <div class="second_item">{{ item.name }}</div>
              <div class="second_item">{{ item.startName }}</div>
              <div class="second_item" style="color: #63ceb3">{{ item.length }}</div>
              <div class="second_item">{{ item.endName }}</div>
            </div>
          </swiper-slider>
        </swiper>
        <div v-else class="line" v-for="(item, index) in passenger" :key="index">
          <div class="second_item">{{ item.name }}</div>
          <div class="second_item">{{ item.startName }}</div>
          <div class="second_item" style="color: #63ceb3">{{ item.length }}</div>
          <div class="second_item">{{ item.endName }}</div>
        </div>
      </div>
    </div>
    <!--    <Bar1 />-->
  </div>
</template>
<script>
import Title from './Title';
// import BarPie from './BarPie';
// import Bar1 from './Bar1';
import swiper from '@/components/Swiper';
import SwiperSlider from '@/components/SwiperSlider';
import {
  getCountryRoad,
  getVillageRoad,
  getStatistics,
} from '@/api/Overview/Traffic';
export default {
  components: {
    Title,
    // BarPie,
    // Bar1,
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
          name: '台台线',
          startName: '台门码头',
          endName: ' 台门',
          length: '39.155',
        },
        {
          name: '外涨线',
          startName: '外湾',
          endName: '涨起港',
          length: '10.154',
        },
        {
          name: '大梅线',
          startName: '大岙码头',
          endName: '梅峙岙',
          length: '9.32',
        },
        {
          name: '孙干线',
          startName: '孙家',
          endName: '干岩',
          length: '2.975',
        },
      ],
      passenger: [
        {
          name: '台大线',
          startName: '台沙线',
          endName: ' 大夹屯',
          length: '1.568',
        },
        {
          name: '台青线',
          startName: '台沙线',
          endName: '青山香村',
          length: '0.847',
        },
        {
          name: '台里线',
          startName: '台沙线',
          endName: '平蛟水库',
          length: '0.553',
        },
        {
          name: '台外线',
          startName: '外平蛟',
          endName: '外平蛟',
          length: '0.536',
        },
        {
          name: '里城线',
          startName: '里平蛟',
          endName: '城子岗',
          length: '1.317',
        },
        {
          name: '大后线',
          startName: '大岙码头',
          endName: '后岙',
          length: '0.635',
        },
        {
          name: '大大线',
          startName: '大梅线',
          endName: '大岙村',
          length: '0.794',
        },
        {
          name: '大邵线',
          startName: '大梅线',
          endName: '邵家',
          length: '0.592',
        },
        {
          name: '台外线',
          startName: '外平蛟',
          endName: '外平蛟',
          length: '0.536',
        },
        {
          name: '大荷线',
          startName: '大梅线',
          endName: '荷花村',
          length: '0.806',
        },
      ],
      countyHighwayStatistics: {
        name: '县道',
        count: 4,
        length: '61.991',
        unit: '公里',
      },
      villageRoadStatistics: {
        name: '村道',
        count: 90,
        length: '109.683',
        unit: '公里',
      },
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
      this.getStatistics();
      this.getCountryRoad();
      this.getVillageRoad();
    },
    // 县道和村道统计
    async getStatistics() {
      const res = await getStatistics();
      res.forEach((item) => {
        if (item.type === '县道') {
          this.countyHighwayStatistics.count = item.count;
          this.countyHighwayStatistics.length = item.length;
          // this.countyHighwayStatistics.unit = item.unit;
        } else if (item.type === '村道') {
          this.villageRoadStatistics.count = item.count;
          this.villageRoadStatistics.length = item.length;
          // this.villageRoadStatistics.unit = item.unit;
        }
      });
    },
    // 县道
    async getCountryRoad() {
      const res = await getCountryRoad();
      this.highway = res.map((item) => {
        return {
          name: item.road,
          startName: item.start,
          endName: item.point,
          length: item.length,
        };
      });
    },
    // 村道
    async getVillageRoad() {
      const res = await getVillageRoad();
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
$main-font: 24px;
.left-1 {
  position: absolute;
  top: 26.4rem;
  left: 16rem;
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
        background: none !important;
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
          width: 11rem;
          margin-left: 2rem;
        }
        &:nth-child(2) {
          width: 11rem;
        }
        &:nth-child(3) {
          width: 27rem;
          text-align: center;
          background: url('./img/qsd.png') no-repeat;
        }
        &:last-child {
          //margin-right: 4rem;
        }
      }
    }
  }
  .swiper-container {
    width: 100%;
    height: 227px;
    .swiper-slide {
      //height: 76px;
      box-sizing: border-box;
    }
  }
  // outline: 1px solid red;
}
</style>
