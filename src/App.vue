<template>
  <div id="app">
    <FitScreen displayType="centerFull" :pageSize="pageSize" />
    <AppTitle />
    <div class="content">
      <router-view />
    </div>
    <Nav />
  </div>
</template>
<script>
import FitScreen from '@/components/FitScreen';
import AppTitle from '@/components/AppTitle';
import Nav from '@/views/Nav';

export default {
  name: 'App',
  data() {
    return {
      pageSize: {
        width: 5760,
        height: 2070,
      },
    };
  },
  components: {
    FitScreen,
    Nav,
    AppTitle,
  },
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  position: relative;
  height: 135rem;
}
</style>
