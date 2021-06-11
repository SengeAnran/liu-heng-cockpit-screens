<template>
  <div class="PatentList">
    <secondary-title name="发明专利列表" />
    <div class="container">
      <div class="table-title">
        <span>姓名</span>
        <span>专利名称</span>
        <span>时间</span>
        <span>所属地</span>
        <span>所属公司</span>
      </div>
      <div class="table-content">
         <vue-seamless-scroll :data="listData" :class-option="defaultOption" >
          <div class="item" :key="index" v-for="(item,index) in listData">
            <span>李四{{index}}</span>
            <span>一种可变化拖鞋</span>
            <span>2021-03-11</span>
            <span>舟山市六横镇</span>
            <span>六横制船厂</span>
          </div>
         </vue-seamless-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle';
import vueSeamlessScroll from 'vue-seamless-scroll';
export default {
  components: {
    SecondaryTitle,
    vueSeamlessScroll,
  },
  data() {
    return {
      listData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
  computed: {
    defaultOption() {
      return {
        step: 0.5,
        hoverStop: true,
        direction: 1,
        openWatch: true,
      };
    },

  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
  .table-title {
    display: flex;
    height: 74px;
    min-height: 74px;
    line-height: 74px;
    margin-bottom: 21px;
    background: url(../images/list_bg.png) no-repeat center / cover;
    span {
      font-size: 28px;
      color: #fff;
      &:nth-child(1) {
        width: 16%;
      }
      &:nth-child(2) {
        width: 22%;
      }
      &:nth-child(3) {
        width: 19%;
      }
      &:nth-child(4) {
        width: 22%;
      }
      &:nth-child(5) {
        width: 22%;
      }
    }
  }
  .item {
    display: flex;
    height: 74px;
    line-height: 74px;
    background: url(../images/list_bg.png) no-repeat center / cover;
    border-radius: 14px;
    margin-bottom: 21px;
    cursor: pointer;
    span {
      font-size: 24px;
      color: rgba(120, 210, 255, 1);
      padding: 0 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:nth-child(1) {
        width: 13%;
      }
      &:nth-child(2) {
        width: 23%;
      }
      &:nth-child(3) {
        width: 21%;
      }
      &:nth-child(4) {
        width: 22%;
      }
      &:nth-child(5) {
        width: 22%;
      }
    }
  }
  .table-content{
    flex: 1;
    overflow: hidden;
  }
}
</style>
