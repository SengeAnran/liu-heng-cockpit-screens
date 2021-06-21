<template>
  <div class="map_wrapper" >
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
  </div>
</template>

<script>
import './mark.scss';
import AMap from 'AMap';
export default {
  name: 'CityEvolution',
  components: {
  },
  data() {
    return {
      map: null,
      mapDom: null,
    };
  },
  mounted() {
    this.initMap();
    this.makeLeftMarker();
    this.makeRightMarker();
  },
  methods: {
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 13.4,
        zooms: [3, 16],
        center: [122.200254, 29.717613],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
    },
    makeLeftMarker() {
      const name = '户籍人口';
      const count = 6284;
      const unit = '人';
      const content = `
        <div class='mark_wrapper_left'>
          <img class='mark_img_bg' src="${require('./img/mark_left.png')}" style=''></img>
          <div class='mark_address'>六横</div>
          <div class='mark_title'>${name}</div>
          <div class='mark_count'>
            <span>${count}</span>
            <span class='unit'>
              ${unit}
            </span>
          </div>
        </div>`
      ;
      const marker = new AMap.Marker({
        position: [122.2002540000, 29.767613],
        content: content,
      });
      marker.setMap(this.map);
    },
    makeRightMarker() {
      const name = '企业数量';
      const count = 164;
      const unit = '家';
      const content = `
        <div class='mark_wrapper_right'>
          <img class='mark_img_bg' src="${require('./img/mark_right.png')}" style=''></img>
          <div class='mark_address'>六横</div>
          <div class='mark_title'>${name}</div>
          <div class='mark_count'>
            <span>${count}</span>
            <span class='unit'>
              ${unit}
            </span>
          </div>
        </div>`
      ;
      const marker = new AMap.Marker({
        position: [122.0602540000, 29.767613],
        content: content,
      });
      marker.setMap(this.map);
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
    background: url('./img/mask_bg.png') no-repeat;
  }
  .main-map {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2070px;
  }
}
</style>
<style lang="scss">
</style>
