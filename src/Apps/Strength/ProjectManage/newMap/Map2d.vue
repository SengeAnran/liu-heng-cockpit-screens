<template>
  <Map :satelliteMap="satelliteMap">
    <AGeoJSON
      key="lhArea"
      v-if="show"
      :source="points"
      :geoStyle="{ marker: markerStyle }"
      @onClick="haveClick"
    >
      <template v-slot:popup="feature">
        <PointPopup :feature="feature" />
      </template>
    </AGeoJSON>
    <AGeoJSON
      key="lhArea"
      v-if="show"
      :source="points3"
      :geoStyle="{ marker: markerStyle2 }"
      @onClick="haveClick"
    >
      <template v-slot:popup="feature">
        <PointPopup :feature="feature" />
      </template>
    </AGeoJSON>
    <AGeoJSON
      key="lhArea"
      v-if="show"
      :source="points2"
      :geoStyle="{ marker: markerStyle3 }"
      @onClick="haveClick"
    >
      <template v-slot:popup="feature">
        <PointPopup :feature="feature" />
      </template>
    </AGeoJSON>
    <AGeoJSON
      v-if="show"
      key="Area"
      :source="Polygon"
      :geoStyle="{ Polygon: polygonStyle }"
      @click="onClick()"
    >
      <template v-slot:popup="feature">
<!--        /scope就是this.$scopedSlots.default(item)传递过来的item-->
        <PointPopup :feature="feature" />
      </template>
    </AGeoJSON>
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
// import points2 from './point2.json';
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
      name: '张森云',
      points: {},
      points2: {},
      points3: {},
      Polygon: {},
      // points2: Object.freeze(points2), // 冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。
      markerStyle: Object.freeze({
        content: (feature) => {
          return `<div class="marker-content 文化礼堂">
            <div class="catalog-content">
              <h3 class="title">${feature.properties.name}</h3>
            </div>
          </div>`;
        },
      }),
      markerStyle2: Object.freeze({
        content: (feature) => {
          return `
          <div class='mark_wrapper_left'>
            <img class='mark_img_bg' src="${require('./img/mark_left.png')}" style=''></img>
            <div class='mark_address'>${feature.properties.name}</div>
            <div class='mark_title' @click="${this.popClick}">价格：</div>
            <div class='mark_count'>
              <span>${feature.properties.value}</span>
            </div>
        </div>`;
        },
      }),
      markerStyle3: Object.freeze({
        content: (feature) => {
          return `
          <div class='mark_wrapper_right'>
            <img class='mark_img_bg' src="${require('./img/mark_right.png')}" style=''></img>
            <div class='mark_address'>${feature.properties.name}</div>
            <div class='mark_title' @click="${this.popClick}">价格：</div>
            <div class='mark_count'>
              <span>${feature.properties.value}</span>
            </div>
        </div>`;
        },
      }),
      polygonStyle: Object.freeze({
        strokeColor: '#FF33FF',
        strokeOpacity: 0.2,
        strokeWeight: 3,
        fillColor: '#1791fc',
        fillOpacity: 0.35,
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
      console.log(res);
      const data = [];
      if (item1 === '资源供应价格') {
        res.map((item) => {
          data.push(
            {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {
                    name: item.locationName,
                    value: item.popupList[0] && item.popupList.length === 1 ? item.popupList[0].value : '',
                    picture: item.popupList[0] && item.popupList.length === 1 && item.popupList[0].picture ? item.popupList[0].picture : '',
                    // listData: item.popupList[0] && item.popupList.length > 1 ? item.popupList : '',
                  },
                  geometry: {
                    type: item.geoType,
                    coordinates: JSON.parse(item.geoCoord),
                  },
                },
              ],
            });
        });
        console.log(data);
        this.points2 = [data[0], data[1]];
        console.log(this.points2);
        this.points3 = [data[2], data[3]];
        this.points = {};
        this.Polygon = {};
      } else {
        res.map((item) => {
          data.push(
            {
              type: 'FeatureCollection',
              features: [
                {
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
                },
              ],
            });
        });
        console.log(data);
        this.points = data;
        this.points2 = {};
        this.points3 = {};
        this.Polygon = data[0];
      }


      // console.log(this.Polygon);
      setTimeout(() => {
        this.show = true;
      }, 500);
    },
    onClick(feature) {

    },
    haveClick(feature) {
      // console.log(feature);
    },
    popClick() {
      console.log('点击了');
    }
  },
};
</script>
<style lang="scss">
@import './mark.scss';
</style>
