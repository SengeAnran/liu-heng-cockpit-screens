<template>
  <div class="indicator">
    <div class="item">
      <span class="name">本月事件</span>
      <span class="value">
        {{ mouth }}
        <span class="unit">件</span>
      </span>
    </div>
    <div class="item">
      <span class="name">本周事件</span>
      <span class="value">
        {{ week }}
        <span class="unit">件</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mouth: 13,
      week: 7,
    };
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
      color: #31EABC;
    }
    &:nth-child(2) {
      color: #EDC063;
    }
    .name {
      height: 15.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(22, 40, 47, 0.2);
      border: 1px solid rgba(168, 247, 237, 0.05);
      border-radius: 1rem;
      font-size: 3.6rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #99FFFF;
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
}
</style>
