<template>
  <div class="Innovation">
    <Left />
    <Map />
    <Right />
  </div>
</template>

<script>
import Left from './Left/index';
import Map from './Map';
import Right from './Right/index';
export default {
  name: 'PortEconomy',
  components: {
    Left,
    Map,
    Right,
  },
};
</script>
<style lang="scss" scoped>
.Innovation {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 263px 160px 0;
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
