<template>
  <Map :satelliteMap="satelliteMap">
    <AGeoJSON
      key="lhArea"
      v-if="currentLegend === 1"
      :source="points"
      :geoStyle="{ marker: markerStyle }"
      @onClick="pointsClick"
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
import MarkerPopup from './MarkerPopup';
// import ponits from './mock.json';

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
    satelliteMap: {
      type: Boolean,
      default: true,
    }
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
  watch: {
    'markerList.features': {
      handler(newVal, oldVal) {
        this.zhengli();
      },
    },
    deep: true,
  },
  mounted() {
    setTimeout(() => {
      console.log('到了');
      this.zhengli();
    }, 3000);
  },
  methods: {
    zhengli() {
      this.points = Object.freeze(this.markerList);
      console.log(this.points);
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
    pointsClick(data) {
      this.$emit('changePlace', data.properties.name);
    },
  },
};
</script>
<style lang="scss">
@import './mark.scss';
</style>
