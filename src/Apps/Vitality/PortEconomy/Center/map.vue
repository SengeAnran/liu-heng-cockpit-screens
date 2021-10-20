<template>
  <div ref="mapChart" class="chart-map"></div>
</template>

<script>
import * as echarts from 'echarts';
import { getPortDetail } from '@/api/Vitality/PortEconomy/api';
import features from './word';
export default {
  data() {
    return {
      geoCoordMap: [
        // {
        //   name: '宁波舟山港 北仑港区',
        //   position: [121.887824, 29.931505],
        //   content: '舟山港（Zhoushan Port），是中国浙江省舟山市港口，位于中国长江三角洲和东部沿海要冲，背靠上海、杭州、宁波等大中城市 ，是长江三角洲综合运输网的重要节点。',
        // },
        // {
        //   name: '美国长滩港',
        //   position: [-118.269465, 33.722667],
        //   content: '相比邻港洛杉矶的交通拥堵状况， 长滩在这方面的问题较少。 长滩港口管理局约翰.佩伯说：“长滩集装箱吞吐量增加的推动力是美国不断增长的消费需求和中国日益提升的制造能力。',
        // },
      ],
      series: [],
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.mapChart);
    this.loadData();
    echarts.registerMap('world', {
      type: 'FeatureCollection',
      crs: {
        type: 'name',
        properties: {
          name: 'urn:ogc:def:crs:OGC:1.3:CRS84',
        },
      },
      features,
    });
    this.initEcharts();
  },
  methods: {
    loadData() {
      getPortDetail()
        .request()
        .then((json) => {
          json.map((item) => {
            item.name = item.gkmc;
            item.position = [item.lng, item.lat];
            item.content = item.js;
          });
          this.geoCoordMap = json;
          this.initEcharts();
        });
    },
    initEcharts() {
      this.series = [];
      this.series.push({
        type: 'lines',
        zlevel: 1,
        symbol: ['none'],
        symbolSize: 1,
        effect: {
          show: true,
          period: 5,
          trailLength: 0.1,
          color: '#2be5f8',
          symbolSize: 5,
        },
        lineStyle: {
          normal: {
            color: '#2be5f8',
            width: 1,
            opacity: 0.5,
            curveness: 0.2,
          },
        },
        data: this.geoCoordMap.map((item) => {
          return {
            coords: [item.position, [122.153209, 29.749349]],
          };
        }),
      });
      this.geoCoordMap.forEach((item, i) => {
        this.series.push(
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 4,
            },
            label: {
              normal: {
                show: true,
                position: 'bottom',
                offset: [0, 10],
                formatter: '{b}',
                fontSize: 18,
                backgroundColor: 'rgba(9,23,55,.2)',
                padding: [12, 60],
                color: '#fff',
              },
            },
            symbol: 'circle',
            symbolSize: 12,
            // color: '#eac737',
            color: '#2be5f8',
            data: this.geoCoordMap.map((item) => {
              return {
                name: item.name,
                value: item.position,
              };
            }),
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 5,
            rippleEffect: { // 涟漪特效
              period: 4, // 动画时间，值越小速度越快
              brushType: 'stroke', // 波纹绘制方式 stroke, fill
              scale: 4, // 波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: false,
                position: 'top',
                offset: [0, 10],
                formatter: '{b}',
                fontSize: 18,
                backgroundColor: 'rgb(0,0,0)',
                padding: [12, 12],
                color: '#fff',
                width: 400,
                overflow: 'break',
                lineHeight: 30,
              },
              emphasis: {
                show: true,
              },
            },
            symbol: 'circle',
            symbolSize: 16, // 圆环大小
            itemStyle: {
              normal: {
                show: false,
                color: '#34c6bb',
              },
            },
            data: this.geoCoordMap.map(function (dataItem) {
              return {
                name: dataItem.content,
                value: dataItem.position,
              };
            }),
          },
        );
      });

      const option = {
        backgroundColor: '#191d23',
        geo: {
          map: 'world',
          label: {
            // show: true,
            emphasis: {
              show: false,
            },
          },
          roam: false, // 是否允许缩放
          layoutCenter: ['50%', '56%'], // 地图位置
          layoutSize: '170%',
          itemStyle: {
            normal: {
              color: ['#335f7b'], // 地图背景色
              borderColor: '#29d0ff', // 省市边界线
            },
            emphasis: {
              color: '#335f7b', // 悬浮背景
            },
          },
        },
        series: this.series,
      };
      this.chart.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.chart-map {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
