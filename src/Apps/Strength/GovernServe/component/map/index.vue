<template>
  <div class="map_wrapper">
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
  </div>
</template>
<script>
import { getInfoGovernment } from '@/api/Strength/GovernServe/api';
import './mark.scss';
import AMap from 'AMap';
export default {
  name: 'MedicalMap',
  components: {},
  data() {
    return {
      map: null,
      mapDom: null,
      data: null,
      title: '六横政务大厅',
      list: [
        { name: '当前叫号等待人数：', unit: '人', key: 'ddrs' },
        { name: '今日办件数量：', unit: '件', key: 'bjnsl' },
        { name: '今日办结数量：', unit: '件', key: 'bjsl' },
        { name: '今日办理中数量：', unit: '件', key: 'blzsl' },
        { name: '办事人员：', unit: '人', key: 'bsrys' },
      ],
    };
  },
  watch: {
    data(val) {
      val && this.initMap();
    },
  },
  mounted() {
    this.loadData();
  },
  methods: {
    initMap() {
      this.map = new AMap.Map(this.$refs.map, {
        resizeEnable: true,
        zoom: 13.4,
        zoomEnable: false,
        center: [122.218762, 29.731102],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      const marker = new AMap.Marker({
        position: [122.218762, 29.751102],
        content: this.boxTemp(),
        offset: new AMap.Pixel(0, 0),
      });
      marker.setMap(this.map);
    },
    boxTemp() {
      let contentItems = '';
      this.list.forEach((item) => {
        contentItems =
          contentItems +
          `<div class="item">
            <div class="name">${item.name} </div>
            <div class="number">
              <div>${this.data[0][item.key]}</div>
              <div class="unit">${item.unit}</div>
            </div>
          </div>`;
      });
      return `
       <div class="box">
          <div class="title"> ${this.data[0].zwdtmc}</div>
          <div class="content">
          ${contentItems}
          </div>
      </div>`;
    },
    loadData() {
      getInfoGovernment()
        .request()
        .then((json) => {
          if (!json) { return; }
          this.data = json;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
// @import './item.scss';
.map_wrapper {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
  .mask {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2070px;
    z-index: 6;
    pointer-events: none;
    background-size: 100% 100%;
    background: url('./img/mask.png') no-repeat;
  }
  .main-map {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 1350px;
  }
}
</style>
