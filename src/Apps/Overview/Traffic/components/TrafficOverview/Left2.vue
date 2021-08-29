<template>
  <div class="left-2">
    <Title>水路客运</Title>
<!--    <Indicator />-->
    <div class="block">
      <div class="line titles">
        <div class="second_item">类型</div>
        <div class="second_item">数量</div>
        <div class="second_item">客位</div>
        <div class="second_item">车位(个)</div>
      </div>
      <div class="line" v-for="(item, index) in passenger" :key="index">
        <div class="second_item">{{ item.name }}</div>
        <div class="second_item">{{ item.number }}</div>
        <div class="second_item" >{{ item.seat }}</div>
        <div class="second_item" >{{ item.shiftLine }}</div>
      </div>
    </div>
    <Title>道路货运及维修</Title>
    <div class="second_block">
      <div class="item" v-for="(item, index) in dataList" :key="index">
        <div class="first_item"><span style="font-size: 48px">{{ item.number }}</span> {{ item.unit }}</div>
        <div class="second_item">{{ item.name }}</div>
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
          shiftLine: '-',
        },
        {
          name: '市际班车',
          number: '7条',
          seat: '-',
          shiftLine: '-',
        },
        {
          name: '码头',
          number: '4座',
          seat: '-',
          shiftLine: '-',
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
    margin-top: 27px;
    margin-bottom: 70px;
    .titles{
      .second_item {
        font-size: 24px;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .line {
      margin: 1.4rem 0;
      width: 793px;
      height: 64px;
      line-height: 44px;
      background: url('./img/list-bg.png') no-repeat 100% 100%;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: #AECACA;
      display: flex;
      justify-content: space-around;
      &:first-child {
        height: 74px;
        line-height: 55px;
      }
      .item {
        width: 15rem;
        padding: 0.9rem;
      }
      .second_item {
        font-size: 24px;
        width: 17rem;
        padding: 0.9rem;
        text-align: right;
        &:first-child{
          width: 12rem;
          text-align: left;
          margin-left: 2rem;
        }
        &:nth-child(2){
          width: 11rem;
        }
        &:last-child{
          margin-right: 4rem;
        }
      }
    }
  }
  .second_block {
    font-size: 22px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15.1px;
    .item{
      width: 265px;
      height: 175px;
      background: url("./img/dlhyjwx.png") 100% 100%;
      margin-bottom: 18px;
      //margin: 2rem;
      .first_item {
        font-family: DINPro;
        font-weight: 500;
        text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.24);
        margin-top: 40px;
        text-align: center;
        background: linear-gradient(180deg, #FFFFFF 0%, #4ECDD8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .second_item {
        margin-top: 5px;
        text-align: center;
        font-family: DINPro;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 44px;
        text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.24);
        background: linear-gradient(180deg, #FFFFFF 0%, #4ECDD8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  // outline: 1px solid red;
}
</style>
