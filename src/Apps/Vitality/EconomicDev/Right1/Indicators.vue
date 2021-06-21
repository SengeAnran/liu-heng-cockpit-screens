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
  props: {
    list: {
      type: Array,
      default: () => ({}),
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
