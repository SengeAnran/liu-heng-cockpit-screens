<template>
  <div ref="mapChart" class="chart-map"></div>
<!--  <div class="chart-map" id="container"></div>-->
</template>

<script>
import * as echarts from 'echarts';
import { getPortDetail } from '@/api/Vitality/PortEconomy/api';
import {
  getLocationInfo,
} from '@/api/IndexItem';
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
      points: [],
      series: [],
    };
  },
  mounted() {
    // this.getData();
    // this.initMap();
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
    // this.initEcharts();
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
          console.log(this.geoCoordMap);
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
            // symbolSize: 5,
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
          roam: true, // 是否允许缩放
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
    // getData() {
    //   getPortDetail()
    //     .request()
    //     .then((json) => {
    //       json.map((item) => {
    //         item.name = item.gkmc;
    //         item.position = [item.lng, item.lat];
    //         item.content = item.js;
    //       });
    //       this.geoCoordMap = json;
    //       // this.points = json.map((item) => {
    //       //   return {
    //       //     geometry: {
    //       //       type: "Point",
    //       //       coordinates: item.position,
    //       //     },
    //       //     properties: {
    //       //       country: item.gkmc,
    //       //       time: "1949年10月6日",
    //       //       flagName: item.gkmc,
    //       //       type: 1,
    //       //     },
    //       //     type: "Feature",
    //       //   }
    //       // })
    //       this.initMap();
    //       this.addMarker(json);
    //     });
    // },
    // async initMap() {
    //   this.map = new AMap.Map('container', {
    //     resizeEnable: true,
    //     center: [13.021057,27.317153],
    //     layers: [
    //       new AMap.TileLayer.Satellite(),
    //       new AMap.TileLayer.RoadNet(),
    //     ],
    //     zoom: 3,
    //     pitch: 30,
    //     viewMode: '3D',
    //   });
    //   // console.log(1111);
    //   var layer = new Loca.LinkLayer({
    //     map: this.map,
    //     // fitView: true,
    //   });
    //   const lines = this.geoCoordMap.map((item) => {
    //       return {
    //         line: [item.position,
    //           [122.153209, 29.749349]],
    //         distance: 1201,
    //       }
    //
    //
    //   })
    //   console.log(lines);
    //   layer.setData(lines, {
    //     lnglat: (e) => {
    //       console.log(e)
    //       return [e.value.line]
    //     },
    //   }).setOptions({
    //     style: {
    //       // 弧度
    //       // curveness: 1,
    //       // 弧度
    //       curveness: 6,
    //       // 填充颜色
    //       color: '#07d2e8',
    //       borderWidth: 16,
    //       width: 25,
    //       opacity: 0.8,
    //     },
    //   }).render();
    //
    //   // this.geoCoordMap.map((item) => {
    //   //   var lineArr = [
    //   //     item.position,
    //   //     ['122.153209', '29.749349']
    //   //   ];
    //   //   // var lineArr = [
    //   //   //   ['75.757904', '38.118117'],
    //   //   //   ['117.375719', '24.598057']
    //   //   // ];
    //   //   var polyline = new AMap.Polyline({
    //   //     path: lineArr,            // 设置线覆盖物路径
    //   //     strokeColor: '#2be5f8',   // 线颜色
    //   //     strokeOpacity: 1,         // 线透明度
    //   //     strokeWeight: 3,          // 线宽
    //   //     strokeStyle: 'solid',     // 线样式
    //   //     strokeDasharray: [10, 5], // 补充线样式
    //   //     // geodesic: true,            // 绘制大地线
    //   //     // isOutline: true,
    //   //     showDir: true,
    //   //   });
    //   //   polyline.setMap(this.map);
    //   // })
    // },
    // addInfoWindow(item) {
    //   const html = `<div class='info'>
    //     <div>${item.gkmc}</div>
    //     <div>简介: ${item.js}</div>
    //   </div>`;
    //   const infoWindow = new AMap.InfoWindow({
    //     isCustom: true, // 使用自定义窗体
    //     closeWhenClickMap: true,
    //     content: html, // 传入 dom 对象，或者 html 字符串
    //     offset: new AMap.Pixel(165, 243),
    //   });
    //   this.infoWindow = infoWindow;
    //   infoWindow.open(this.map, [item.lng, item.lat]);
    // },
    // addMarker(data) {
    //   data.forEach((item) => {
    //     const marker = new AMap.Marker({
    //       position: [item.lng, item.lat],
    //       content: `
    //         <div class="custom-marker">
    //           <div class="name">${item.name}</div>
    //         </div>`,
    //     });
    //     marker.setMap(this.map);
    //     marker.on('click', (e) => {
    //       this.addInfoWindow(item);
    //     });
    //   });
    // },
    // markerClick(item) {
    //   this.popup.setContent(this.createText(item));
    //   this.popup.open(this.map, [item.lng, item.lat]);
    // },
    // async local() {
    //   // 文字图层
    //   var labelLayer = new AMap.LabelsLayer({ // 构造一个标注图层对象，通过LabelsLayerOptions设置图层属性
    //     rejectMapMask: true,
    //     collision: true, // 是否开启碰撞检测，默认为 true
    //     animation: true, // 是否开启标注淡入动画，默认为 true
    //   });
    //   this.map.add(labelLayer);
    //   console.log(1111);
    //   var loca = new Loca.Container({ // 创建可视化作品前，首先要创建一个 Loca 容器，这个容器可以帮您加载高德地图作为底图，或者帮您关联已有的高德地图作为底图。
    //     // 在使用地图的时，您可以使用任何一个 JS API 已有的功能，Loca 容器不会影响原有地图的任何功能和特性。这里创建的 Loca 容器您可以理解为是可视化图层的管理器。
    //     map:this.map,
    //   });
    //   console.log(1111);
    //   // 连接线图层
    //   var linkLayer = new Loca.LinkLayer({
    //     zIndex: 20,
    //     opacity: 1,
    //     visible: true,
    //     zooms: [2, 22],
    //   });
    //
    //   var scatterLayer1 = new Loca.ScatterLayer({
    //     zIndex: 10,
    //     opacity: 1,
    //     visible: true,
    //     zooms: [2, 22],
    //   });
    //   // var scatterLayer2 = new Loca.ScatterLayer({
    //   //   zIndex: 10,
    //   //   opacity: 0.8,
    //   //   visible: true,
    //   //   zooms: [2, 22],
    //   // });
    //   var scatterLayer3 = new Loca.ScatterLayer({
    //     zIndex: 10,
    //     opacity: 0.8,
    //     visible: true,
    //     zooms: [2, 22],
    //   });
    //   var centerPoint = new Loca.GeoJSONSource({
    //     data: {
    //       'type': 'FeatureCollection',
    //       'features': [
    //         {
    //           'type': 'Feature',
    //           'geometry': {
    //             'type': 'Point',
    //             'coordinates': [116.39, 39.9],
    //           },
    //         },
    //       ],
    //     },
    //   });
    //
    //   scatterLayer3.setSource(centerPoint);
    //   scatterLayer3.setStyle({
    //     size: [300000, 300000],
    //     unit: 'meter',
    //     texture: 'https://a.amap.com/Loca/static/static/center-point.png',
    //   });
    //   loca.add(scatterLayer3);
    //
    //   var lineGeoMap;
    //   var scatterGeoMap;
    //
    //   var filterGeoJSON = (json, type) => {
    //     var newJSON = {
    //       type: 'FeatureCollection',
    //       features: [...json.features.filter((item) => item.properties.type === type)],
    //     };
    //     return new Loca.GeoJSONSource({
    //       data: newJSON,
    //     });
    //   };
    //
    //   var setLabelsLayer = (data) => {
    //     labelLayer.clear();
    //     data.features.forEach((item) => {
    //       var labelsMarker = new AMap.LabelMarker({
    //         name: item.properties.flagName,
    //         position: item.geometry.coordinates,
    //         zooms: [2, 22],
    //         opacity: 1,
    //         zIndex: 10,
    //         text: {
    //           content: item.properties.country,
    //           direction: 'bottom',
    //           offset: [0, -5],
    //           style: {
    //             fontSize: 13,
    //             fontWeight: 'normal',
    //             fillColor: '#fff',
    //           },
    //         },
    //       });
    //       labelLayer.add(labelsMarker);
    //     });
    //     labelLayer.add(
    //       new AMap.LabelMarker({
    //         name: 'china',
    //         position: [116.39, 39.9],
    //         zooms: [2, 22],
    //         opacity: 1,
    //         zIndex: 10,
    //         rank: 100,
    //         text: {
    //           content: '中国',
    //           direction: 'bottom',
    //           offset: [0, -5],
    //           style: {
    //             fontSize: 13,
    //             fontWeight: 'normal',
    //             fillColor: '#fff',
    //           },
    //         },
    //       }),
    //     );
    //   };
    //
    //   scatterGeoMap = data;
    //   setLabelsLayer(this.points);
    //   var source1 = filterGeoJSON(scatterGeoMap[50], 1);
    //   // var source2 = filterGeoJSON(scatterGeoMap[50], 1);
    //   scatterLayer1.setSource(source1);
    //   // scatterLayer2.setSource(source2);
    //   scatterLayer1.setStyle({
    //     size: [500000, 500000],
    //     unit: 'miter',
    //     animate: true,
    //     duration: 1000,
    //     texture: 'https://a.amap.com/Loca/static/static/green.png',
    //   });
    //   // scatterLayer2.setStyle({
    //   //   size: [500000, 500000],
    //   //   unit: 'miter',
    //   //   animate: true,
    //   //   duration: 1000,
    //   //   texture: 'https://a.amap.com/Loca/static/static/orange.png',
    //   // });
    //   loca.add(scatterLayer1);
    //   // loca.add(scatterLayer2);
    //   loca.animate.start();
    //
    //   const res = await getLocationInfo({ type: '港口飞线' }).request();
    //   console.log(res)
    //
    //   fetch('https://a.amap.com/Loca/static/static/diplomacy-line.json')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       lineGeoMap = Object.entries(data).reduce((accu, curr) => {
    //         var [key, geo] = curr;
    //         accu[key] = new Loca.GeoJSONSource({
    //           data: geo,
    //         });
    //         return accu;
    //       }, {});
    //       linkLayer.setSource(lineGeoMap[50]);
    //       linkLayer.setStyle({
    //         lineColors: function (index, item) {
    //           return item.link.properties.type === 0 ? ['#25CDEA', '#12BFBF'] : ['#FFD87B', '#FF4F00'];
    //         },
    //         height: function (index, item) {
    //           return item.distance / 3;
    //         },
    //         smoothSteps: function (index, item) {
    //           return 200;
    //         },
    //       });
    //       loca.add(linkLayer);
    //     });
    //
    //   var items = document.querySelectorAll('.item');
    //
    //   for (var i = 0; i < items.length; i++) {
    //     (function (j) {
    //       items[j].onclick = () => {
    //         var element = items[j];
    //         var key = element.children[0].dataset.year;
    //         document.querySelector('div.item.active').classList.remove('active');
    //         element.classList.add('active');
    //         linkLayer.setSource(lineGeoMap[key]);
    //         setLabelsLayer(scatterGeoMap[key]);
    //         scatterLayer1.setSource(filterGeoJSON(scatterGeoMap[key], 0));
    //         // scatterLayer2.setSource(filterGeoJSON(scatterGeoMap[key], 1));
    //       };
    //     })(i);
    //   }
    // }
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
    .name{
      position: absolute;
      top: 5rem;
      left: -7rem;
      padding: 1rem 2rem;
      font-size: 32px;
      line-height: 66px;
      background: rgba(20, 31, 62, 0.8);
      border-radius: 1rem;
      color: white;
    }
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
