<template>
  <Map>
    <AGeoJSON key="lhArea" v-if="currentLegend == 1" :source="points" :geoStyle="{ marker: markerStyle }">
      <template v-slot:popup="feature">
        <MarkerPopup :feature="feature" />
      </template>
    </AGeoJSON>
    <AGeoJSON key="lhArea" v-if="currentLegend == 4" :source="wenhualitang" :geoStyle="{ marker: markerStyle1 }">
      <template v-slot:popup="feature">
        <MarkerPopup :feature="feature" />
      </template>
    </AGeoJSON>
  </Map>
</template>
<script>
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import points from './mock.json';
import wenhualitang from './wenhua.json';
import MarkerPopup from './MarkerPopup';

export default {
  // props: [currentLegend],
  props: {
    currentLegend: {
      type: Number,
      default: () => 1,
    },
  },
  data() {
    return {
      points: Object.freeze(points),
      markerStyle: Object.freeze({
        content: (feature) => {
          return `<div class="marker-content 文化礼堂">
            <div class="catalog-content">
              <h3 class="title">${feature.properties.name}</h3>
            </div>
          </div>`;
        },
      }),
      wenhualitang: Object.freeze(wenhualitang),
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
    MarkerPopup,
  },
};
</script>
<style lang="scss">
@import './mark.scss';
</style>
