<template>
  <div class="left-2">
    <Title>水路客运</Title>
<!--    <Indicator />-->
    <div class="block">
      <div class="line" v-for="(item, index) in passenger" :key="index">
        <div class="second_item" style="width: 16rem;">{{ item.name }}</div>
        <div class="second_item">{{ item.number }}</div>
        <div class="second_item" v-show="item.seat">客位</div>
        <div class="second_item" >{{ item.seat }}</div>
        <div class="second_item" v-show="item.shiftLine">班线</div>
        <div class="second_item" >{{ item.shiftLine }}</div>
      </div>
    </div>
    <Title>道路货运及维修</Title>
    <div class="second_block">
      <div class="item" v-for="(item, index) in dataList" :key="index">
        <div class="first_item">{{ item.name }}:</div>
        <div class="second_item">{{ item.number }} {{ item.unit }}</div>
      </div>
    </div>
<!--    <LineChart />-->
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
      passenger: [
        {
          name: '滚动船',
          number: '7艘',
          seat: 1611,
          shiftLine: 7,
        },
        {
          name: '客船',
          number: '14艘',
          seat: 3041,
        },
        {
          name: '市际班车',
          number: '7条',
        },
        {
          name: '码头',
          number: '4座',
        },
      ],
      dataList: [
        {
          name: '工程车总数',
          number: 68,
          unit: '辆',
        },
        {
          name: '普通货车总数',
          number: 40,
          unit: '辆',
        },
        {
          name: '危运企业',
          number: 2,
          unit: '家',
        },
        {
          name: '二三类维修厂总数',
          number: 13,
          unit: '家',
        },
        {
          name: '从业人员总数',
          number: 548,
          unit: '人',
        },
        {
          name: '危险品车总数',
          number: 29,
          unit: '辆',
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
        width: 13rem;
        padding: 0.9rem;
      }
      .second_item {
        width: 10rem;
        padding: 0.9rem;
      }
    }
  }
  .second_block {
    font-size: 3.4rem;
    color: white;
    display: flex;
    flex-wrap: wrap;
    .item{
      width: 30rem;
      margin: 2rem;
      .first_item {
        text-align: center;
      }
      .second_item {
        text-align: center;
        font-size: 4.4rem;
      }
    }
  }
  // outline: 1px solid red;
}
</style>
