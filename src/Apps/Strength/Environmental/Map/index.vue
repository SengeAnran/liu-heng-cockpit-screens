<template>
  <div class="map-container">
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
  </div>
</template>

<script>
import AMap from 'AMap';
export default {
  name: 'Map',
  components: {},
  data() {
    return {
      map: null,
      mapDom: null,
      markers: [],
      makerList: [
        {
          lng: 122.153611,
          lat: 29.721389,
          address: '舟山市普陀区六横镇梅峙村',
          jibei: '非重点源',
          ph: '6.88',
          hy: '6.5mg/L',
          NHN: '0.07mg/L',
          allN: '8.3mg/L',
          paifangbianhao: 'DW001',
        },
        {
          lng: 122.127706,
          lat: 29.75812,
          address: '舟山市普陀区六横乡舟电大道1号',
          jibei: '重点源',
          yangcheng: '2.15',
          so2: '26.606',
          NHN: '43.099',
        },
      ],
    };
  },
  mounted() {
    this.mapDom = this.$refs.map;
    this.map = new AMap.Map(this.mapDom, {
      resizeEnable: true,
      zoom: 13.4,
      zooms: [3, 16],
      center: [122.120087, 29.742798],
      mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
    });
    this.map.on('click', (e) => {
      if (this.infoWindow.close) {
        this.infoWindow.close();
      }
    });
    this.initSadian();
  },
  methods: {
    // 加载撒点
    initSadian() {
      var jiezhong = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(70, 70),
        // 图标的取图地址
        image: require('./img/sheshui.png'),
        // image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
        // 图标所用图片大小
        imageSize: new AMap.Size(70, 70),
        // 图标取图偏移量
        imageOffset: new AMap.Pixel(-9, -3),
      });
      this.makerList.forEach((item) => {
        const startMarker = new AMap.Marker({
          position: new AMap.LngLat(item.lng, item.lat),
          icon: jiezhong,
          offset: new AMap.Pixel(-13, -30),
        });
        startMarker.on('click', (e) => {
          this.addInfoWindow(item, item.lng, item.lat);
        });
        this.markers.push(startMarker);
      });
      this.map.add([...this.markers]);
    },

    addInfoWindow(markerMsg, lng, lat) {
      // const { lng, lat } = lnglat;
      const html = `<div class='pop-up-box'>
         2131231231
        </div>`;
      const infoWindow = new AMap.InfoWindow({
        isCustom: true, // 使用自定义窗体
        content: html, // 传入 dom 对象，或者 html 字符串
        offset: new AMap.Pixel(760.7, -590),
      });
      this.infoWindow = infoWindow;
      infoWindow.open(this.map, [lng, lat]);
    },
  },
};
</script>
<style lang="scss" scoped>
.map-container {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 2070px;
  .mask {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2070px;
    z-index: 6;
    pointer-events: none;
    background-size: 100% 100%;
    background: url('./img/mask.png') no-repeat;
  }
  .main-map {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 1350px;
  }
}
</style>
