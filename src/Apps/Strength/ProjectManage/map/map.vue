<template>
  <div class="map_wrapper">
    <div class="main-map" ref="map"></div>
  </div>
</template>

<script>
import AMap from 'AMap';
import hosIcon from './img/hospital-icon.png';
export default {
  components: {},
  data() {
    return {
      infoWindow: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 13,
        zooms: [3, 20],
        zoomEnable: true,
        center: [122.138836, 29.730147],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      this.map.on('click', (e) => {
        if (this.infoWindow.close) {
          this.infoWindow.close();
        }
      });
      this.initDrwnduo();
      this.addMarker();
    },
    // 撒点
    addMarker() {
      const item = {
        lng: 122.080898,
        lat: 29.769131,
        name: '棕榈湾地块',
      };
      const marker = new AMap.Marker({
        position: [item.lng, item.lat],
        content: "<div class='custom-marker'></div>",
        icon: hosIcon,
      });
      this.map.add(marker);
      marker.on('click', (e) => {
        this.addInfoWindow(item, e.lnglat);
      });
    },
    // 地图或多边形
    initDrwnduo() {
      const item = {
        name: '小郭一期',
      };
      var polygonArr = [
        [122.114742, 29.702105],
        [122.110933, 29.71803],
        [122.097833, 29.720723],
        [122.077454, 29.704801],
      ];
      var polygon = new AMap.Polygon({
        map: this.map,
        path: polygonArr,
        strokeColor: '#FF33FF',
        strokeOpacity: 0.2,
        strokeWeight: 3,
        fillColor: '#1791fc',
        fillOpacity: 0.35,
      });
      // polygon.on('click', this.addInfoWindow);
      polygon.on('click', (e) => {
        this.addInfoWindow(item, e.lnglat);
      });
    },
    addInfoWindow(markerMsg, lnglat) {
      const { lng, lat } = lnglat;
      const html = `<div class='pop-up-box'>
          <h3>${markerMsg.name}</h3>
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
.map_wrapper {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 2070px;
  .main-map {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 1350px;
    ::v-deep .custom-marker {
      width: 90px;
      height: 90px;
      background: url('./img/hospital-icon.png') no-repeat center center;
      background-size: 98% 98%;
      border-radius: 50%;
      z-index: 111;
    }
  }
  ::v-deep .pop-up-box {
    width: 550px;
    // height: 462px;
    position: absolute;
    left: 2126px;
    top: 503px;
    background: url('./img/pop-up-bg.png') no-repeat;
    background-size: 100% 100%;
    padding-left: 53px;
    padding-right: 53px;
    z-index: 10;
    .flex {
      display: flex;
    }
    h3 {
      font-size: 34px;
      font-family: 'Source Han Sans SC';
      font-weight: bold;
      color: #77ffff;
    }
  }
}
</style>
