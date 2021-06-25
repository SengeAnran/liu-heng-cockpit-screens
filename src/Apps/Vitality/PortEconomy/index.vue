<template>
  <div class="Innovation">
    <Left />
    <Center />
    <Right />
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
.Innovation {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 135rem;
  background-color: red;
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
