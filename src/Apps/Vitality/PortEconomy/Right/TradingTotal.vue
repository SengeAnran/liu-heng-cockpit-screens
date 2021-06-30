<template>
  <div ref="barChart"></div>
</template>

<script>
import * as echarts from 'echarts';
import { totalShippingTrade } from '@/api/Vitality/PortEconomy/api';
export default {
  data() {
    return {
      charts: null,
      yData: [],
      xData: [],
    };
  },
  mounted() {
    this.charts = echarts.init(this.$refs.barChart);
    this.loadData();
  },
  methods: {
    loadData() {
      this.setData();
    },
    setData() {
      totalShippingTrade()
        .request()
        .then((json) => {
          this.xData = json.map((item) => item.sj);
          this.yData = json.map((item) => item.myze);
          this.charts.clear();
          this.charts.setOption(this.getOptions());
        });
    },
    getOptions() {
      const option = {
        title: {
          text: '贸易总额',
          textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 24,
          },
        },
        grid: {
          top: '21%',
          left: '10%',
          right: '3%',
          bottom: '10%',
        },
        xAxis: {
          data: this.xData,
          type: 'category',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgba(151, 151, 151, .5)',
              width: 1,
            },
          },
          axisLabel: {
            textStyle: {
              fontSize: '20',
              color: 'rgba(255, 255, 255, .7)',
            },
          },
          boundaryGap: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        yAxis: {
          name: '万元',
          nameTextStyle: {
            fontSize: 20,
            color: 'rgba(255, 255, 255, .7)',
            align: 'right',
          },
          type: 'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(151, 151, 151, .5)',
              width: 1,
            },
          },
          axisLabel: {
            textStyle: {
              fontSize: '20',
              color: 'rgba(255, 255, 255, .7)',
            },
            formatter: (num) => num,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(151, 151, 151, .5)',
              width: 1,
            },
          },
        },
        series: [
          {
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#66CCFF',
                  },
                  {
                    offset: 1,
                    color: '#72DCEE',
                  },
                ],
                global: false,
              },
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#FFFFFF',
              textStyle: {
                fontSize: 22,
              },
            },
            data: this.yData,
          },
        ],
      };
      return option;
    },
  },
};
</script>
