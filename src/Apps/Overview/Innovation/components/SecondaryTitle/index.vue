<template>
  <div class="secondary-title">
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
  },
};
</script>
<style lang="scss" scoped>
.secondary-title {
  width: 100%;
  height: 64px;
  min-height: 64px;
  background: linear-gradient(90deg, rgba(18, 38, 46, .8) 10%, rgba(18, 38, 46, 0.1));
  display: flex;
  align-items: center;
  &::before{
    content: '';
    display: block;
    width: 30px;
    height: 24px;
    margin: 0 20px;
    background: url(./images/arrow.png) no-repeat center /cover;
  }
  span{
    font-size: 32px;
    color: #fff;
  }
}
</style>
