/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
  <div class="nav">
    <div class="left-secondary-nav secondary-nav">
      <router-link class="nav-item" v-for="item in leftSecondaryNav" :key="item.name" :to="{ name: item.name }">
        <span class="nav-name">{{ item.name }}</span>
        <div class="indicators">
          <div v-for="item in (item.meta && item.meta.indicator) || []" :key="item.name" class="item">
            <span class="name">{{ item.name }}</span>
            <span class="value">
              {{ item.value }}
              <span class="unit">{{ item.unit }}</span>
            </span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="right-secondary-nav secondary-nav">
      <router-link class="nav-item" :to="{ name: item.name }" v-for="item in rightSecondaryNav" :key="item.name">
        <span class="nav-name">{{ item.name }}</span>
        <div class="indicators">
          <div v-for="item in (item.meta && item.meta.indicator) || []" :key="item.name" class="item">
            <span class="name">{{ item.name }}</span>
            <span class="value">
              {{ item.value }}
              <span class="unit">{{ item.unit }}</span>
            </span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="primal-nav">
      <router-link v-for="(item, i) in routes" :key="item.name" class="nav-item" :to="item.path" :style="posStyle(i)">
        {{ item.name }}
      </router-link>
      <div class="primal-nav-active-name">
        <div class="to-left" @click="toPrimalLeft" />

        <div
          class="tubiao"
          :style="{
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="fontTilte">{{ primalNavActiveName }}</div>
        <div class="to-right" @click="toPrimalRight" />
      </div>
    </div>
    <div class="move-nav" v-if="secondaryNav.length > 6">
      <div class="to-left" v-if="secondNavStart > 0" @click="toSecondaryLeft" />
      <div class="to-right" v-if="secondNavStart < secondaryNav.length - 6" @click="toSecondaryRight" />
    </div>
    <div class="video-bg">
      <video autoplay="autoplay" muted width="100%" loop src="./video_bg.mp4"></video>
<!--      <video name="media" autoplay loop width="100%">-->
<!--        <source src="./video_bg.mp4">-->
<!--      </video>-->
    </div>
  </div>
