<template>
  <div class="map-container" >
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
  </div>
</template>

<script>
import AMap from 'AMap';
import iconImg from './img/circle.png';
import { getPopuliationNumRank } from '@/api/Overview/PopulationMap/api';
export default {
  name: 'Map',
  components: {
  },
  data() {
    return {
      map: null,
      markerList: [],
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
        zoom: 13,
        zooms: [3, 20],
        center: [122.138836, 29.730147],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
    },
    addMarker(data) {
      console.log(data);
      data.forEach((item) => {
        const marker = new AMap.Marker({
          map: this.map,
          icon: iconImg,
          position: [item.lng, item.lat],
          content: "<div style='display: inline-block; width: 20px; height: 20px;'>13444</div>",
        });
        this.markerList.push(marker);
      });
    },
    createText() {
      return `
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
  }
}
</style>
