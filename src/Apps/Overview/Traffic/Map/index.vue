<template>
  <Map>
    <AGeoJSON
      v-if="lhArea"
      key="lhArea"
      :source="lhArea"
      :geoStyle="{ polygon: lhStyle }"
    />
    <AGeoJSON key="bus-points" :source="points" :geoStyle="{ marker: markerStyle }">
      <template v-slot:popup="feature">
        <PointPopup :feature="feature" />
      </template>
    </AGeoJSON>
  </Map>
</template>
<script>
import axios from 'axios';
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import PointPopup from './PointPopup';
import points from './mock.json';

export default {
  data() {
    return {
      lhArea: undefined,
      points: Object.freeze(points),
      lhStyle: Object.freeze({
        fillOpacity: 0.1,
        fillColor: '#97E1FF',
        strokeColor: '#97E1FF',
      }),
      markerStyle: Object.freeze({
        content: '<div style="width: 2rem; height: 2rem; border: 0.8rem solid #FDF17950; background: #FDF179; background-clip: content-box; border-radius: 50%;"></div>',
        offset: new AMap.Pixel(-18, -18),
      }),
    };
  },
  async mounted() {
    const { data } = await axios.get('/json/liuheng.json');
    this.lhArea = Object.freeze(data);
  },
  components: {
    Map,
    AGeoJSON,
    PointPopup,
  },
};
</script>
<style lang="scss" scoped>
</style>