</template>
<script>
import routes from '@/config/routes';
import {
  getBottom,
  // getVillageBottom,
  getBottomInfo,
  // getVillagerInfo,
  getRealtimeHandling,
  realtimeInvestment,
  getCountyAirQualityStatus,
  eventSituation,
  getEconomicDevelopmentIndicator,
  getGkjjGoal,
} from '@/api/IndexItem';
import {
  getPartyMemberBasicSit,
  // getQuantityTrend,
  // getSexAndAgeStructure,
  // getPartyGroupEduStructure,
  // peopleBasicInfo,
} from '@/api/Charm/PartyConstruction';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      routes: [...routes],
      secondNavStart: 0,
      imgUrl: require('./zonglan.png'),
      overviewName: ['历史变迁', '人口一张图', '平安建设', '民生教育', '民生医疗', '交通畅行', '创新转型', '数据分析'], // 六横总览
      charmName: ['党群建设', '数字乡社'], // 魅力六横
      strengthName: ['政务服务', '项目管理', '环保专题', '舆情分析'], // 实力六横
      vitalityName: ['经济发展', '港口经济'], // 活力六横
    };
  },
  computed: {
    ...mapGetters(['indicator']),
    primalNavActiveName() {
      // console.log(this.$route);
      return this.$route.matched?.[0]?.name || '';
    },
    secondaryNav() {
      // console.log(this.routes);
      switch (this.primalNavActiveName) {
        case '六横总览':
          this.overviewData();
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.imgUrl = require('./zonglan.png');
          break;
        case '魅力六横':
          this.charmData();
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.imgUrl = require('./meili.png');
          break;
        case '实力六横':
          this.strengthData();
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.imgUrl = require('./shili.png');
          break;
        case '活力六横':
          this.vitalityData();
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.imgUrl = require('./huoli.png');
          break;
        default:
          break;
      }
      // console.log(this.primalNavActiveName);
      const matched = this.routes.find((d) => d.name === this.primalNavActiveName);
      return matched?.children || [];
    },
    leftSecondaryNav() {
      const len = Math.min(this.secondaryNav.length / 2, 3);
      const start = this.secondNavStart;
      // console.log(this.secondaryNav.slice(start, start + len));
      return this.secondaryNav.slice(start, start + len);
    },
    rightSecondaryNav() {
      const len = Math.min(this.secondaryNav.length / 2, 3);
      const start = this.secondNavStart + len;
      return this.secondaryNav.slice(start, start + len);
    },
    activePrimalIndex() {
      return this.routes.findIndex((d) => d.name === this.primalNavActiveName);
    },
  },
  watch: {
    primalNavActiveName() {
      this.secondNavStart = 0;
    },
    'indicator.sqrk': {
      handler() {
        this.charmLoadData();
      },
      deep: true,
    },
  },
  mounted() {
  },
  methods: {
    // 六横总览
    overviewData() {
      this.overviewName.forEach(async (item, index) => {
        const res = await getBottom({ type: item }).request();
        res.forEach((item2, index2) => {
          this.secondaryNav[index].meta.indicator[index2].value = parseFloat(item2.value);
          this.secondaryNav[index].meta.indicator[index2].name = item2.title;
          if (item2.unit) {
            this.secondaryNav[index].meta.indicator[index2].unit = item2.unit;
          }
        });
      });
    },
    // 魅力六横
    charmData() {
      this.charmName.forEach(async (item, index) => {
        const res = await getBottom({ type: item }).request();
        res.forEach((item2, index2) => {
          this.secondaryNav[index].meta.indicator[index2].value = parseFloat(item2.value);
          this.secondaryNav[index].meta.indicator[index2].name = item2.title;
          if (item2.unit) {
            this.secondaryNav[index].meta.indicator[index2].unit = item2.unit;
          }
        });
        this.secondaryNav[1].meta.indicator[0].value = this.indicator.sqrk;
        this.secondaryNav[1].meta.indicator[1].value = this.indicator.sqldlzy;
        this.secondaryNav[1].meta.indicator[2].value = this.indicator.wwlrzh;
      });
      // getVillageBottom({}).request().then((res) => {
      //
      // });
    },
    // 活力六横
    strengthData() {
      this.strengthName.forEach(async (item, index) => {
        const res = await getBottom({ type: item }).request();
        res.forEach((item2, index2) => {
          this.secondaryNav[index].meta.indicator[index2].value = parseFloat(item2.value);
          this.secondaryNav[index].meta.indicator[index2].name = item2.title;
          if (item2.unit) {
            this.secondaryNav[index].meta.indicator[index2].unit = item2.unit;
          }
        });
      });
    },
    // ********************
    // 六横总览
    vitalityData() {
      this.vitalityName.forEach(async (item, index) => {
        const res = await getBottom({ type: item }).request();
        res.forEach((item2, index2) => {
          this.secondaryNav[index].meta.indicator[index2].value = parseFloat(item2.value);
          this.secondaryNav[index].meta.indicator[index2].name = item2.title;
          if (item2.unit) {
            this.secondaryNav[index].meta.indicator[index2].unit = item2.unit;
          }
        });
      });
    },
    async loadData() {
      const res = await getBottomInfo().request();
      // console.log(res, 1231);
      for (let i = 0; i < res.length; i++) {
        this.secondaryNav[i].meta.indicator[0].value = res[i].value1;
        this.secondaryNav[i].meta.indicator[1].value = res[i].value2;
        this.secondaryNav[i].meta.indicator[2].value = res[i].value3;
      }
    },
    // 魅力六横
    async charmLoadData() {
      // const res3 = await peopleBasicInfo().request();
      const data = {
        auth: {
          serviceId: '09a3fe0aa4634c608b9c103b053480d3', // 数据开放服务Id
          subServiceId: '1f73865f63b84465934ee1c71fa83916', // 数据开放订阅服务Id
          // signature: localStorage.autograph, // 请求参数签名
          signatureVersion: '2.0', // 当前使用的签名版本
          timestamp: new Date().getTime(), // 请求的时间戳
        }, // 认证参数
        size: 100,
        includeColumns: false,
        params: [],
      };
      const res = await getPartyMemberBasicSit(data);
      // const res2 = await getVillagerInfo().request();
      // console.log(this.$store.state, 'ssss');
      // debugger;
      // console.log(res, '131231231');
      // console.log(this.secondaryNav);
      // for (let i = 0; i < res.length; i++) {
      if (res && res.list[0]) {
        this.secondaryNav[0].meta.indicator[0].value = res.list[0].zsdyrs;
        this.secondaryNav[0].meta.indicator[1].value = res.list[0].ybdyrs;
      }
      // this.secondaryNav[0].meta.indicator[2].value = res.list[0].fzdyrs;
      this.secondaryNav[1].meta.indicator[0].value = this.indicator.sqrk;
      this.secondaryNav[1].meta.indicator[1].value = this.indicator.sqldlzy;
      this.secondaryNav[1].meta.indicator[2].value = this.indicator.wwlrzh;
      // }
    },
    // 实力六横
    async strengthLoadData() {
      const res1 = await getRealtimeHandling().request();
      const res2 = await realtimeInvestment().request();
      const res3 = await getCountyAirQualityStatus().request();
      const res4 = await eventSituation().request();
      // console.log(res1);
      // console.log(res2);
      // console.log(res3);
      // console.log(this.secondaryNav);
      this.secondaryNav[0].meta.indicator[0].value = res1[0].jrbll;
      this.secondaryNav[0].meta.indicator[1].value = res1[0].bzbll;
      this.secondaryNav[0].meta.indicator[2].value = res1[0].ydbll;
      this.secondaryNav[1].meta.indicator[0].value = res2[0].ysxrzxms;
      this.secondaryNav[1].meta.indicator[1].value = res2[0].yssrzzl;
      // this.secondaryNav[1].meta.indicator[2].value = res2.ydbll;
      this.secondaryNav[2].meta.indicator[0].value = res3[0].aqi;
      this.secondaryNav[2].meta.indicator[1].value = res3[0].pm25;
      // this.secondaryNav[2].meta.indicator[2].value = res3.ydbll;
      this.secondaryNav[3].meta.indicator[0].value = res4[0].bzsjs;
      this.secondaryNav[3].meta.indicator[1].value = res4[0].zmsjs;
      this.secondaryNav[3].meta.indicator[2].value = res4[0].fmsjs;
    },
    // 活力六横
    async vitalityLoadData() {
      const res = await getEconomicDevelopmentIndicator().request();
      const res1 = await getGkjjGoal().request();
      // console.log(res);
      // console.log(this.secondaryNav);
      this.secondaryNav[0].meta.indicator[0].value = res.gysczz / 10000;
      this.secondaryNav[0].meta.indicator[1].value = res.gyqys;
      this.secondaryNav[0].meta.indicator[2].value = res.ynyzcz / 10000;
      this.secondaryNav[1].meta.indicator[0].value = res1.hycpyl / 10000;
      this.secondaryNav[1].meta.indicator[1].value = res1.wmjckze / 100000000;
      this.secondaryNav[1].meta.indicator[2].value = res1.gkhyzhyl / 10000;
    },
    toPrimalLeft() {
      const nextIndex = (this.routes.length + this.activePrimalIndex - 1) % this.routes.length;
      this.$router.push(this.routes[nextIndex].path);
    },
    toPrimalRight() {
      const nextIndex = (this.activePrimalIndex + 1) % this.routes.length;
      this.$router.push(this.routes[nextIndex].path);
    },
    toSecondaryLeft() {
      this.secondNavStart = Math.max(0, this.secondNavStart - 1);
    },
    toSecondaryRight() {
      const max = Math.max(this.secondaryNav.length - 6, 0);
      this.secondNavStart = Math.min(max, this.secondNavStart + 1);
    },
    posStyle(i) {
      const pos = [
        { top: '8rem', left: '75rem' },
        { top: '12rem', left: '111rem' },
        { top: '16rem', left: '146rem' },
        { top: '20rem', left: '181rem', opacity: 0 },
        { top: '16rem', left: '75rem', opacity: 0 },
        { top: '20rem', left: '-30rem', opacity: 0 },
        { top: '16rem', left: '5rem' },
        { top: '12rem', left: '40rem' },
      ];
      const len = pos.length;
      return pos[(len + i - this.activePrimalIndex) % len];
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  position: relative;
  // height: 144rem;
  height: 72rem;
  flex: none;
  //background: url('./nav-bg.png') no-repeat;
  background-size: 576rem 73rem;
  background-position: 0 0;
  z-index: 100000;
}

.move-nav {
  .to-left {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 5rem;
    height: 52.5rem;
    background-image: url('./to-left.png');
    background-size: 100% 100%;
    cursor: pointer;
    transition: width 0.3s;
    &:hover {
      width: 36.7rem;
    }
  }
  .to-right {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 5rem;
    height: 52.5rem;
    background-image: url('./to-right.png');
    background-size: 100% 100%;
    cursor: pointer;
    transition: width 0.3s;
    &:hover {
      width: 36.7rem;
    }
  }
}
.secondary-nav {
  position: absolute;
  top: 22rem;
  width: 200rem;
  display: flex;
  justify-content: center;
  .nav-item {
    flex: none;
    width: 72.2rem;
    height: 42.1rem;
    background-size: 100% 100%;
    margin-right: -8rem;
    text-decoration: none;
    display: block;
    .nav-name {
      display: block;
      text-decoration: none;
      background-image: linear-gradient(160deg, #fff 0%, #26c4bf 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 4.5rem;
      margin: 2rem 9rem;
      letter-spacing: 3px;
    }
    .indicators {
      margin-top: 7rem;
      .item {
        .name {
          font-size: 3.4rem;
          color: rgb(130, 226, 228);
          position: relative;
          max-width: 25rem;
          // white-space: break-spaces;
          white-space: break-spaces;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          // white-space: nowrap;
          &::before {
            position: absolute;
            content: ' ';
            top: 50%;
            left: -4rem;
            width: 2rem;
            height: 2rem;
            transform: translate(-50%, -50%);
            padding: 0.5rem;
            border-radius: 50%;
            background: #26c4bf;
            background-clip: content-box;
            border: 1px solid #26c4bf;
          }
        }
        .value {
          font-size: 3.4rem;
          font-family: 'BoldItalic';
          color: rgb(255, 255, 255);
          padding-left: 4rem;
        }
        .unit {
          font-size: 2.3rem;
          color: rgb(232, 233, 233);
          font-weight: bold;
        }
      }
    }
  }
}
.left-secondary-nav {
  left: 5rem;
  .nav-item {
    background-image: url('./secondary-left-normal.png');
    &.router-link-active {
      background-image: url('./secondary-left-active.png');
    }
    &:nth-child(1) {
      transform: translateY(2rem);
    }
    &:nth-child(2) {
      transform: translateY(1rem);
    }
    .nav-name {
      transform: skew(0deg, -4deg);
      text-align: left;
    }
    .indicators {
      transform: skew(0deg, -4deg);
      .item {
        padding: 0rem 0 2rem 15rem;
      }
    }
  }
}
.right-secondary-nav {
  right: 11rem;
  .nav-item {
    background-image: url('./secondary-right-normal.png');
    &.router-link-active {
      background-image: url('./secondary-right-active.png');
    }
    &:nth-child(3) {
      transform: translateY(2rem);
    }
    &:nth-child(2) {
      transform: translateY(1rem);
    }
    .nav-name {
      transform: skew(0deg, 4deg);
      text-align: right;
    }
    .indicators {
      transform: skew(0deg, 4deg);
      .item {
        padding: 0rem 5rem 2rem 22rem;
        // text-align: right;
        .name {
          font-size: 3.4rem;
          color: rgb(130, 226, 228);
        }
        .value {
          font-size: 3.4rem;
          color: rgb(255, 255, 255);
          padding-left: 4rem;
          font-family: 'BoldItalic';
        }
        .unit {
          font-size: 2.3rem;
          color: rgb(232, 233, 233);
          font-weight: bold;
        }
      }
    }
  }
}
.primal-nav {
  // outline: 1px solid red;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 180rem;
  height: 100%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  user-select: none;
  // &::after {
  //   position: absolute;
  //   content: ' ';
  //   width: 36.6rem;
  //   height: 6.5rem;
  //   top: 55rem;
  //   left: 72rem;
  //   background: url('./primal-tip.png') no-repeat;
  //   background-size: 100% 100%;
  // }
  .nav-item {
    position: absolute;
    width: 29.5rem;
    height: 8.5rem;
    line-height: 8.5rem;
    text-align: center;
    background-image: url('./primal-normal.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    font-size: 4rem;
    font-family: 'Source Han Sans CN';
    color: rgba(178, 250, 255, 0.6);
    text-decoration: none;
    z-index: 10;
    transition: all 300ms;
    &.router-link-active {
      background-image: url('./primal-active.png');
      color: rgb(178, 250, 255);
      text-shadow: 0 0 2px;
    }
  }
  .nav-item:hover {
    background-image: url('./primal-hover.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
.primal-nav-active-name {
  position: absolute;
  top: 20rem;
  left: 10rem;
  width: 159.8rem;
  height: 33.9rem;
  text-align: center;
  line-height: 53rem;
  letter-spacing: 1rem;
  background: url('./primal-title.png') no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  font-size: 5.6rem;
  .tubiao {
    position: absolute;
    width: 9rem;
    height: 8rem;
    bottom: 15rem;
    left: 74rem;
  }
  .to-left {
    position: absolute;
    width: 12rem;
    height: 13rem;
    bottom: 2rem;
    left: 13rem;
    cursor: pointer;
  }
  .to-right {
    position: absolute;
    width: 12rem;
    height: 13rem;
    bottom: 2rem;
    right: 13rem;
    cursor: pointer;
  }
  .fontTilte {
    position: absolute;
    bottom: -15rem;
    left: 67rem;
    background-image: linear-gradient(160deg, #fff 0%, #26c4bf 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
}
.video-bg {
  position: absolute;
  width: 100%;
  height: 74rem;
  //background: #3de7c9;
  z-index: -2;
}
</style>
