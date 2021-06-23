<template>
  <div class="CreateIsland">
    <secondary-title name="制造之岛" isLarge />
    <div class="container">
      <div>
        <div>
          <div class="name">
            <p>工业企业数量 <span>{{gyqyslxxSum}}个</span></p>
          </div>
          <div class="content">
            <p :key="index" v-for="(item,index) in gyqyslxx">{{item.gqyfl}} <span>{{item.qysl}}个</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>工业产值 <span>{{gyczSum}}万元</span></p>
          </div>
          <div class="content">
            <p :key="index" v-for="(item,index) in gycz">{{item.gyfl}} <span>{{item.cz}}万元</span></p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="name">
            <p>规上工业企业数量 <span>{{gsgyqyxx.yxzrgss + gsgyqyxx.syqys}}个</span></p>
          </div>
          <div class="content">
            <p>有限责任公司 <span>{{gsgyqyxx.yxzrgss}}个</span></p>
            <p>私营企业 <span>{{gsgyqyxx.syqys}}个</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>工业企业从业人员数</p>
            <p><span>{{yqycyryxxSum}}人</span></p>
          </div>
          <div class="content">
            <p  :key="index" v-for="(item,index) in yqycyryxx">{{item.qyfl}} <span>{{item.cyrys}}人</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import { getProduce } from '@/api/Overview/DataAnalysis/api';
export default {
  components: {
    SecondaryTitle,
  },
  data() {
    return {
      gyqyslxx: [],
      gyqyslxxSum: 0,
      gycz: [],
      gyczSum: 0,
      gsgyqyxx: {
        syqys: 0,
        yxzrgss: 0,
      },
      yqycyryxx: [],
      yqycyryxxSum: 0,

    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getProduce()
        .request()
        .then((json) => {
          console.log(json);
          const { gyqyslxx, gycz, gsgyqyxx, yqycyryxx } = json;
          this.gyqyslxx = gyqyslxx;
          this.gyqyslxxSum = gyqyslxx.map((item) => item.qysl).reduce((n, m) => m + n);
          this.gycz = gycz;
          this.gyczSum = gycz.map((item) => item.cz).reduce((n, m) => m + n);
          this.gsgyqyxx = gsgyqyxx;
          this.yqycyryxx = yqycyryxx;
          console.log();
          this.yqycyryxxSum = yqycyryxx.map((item) => item.cyrys).reduce((n, m) => m + n);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  & > div {
    box-sizing: border-box;
    width: calc(50% - 24px);
    flex: 1;
    &:nth-child(2n + 1) {
      margin-right: 48px;
    }
    & > div {
      height: 190px;
      background: rgba(23, 41, 69, 0.25);
      border: 1px solid rgba(168, 243, 246, 0.1);
      display: flex;
      align-items: center;
      padding: 0 20px;
      &:nth-child(-n + 1) {
        margin-bottom: 30px;
      }
    }
    .name {
      width: 361px;
      min-width: 361px;
      height: 150px;
      text-align: center;
      margin-right: 38px;
      background: url(../images/card_bg_1.png) no-repeat center / cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p{
        margin: 0;
        font-size: 30px;
        line-height: 40px;
        font-weight: bold;
        color: #fff;
      }
      span {
        color: rgba(128, 255, 255, 1);
        font-weight: bold;
      }
    }
    .content {
      flex: 1;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        margin: 0;
        font-size: 18px;
        line-height: 32px;
        color: #fff;
        span {
          color: rgba(128, 255, 255, 1);
          font-weight: bold;
        }
      }
    }
  }
}
</style>
