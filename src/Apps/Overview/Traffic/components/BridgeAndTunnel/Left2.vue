<template>
  <div class="left-2">
    <Title>隧道</Title>
    <!--    <BarPie />-->
    <div class="block">
      <div class="block-top">
        <div class="top-left item">
          <div class="top-left-img">
            <img src="./img/sdtj.png">
          </div>
          <div class="top-left-name sdcolor">隧道统计</div>
        </div>
        <div class="top-cancer item">
          <div class="item-span-number sdcolor">
            9
          </div>
          <div class="item-span-name">
            隧道数量
          </div>
        </div>
        <div class="top-right item">
          <div class="item-span-number sdcolor">
            4217
          </div>
          <div class="item-span-name">
            总长(米)
          </div>
        </div>
      </div>
      <div class="line titles">
        <div class="second_item">隧道名称</div>
        <div class="second_item">路线名称</div>
        <div class="second_item">长度(米)</div>
        <div class="second_item">分类</div>
      </div>
      <div class="line" v-for="(item, index) in highway" :key="index">
        <div class="second_item">{{ item.name }}</div>
        <div class="second_item">{{ item.startName }}</div>
        <div class="second_item" style="color: #63CEB3;">{{ item.length }}</div>
        <div class="second_item">{{ item.endName }}</div>
      </div>
    </div>
    <Title>桥梁</Title>
    <div class="block">
      <div class="block-top">
        <div class="top-left item">
          <div class="top-left-img">
            <img src="./img/qltj.png">
          </div>
          <div class="top-left-name qlcolor">桥梁统计</div>
        </div>
        <div class="top-cancer item">
          <div class="item-span-number qlcolor">
            27
          </div>
          <div class="item-span-name">
            桥梁数量
          </div>
        </div>
        <div class="top-right item">
          <div class="item-span-number qlcolor">
            637.2
          </div>
          <div class="item-span-name">
            总长(米)
          </div>
        </div>
      </div>
      <div class="line titles">
        <div class="second_item">隧道名称</div>
        <div class="second_item"  style="text-align: center">全长</div>
        <div class="second_item">跨径总长</div>
        <div class="second_item">跨径分类</div>
      </div>
      <div class="line" v-for="(item, index) in passenger" :key="index">
        <div class="second_item">{{ item.name }}</div>
        <div class="second_item" style="text-align: center; color: #63CEB3;">{{ item.startName }}</div>
        <div class="second_item" style="color:#63CEB3">{{ item.endName }}</div>
        <div class="second_item">{{ item.length }}</div>
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
        // {
        //   name: '龙山隧道左',
        //   startName: '台台线',
        //   endName: '短隧道',
        //   length: '361',
        // },
      ],
      passenger: [
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
        // {
        //   name: '孙家1号桥',
        //   startName: '13.54',
        //   endName: '10',
        //   length: '小桥',
        // },
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
    margin-top: 2rem;
    margin-bottom: 6rem;
    .block-top{
      background: url("./img/sjbj.png") 100% 100%;
      height: 106px;
      display: flex;
      .item {
        text-align: center;
        height: 106px;
        .xdcolor{
          background: linear-gradient(180deg, #FFFFFF 0%, #4ECDD8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cdcolor{
          background-image:-webkit-linear-gradient(bottom,#53E9A1,#FFFFFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .sdcolor{
          background-image:-webkit-linear-gradient(bottom,#E1D35E,#FFFFFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .qlcolor{
          background-image:-webkit-linear-gradient(bottom,#CE954C,#FFFFFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .item-span-number{
          margin-top: 20px;
          text-align: center;
          height: 44px;
          font-size: 40px;
          font-family: DINPro;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 44px;
          text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.24);
        }
        .item-span-name{
          text-align: center;
          height: 21px;
          font-size: 22px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 44px;
          opacity: 0.5;
        }
      }
      .top-left{
        width: 191px;
        font-size: 22px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        line-height: 44px;
        .top-left-img{
          margin-top: 22px;
          height: 40px;
        }
        .top-left-name {
          text-align: center;
          height: 36px;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          //color: #FFFFFF;
          line-height: 44px;
        }
        .xdcolor{
          background-image:-webkit-linear-gradient(bottom,#F7F196,#FFFFFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cdcolor{
          background-image:-webkit-linear-gradient(bottom,#F6B25A,#FFFFFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .sdcolor{
          background-image:-webkit-linear-gradient(bottom,#6CD9E2,#FFFFFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .qlcolor{
          background-image:-webkit-linear-gradient(bottom,#78D2A7,#FFFFFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .top-cancer{
        width: 260px;

      }
      .top-right{
        width: 330px;
      }
    }
    .titles{
      .second_item {
        font-size: 29px;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .line {
      margin: 1.2rem 0;
      width: 793px;
      height: 59px;
      line-height: 35px;
      background: url('./img/list-bg.png') no-repeat 100% 100%;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: #AECACA;
      display: flex;
      justify-content: space-around;
      .item {
        width: 15rem;
        padding: 0.9rem;
      }
      .second_item {
        font-size: 24px;
        width: 17rem;
        padding: 0.9rem;
        text-align: left;
        &:first-child{
          width: 13rem;
          margin-left: 2rem;
        }
        &:nth-child(2){
          width: 11rem;
        }
        &:nth-child(3){
          width: 20rem;
          text-align: center;
        }
        &:last-child{
          //margin-right: 4rem;
        }
      }
    }
  }
  // outline: 1px solid red;
}
</style>
