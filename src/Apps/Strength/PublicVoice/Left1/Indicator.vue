<template>
  <div class="indicator">
    <div class="item">
      <div class="name">
        <div>
          <img src="../img/shili/shijian.png" />
        </div>
        <div>本月事件</div>
      </div>
      <span class="value">
        {{ week }}
        <span class="unit">件</span>
      </span>
    </div>
    <div class="item-right">
      <!--      <span class="name">本周事件</span>-->
      <!--      <span class="value">-->
      <!--        {{ week }}-->
      <!--        <span class="unit">件</span>-->
      <!--      </span>-->
      <div class="little-item">
        <img src="../img/shili/zhengmian.png" />
        <span class="item-title">正面</span>
        <span class="item-number" style="color: rgb(0, 254, 95)">{{ positive }}</span>
      </div>
      <div class="little-item">
        <img src="../img/shili/fumian.png" />
        <span class="item-title">负面</span>
        <span class="item-number" style="color: rgb(247, 0, 50)">{{ negative }}</span>
      </div>
      <div class="little-item">
        <img src="../img/shili/zhongxing.png" />
        <span class="item-title">中性</span>
        <span class="item-number" style="color: rgb(94, 127, 129)">{{ neutral }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import economicAPI from '@/api/Strength/PublicVoice';

export default {
  data() {
    return {
      mouth: 13,
      week: 7,
      positive: null,
      neutral: null,
      negative: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const data = await economicAPI.eventSituation();
      this.week = data[0].bzsjs;
      this.positive = data[0].zmsjs;
      this.negative = data[0].fmsjs;
      this.neutral = data[0].zxsjs;
      // console.log(data);
    },
  },
};
</script>
<style lang="scss" scoped>
.indicator {
  display: flex;
  width: 80rem;
  margin-top: 3rem;
  justify-content: space-between;
  // outline: 1px solid red;
  .item {
    width: 39rem;
    height: 39rem;
    padding: 1.6rem;
    background: rgba(22, 40, 47, 0.2);
    border: 1px solid rgba(168, 247, 237, 0.2);
    border-radius: 1rem;
    box-sizing: border-box;
    text-align: center;
    &:nth-child(1) {
      color: #31eabc;
    }
    //&:nth-child(2) {
    //  color: white;
    //}
    .name {
      height: 15.5rem;
      // display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(22, 40, 47, 0.2);
      border: 1px solid rgba(168, 247, 237, 0.05);
      border-radius: 1rem;
      font-size: 3.6rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #99ffff;
    }
    .value {
      font-size: 54px;
      font-family: DINPro;
      font-weight: 500;
      line-height: 22rem;
      .unit {
        font-size: 0.45em;
        font-family: Source Han Sans CN;
        font-weight: 500;
      }
    }
  }
  .item-right {
    width: 39rem;
    height: 39rem;
    padding: 1.6rem;
    background: rgba(22, 40, 47, 0.2);
    border: 1px solid rgba(168, 247, 237, 0.2);
    border-radius: 1rem;
    box-sizing: border-box;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .little-item {
      display: flex;
      justify-content: space-around;
      .item-title {
        font-size: 3.6rem;
      }
      .item-number {
        font-size: 4rem;
        font-weight: 1000;
      }
    }
  }
}
</style>
