<template>
  <div class="IndustryIsland">
    <secondary-title name="产业之岛" />
    <div class="container">
      <div>
        <div>
          <div class="name">
            <p>主要农作物面积</p>
          </div>
          <div class="content">
            <p>经济作物播种面积 <span>16499亩</span></p>
            <p>油料播种面积 <span>3853亩</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>主要农作物产量</p>
          </div>
          <div class="content">
            <p>油料产量 <span>583.4吨</span>，棉花产量 <span>0.1吨</span></p>
            <p>蔬菜产量 <span>7086吨</span>，水果产量 <span>11947.7吨</span></p>
            <p>果用瓜产量 <span>3161.3吨</span>，茶叶产量 <span>2.6吨</span></p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="name">
            <p>农牧业生产情况</p>
          </div>
          <div class="content">
            <p>猪年末存栏 <span>10734头</span>，牛年末存栏 <span>1头</span></p>
            <p>羊年末存栏 <span>715只</span>，家禽年末存栏 <span>27975只</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>主要农作物产量</p>
          </div>
          <div class="content">
            <p>猪肉产量 <span>1839吨</span>，禽肉产量 <span>28.5吨</span></p>
            <p>羊肉产量 <span>18.4吨</span>，禽蛋产量 <span>478.3吨</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
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
