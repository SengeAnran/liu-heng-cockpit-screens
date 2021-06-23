<template>
  <div class="HubIsland">
    <secondary-title name="中枢之岛" isLarge />
    <div class="container">
      <div>
        <div>
          <div class="name">
            <p>
              港口货物吞吐量
              <span>{{gkhwxx.ckhyl + gkhwxx.jkhyl}}万吨</span>
            </p>
          </div>
          <div class="content">
            <p>
              出口货运量
              <span>{{gkhwxx.ckhyl}}万吨</span>
            </p>
            <p>
              进口货运量
              <span>{{gkhwxx.jkhyl}}万吨</span>
            </p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>
              外贸进出口额
              <span>{{wmxx.jkze + wmxx.ckze}}万元</span>
            </p>
          </div>
          <div class="content">
            <p>
              进口总额
              <span>{{wmxx.jkze}}万元</span>
            </p>
            <p>
              出口总额
              <span>{{wmxx.ckze}}万元</span>
            </p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>
              财政总收入
              <span>{{czxx.czzsr}}万元</span>
            </p>
          </div>
          <div class="content">
            <p>
              其中公共财政收入
              <span>{{czxx.ggczsr}}万元</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="name">
            <p>公共财政预算支出</p>
            <p>
              <span>{{total}}万元</span>
            </p>
          </div>
          <div class="content">
            <p :key="index" v-for="(item,index) in ggcjyszcxx">
              {{item.czfl}}
              <span>{{item.yszce}}万元</span>
            </p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>游客接待人数</p>
            <p>
              <span>{{lyxx.ykjdrs}}万人</span>
            </p>
          </div>
          <div class="content">
            <p>
              旅游收入
              <span>{{lyxx.lysr}}亿元</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import { getCentre } from '@/api/Overview/DataAnalysis/api';
export default {
  components: {
    SecondaryTitle,
  },
  data() {
    return {
      gkhwxx: {
        ckhyl: 0,
        jkhyl: 0,
      },
      wmxx: {
        ckze: 0,
        jkze: 0,
      },
      czxx: {
        czzsr: 0,
        ggczsr: 0,
      },
      ggcjyszcxx: [],
      total: 0,
      lyxx: {
        lysr: 0,
        ykjdrs: 0,
      },
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getCentre()
        .request()
        .then((json) => {
          const { gkhwxx, wmxx, czxx, ggcjyszcxx, lyxx } = json;
          this.gkhwxx = gkhwxx;
          this.wmxx = wmxx;
          this.czxx = czxx;
          this.ggcjyszcxx = ggcjyszcxx;
          this.total = ggcjyszcxx.map((item) => item.yszce).reduce((n, m) => n + m);
          this.lyxx = lyxx;
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
    &:nth-child(2n) {
      & > div {
        height: 190px;
        margin-bottom: 30px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .name {
        height: 150px;
        background-image: url(../images/card_bg_1.png);
        p {
          font-size: 30px;
        }
      }
    }
    & > div {
      height: 120px;
      background: rgba(23, 41, 69, 0.25);
      border: 1px solid rgba(168, 243, 246, 0.1);
      display: flex;
      align-items: center;
      padding: 0 20px;
      &:nth-child(-n + 2) {
        margin-bottom: 25px;
      }
    }
    .name {
      width: 361px;
      min-width: 361px;
      height: 80px;
      text-align: center;
      margin-right: 38px;
      background: url(../images/card_bg_0.png) no-repeat center / cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        margin: 0;
        font-size: 24px;
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
