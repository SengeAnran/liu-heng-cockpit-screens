<template>
  <Map :satelliteMap="satelliteMap">
    <AGeoJSON key="lhArea" v-if="show" :source="points" :geoStyle="{ marker: markerStyle }">
      <template v-slot:popup="feature">
        <PointPopup contentWidth="500px" itemWidth="450px" :feature="feature" />
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
  props: {
    activeItem: {
      type: String,
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
          return `<div class="marker-content-sheshui">
            <div class="catalog-content">
              <h3 class="title">${feature.properties.name}</h3>
            </div>
          </div>`;
        },
      }),
      markerStyle1: Object.freeze({
        content: (feature) => {
          return `<div class="marker-content1-sheqi">
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
      // console.log(this.points);
    },
  },
};
</script>
<style lang="scss">
@import './mark.scss';
</style>
