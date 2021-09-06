<template>
  <div class="map_wrapper" >
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
    <div class="map-legend">
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
    </div>
  </div>
</template>

<script>
// import './mark.scss';
import { partyConstruct, getCameraPosition } from '@/api/Charm/PartyConstruction';
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
    };
  },
  mounted() {
    this.initMap();
    this.renderMarker();
    getCameraPosition().then((res) => {
      console.log(res);
    });
  },
  methods: {
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
      const name = '六横党支部';
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
      console.log(ev);
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
            <h3 class="title">六横党支部</h3>
            <div class="people-row">
              <div class="left-part">
                <p class="sub-title">正式党员：</p>
                <p class="value">102</p>
              </div>
              <div class="right-part">
                <p class="sub-title">预备党员：</p>
                <p class="value">56</p>
              </div>
            </div>
            <div class="desc-row">
              <p class="sub-title">支部介绍：</p>
              <div class="desc-content">
                支部始终注重加强自身建设，近年来通过开展党的群众路线教育实践活动、“三严三实”专题教育及“两学一做”学习教育等，支部的战斗堡垒左右及党员的先锋模范作用得到有效发挥
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
