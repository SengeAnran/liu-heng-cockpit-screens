<template>
  <div class="secondary-title" :class="{large:isLarge}">
    <span>{{name}}</span>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
    isLarge: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.secondary-title {
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  min-height: 64px;
  background: url(./images/title_bg.png) no-repeat left center;
  background-size: auto 64px;
  padding-left: 70px;
  &.large {
    background: url(./images/title_bg_large.png) no-repeat left center;
    background-size: auto 64px;
  }
  span {
    font-size: 32px;
    line-height: 66px;
    color: #fff;
  }
}
</style>
