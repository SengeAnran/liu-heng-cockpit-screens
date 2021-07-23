<template>
  <div id="app">
<!--    <FitScreen displayType="centerFull" :pageSize="pageSize" />-->
    <FitScreen displayType="equalRatioFull" :pageSize="pageSize" />
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
  mounted() {
    this.interval();
  },
  methods: {
    interval() {
      this.$store.commit('setIntervalId', true);
    },
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
::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
    background-color: #F5F5F533;
}
::-webkit-scrollbar-track {
    border-radius:10px;
    background-color: #F5F5F533;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(73, 215, 220, 0.3);
}
</style>
