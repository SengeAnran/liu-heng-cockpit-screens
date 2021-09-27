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
      infoWindow: null,
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
    this.initMap();
  },
  methods: {
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 13,
        center: [122.200254, 29.707613],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      this.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
      this.map.on('click', (e) => {
        if (this.infoWindow.close) {
          this.infoWindow.close();
        }
      });
      this.initMarkers();
    },
    addInfoWindow(markerMsg, lnglat) {
      const { lng, lat } = lnglat;
      const html = `<div class='pop-up-box'>
          <h3>${markerMsg.address}</h3>
        </div>`;
      const infoWindow = new AMap.InfoWindow({
        isCustom: true, // 使用自定义窗体
        content: html, // 传入 dom 对象，或者 html 字符串
        offset: new AMap.Pixel(760.7, -590),
      });
      this.infoWindow = infoWindow;
      infoWindow.open(this.map, [lng, lat]);
    },
    // 加载医院
    initMarkers() {
      var yiyuanIcon = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(70, 70),
        // 图标的取图地址
        image: require('./img/sheshui.png'),
        // 图标所用图片大小
        imageSize: new AMap.Size(70, 70),
        // 图标取图偏移量
        imageOffset: new AMap.Pixel(-9, -3),
      });
      this.makerList.forEach((item) => {
        const startMarker = new AMap.Marker({
          position: new AMap.LngLat(item.lng, item.lat),
          icon: yiyuanIcon,
          offset: new AMap.Pixel(-13, -30),
        });
        startMarker.on('click', (e) => {
          this.addInfoWindow(item, e.lnglat);
        });
        this.markers.push(startMarker);
      });
      this.map.add([...this.markers]);
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
    .name {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #ffffff;
      height: 50px;
    }
    .content {
      height: 40px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
      overflow: auto;
    }
    .content1 {
      height: 150px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
      overflow: auto;
      margin-bottom: 20px;
    }
    > div {
      width: 100%;
      // margin-bottom: 46px;
      > div {
        width: 100%;
      }
      label {
        font-size: 30px;
        font-family: 'Source Han Sans CN';
        font-weight: 500;
        color: #ffffff;
      }
      span {
        font-size: 30px;
        font-family: 'DIN';
        font-weight: bold;
        color: #ffffff;
      }
    }
  }
}
</style>
