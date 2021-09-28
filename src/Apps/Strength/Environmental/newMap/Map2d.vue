<template>
  <Map>
    <AGeoJSON key="sheshui" v-if="currentLegend == 1" :source="points" :geoStyle="{ marker: markerStyle }">
      <template v-slot:popup="feature">
        <MarkerPopup :feature="feature" />
      </template>
    </AGeoJSON>
    <AGeoJSON key="sheqi" v-if="currentLegend == 2" :source="sheqi" :geoStyle="{ marker: markerStyle1 }">
      <template v-slot:popup="feature">
        <MarkerPopupSheqi :feature="feature" />
      </template>
    </AGeoJSON>
  </Map>
</template>
<script>
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import points from './sheshui.json';
import sheqi from './sheqi.json';
import MarkerPopup from './MarkerPopup';
// MarkerPopupSheqi
import MarkerPopupSheqi from './MarkerPopupSheqi';
export default {
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
          return `<div class="marker-content-sheshui">
            <div class="catalog-content">
              <h3 class="title">${feature.properties.name}</h3>
            </div>
          </div>`;
        },
      }),
      sheqi: Object.freeze(sheqi),
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
    MarkerPopup,
    MarkerPopupSheqi,
  },
};
</script>
<style lang="scss">
@import './mark.scss';
</style>
