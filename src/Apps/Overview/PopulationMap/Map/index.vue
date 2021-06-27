<template>
  <div class="map-container" >
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
  </div>
</template>

<script>
import AMap from 'AMap';
import './map.scss';
import { getPopuliationNumRank } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Map',
  components: {
  },
  data() {
    return {
      map: null,
      popup: null,
    };
  },
  mounted() {
    this.initMap();
    this.loadData();
    // const marker = new AMap.Marker({
    //   position: [122.200254, 29.767613],
    //   content: "<div style='display: inline-block; width: 20px; height: 20px;'>13444</div>",
    // });
    // marker.setMap(this.map);
  },
  methods: {
    loadData() {
      getPopuliationNumRank().request().then((json) => {
        if (json) {
          // console.log(json);
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
      this.popup = new AMap.InfoWindow({
        isCustom: true,
        offset: new AMap.Pixel(0, -30),
      });
    },
    addMarker(data) {
      data.forEach((item) => {
        const marker = new AMap.Marker({
          position: [item.lng, item.lat],
          content: '<div class="custom-marker">13444</div>',
        });
        marker.setMap(this.map);
        marker.on('click', this.markerClick(item));
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
      width: 71px;
      height: 61px;
      background: url('./img/circle.png');
      &:before {
        display: block;
        content: '';
        width: 70px;
        height: 50px;
        background: radial-gradient(transparent 0%,transparent 50%, #ffea78 80%);
        border: 1px solid #ffea78;
        box-shadow: 0 0 1px #ffea78;
        border-radius: 50% / 50%;
        position: absolute;
        left: 0;
        top: 5px;
        animation: circleChange 3s 1s linear infinite;
      }
      &:after {
        display: block;
        content: '';
        width: 70px;
        height: 50px;
        background: radial-gradient(transparent 0%,transparent 50%, #ffea78 80%);
        border: 1px solid #ffea78;
        box-shadow: 0 0 1px #ffea78;
        border-radius: 50% / 50%;
        position: absolute;
        left: 0;
        top: 5px;
        animation: circleChange 3s 2s linear infinite;
      }
    }
    ::v-deep .info {
      font-size: 30px;
      color: red;
    }
  }
}
@keyframes circleChange{
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  25% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.35;
  }
  75% {
    transform: scale(1.6);
    opacity: 0.15;
  }
  100% {
    transform: scale(1.8);
    opacity: 0.01;
  }
}
</style>
