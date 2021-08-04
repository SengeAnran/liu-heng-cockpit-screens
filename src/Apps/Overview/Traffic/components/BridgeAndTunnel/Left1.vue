<template>
  <div class="left-1">
    <Title>县道 &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;4条&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总长&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;61.991公里</Title>
<!--    <BarPie />-->
    <div class="block">
      <div class="line" v-for="(item, index) in highway" :key="index">
        <div class="item">{{ item.name }}</div>
        <div class="item">{{ item.startName }}</div>
        <div class="item">{{ item.endName }}</div>
        <div class="item" style="width: 28rem">{{ item.length }}</div>
      </div>
    </div>
    <Title>村道 &nbsp; &nbsp; &nbsp;&nbsp;90条&nbsp; &nbsp; &nbsp;&nbsp;总长&nbsp; &nbsp; &nbsp;&nbsp;109.683公里</Title>
    <div class="block">
      <div class="line" v-for="(item, index) in passenger" :key="index">
        <div class="item">{{ item.name }}</div>
        <div class="item">{{ item.startName }}</div>
        <div class="item">{{ item.endName }}</div>
        <div class="item" style="width: 28rem">{{ item.length }}</div>
      </div>
    </div>
<!--    <Bar1 />-->
  </div>
</template>
<script>
import Title from './Title';
// import BarPie from './BarPie';
// import Bar1 from './Bar1';

export default {
  components: {
    Title,
    // BarPie,
    // Bar1,
  },
  data() {
    return {
      highway: [
        {
          name: '路线名称',
          startName: '起点名称',
          endName: ' 迄点名称',
          length: '公里总计（公里）',
        },
        {
          name: '台台线',
          startName: '台门码头',
          endName: ' 台门',
          length: '39.155',
        },
        {
          name: '外涨线',
          startName: '外湾',
          endName: '涨起港',
          length: '10.154',
        },
        {
          name: '大梅线',
          startName: '大岙码头',
          endName: '梅峙岙',
          length: '9.32',
        },
        {
          name: '孙干线',
          startName: '孙家',
          endName: '干岩',
          length: '2.975',
        },
      ],
      passenger: [
        {
          name: '路线名称',
          startName: '起点名称',
          endName: ' 迄点名称',
          length: '公里总计（公里）',
        },
        {
          name: '台大线',
          startName: '台沙线',
          endName: ' 大夹屯',
          length: '1.568',
        },
        {
          name: '台青线',
          startName: '台沙线',
          endName: '青山香村',
          length: '0.847',
        },
        {
          name: '台里线',
          startName: '台沙线',
          endName: '平蛟水库',
          length: '0.553',
        },
        {
          name: '台外线',
          startName: '外平蛟',
          endName: '外平蛟',
          length: '0.536',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.left-1 {
  position: absolute;
  top: 26.4rem;
  left: 16rem;
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
