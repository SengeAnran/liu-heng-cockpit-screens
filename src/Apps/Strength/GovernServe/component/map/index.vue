<template>
  <div class="map_wrapper">
    <div class="mask"></div>
    <div class="main-map" ref="map" v-show="!threeDMap"></div>
    <div class="main-map" v-show="threeDMap">
      <iframe src="http://60.163.192.206:8000/srit3d/default.html" width="100%" height="100%"></iframe>
    </div>
    <div class="switch">
      <div class="button" :class="{ active: !threeDMap }" @click="changeMap(2)">2D地图</div>
      <div class="button" :class="{ active: threeDMap }" @click="changeMap(3)">3D地图</div>
    </div>
  </div>
</template>
<script>
// import { getInfoGovernment } from '@/api/Strength/GovernServe/api';
import {
  getLocationInfo,
} from '@/api/IndexItem';
import './mark.scss';
import AMap from 'AMap';
// import Vue from 'vue';
export default {
  name: 'MedicalMap',
  components: {},
  data() {
    return {
      map: null,
      mapDom: null,
      infoWindow: null,
      // data: null,
      title: '六横政务大厅',
      list: [
        // { name: '当前叫号等待人数：', unit: '人', key: 'ddrs', number: 11 },
        // { name: '今日办理数量：', unit: '件', key: 'bjnsl', number: 51 },
        // { name: '本周办理数量：', unit: '件', key: 'blzsl', number: 409 },
        // { name: '本月办理数量', unit: '人', key: 'bsrys', number: 2653 },
      ],
      threeDMap: false,
    };
  },
  watch: {
    // data(val) {
    //   val && this.initMap();
    // },
  },
  mounted() {
    this.initMap();
    this.getData();
  },
  methods: {
    changeMap(type) {
      if (type === 3) {
        this.threeDMap = true;
      } else {
        this.threeDMap = false;
      }
    },
    initMap() {
      this.map = new AMap.Map(this.$refs.map, {
        resizeEnable: true,
        // zoomEnable: true,
        zoom: 13.3,
        zooms: [3, 20],
        center: [122.138836, 29.730147],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
    },
    addMarker(data) {
      data.forEach((item) => {
        const marker = new AMap.Marker({
          position: JSON.parse(item.geoCoord),
          content: '<div class="custom-marker"></div>',
          closeWhenClickMap: true,
        });
        marker.setMap(this.map);
        marker.on('click', (e) => {
          this.addInfoWindow(item);
        });
      });
    },
    addInfoWindow(item) {
      const infoWindow = new AMap.InfoWindow({
        isCustom: true, // 使用自定义窗体
        content: this.boxTemp(), // 传入 dom 对象，或者 html 字符串
        offset: new AMap.Pixel(165, 243),
        closeWhenClickMap: true,
      });
      this.infoWindow = infoWindow;
      // infoWindow.on('close', () => {
      //   console.log(1111);
      //   this.boxTemp().$destroy();
      // });
      infoWindow.open(this.map, JSON.parse(item.geoCoord));
    },
    initMap2() {
      this.map = new AMap.Map(this.$refs.map, {
        zoom: 13,
        zooms: [3, 20],
        zoomEnable: true,
        center: [122.138836, 29.730147],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      const marker = new AMap.Marker({
        position: [122.138836, 29.730147],
        content: this.boxTemp(),
        offset: new AMap.Pixel(0, 0),
      });
      marker.setMap(this.map);
    },
    boxTemp() {
      let contentItems = '';
      // console.log(this.list);
      this.list.forEach((item) => {
        contentItems =
          contentItems +
          `<div class="item">
            <div class="name">${item.name} </div>
            <div class="number">
              <div>${item.number}</div>
            </div>
          </div>`;
      });
      return `
       <div class="box">
          <div class="title"> ${this.title}</div>
          <div class="content">
          ${contentItems}
          </div>
      </div>`;
    },
    async getData() {
      const res = await getLocationInfo({ type: '政务服务' }).request();
      // const data = [];
      if (res && res[0].popupList) {
        this.list = res[0].popupList.map((item, index) => {
          return { name: item.title, number: item.value };
        });
        this.addMarker(res);
      }
      // this.data
      // res.map((item) => {
      //   data.push(
      //     {
      //       type: 'FeatureCollection',
      //       features: [
      //         {
      //           type: 'Feature',
      //           properties: {
      //             name: item.locationName,
      //             content: item.popupList[0] && item.popupList.length === 1 ? item.popupList[0].value : '',
      //             listData: item.popupList[0] && item.popupList.length > 1 ? item.popupList : '',
      //           },
      //           geometry: {
      //             type: item.geoType,
      //             coordinates: JSON.parse(item.geoCoord),
      //           },
      //         },
      //       ],
      //     });
      // });
      // console.log(this.Polygon);
      // setTimeout(() => {
      //   this.show = true;
      // }, 500);
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
    ::v-deep .custom-marker {
      position: absolute;
      width: 89.7px;
      height: 89.7px;
      background: url('./img/icon.png');
      background-size: contain;
    }
  }
  .switch {
  width: 274px;
  height: 360px;
  position: absolute;
  bottom: 48rem;
  right: 200rem;
  display: flex;
  justify-content: space-around;
  z-index: 1000;
  .button {
    width: 114px;
    height: 44px;
    font-size: 24px;
    line-height: 44px;
    text-align: center;
    color: #82e2e4;
    cursor: pointer;
    background: url('./img/mmexport.jpg') no-repeat;
    &.active {
      color: white;
      background: url('./img/mmexport1.jpg') no-repeat;
    }
  }
}
}
</style>
