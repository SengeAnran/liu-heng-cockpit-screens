import Vue from 'vue';
import { getPopupPostion } from '../utils';

export default {
  inject: ['mapPromise'],
  props: {
    source: {
      type: Object,
      required: true,
    },
    geoStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    // source() {
    //   console.log('变 了');
    //   this.clearInfoWindow();
    //   this.renderLayer();
    // },
    'source.features': {
      handler(newVal, oldVal) {
        this.clearInfoWindow();
        this.renderLayer();
      },
    },
    deep: true,
  },
  mounted() {
    this.initGeoJSON();
  },
  methods: {
    async initGeoJSON() {
      const map = await this.mapPromise;
      const {
        polygon: polygonStyle = {},
        marker: markerStyle = {},
        polyline: polylineStyle = {},
      } = this.geoStyle;
      const layer = new AMap.GeoJSON({
        getPolygon(feature, path) {
          console.log(...polygonStyle);
          return new AMap.Polygon({
            ...polygonStyle,
            strokeColor: '#FF33FF',
            strokeOpacity: 0.2,
            strokeWeight: 3,
            fillColor: '#1791fc',
            fillOpacity: 0.35,
            path,
            extData: feature,
          });
        },
        getPolyline(feature, path) {
          return new AMap.Polyline({
            ...polylineStyle,
            path: path,
            strokeWeight: 6,
            // strokeColor: 'rgb(135, 227, 0)',
            // strokeColor: 'rgb(255, 203, 0)',
            // strokeColor: 'rgb(255, 75, 215)',
            lineJoin: 'round', // 折线拐点连接处样式
            cursor: 'pointer',
            extData: feature,
          });
        },
        getMarker(feature, position) {
          const content = typeof markerStyle.content === 'function' ? markerStyle.content(feature) : markerStyle.content;
          return new AMap.Marker({
            // content: '',
            ...markerStyle,
            content,
            position: position,
            extData: feature,
          });
        },
      });
      layer.setMap(map);
      this.layer = layer;
      this.renderLayer();
      this.$once('hook:beforeDestroy', () => {
        layer.setMap(null);
      });
    },
    renderLayer() {
      this.layer.importData(this.source);
      this.managePopup();
    },
    async managePopup() {
      if (!this.$scopedSlots.popup) {
        return;
      }
      const map = await this.mapPromise;
      this.layer.on('click', async (ev) => {
        const feature = ev.target.getExtData();
        // console.log(feature);
        this.$emit('onClick', feature);
        const popup = new Vue({
          render: () => this.$scopedSlots.popup(feature),
        }).$mount(document.createElement('div'));
        // console.log(popup);
        const infoWindow = new AMap.InfoWindow({
          content: popup.$el,
          isCustom: true,
          closeWhenClickMap: true,
        });
        console.log(infoWindow);
        const position = getPopupPostion(feature);
        console.log(position);
        infoWindow.on('close', () => {
          popup.$destroy();
        });
        infoWindow.open(map, position);
        this.infoWindow = infoWindow;
      });
      this.$once('hook:beforeDestroy', () => {
        this.clearInfoWindow();
      });
    },
    clearInfoWindow() {
      this.infoWindow && this.infoWindow.close();
    },
  },
  render() {
    return null;
  },
  beforeDestroy() {
    this.destroyFlag = true;
  },
};
