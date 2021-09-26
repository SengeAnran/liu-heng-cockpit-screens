<template>
  <div class="map-container">
    <div class="mask"></div>
    <div class="main-map" ref="map" v-show="!threeDMap"></div>
    <div class="main-map" v-show="threeDMap">
      <iframe src="http://60.163.192.206:8000/srit3d/default.html" width="100%" height="100%"></iframe>
    </div>
    <div class="switch">
      <div class="button" :class="{ active: !threeDMap }" @click="changeMap(2)">2D地图</div>
      <div class="button" :class="{ active: threeDMap }" @click="changeMap(3)">3D地图</div>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap';
import './map.scss';
import { getPopuliationNumRank } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Map',
  components: {},
  data() {
    return {
      map: null,
      infoWindow: null,
      threeDMap: false,
    };
  },
  mounted() {
    this.initMap();
    this.loadData();
  },
  methods: {
    changeMap(type) {
      if (type === 3) {
        this.threeDMap = true;
      } else {
        this.threeDMap = false;
      }
    },
    loadData() {
      getPopuliationNumRank()
        .request()
        .then((json) => {
          if (json) {
            this.addMarker(json);
          }
        });
    },
    initMap() {
      this.map = new AMap.Map(this.$refs.map, {
        resizeEnable: true,
        zoom: 13.3,
        zooms: [3, 20],
        center: [122.138836, 29.730147],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
    },
    addInfoWindow(item) {
      const html = `<div class='info'>
        <div>社区名称: ${item.sqmc}</div>
        <div>总人口数: ${item.zrks}</div>
        <div>户口数: ${item.hksl}</div>
        <div>男性人口数: ${item.manrk}</div>
        <div>女性人口数: ${item.felmanrk}</div>
      </div>`;
      const infoWindow = new AMap.InfoWindow({
        isCustom: true, // 使用自定义窗体
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
          content: '<div class="custom-marker"></div>',
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
    createText() {
      return `
        <div class="info"></div>
      `;
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
      width: 274px;
      height: 282px;
      padding: 10px;
      background: url('./img/info.png');
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
  .switch {
    width: 274px;
    height: 360px;
    position: absolute;
    bottom: 48rem;
    right: 200rem;
    display: flex;
    justify-content: space-around;
    z-index: 1000;
    .button {
      width: 114px;
      height: 44px;
      font-size: 24px;
      line-height: 44px;
      text-align: center;
      color: #82e2e4;
      cursor: pointer;
      background: url('./img/mmexport.jpg') no-repeat;
      &.active {
        color: white;
        background: url('./img/mmexport1.jpg') no-repeat;
      }
    }
  }
}
// @keyframes circleChange {
//   0% {
//     transform: scale(1);
//     opacity: 0.6;
//   }
//   25% {
//     transform: scale(1.2);
//     opacity: 0.5;
//   }
//   50% {
//     transform: scale(1.4);
//     opacity: 0.35;
//   }
//   75% {
//     transform: scale(1.6);
//     opacity: 0.15;
//   }
//   100% {
//     transform: scale(1.8);
//     opacity: 0.01;
//   }
// }
</style>
