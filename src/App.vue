<template>
  <div id="app">
    <FitScreen displayType="centerFull" :pageSize="pageSize" />
<!--     <FitScreen displayType="equalRatioFull" :pageSize="pageSize" />-->
<!--    <div class="subject"></div>-->
    <AppTitle />
    <!-- <div class="content">
      <router-view />
    </div> -->

    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <div class="nav-bg" v-if="navShow">
      <Nav/>
    </div>
  </div>
</template>
<script>
import FitScreen from '@/components/FitScreen';
import AppTitle from '@/components/AppTitle';
import Nav from '@/views/Nav';

import './assets/css/common.css';

export default {
  name: 'App',
  data() {
    return {
      pageSize: {
        width: 5760,
        height: 2070,
        transitionName: '',
      },
      navShow: true,
    };
  },
  components: {
    FitScreen,
    Nav,
    AppTitle,
  },
  mounted() {
    this.interval();
    // if (!this.$store.state) {
    //   this.navShow = false;
    // }
  },
  updated() {
    if (this.$route.query.navShow === 'false') {
      this.$store.state.navShow = false;
      console.log(this.$store.state);
      this.navShow = false;
      this.pageSize.height = 1350;
    }
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
.subject {
  width: 100%;
  height: 100%;
}
.content {
  position: relative;
  height: 135rem;
}
::-webkit-scrollbar {
  width: 1rem;
  height: 1rem;
  background-color: #f5f5f533;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f533;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(73, 215, 220, 0.3);
}
.nav-bg {
  height: 72rem;
  //background-image: url('./title-bg.png');
}
</style>
