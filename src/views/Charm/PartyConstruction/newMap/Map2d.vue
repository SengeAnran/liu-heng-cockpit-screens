<template>
  <Map :satelliteMap="satelliteMap">
    <AGeoJSON key="lhArea" v-if="show" :source="points" :geoStyle="{ marker: markerStyle }">
      <template v-slot:popup="feature">
        <PointPopup :feature="feature" />
      </template>
    </AGeoJSON>
  </Map>
</template>
<script>
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import {
  getLocationInfo,
} from '@/api/IndexItem';
export default {
  // props: [currentLegend],
  props: {
    activeItem: {
      type: String,
      // default: () => 1,
    },
    satelliteMap: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      show: false,
      points: {},
      markerStyle: Object.freeze({
        content: (feature) => {
          return `<div class="marker-content 文化礼堂">
            <div class="catalog-content">
              <h3 class="title">${feature.properties.name}</h3>
            </div>
          </div>`;
        },
      }),
      wenhualitang: {},
      markerStyle1: Object.freeze({
        content: (feature) => {
          return `<div class="marker-content 文化礼堂">
            <div class="catalog-content">
              <h3 class="title">${feature.properties.name}</h3>
            </div>
          </div>`;
        },
      }),
    };
  },
  components: {
    Map,
    AGeoJSON,
    // MarkerPopup,
  },
  watch: {
    activeItem() {
      this.show = false;
      this.getData(this.activeItem);
    },
  },
  mounted() {
    this.getData(this.activeItem);
  },
  methods: {
    async getData(item1) {
      const res = await getLocationInfo({ type: item1 }).request();
      const data = {
        type: 'FeatureCollection',
        features: [],
      };
      res.map((item) => {
        data.features.push({
          type: 'Feature',
          properties: {
            name: item.locationName,
            content: item.popupList[0] && item.popupList.length === 1 ? item.popupList[0].value : '',
            listData: item.popupList[0] && item.popupList.length > 1 ? item.popupList : '',
          },
          geometry: {
            type: item.geoType,
            coordinates: JSON.parse(item.geoCoord),
          },
        });
      });
      this.points = data;
      this.show = true;
      console.log(this.points);
    },
  },
};
</script>
<style lang="scss">
.amap-marker:hover{
  z-index: 120 !important;
}
@import './mark.scss';

</style>
