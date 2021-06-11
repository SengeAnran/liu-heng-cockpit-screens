<template>
  <div class="SafeIsland">
    <secondary-title name="平安之岛" />
    <div class="container">
      <div>
        <div>
          <div class="name">
            <p>卫生机构 <span>33个</span></p>
          </div>
          <div class="content">
            <p>医院 <span>2个</span></p>
            <p>其他 <span>31个</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>卫生技术人员 <span>257人</span></p>
          </div>
          <div class="content">
            <p>医生 <span>174人</span></p>
            <p>其他 <span>83人</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>p社会福利院数 <span>2个</span></p>
          </div>
          <div class="content">
            <p>敬老院 福利院床位数 <span>224张</span></p>
            <p>敬老院 福利院收养人数 <span>66人</span></p>
          </div>
        </div>
      </div>
      <div>
        <div>
        <div class="name">
          <p>互联网宽带用户</p>
        </div>
          <div class="content">
            <p><span>22750户</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>网络电视用户</p>
          </div>
          <div class="content">
            <p><span>22750户</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>数字电视用户</p>
          </div>
          <div class="content">
            <p><span>22750户</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from './components/SecondaryTitle';
export default {
  components: {
    SecondaryTitle,
  },
  data() {
    return {};
  },
  methods: {},
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
      background: url(./images/card_bg_0.png) no-repeat center / cover;
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
