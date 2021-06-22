<template>
  <div class="bar">
    <div class="content" :style="{ width: num + '%' }">
        <div class="text">
      <div>{{ item.cflx }}</div>
      <div><CountUp :num="item.cs" /></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  components: { },
  name: 'Bar',
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      num: 0,
    };
  },
  watch: {
    item: {
      handler(val) {
        setTimeout(() => {
          this.num = val.cs;
        }, 300);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.bar {
  width: 793px;
  height: 85px;
  background: rgba(153, 153, 153, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 20px;
  border-radius: 20px;
  .content {
    height: 85px;
    background: rgba(32, 55, 58, 1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px 0 0 10px;
    transition: width 2s;
    position: relative;
  }
  .text {
    width: 793px;
    height: 85px;
    line-height: 85px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    position:absolute;
    top: 0;
    left: 0;
    > div {
      height: 100%;
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #ffffff;
    }
  }
}
</style>
