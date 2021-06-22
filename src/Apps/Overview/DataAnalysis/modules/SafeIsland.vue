<template>
  <div class="SafeIsland">
    <secondary-title name="平安之岛" isLarge/>
    <div class="container">
      <div>
        <div>
          <div class="name">
            <p>
              卫生机构
              <span>{{ylxx.wsjgs}}个</span>
            </p>
          </div>
          <div class="content">
            <p>
              医院
              <span>{{ylxx.yys}}个</span>
            </p>
            <p>
              其他
              <span>{{ylxx.wsjgs - ylxx.yys}}个</span>
            </p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>
              卫生技术人员
              <span>{{ylxx.wsjsry}}人</span>
            </p>
          </div>
          <div class="content">
            <p>
              医生
              <span>{{ylxx.ys}}人</span>
            </p>
            <p>
              其他
              <span>{{ylxx.wsjsry - ylxx.ys}}人</span>
            </p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>
              社会福利院数
              <span>{{shflyxx.shflys}}个</span>
            </p>
          </div>
          <div class="content">
            <p>
              敬老院 福利院床位数
              <span>{{shflyxx.cws}}张</span>
            </p>
            <p>
              敬老院 福利院收养人数
              <span>{{shflyxx.syrs}}人</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="name">
            <p>互联网宽带用户</p>
          </div>
          <div class="content">
            <p>
              <span>{{wlyhxx.hlwkdyhs}}户</span>
            </p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>网络电视用户</p>
          </div>
          <div class="content">
            <p>
              <span>{{wlyhxx.wldsyhs}}户</span>
            </p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>数字电视用户</p>
          </div>
          <div class="content">
            <p>
              <span>{{wlyhxx.szdsyhs}}户</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import { getSafety } from '@/api/Overview/DataAnalysis/api';
export default {
  components: {
    SecondaryTitle,
  },
  data() {
    return {
      ylxx: {
        wsjgs: 0,
        wsjsry: 0,
        ys: 0,
        yys: 0,
      },
      shflyxx: {
        cws: 0,
        shflys: 0,
        syrs: 0,
      },
      wlyhxx: {
        hlwkdyhs: 0,
        wldsyhs: 0,
        szdsyhs: 0,
      },
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getSafety()
        .request()
        .then((json) => {
          const { ylxx, shflyxx, wlyhxx } = json;
          this.ylxx = ylxx;
          this.shflyxx = shflyxx;
          this.wlyhxx = wlyhxx;
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
    &:nth-child(2){
      .content{
        p{
          font-size: 24px;
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
