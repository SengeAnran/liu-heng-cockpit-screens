<template>
  <div class="StruggleIsland">
    <secondary-title name="奋斗之岛" />
    <div class="container">
      <div>
        <div>
          <div class="name">
            <p>户籍人数 <span>62824人</span></p>
          </div>
          <div class="content">
            <p>男性人数 <span>30991个</span></p>
            <p>女性人数 <span>31833个</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>劳动力资源数 <span>41586人</span></p>
          </div>
          <div class="content">
            <p>男性人数 <span>22057个</span></p>
            <p>女性人数 <span>19529个</span></p>
          </div>
        </div>
        <div>
          <div class="name">
            <p>财政供给人员 <span>274人</span></p>
          </div>
          <div class="content">
            <p>公务员 <span>93个</span>，事业编制 <span>81个</span></p>
            <p>其他人员 <span>100个</span></p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="name">
            <p>规模工业企业水</p>
            <p>及能源消耗情况</p>
          </div>
          <div class="content">
           <p>水 <span>1120万吨</span></p>
           <p>原煤 <span>3829530吨</span></p>
           <p>焦炭 <span>0吨</span></p>
           <p>汽油 <span>323吨</span></p>
           <p>煤油 <span>0吨</span></p>
           <p>柴油 <span>8098吨</span></p>
           <p>液化石油气 <span>4.7吨</span></p>
           <p>天然气 <span>39立方米</span></p>
           <p>电 <span>62747万度</span></p>
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
    &:nth-child(2n){
      & > div{
        height: 406px;
        margin-bottom: 0;
      }
      .name{
        height: 366px;
        background-image: url(./images/card_bg_2.png);
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
