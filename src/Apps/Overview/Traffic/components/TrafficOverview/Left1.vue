<template>
  <div class="left-1">
    <Title>公路桥隧</Title>
<!--    <BarPie />-->
    <div class="block">
      <div class="line" v-for="(item, index) in highway" :key="index">
        <div class="item">{{ item.name }}</div>
        <div class="item">{{ item.number }}</div>
        <div class="item">总长</div>
        <div class="item" style="width: 20rem">{{ item.length }}</div>
      </div>
    </div>
    <Title>道路客运</Title>
    <div class="block">
      <div class="line" v-for="(item, index) in passenger" :key="index">
        <div class="second_item" style="width: 16rem;">{{ item.name }}</div>
        <div class="second_item">{{ item.number }}辆</div>
        <div class="second_item" v-show="item.seat">客位</div>
        <div class="second_item" >{{ item.seat }}</div>
        <div class="second_item" v-show="item.shiftLine">车位</div>
        <div class="second_item" v-if="item.shiftLine">{{ item.shiftLine }}条</div>
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
          name: '县道',
          number: '4条',
          length: '61.991公里',
        },
        {
          name: '村道',
          number: '90条',
          length: '109.683公里',
        },
        {
          name: '隧道',
          number: '9条',
          length: '4217米',
        },
        {
          name: '桥梁',
          number: '27座',
          length: '637.2米',
        },
      ],
      passenger: [
        {
          name: '公交车',
          number: 20,
          seat: 849,
          shiftLine: 7,
        },
        {
          name: '农村班车',
          number: 25,
          seat: 412,
          shiftLine: 15,
        },
        {
          name: '市际班车',
          number: 25,
          seat: 412,
          shiftLine: 15,
        },
        {
          name: '出租车',
          number: 28,
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
        width: 13rem;
        padding: 0.9rem;
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
