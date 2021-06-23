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
    source() {
      this.clearInfoWindow();
      this.renderLayer();
    },
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
      } = this.geoStyle;
      const layer = new AMap.GeoJSON({
        getPolygon(feature, path) {
          return new AMap.Polygon({
            ...polygonStyle,
            path,
            extData: feature,
          });
        },
        // getPolyline
        getMarker(feature, position) {
          return new AMap.Marker({
            ...markerStyle,
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
        const popup = new Vue({
          render: () => this.$scopedSlots.popup(feature),
        }).$mount(document.createElement('div'));
        const infoWindow = new AMap.InfoWindow({
          content: popup.$el,
          isCustom: true,
          closeWhenClickMap: true,
        });
        const position = getPopupPostion(feature);
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
