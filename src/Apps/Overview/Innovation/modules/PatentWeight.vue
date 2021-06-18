<template>
  <div class="PatentWeight">
    <div class="sub-title">专利权重分析</div>
    <div class="chart-wrap">
      <div class="chart" ref="radarChart"></div>
      <div class="index-wrap">
        <div :key="index" v-for="(item,index) in listData">
          <span>{{item.name}}</span>
          <span>{{item.num}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      chart: null,
      listData: [
        {
          name: '创造性',
          num: 4,
        },
        {
          name: '成果性',
          num: 3,
        },
        {
          name: '推广性',
          num: 1,
        },
        {
          name: '实用性',
          num: 3,
        },
        {
          name: '价值性',
          num: 2,
        },
      ],
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.radarChart);
    this.initEcharts();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  },
  methods: {
    initEcharts() {
      const option = {
        radar: {
          indicator: [
            { name: '创造性', max: 5 },
            { name: '价值性', max: 5 },
            { name: '实用性', max: 5 },
            { name: '推广性', max: 5 },
            { name: '成果性', max: 5 },
          ],
          name: {
            textStyle: {
              color: '#fff',
              fontSize: 18,
            },
          },
          splitNumber: 5,
          splitLine: {
            lineStyle: {
              color: ['transparent', 'transparent', 'transparent', 'transparent', '#145960'].reverse(),
            },
          },
          splitArea: {
            areaStyle: {
              color: [
                'rgba(17,105,117,.8)',
                'rgba(9,88,100,.8)',
                'rgba(10,65,76,.8)',
                'rgba(9,49,57,.8)',
                'rgba(8,30,34,.8)',
              ],
            },
          },
          axisLine: {
            lineStyle: {
              color: '#145960',
              opacity: 1,
            },
          },
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data: [[4, 2, 3, 1, 3]],
            itemStyle: {
              borderWidth: 2,
              color: '#11FFFC',
              borderColor: '#11FFFC',
            },
            areaStyle: {
              color: '#0DCFCD',
              opacity: 0.3,
            },
            symbolSize: 6,
            label: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 20,
              },
            },
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.PatentWeight {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  .sub-title {
    font-size: 24px;
    line-height: 24px;
    min-height: 24px;
    color: #fff;
    margin-bottom: 20px;
  }
  .chart-wrap {
    flex: 1;
    display: flex;
    & > div {
      &:nth-child(1) {
        margin-right: 40px;
        flex: 5;
      }
      &:nth-child(2) {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > div {
          width: 270px;
          height: 60px;
          background: url(../images/shadow_bg.png) no-repeat center bottom / 270px 69px;
          text-align: center;
          span{
            font-size: 29px;
            line-height: 80px;
            color: rgba(255,255,255,.9);
            &:first-child{
              margin-right: 40px;
            }
          }
        }
      }
    }
  }
}
</style>
