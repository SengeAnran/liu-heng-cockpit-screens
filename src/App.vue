<template>
  <div id="app">
    <FitScreen displayType="centerFull" :pageSize="pageSize" />
    <div class="content">
      <router-view />
    </div>
    <Nav />
  </div>
</template>
<script>
import FitScreen from '@/components/FitScreen';
import Nav from '@/views/Nav';
export default {
  name: 'App',
  data() {
    return {
      pageSize: {
        width: 5760 / 2,
        height: 2070 / 2,
      },
    };
  },
  components: {
    FitScreen,
    Nav,
  },
};
</script>
<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  height: 100%;
  // background-image: url('./bg.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}
.content {
  height: 135rem;
}
</style>
