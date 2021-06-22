// import Vue from 'vue';

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
        geoJSON: this.source,
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
      this.managePopup();
    },
    async managePopup() {
      if (!this.$scopedSlots.popup) {
        return;
      }
      // const map = await this.mapPromise;

      // const popup = new Vue({
      //   render: () => this.$scopedSlots.popup(),
      // }).$mount(document.createElement('div'));
      // const infoWindow = new AMap.InfoWindow({
      //   // isCustom: true,
      //   content: popup.$el,
      //   // closeWhenClickMap: true,
      // });
      // infoWindow.open(map, [122.10479736328125, 29.754541914052]);
      // setTimeout(() => {
      //   popup.$destroy();
      //   setTimeout(() => {
      //     console.log(popup, popup.$el);
      //   }, 100);
      // }, 1000);
      // if (!this.$slots.popup) {
      this.layer.on('click', async (ev) => {
        console.log('hello world');
      });
      //   return;
      // }
    },
  },
  render() {
    return null;
  },
  beforeDestroy() {
    this.destroyFlag = true;
    this.geoJSON.setMap(null);
  },
};
