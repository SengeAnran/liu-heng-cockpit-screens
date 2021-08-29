<template>
  <div class="left-1">
    <Title>县道</Title>
    <div class="block">
      <div class="block-top">
        <div class="top-left item">
          <div class="top-left-img">
            <img src="./img/xdtj.png">
          </div>
          <div class="top-left-name xdcolor" >县道统计</div>
        </div>
        <div class="top-cancer item">
          <div class="item-span-number xdcolor">
            4
          </div>
          <div class="item-span-name">
            县道数量
          </div>
        </div>
        <div class="top-right item">
          <div class="item-span-number xdcolor">
            61.991
          </div>
          <div class="item-span-name">
            总长(公里)
          </div>
        </div>
      </div>
      <div class="line titles">
        <div class="second_item">线路名称</div>
        <div class="second_item">起点名称</div>
        <div class="second_item">里程总计(公里)</div>
        <div class="second_item">迄点名称</div>
      </div>
      <div class="line" v-for="(item, index) in highway" :key="index">
        <div class="second_item">{{ item.name }}</div>
        <div class="second_item">{{ item.startName }}</div>
        <div class="second_item" style="color: #63CEB3">{{ item.length }}</div>
        <div class="second_item">{{ item.endName }}</div>
      </div>
    </div>
    <Title>村道</Title>
    <div class="block">
      <div class="block-top">
        <div class="top-left item">
          <div class="top-left-img">
            <img src="./img/cdtj.png">
          </div>
          <div class="top-left-name cdcolor">村道统计</div>
        </div>
        <div class="top-cancer item">
          <div class="item-span-number cdcolor">
            90
          </div>
          <div class="item-span-name">
            村道数量
          </div>
        </div>
        <div class="top-right item">
          <div class="item-span-number cdcolor">
            109.683
          </div>
          <div class="item-span-name">
            总长(公里)
          </div>
        </div>
      </div>
      <div class="line titles">
        <div class="second_item">线路名称</div>
        <div class="second_item">起点名称</div>
        <div class="second_item">里程总计(公里)</div>
        <div class="second_item">迄点名称</div>
      </div>
      <div class="line" v-for="(item, index) in passenger" :key="index">
        <div class="second_item">{{ item.name }}</div>
        <div class="second_item">{{ item.startName }}</div>
        <div class="second_item" style="color: #63CEB3">{{ item.length }}</div>
        <div class="second_item">{{ item.endName }}</div>
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
        // {
        //   name: '孙干线',
        //   startName: '孙家',
        //   endName: '干岩',
        //   length: '2.975',
        // },
      ],
      passenger: [
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
        // {
        //   name: '台外线',
        //   startName: '外平蛟',
        //   endName: '外平蛟',
        //   length: '0.536',
        // },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
$main-font: 24px;
.left-1 {
  position: absolute;
  top: 26.4rem;
  left: 16rem;
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
        background: none !important;
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
          width: 11rem;
          margin-left: 2rem;
        }
        &:nth-child(2){
          width: 11rem;
        }
        &:nth-child(3){
          width: 27rem;
          text-align: center;
          background: url('./img/qsd.png') no-repeat;
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
