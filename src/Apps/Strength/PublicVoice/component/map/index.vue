<template>
  <div class="map_wrapper">
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
  </div>
</template>
<script>
// import { getInfoGovernment } from '@/api/Strength/GovernServe/api';
import './item.scss';
import AMap from 'AMap';
export default {
  name: 'MedicalMap',
  components: {},
  data() {
    return {
      map: null,
      mapDom: null,
      data: null,
      title: '最新评论',
      time: '2021-06-28 22:25',
      content: '百年征程波澜壮阔， 百年初心历久弥坚。在中国共产党成立100周年之际，舟山市税务系统开展“最佳基层党组织”“最佳党支部书记”“最佳共产党员”等“五最佳”评选活动，深入探寻他们的故事，感悟共产党人的初...',
    };
  },
  watch: {
    data(val) {
      val && this.initMap();
    },
  },
  mounted() {
    this.loadData();
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new AMap.Map(this.$refs.map, {
        resizeEnable: true,
        zoom: 13.4,
        zoomEnable: false,
        center: [122.218762, 29.731102],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      const marker = new AMap.Marker({
        position: [122.218762, 29.751102],
        content: this.boxTemp(),
        offset: new AMap.Pixel(0, 0),
      });
      marker.setMap(this.map);
    },
    boxTemp() {
      return `
       <div class="box">
          <div class="title"> ${this.title}</div>
          <div class="time"> ${this.time}</div>
          <div class="content">
          ${this.content}
          </div>
      </div>`;
    },
    loadData() {
      // getInfoGovernment()
      //   .request()
      //   .then((json) => {
      //     if (!json) { return; }
      //     this.data = json;
      //   });
    },
  },
};
</script>
<style lang="scss" scoped>
 //@import './item.scss';
.map_wrapper {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
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
