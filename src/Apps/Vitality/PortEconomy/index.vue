<template>
  <div class="Innovation">
    <transition name="slide" appear> <Left :key="Left" /></transition>
    <Center />
    <transition name="slide1" appear> <Right :key="Right" /></transition>
  </div>
</template>

<script>
import Left from './Left/index';
import Center from './Center/index';
import Right from './Right/index';
export default {
  name: 'PortEconomy',
  components: {
    Left,
    Center,
    Right,
  },
};
</script>
<style lang="scss" scoped>
@import url('../../../transform.css');
.Innovation {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 135rem;
  //background-color: red;
  display: flex;
  justify-content: space-between;
  padding: 263px 160px 0;
  // background-color: transparent;
  .left-webview,
  .right-webview {
    width: 1650px;
    height: 980px;
    overflow: hidden;
    position: relative;
    z-index: 10;
  }
}
</style>
