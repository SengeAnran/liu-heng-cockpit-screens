<template>
  <div class="ProjectManage-right">
    <div>
      <BaseTitle title="投资增速分析"
                 :width="780" />
      <div class="chart-box">
        <LineChart :line-data="lineData" />
      </div>
      <BaseTitle title="项目许可情况"
                 :width="780"
                 :top="530" />
      <div class="chart-box box1">
        轮播图
      </div>
    </div>
    <div class="right-right">
      <BaseTitle title="资金占比分析"
                 :width="780" />
      <div class="chart-box">
        <PieChart :data="pieTypeData"
                  legendType="pec"
                  title="资金占比分析" />
      </div>
      <BaseTitle title="重大项目"
                 :width="780"
                 :top="530" />
      <div class="chart-box box1">
        <div class="flex">
          <div>
            <div class="desc-item">项目总数（个）
              <MyCountUp :endVal="2333" />
            </div>
            <div class="desc-item">项目总量（万元）
              <MyCountUp :endVal="22333" />
            </div>
          </div>
          <div class="lunbo-list">
            轮播图
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from '../../Overview/Medical/components/BaseTitle';
import LineChart from '../../Overview/Medical/components/LineChart';
import PieChart from '../../Overview/Medical/components/PieChart';
import MyCountUp from '../../Overview/Medical/components/ICountUp';

export default {
  name: 'ProjectManageRight',
  components: { BaseTitle, LineChart, PieChart, MyCountUp },
  data() {
    return {
      pieTypeData: [
        { name: '自有资金', value: 10 },
        { name: '财政性资金', value: 20 },
        { name: '银行贷款', value: 30 },
        { name: '其他资金', value: 40 },
      ],
      lineData: {
        title: '增速分析',
        yname1: '百分比%',
        lineColor11: 'rgba(111, 216, 238, 1)',
        showArea: false,
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 6, 8, 9, 12],
      },
      lineBarData: {
        title: '图表',
        name1: '增长率',
        name2: '人数',
        lineColor: 'rgba(89, 219, 230, 1)',
        barColor1: 'rgba(245, 165, 100, .8)',
        barColor2: 'rgba(245, 165, 100, .3)',
        xData: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
        data1: [1, 3, 5, 26, 8, 49, 99], // 增长率
        data2: [10, 31, 5, 163, 18, 9, 199], // 人数
      },
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.flex{
  display: flex;
}
.ProjectManage-right {
  position: absolute;
  top: 263px;
  right: 160px;
  width: 1650px;
  height: 1027px;
  font-size: 24px;
  display: flex;
  color: #fff;
  z-index: 999;
  > div {
    height: 100%;
    width: 50%;
  }
  .right-right {
    right: 0;
  }
  .chart-box {
    height: 415px;
    width: 50%;
    position: absolute;
    top: 60px;
    .pieChart {
      margin-top: 50px;
      height: 360px;
    }
  }
  .box1 {
    top: 590px;
    margin-top: 18px;
    .desc-item {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 18px;
      font-family: Source Han Sans SC;
      font-weight: 500;
      color: #78d2ff;
      width: 200px;
      height: 190px;
      background-image: url('./images/mainpro-bg.png');
      margin-top: 18px;
      &:nth-child(1){
        margin-top: 0;
      }
      .iCountUp {
        font-size: 36px;
        font-family: DIN;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .lunbo-list{
      margin-left: 42px;
    }
  }
}
</style>
