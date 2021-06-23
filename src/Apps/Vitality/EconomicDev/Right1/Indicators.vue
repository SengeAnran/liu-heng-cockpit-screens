<template>
  <div class="indicator">
    <div class="item">
      <span class="name">全年GDP</span>
      <span class="value">
        {{ yearGDPValue }}
        <span class="unit">{{ yearGDPUnit }}元</span>
      </span>
    </div>
    <div class="item">
      <span class="name">人均可支配收入</span>
      <span class="value">
        {{ averageGDPValue }}
        <span class="unit">{{ averageGDPUnit }}元</span>
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
      yearGDP: 4820,
      averageGDP: 6920,
      // list: [
      //   { name: '全年GDP', value: 4820, unit: '万元' },
      //   { name: '人均可支配收入', value: 6920, unit: '元' },
      // ],
    };
  },
  computed: {
    yearGDPValue() {
      const { value } = unitNum(this.yearGDP);
      return value.toFixed(2);
    },
    yearGDPUnit() {
      const { unit } = unitNum(this.yearGDP);
      return unit;
    },
    averageGDPValue() {
      const { value } = unitNum(this.averageGDP);
      return value.toFixed(2);
    },
    averageGDPUnit() {
      const { unit } = unitNum(this.averageGDP);
      return unit;
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await economicAPI.economicInfo();
      this.yearGDP = data?.qngpd;
      this.averageGDP = data?.rjkzpje;
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
      border: 1px solid rgba(168, 247, 237, 0.2);
      width: 15rem;
      height: 12.3rem;
      border-radius: 1rem;
      font-size: 2.8rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      background: linear-gradient(180deg, #fff 0%, #99FFFF 100%);
      background-clip: text;
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
