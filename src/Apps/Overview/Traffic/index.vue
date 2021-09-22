<template>
  <div class="traffic">
    <div class="nav">
      <ul class="loop-tab">
        <li
          :class="{ active: currentTab === item.name }"
          v-for="(item, index) in listData"
          :key="index"
          @click="selectTab(item.name, item.index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <TrafficOverview v-if="tabIndex === 1"></TrafficOverview>
    <BridgeAndTunnel v-if="tabIndex === 2"></BridgeAndTunnel>
  </div>
</template>
<script>
import TrafficOverview from './components/TrafficOverview';
import BridgeAndTunnel from './components/BridgeAndTunnel';

export default {
  components: {
    TrafficOverview,
    BridgeAndTunnel,
  },
  data() {
    return {
      listData: [
        {
          index: 1,
          name: '交通概况',
        },
        {
          index: 2,
          name: '公路桥隧',
        },
      ],
      currentTab: '交通概况',
      tabIndex: 1,
    };
  },

  methods: {
    selectTab(name, index) {
      this.currentTab = name;
      this.tabIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.traffic {
  position: fixed;
  top: 0;
  width: 100%;
  height: 135rem;
  // background: url('/imgs/overview-traffic.jpg');
  .nav {
    position: absolute;
    top: 12rem;
    left: 20rem;
    z-index: 99999;
    &::after {
      content: '';
      display: block;
      height: 3px;
      background: #233049;
    }
    .loop-tab {
      display: flex;
      contain: content;
      //justify-content: space-between;
      align-items: center;
      height: 44px;
      list-style: none;
      width: 149rem;
      overflow-x: auto;
      padding: 0;
      //margin: 1rem 3rem;
      &::-webkit-scrollbar {
        width: 16px;
        height: 16px;
        background-color: #413f3f;
      }
      /*定义滚动条轨道
      内阴影+圆角*/
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(20, 34, 49, 0.3);
        // border-radius:10px;
        background-color: #0d1f38;
      }
      /*定义滑块
      内阴影+圆角*/
      &::-webkit-scrollbar-thumb {
        // border-radius:10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: rgb(70, 70, 70);
      }
      li {
        font-size: 28px;
        color: #ffffff;
        padding: 0 3rem;
        cursor: pointer;
        min-width: 14rem;
        height: 44px;
        text-align: center;
        &.active {
          font-size: 28px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #95f5f7;
          //background: url('~@/assets/images/Charm/tab-active.png') no-repeat center;
          //background: url('./img/xz.png') no-repeat center;
          background: url('./img/xz.png') 100% 100%;
          //background-size: 160%;
        }
      }
    }
    //ul {
    //  list-style-type: none;
    //  margin: 0;
    //  padding: 0;
    //  overflow: hidden;
    //  background-color: #333;
    //  li {
    //    //width: 15rem;
    //    display: block;
    //    padding: 2rem;
    //    background-color: #dddddd;
    //    font-size: 3rem;
    //    float: left;
    //  }
    //}
  }
}
</style>
