<template>
<!--  <div ref="mapChart" class="chart-map"></div>-->
  <div class="chart-map" id="container"></div>
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
      map: null,
      series: [],
    };
  },
  mounted() {
    this.getData();
    // this.initMap();
    // this.chart = echarts.init(this.$refs.mapChart);
    // this.loadData();
    // echarts.registerMap('world', {
    //   type: 'FeatureCollection',
    //   crs: {
    //     type: 'name',
    //     properties: {
    //       name: 'urn:ogc:def:crs:OGC:1.3:CRS84',
    //     },
    //   },
    //   features,
    // });
    // this.initEcharts();
  },
  methods: {
    // loadData() {
    //   getPortDetail()
    //     .request()
    //     .then((json) => {
    //       json.map((item) => {
    //         item.name = item.gkmc;
    //         item.position = [item.lng, item.lat];
    //         item.content = item.js;
    //       });
    //       this.geoCoordMap = json;
    //       this.initEcharts();
    //     });
    // },
    // initEcharts()   {
    //   this.series = [];
    //   this.series.push({
    //     type: 'lines',
    //     zlevel: 1,
    //     symbol: ['none'],
    //     symbolSize: 1,
    //     effect: {
    //       show: true,
    //       period: 5,
    //       trailLength: 0.1,
    //       color: '#2be5f8',
    //       symbolSize: 5,
    //     },
    //     lineStyle: {
    //       normal: {
    //         color: '#2be5f8',
    //         width: 1,
    //         opacity: 0.5,
    //         curveness: 0.2,
    //       },
    //     },
    //     data: this.geoCoordMap.map((item) => {
    //       return {
    //         coords: [item.position, [122.153209, 29.749349]],
    //       };
    //     }),
    //   });
    //   this.geoCoordMap.forEach((item, i) => {
    //     this.series.push(
    //       {
    //         type: 'effectScatter',
    //         coordinateSystem: 'geo',
    //         zlevel: 2,
    //         rippleEffect: {
    //           period: 4,
    //           brushType: 'stroke',
    //           scale: 4,
    //         },
    //         label: {
    //           normal: {
    //             show: true,
    //             position: 'bottom',
    //             offset: [0, 10],
    //             formatter: '{b}',
    //             fontSize: 18,
    //             backgroundColor: 'rgba(9,23,55,.2)',
    //             padding: [12, 60],
    //             color: '#fff',
    //           },
    //         },
    //         symbol: 'circle',
    //         symbolSize: 12,
    //         // symbolSize: 5,
    //         // color: '#eac737',
    //         color: '#2be5f8',
    //         data: this.geoCoordMap.map((item) => {
    //           return {
    //             name: item.name,
    //             value: item.position,
    //           };
    //         }),
    //       },
    //       {
    //         type: 'scatter',
    //         coordinateSystem: 'geo',
    //         zlevel: 5,
    //         rippleEffect: { // 涟漪特效
    //           period: 4, // 动画时间，值越小速度越快
    //           brushType: 'stroke', // 波纹绘制方式 stroke, fill
    //           scale: 4, // 波纹圆环最大限制，值越大波纹越大
    //         },
    //         label: {
    //           normal: {
    //             show: false,
    //             position: 'top',
    //             offset: [0, 10],
    //             formatter: '{b}',
    //             fontSize: 18,
    //             backgroundColor: 'rgb(0,0,0)',
    //             padding: [12, 12],
    //             color: '#fff',
    //             width: 400,
    //             overflow: 'break',
    //             lineHeight: 30,
    //           },
    //           emphasis: {
    //             show: true,
    //           },
    //         },
    //         symbol: 'circle',
    //         symbolSize: 16, // 圆环大小
    //         itemStyle: {
    //           normal: {
    //             show: false,
    //             color: '#34c6bb',
    //           },
    //         },
    //         data: this.geoCoordMap.map(function (dataItem) {
    //           return {
    //             name: dataItem.content,
    //             value: dataItem.position,
    //           };
    //         }),
    //       },
    //     );
    //   });
    //
    //   const option = {
    //     backgroundColor: '#191d23',
    //     geo: {
    //       map: 'world',
    //       label: {
    //         // show: true,
    //         emphasis: {
    //           show: false,
    //         },
    //       },
    //       roam: true, // 是否允许缩放
    //       layoutCenter: ['50%', '56%'], // 地图位置
    //       layoutSize: '170%',
    //       itemStyle: {
    //         normal: {
    //           color: ['#335f7b'], // 地图背景色
    //           borderColor: '#29d0ff', // 省市边界线
    //         },
    //         emphasis: {
    //           color: '#335f7b', // 悬浮背景
    //         },
    //       },
    //     },
    //     series: this.series,
    //   };
    //   this.chart.setOption(option);
    // },
    getData() {
      getPortDetail()
        .request()
        .then((json) => {
          json.map((item) => {
            item.name = item.gkmc;
            item.position = [item.lng, item.lat];
            item.content = item.js;
          });
          this.geoCoordMap = json;
          this.initMap();
          this.addMarker(json);
        });
    },
    initMap() {
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        center: [13.021057,27.317153],
        layers: [
          new AMap.TileLayer.Satellite(),
          new AMap.TileLayer.RoadNet(),
        ],
        zoom: 3,
        pitch: 12,
        viewMode: '3D',
      });

      // 文字图层
      var labelLayer = new AMap.LabelsLayer({ // 构造一个标注图层对象，通过LabelsLayerOptions设置图层属性
        rejectMapMask: true,
        collision: true, // 是否开启碰撞检测，默认为 true
        animation: true, // 是否开启标注淡入动画，默认为 true
      });
      this.map.add(labelLayer);
      var loca = new Loca.Container({ // 创建可视化作品前，首先要创建一个 Loca 容器，这个容器可以帮您加载高德地图作为底图，或者帮您关联已有的高德地图作为底图。
        // 在使用地图的时，您可以使用任何一个 JS API 已有的功能，Loca 容器不会影响原有地图的任何功能和特性。这里创建的 Loca 容器您可以理解为是可视化图层的管理器。
        map:this.map,
      });

      // // 连接线图层
      // var linkLayer = new Loca.LinkLayer({
      //   zIndex: 20,
      //   opacity: 1,
      //   visible: true,
      //   zooms: [2, 22],
      // });

      // var scatterLayer1 = new Loca.ScatterLayer({
      //   zIndex: 10,
      //   opacity: 1,
      //   visible: true,
      //   zooms: [2, 22],
      // });
      // var scatterLayer2 = new Loca.ScatterLayer({
      //   zIndex: 10,
      //   opacity: 0.8,
      //   visible: true,
      //   zooms: [2, 22],
      // });
      // var scatterLayer3 = new Loca.ScatterLayer({
      //   zIndex: 10,
      //   opacity: 0.8,
      //   visible: true,
      //   zooms: [2, 22],
      // });

      this.geoCoordMap.map((item) => {
        var lineArr = [
          item.position,
          ['122.153209', '29.749349']
        ];
        // var lineArr = [
        //   ['75.757904', '38.118117'],
        //   ['117.375719', '24.598057']
        // ];
        var polyline = new AMap.Polyline({
          path: lineArr,            // 设置线覆盖物路径
          strokeColor: '#2be5f8',   // 线颜色
          strokeOpacity: 1,         // 线透明度
          strokeWeight: 3,          // 线宽
          strokeStyle: 'solid',     // 线样式
          strokeDasharray: [10, 5], // 补充线样式
          // geodesic: true,            // 绘制大地线
          // isOutline: true,
          showDir: true,
        });
        polyline.setMap(this.map);
      })

    },
    addInfoWindow(item) {
      const html = `<div class='info'>
        <div>${item.gkmc}</div>
        <div>简介: ${item.js}</div>
      </div>`;
      const infoWindow = new AMap.InfoWindow({
        isCustom: true, // 使用自定义窗体
        closeWhenClickMap: true,
        content: html, // 传入 dom 对象，或者 html 字符串
        offset: new AMap.Pixel(165, 243),
      });
      this.infoWindow = infoWindow;
      infoWindow.open(this.map, [item.lng, item.lat]);
    },
    addMarker(data) {
      data.forEach((item) => {
        const marker = new AMap.Marker({
          position: [item.lng, item.lat],
          content: `<div class="custom-marker">{{${item.gkmc}}}</div>`,
        });
        marker.setMap(this.map);
        marker.on('click', (e) => {
          this.addInfoWindow(item);
        });
      });
    },
    markerClick(item) {
      this.popup.setContent(this.createText(item));
      this.popup.open(this.map, [item.lng, item.lat]);
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
  ::v-deep .custom-marker {
    position: absolute;
    width: 49.7px;
    height: 49.7px;
    background: url('./img/icon.png');
    background-size: contain;
  }
  ::v-deep .info {
    position: relative;
    z-index: 999;
    width: 474px;
    //height: 282px;
    padding: 10px;
    background: url('./img/info.png') 100% 100% no-repeat;
    box-sizing: border-box;
    color: #fff;
    > div {
      font-size: 26px;
      font-family: 'Source Han Sans SC';
      margin-top: 15px;
      margin-left: 10px;
      &:nth-child(1) {
        font-size: 28px;
        color: #00ffff;
      }
    }
  }
}
</style>
