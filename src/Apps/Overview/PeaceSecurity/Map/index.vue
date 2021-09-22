<template>
  <div class="map-container" >
    <div class="mask"></div>
    <div class="main-map" ref="map" v-show="!threeDMap"></div>
    <div class="main-map" v-show="threeDMap">
      <iframe src="http://60.163.192.206:8000/srit3d/default.html" width="100%" height="100%"></iframe>
    </div>
    <div class="switch">
      <div class="button" :class="{'active': !threeDMap}" @click="changeMap(2)">2D地图</div>
      <div class="button" :class="{'active': threeDMap }" @click="changeMap(3)" >3D地图</div>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap';
export default {
  name: 'Map',
  components: {
  },
  data() {
    return {
      map: null,
      mapDom: null,
      threeDMap: false,
    };
  },
  mounted() {
    this.mapDom = this.$refs.map;
    this.map = new AMap.Map(this.mapDom, {
      resizeEnable: true,
      zoom: 13.4,
      zooms: [3, 16],
      center: [122.200254, 29.717613],
      mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
    });
    // const marker = new AMap.Marker({
    //   position: [122.200254, 29.767613],
    //   content: "<div style='display: inline-block; width: 20px; height: 20px; background: red;'>13444</div>",
    // });
    // console.log(marker);
    // marker.setMap(this.map);
  },
  methods: {
    changeMap(type) {
      if (type === 3) {
        this.threeDMap = true;
      } else {
        this.threeDMap = false;
      }
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
  .switch {
    width: 274px;
    height: 360px;
    position: absolute;
    bottom: 48rem;
    right: 200rem;
    display: flex;
    justify-content: space-around;
    z-index: 1000;
    .button{
      width: 114px;
      height: 44px;
      font-size: 24px;
      line-height: 44px;
      text-align: center;
      color: #82e2e4;
      cursor: pointer;
      background: url("./img/mmexport.jpg") no-repeat;
      &.active {
        color: white;
        background: url("./img/mmexport1.jpg") no-repeat;
      }
    }
  }
}
</style>
