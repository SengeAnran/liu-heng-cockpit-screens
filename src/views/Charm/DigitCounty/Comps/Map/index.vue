<template>
  <div class="map_wrapper" >
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
      currentLegend: 1,
      legendList: [
        { value: 1, label: '文化礼堂' },
        { value: 2, label: '党建中心' },
        { value: 3, label: '党组织' },
      ],
      lastDetailMarker: null,
    };
  },
  mounted() {
    this.initMap();
    // this.renderMarker();
  },
  methods: {
    selectLegend(item) {
      this.currentLegend = item.value;
    },
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 14.4,
        zooms: [3, 16],
        center: [122.164026, 29.709066],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      this.mapLayer.on('click', this.handleMarkerClick);
    },
    renderMarker() {
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
    },
    handleMarkerClick(ev) {
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
        <div class="marker-detail-content">
          <div class="detail-content">
            <p>六横党支部</p>
          </div>
        </div>
        `;
    },
    markerTemplate() {
      return `
        <div class="marker-detail-content">
          <div class="detail-content">
            <p>六横党支部</p>
          </div>
        </div>
        `;
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

  .main-map {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2070px;
  }
  .map-legend{
    position: absolute;
    z-index: 10;
    top: 95.6rem;
    right: 37%;
    width: 27.4rem;
    height: 28.2rem;
    background: url('./img/legend-bg.png') no-repeat 0 0;
    box-sizing: border-box;
    background-size: 100%;
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
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      .select-rect{
        display: inline-block;
        width: 2.8rem;
        height: 2.8rem;
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
