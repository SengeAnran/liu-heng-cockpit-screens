<template>
  <div class="left-2">
    <Title>隧道 &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;9条&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总长&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;4217米</Title>
    <!--    <BarPie />-->
    <div class="block">
      <div class="line" v-for="(item, index) in highway" :key="index">
        <div class="item" style="width: 20rem">{{ item.name }}</div>
        <div class="item">{{ item.startName }}</div>
        <div class="item">{{ item.endName }}</div>
        <div class="item" style="width: 25rem">{{ item.length }}</div>
      </div>
    </div>
    <Title>桥梁 &nbsp; &nbsp; &nbsp;&nbsp;27座&nbsp; &nbsp; &nbsp;&nbsp;总长&nbsp; &nbsp; &nbsp;&nbsp;637.2米</Title>
    <div class="block">
      <div class="line" v-for="(item, index) in passenger" :key="index">
        <div class="item" style="width: 20rem">{{ item.name }}</div>
        <div class="item">{{ item.startName }}</div>
        <div class="item">{{ item.endName }}</div>
        <div class="item" style="width: 25rem">{{ item.length }}</div>
      </div>
    </div>
    <!--    <Bar1 />-->
  </div>
</template>
<script>
import Title from './Title';
// import Indicator from './Indicator';
// import LineChart from './LineChart';

export default {
  components: {
    Title,
    // Indicator,
    // LineChart,
  },
  data() {
    return {
      highway: [
        {
          name: '隧道名称',
          startName: '路线名称',
          endName: ' 分类',
          length: '长度（米）',
        },
        {
          name: '龙山隧道右',
          startName: '台台线',
          endName: '短隧道',
          length: '385',
        },
        {
          name: '龙山隧道左',
          startName: '台台线',
          endName: '短隧道',
          length: '367',
        },
        {
          name: '龙山隧道右',
          startName: '台台线',
          endName: '短隧道',
          length: '290',
        },
        {
          name: '龙山隧道左',
          startName: '台台线',
          endName: '短隧道',
          length: '361',
        },
      ],
      passenger: [
        {
          name: '桥梁名称',
          startName: '全长',
          endName: ' 跨径总长',
          length: '跨径分类',
        },
        {
          name: '台门桥',
          startName: '13.6',
          endName: '13',
          length: '小桥',
        },
        {
          name: '后山弄桥',
          startName: '14.8',
          endName: '6',
          length: '小桥',
        },
        {
          name: '外湾桥',
          startName: '13.54',
          endName: '8',
          length: '小桥',
        },
        {
          name: '孙家1号桥',
          startName: '13.54',
          endName: '10',
          length: '小桥',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.left-2 {
  position: absolute;
  top: 26.4rem;
  left: 100rem;
  width: 80rem;
  .block {
    font-size: 3.4rem;
    color: white;
    .line {
      margin: 4rem 0;
      display: flex;
      .item {
        width: 14rem;
        /*padding: 0.9rem;*/
        padding: 0 0.9rem;
      }
      .second_item {
        width: 10rem;
        padding: 0.9rem;
      }
    }
  }
  // outline: 1px solid red;
}
</style>
