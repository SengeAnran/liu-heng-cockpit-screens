<template>
  <Map>
    <AGeoJSON key="lhArea" v-if="currentLegend == 1" :source="points" :geoStyle="{ marker: markerStyle }">
      <template v-slot:popup="feature">
        <MarkerPopup :feature="feature" />
      </template>
    </AGeoJSON>
  </Map>
</template>
<script>
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import MarkerPopup from './MarkerPopup';
import ponits from './mock.json';

export default {
  // props: [currentLegend],
  props: {
    currentLegend: {
      type: Number,
      default: () => 1,
    },
    markerList: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      points: null,
      markerStyle: null,
    };
  },

  components: {
    Map,
    AGeoJSON,
    MarkerPopup,
  },
  created() {
    this.zhengli();
  },
  methods: {
    zhengli() {
      this.points = Object.freeze(ponits);
      this.markerStyle = Object.freeze({
        content: (item) => {
          return `<div class="marker-content 文化礼堂">
                <div class="catalog-content">
                  <h3 class="title">${item.properties.name}</h3>
                </div>
              </div>`;
        },
      });
    },
  },
};
</script>
<style lang="scss">
@import './mark.scss';
</style>
