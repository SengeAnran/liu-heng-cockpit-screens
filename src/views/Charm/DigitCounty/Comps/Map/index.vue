<template>
  <div class="map_wrapper" >
    <div class="mask"></div>
    <div class="main-map" ref="map" v-show="!threeDMap"></div>
    <div class="main-map" v-show="threeDMap">
      <iframe src="http://60.163.192.206:8000/srit3d/default.html" width="100%" height="100%"></iframe>
    </div>
    <div class="switch">
      <div class="button" :class="{ active: !threeDMap }" @click="changeMap(2)">2D地图</div>
      <div class="button" :class="{ active: threeDMap }" @click="changeMap(3)">3D地图</div>
    </div>
    <!-- <div class="map-legend">
      <p class="legend-title">党群建设图例</p>
      <ul class="legend-list">
        <li v-for="(item, index) in legendList" :key="index" @click="selectLegend(item)">
          <div class="main-label-wrap">
            <span class="select-rect">
              <span class="selected-inner" v-show="currentLegend === item.value"></span>
            </span>
            {{item.label}}
          </div>
          <ul v-if="item.children" class="legend-children-list">
            <li v-for="(item2, index2) in item.children" :key="index2" @click="selectLegend(item2)">
              <div class="main-label-wrap">
                <span class="select-rect">
                  <span class="selected-inner" v-show="currentLegend === item.value"></span>
                </span>
                {{item2.label}}
              </div>

            </li>
          </ul>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import AMap from 'AMap';
export default {
  name: 'CityEvolution',
  components: {
  },
  data() {
    return {
      map: null,
      mapLayer: null,
      markerLayer: null,
      mapDom: null,
      currentLegend: 0,
      legendList: [
        { value: 1, label: '党组织' },
        { value: 2, label: '群团阵地' },
        {
          value: 3,
          label: '新时代站所',
          children: [
            { value: 4, label: '文化礼堂' },
            { value: 5, label: '综合文化站' },
          ],
        },
      ],
      lastDetailMarker: null,
      threeDMap: false,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    changeMap(type) {
      if (type === 3) {
        this.threeDMap = true;
      } else {
        this.threeDMap = false;
      }
    },
    selectLegend(item) {
      this.currentLegend = item.value;
    },
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 14.8,
        zooms: [3, 16],
        center: [122.187672, 29.69669],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      // const mapLayer = new AMap.GeoJSON({
      //   geoJSON: null,
      //   getMarker(feature, position) {
      //     console.log('test1121', feature);
      //     return new AMap.Marker({
      //       position,
      //       content: this.markerTemplate(feature.properties),
      //       offset: new AMap.Pixel(0, 0),
      //       extData: feature,
      //     });
      //   },
      // });
      // mapLayer.setMap(this.map);
      // this.mapLayer = mapLayer;
    },
  },
};
</script>
<style lang="scss">
@import "./mark.scss";
</style>
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
  //.main-map {
  //  position: absolute;
  //  left: 0;
  //  right: 0;
  //  width: 100%;
  //  height: 135rem;
  //}
  .map-legend{
    position: absolute;
    z-index: 10;
    top: 90.6rem;
    right: 37%;
    width: 27.4rem;
    // height: 28.2rem;
    height: auto;
    background: url('./img/legend-bg.png') no-repeat 0 0;
    box-sizing: border-box;
    background-size: 100% 100%;
    color: #fff;
    padding: 3rem;
    .legend-title{
      margin: 0;
      font-size: 3.1rem;
    }
    .legend-list{
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 2.6rem;
      line-height: 2.2;
      li{
        .main-label-wrap{
          display: flex;
          align-items: center;
          cursor: pointer;
        }
      }
      .legend-children-list{
        list-style: none;
        padding-left: 2rem;
      }
      .select-rect{
        display: inline-block;
        width: 3rem;
        height: 3rem;
        box-sizing: border-box;
        margin-right: 1.2rem;
        border: .3rem solid #9BFCFD;
        border-radius: .4rem;
        padding: .2rem;
        line-height: 0;
        .selected-inner{
          display: inline-block;
          width: 100%;
          height: 100%;
          background: #FDEF8E;
          border-radius: .4rem;
        }
      }
    }
  }
}
</style>
