<template>
  <div class="bar">
    <div class="name">{{ `Top${barData.index}${barData.name}` }}</div>
    <div class="black-bar">
      <div class="outer" :style="{ width: `${barData.percent}%` }">
        <div
          class="inner"
          :style="{background: `linear-gradient(90deg, rgba(${color},0.2) 20%, rgba(${color},1) 90%, #fff)` }"
        ></div>
      </div>
    </div>
    <CountUp :num="barData.percent" />
  </div>
</template>
<script>
export default {
  props: {
    barData: Object,
    color: {
      type: String,
      default: '92, 111, 255',
    },
  },
  data() {
    return {};
  },
  components: {
  },
};
</script>
<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 26px;
  line-height: 26px;
  margin-bottom: 29px;
  display: flex;
  .name {
    font-size: 26px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    opacity: 0.8;
    position: absolute;
    z-index: 2;
  }
  .black-bar {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 255, 255, 0.1);
    margin-right: 20px;
    vertical-align: 2px;
    .outer {
      height: 26px;
      .inner {
        position: relative;
        width: 100%;
        height: 100%;
        animation: barLeftRoll 2s linear;
      }
    }
  }
  .count-up {
    font-size: 36px;
    // font-family: Myriad Pro;
    font-weight: 400;
    color: #ffffff;
    opacity: 0.8;
    &::after {
      content: '%';
    }
  }
}
@keyframes barLeftRoll {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
