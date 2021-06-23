<template>
  <div class="indicator">
    <div class="item">
      <span class="name">
        常住人口<br />数量
      </span>
      <span class="value">
        {{ permanentNumValue }}
        <span class="unit">{{ permanentNumUnit }}人</span>
      </span>
    </div>
    <div class="item">
      <span class="name">劳动力<br />人口数量</span>
      <span class="value">
        {{ laborNumValue }}
        <span class="unit">{{ laborNumUnit }}人</span>
      </span>
    </div>
  </div>
</template>
<script>
import economicAPI from '@/api/Vitality/EconomicDev';
import { unitNum } from '@/utils/number';

export default {
  data() {
    return {
      permanentNum: 0,
      laborNum: 0,
    };
  },
  computed: {
    permanentNumValue() {
      const { value } = unitNum(this.permanentNum);
      return +value.toFixed(2);
    },
    permanentNumUnit() {
      const { unit } = unitNum(this.permanentNum);
      return unit;
    },
    laborNumValue() {
      const { value } = unitNum(this.laborNum);
      return +value.toFixed(2);
    },
    laborNumUnit() {
      const { unit } = unitNum(this.laborNum);
      return unit;
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await economicAPI.populationInfo();
      // console.log(data);
      this.permanentNum = data?.czrk || 0;
      this.laborNum = data?.ldlrks || 0;
    },
  },
};
</script>
<style lang="scss" scoped>
.indicator {
  display: flex;
  width: 80rem;
  justify-content: space-between;
  margin-top: 3rem;
  .item {
    width: 38.2rem;
    height: 12.3rem;
    background: rgba(22, 40, 47, 0.4);
    // border: 1px solid rgba(168, 247, 237, 0.2);
    border-radius: 1rem;
    box-sizing: border-box;
    display: flex;
    .name {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      white-space: break-spaces;
      border: 1px solid rgba(168, 247, 237, 0.2);
      width: 15rem;
      height: 12.3rem;
      border-radius: 1rem;
      font-size: 2.8rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      background: linear-gradient(180deg, #fff 0%, #99FFFF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .value {
      flex: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-size: 48px;
      font-family: DIN;
      font-weight: 500;
      color: #FFFFFF;
      .unit {
        font-size: 0.45em;
        font-family: Source Han Sans CN;
        font-weight: 500;
        opacity: 0.5;
        // line-height: 1rem;
      }
    }
  }
}
</style>
