<template>
  <div class="community_address">
    <BaseTitle title="GDP增速" :width="720" />
    <div class="item_wrapper">
      <div class="line_charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import BaseTitle from '../../components/BaseTitle';
import { getGdpSpeed } from '@/api/Overview/CityEvolution/api';
export default {
  name: 'CityEvolution',
  data() {
    return {
      charts: null,
      xAxisData: [],
      GdpData: [],
      timmerOneAnim: null,
    };
  },
  components: {
    BaseTitle,
  },
  mounted() {
    const charts = this.$refs.charts;
    this.charts = echarts.init(charts);
    this.loadData();
    var count = 0;
    if (this.timmerOneAnim) {
      clearInterval(this.timmerOneAnim);
    }
    this.timmerOneAnim = setInterval(() => {
      this.charts.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: count % this.GdpData.length,
      });
      count++;
    }, 5000);
  },
  methods: {
    setData() {
      this.charts.clear();
      this.charts.setOption(this.getOptions());
    },
    getOptions() {
      const option = {
        grid: {
          top: '10%',
          left: '10%',
          right: '10%',
          bottom: '15%',
        },
        legend: {
          // data: ['渔农村常住居民人均可支配收入', '增幅'],
          right: 30,
          top: 7,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 20,
            fontFamily: 'DIN Alternate',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          textStyle: {
            color: '#fff',
            fontSize: 22,
          },
          borderColor: 'rgba(255, 255, 255, 0.4)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        xAxis: [
          {
            data: this.xAxisData,
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.5)',
              },
            },
            axisTick: {
              show: false,
              alignWithLabel: true,
            },
            splitArea: {
              color: '#f00',
              lineStyle: {
                color: '#f00',
              },
            },
            axisLabel: {
              color: '#FFFFFF',
              margin: 10,
              textStyle: {
                fontSize: 20,
              },
            },
            splitLine: {
              show: false,
            },
            boundaryGap: true,
          },
        ],
        yAxis: [
          {
            name: '%',
            type: 'value',
            nameTextStyle: {
              align: 'center',
              color: '#fff',
              fontSize: 20,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.2)',
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#979797',
              },
            },
            axisLabel: {
              color: '#FFFFFF',
              margin: 10,
              textStyle: {
                fontSize: 22,
              },
            },
            axisTick: {
              show: true,
            },
          },
        ],
        series: [
          {
            type: 'line',
            name: '增幅',
            barWidth: 20,
            itemStyle: {
              color: '#59DBE6',
            },
            areaStyle: {
              color: 'rgba(5,140,255, 0.2)',
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#FFFFFF',
              textStyle: {
                fontSize: 20,
              },
            },
            data: this.GdpData,
          },
        ],
      };
      return option;
    },
    async loadData() {
      // 社区信息
      const res = await getGdpSpeed().request();
      const xAxisData = [];
      const GdpData = [];
      res.reverse().forEach((item, index) => {
        xAxisData.push(item.nf);
        GdpData.push(item.gdpzs);
      });
      this.xAxisData = xAxisData;
      this.GdpData = GdpData;
      this.setData();
    },
  },
};
</script>
<style lang="scss" scoped>
.community_address {
  position: absolute;
  width: 840px;
  height: 550px;
  // top: 550px;
  top: 0;
  left: 0;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  .item_wrapper {
    margin-top: 65px;
    height: 460px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .line_charts {
      height: 460px;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
