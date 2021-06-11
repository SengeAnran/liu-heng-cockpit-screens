<template>
  <div class="CreateIsland">
    <secondary-title name="制造之岛" />
    <div class="container">
      <div>
        <div>
          <div class="name">
            <p>工业企业数量 <span>429个</span></p>
          </div>
          <div class="content">
            <p>集体 <span>2个</span></p>
            <p>有限责任公司 <span>47个</span></p>
            <p>私营企业 <span>303个</span></p>
            <p>个人独资企业 <span>77个</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>工业产值 <span>952100万元</span></p>
          </div>
          <div class="content">
            <p>装备制造业 <span>505899万元</span></p>
            <p>高新技术产业 <span>284746万元</span></p>
            <p>船舶工业 <span>493234万元</span></p>
            <p>重工业 <span>928644万元</span></p>
            <p>轻工业 <span>23456万元</span></p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="name">
            <p>规上工业企业数量 <span>19个</span></p>
          </div>
          <div class="content">
            <p>有限责任公司 <span>4个</span></p>
            <p>私营企业 <span>15个</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>工业企业从业人员数</p>
            <p><span>11752人</span></p>
          </div>
          <div class="content">
            <p>集体 <span>102人</span></p>
            <p>有限责任公司 <span>3015人</span></p>
            <p>私营企业 <span>7820人</span></p>
            <p>个人独资企业 <span>817人</span></p>
            <p>其他 <span>0人</span></p>
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
      background: url(./images/card_bg_1.png) no-repeat center / cover;
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
