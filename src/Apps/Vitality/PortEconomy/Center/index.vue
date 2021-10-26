<template>
  <div class="center-webview">
    <div>
      <div class="preview"></div>
<!--      <div class="mask"></div>-->
      <div class="img_bg"></div>
<!--      <chart-map v-show="!threeDMap"/>-->
<!--      <div class="main-map" v-show="threeDMap">-->
<!--        <iframe src="http://60.163.192.206:8000/srit3d/default.html" width="100%" height="100%"></iframe>-->
<!--      </div>-->
<!--      <div class="switch">-->
<!--        <div class="button" :class="{ active: !threeDMap }" @click="changeMap(2)">2D地图</div>-->
<!--        <div class="button" :class="{ active: threeDMap }" @click="changeMap(3)">3D地图</div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import ChartMap from './map';
export default {
  components: {
    ChartMap,
  },
  data() {
    return {
      threeDMap: false,
    };
  },
  mounted() {},
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
.center-webview {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  & > div {
    flex: 1;
    position: relative;
  }
}

.preview {
  width: 100%;
  height: 100%;
  background: url(../images/map_mask.png) no-repeat top center;
  background-size: 5740px auto;
  position: relative;
  z-index: 11;
  pointer-events: none;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 207rem;
  background: url(../images/mask.png) no-repeat center bottom;
  background-size: 100% 100%;
  z-index: -1;
  pointer-events: none;
}
.main-map {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 135rem;
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
.img_bg{
  z-index: -2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 135rem;
  //background: url("./img/bg_02.png") 100% 100% no-repeat;
  background: url(./img/bg_01.png) no-repeat center bottom;
  background-size: 100% 100%;
  //background: #3de7c9;
}
</style>
