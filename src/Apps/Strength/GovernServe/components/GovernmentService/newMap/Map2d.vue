<template>
  <Map :satelliteMap="satelliteMap">
    <AGeoJSON key="lhArea" v-if="show" :source="points" :geoStyle="{ marker: markerStyle }">
      <template v-slot:popup="feature">
        <PointPopup :feature="feature" />
      </template>
    </AGeoJSON>
<!--    <AGeoJSON v-if="currentLegend === 1" key="lhArea" :source="points" :geoStyle="{ marker: markerStyle }">-->
<!--      <template v-slot:popup="feature">-->
<!--        <MarkerPopup :feature="feature" />-->
<!--      </template>-->
<!--    </AGeoJSON>-->
<!--    <AGeoJSON v-if="currentLegend === 2" key="lhArea" :source="points2" :geoStyle="{ marker: markerStyle }">-->
<!--      <template v-slot:popup="feature">-->
<!--        <MarkerPopup2 :feature="feature" />-->
<!--      </template>-->
<!--    </AGeoJSON>-->
  </Map>
</template>
<script>
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import points from './mock.json';
import points2 from './point2.json';
import MarkerPopup from './MarkerPopup';
import MarkerPopup2 from './MarkerPopup2';
import {
  getLocationInfo,
} from '@/api/IndexItem';
export default {
  props: {
    currentLegend: {
      type: Number,
      default: 2,
    },
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
      points2: Object.freeze(points2), // 冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。
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
    MarkerPopup2,
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
@import './mark.scss';
</style>
