<template>
  <div class="traffic">
    <div class="nav">
      <ul class="loop-tab">
        <li
          :class="{'active': currentTab === item.name}"
          v-for="(item, index) in listData"
          :key="index"
          @click="selectTab(item.name, index)"
        >{{item.name}}</li>
      </ul>
    </div>
    <Map />
    <Left1 />
    <Left2 />
    <Right1 />
    <Right2 />
  </div>
</template>
<script>
import Map from './Map';
import Left1 from './Left1';
import Left2 from './Left2';
import Right1 from './Right1';
import Right2 from './Right2';

export default {
  components: {
    Map,
    Left1,
    Left2,
    Right1,
    Right2,
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
        {
          index: 3,
          name: '道路客运',
        },
        {
          index: 4,
          name: '水路客运',
        },
        {
          index: 5,
          name: '道路货运',
        },
        {
          index: 6,
          name: '交通运行分析',
        },
      ],
      currentTab: '交通概况',
    };
  },
  methods: {
    selectTab(name) {
      this.currentTab = name;
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
    .loop-tab{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 7rem;
      list-style: none;
      width: 149rem;
      overflow-x: auto;
      padding: 0;
      margin: 1rem 3rem;
      &::-webkit-scrollbar
      {
        width:16px;
        height:16px;
        background-color:#413f3f;
      }
      /*定义滚动条轨道
      内阴影+圆角*/
      &::-webkit-scrollbar-track
      {
        -webkit-box-shadow:inset 0 0 6px rgba(20, 34, 49, 0.3);
        // border-radius:10px;
        background-color:#0d1f38;
      }
      /*定义滑块
      内阴影+圆角*/
      &::-webkit-scrollbar-thumb
      {
        // border-radius:10px;
        -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
        background-color:rgb(70, 70, 70);
      }
      li{
        font-size: 3.4rem;
        color: rgba(255, 255, 255, .3);
        padding: 0 3rem;
        cursor: pointer;
        min-width: 14rem;;
        text-align: center;
        &.active{
          color: white;
          background: url('~@/assets/images/Charm/tab-active.png') no-repeat center;
          background-size: 160%;
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
