<template>
  <div class="map_wrapper" >
    <div class="mask"></div>
    <div class="main-map" ref="map" v-show="!threeDMap"></div>
    <div class="main-map" v-show="threeDMap">
      <iframe src="http://60.163.192.206:8000/srit3d/" width="100%" height="100%"></iframe>
    </div>
    <div class="switch">
      <div class="button" :class="{'active': !threeDMap}" @click="changeMap(2)">2D地图</div>
      <div class="button" :class="{'active': threeDMap }" @click="changeMap(3)" >3D地图</div>
    </div>
  </div>
</template>

<script>
// import './mark.scss';
import { partyConstruct } from '@/api/Charm/PartyConstruction';
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
      lastDetailMarker: null,
      threeDMap: false,
    };
  },
  mounted() {
    this.initMap();
    this.renderMarker();
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
    async renderMarker() {
      const result = await partyConstruct().request();
      console.log('map data:', result);
      const type = '文化礼堂';
      const name = '舟山市六横猪肉品配送有限公司';
      const content = `
        <div class="marker-content ${type}">
          <div class="catalog-content">
            <h3 class="title">${name}</h3>
          </div>
        </div>`
      ;
      const marker = new AMap.Marker({
        position: [122.187672, 29.69669],
        content: content,
      });
      marker.setMap(this.map);
      marker.on('click', this.handleMarkerClick);
    },
    handleMarkerClick(ev) {
      // console.log(ev);
      this.clearLastMarkerDetail();
      const marker = ev.target;

      const feature = marker.getExtData();
      // console.log(marker, feature.properties);
      const content = this.detailTemplate(feature.properties);
      marker.setzIndex(1000);
      marker.setContent(content);
      this.lastDetailMarker = marker;
      this.lastDetailMarker.type = this.selected;
    },
    clearLastMarkerDetail() {
      if (!this.lastDetailMarker) {
        return;
      }
      const feature = this.lastDetailMarker.getExtData();
      this.lastDetailMarker.setzIndex(100);
      const content = this.markerTemplate(feature.properties);
      this.lastDetailMarker.setContent(content);
      this.lastDetailMarker = null;
    },
    detailTemplate() {
      return `
        <div class="marker-detail-content2">
          <div class="detail-content">
            <h3 class="title">舟山市六横猪肉品配送有限公司</h3>
            <div class="people-row">
              <div class="item">
                <div class="sub-title">主要业务：</div>
                <div class="value">猪肉 配送 生鲜 冷链</div>
              </div>
              <div class="item">
                <div class="sub-title">市值：</div>
                <div class="value">2456 万元</div>
              </div>
              <div class="item">
                <div class="sub-title">地址：</div>
                <div class="value">浙江省舟山市普陀区六横镇双塘干岩</div>
              </div>
            </div>
          </div>
        </div>
        `;
    },
    markerTemplate(data) {
      return `
        <div class="marker-content">
          <div class="catalog-content">
            <h3 class="title">六横党支部</h3>
          </div>
        </div>
        `;
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
    height: 135rem;
  }
  .switch {
    width: 274px;
    height: 360px;
    position: absolute;
    bottom: 50rem;
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
