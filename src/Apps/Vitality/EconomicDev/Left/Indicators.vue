<template>
  <div class="indicator">
    <div class="item" v-for="item in list" :key="item.name">
      <span class="name">{{ item.name }}</span>
      <span class="value">
        {{ item.value }}
        <span class="unit">{{ item.unit }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { name: '企业注册量', value: 112, unit: '户' },
        { name: '企业密度', value: 25, unit: '户/人' },
        { name: '上市公司数量', value: 112, unit: '家' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.indicator {
  display: flex;
  width: 80rem;
  justify-content: space-between;
  .item {
    width: 25rem;
    height: 41rem;
    padding: 1.6rem;
    background: rgba(22, 40, 47, 0.2);
    border: 1px solid rgba(168, 247, 237, 0.2);
    border-radius: 1rem;
    box-sizing: border-box;
    text-align: center;
    &:nth-child(1) {
      color: #66CCFF;
      .name {
        background-image: url('./icons/company.png');
      }
    }
    &:nth-child(2) {
      color: #31EABC;
      .name {
        background-image: url('./icons/density.png');
      }
    }
    &:nth-child(3) {
      color: #EDC063;
      .name {
        background-image: url('./icons/number.png');
      }
    }
    .name {
      height: 26.5rem;
      display: block;
      background: rgba(22, 40, 47, 0.2);
      border: 1px solid rgba(168, 247, 237, 0.2);
      border-radius: 1rem;
      font-size: 3rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #FFF;
      box-sizing: border-box;
      text-align: center;
      line-height: 32rem;
      background-repeat: no-repeat;
      background-position: center 40%;
    }
    .value {
      font-size: 60px;
      font-family: DINPro;
      font-weight: 500;
      line-height: 13rem;
      .unit {
        font-size: 0.45em;
        font-family: Source Han Sans CN;
        font-weight: 500;
      }
    }
  }
}
</style>
