<template>
  <div class="bar">
    <div class="content" :style="{ width: num + '%',background:`linear-gradient(to right, rgba(45, 187, 253, 0), ${color})` }"></div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'Bar',
  props: {
    rate: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      num: 0,
    };
  },
  watch: {
    rate: {
      handler(val) {
        setTimeout(() => {
          this.num = val;
        }, 300);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.bar {
  width: 195px;
  height: 10px;
  margin: 0 5px;
  .content {
    height: 100%;
    background: rgba(32, 55, 58, 1);
    transition: width 2s;
    position: relative;
  }
}
</style>
