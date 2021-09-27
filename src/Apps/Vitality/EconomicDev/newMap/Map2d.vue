<template>
  <Map>
    <AGeoJSON
      key="lhArea"
      :source="points"
      :geoStyle="{ marker: markerStyle }"
    >
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
import MarkerPopup from './MarkerPopup';

export default {
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
@import "./mark.scss";
</style>
