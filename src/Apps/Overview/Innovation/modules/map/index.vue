<template>
  <div class="map_wrapper">
    <div class="main-map" ref="map"></div>
    <div class="mask"></div>
  </div>
</template>

<script>
import AMap from 'AMap';
import hosIcon from './img/hospital-icon.png';
import { getCompanyList } from '@/api/Overview/Innovation/api';
export default {
  name: 'MedicalMap',
  components: {},
  data() {
    return {
      map: null,
      mapDom: null,
      currentIndex: '',
      markData: [],
      list: [{ type: '幼儿园' }, { type: '小学' }, { type: '初中' }, { type: '高中' }],
      markers: [],
      infoWindow: {},
    };
  },
  mounted() {
    this.initMap();
    this.getData();
  },
  methods: {
    getData() {
      getCompanyList()
        .request()
        .then((res) => {
          this.markData = res;
          this.markDown();
        });
    },
    markDown() {
      this.markers.forEach((item) => {
        this.map.remove(item);
      });
      // 关闭窗体
      if (this.infoWindow.close) {
        this.infoWindow.close();
      }
      this.markData.forEach((item) => {
        this.addMarker(item);
      });
    },
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 14,
        zoomEnable: false,
        center: [122.200254, 29.707613],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      this.map.on('click', (e) => {
        if (this.infoWindow.close) {
          this.infoWindow.close();
        }
      });
    },
    addInfoWindow(markerMsg, lnglat) {
      const { lng, lat } = lnglat;
      const html = `<div class='pop-up-box'>
          <h3>${markerMsg.gsmc}</h3>
          <div class='flex'>
            <div><label>人才数量：</label><br><span>${markerMsg.rcsl || 0}人</span></div>
            <div><label>拥有专利发明：</label><br><span>${markerMsg.yyzlfmsl || 0}项</span></div>
          </div>
        </div>`;
      const infoWindow = new AMap.InfoWindow({
        isCustom: true, // 使用自定义窗体
        content: html, // 传入 dom 对象，或者 html 字符串
        offset: new AMap.Pixel(760.7, -590),
      });
      this.infoWindow = infoWindow;
      infoWindow.open(this.map, [lng, lat]);
    },
    addMarker(item) {
      const marker = new AMap.Marker({
        // position: [item.lng || 122.200254, item.lat || 29.707613],
        position: [item.lng, item.lat],
        content: "<div class='custom-marker'></div>",
        icon: hosIcon,
      });
      this.map.add(marker);
      marker.on('click', (e) => {
        this.addInfoWindow(item, e.lnglat);
      });
      this.markers.push(marker);
    },
    selectMark(item, index) {
      this.currentIndex = index;
      this.getData(item.type);
    },
  },
};
</script>
<style lang="scss" scoped>
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
    background: url('./img/mask_bg.png') no-repeat;
  }
  .flex {
    display: flex;
  }
  .main-map {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 2070px;
    ::v-deep .custom-marker {
      width: 90px;
      height: 90px;
      background: url('./img/hospital-icon.png') no-repeat center center;
      background-size: 98% 98%;
      border-radius: 50%;
      z-index: 111;
    }
  }
  ::v-deep .pop-up-box {
    width: 550px;
    // height: 462px;
    position: absolute;
    left: 2126px;
    top: 503px;
    background: url('./img/pop-up-bg.png') no-repeat;
    background-size: 100% 100%;
    padding-left: 53px;
    padding-right: 53px;
    z-index: 10;
    .flex {
      display: flex;
    }
    h3 {
      font-size: 34px;
      font-family: 'Source Han Sans SC';
      font-weight: bold;
      color: #77ffff;
    }
    > div {
      width: 100%;
      margin-bottom: 46px;
      > div {
        width: 46%;
        &:nth-child(1) {
          margin-right: 8%;
        }
      }
      label {
        font-size: 30px;
        font-family: 'Source Han Sans CN';
        font-weight: 500;
        color: #ffffff;
      }
      span {
        font-size: 30px;
        font-family: 'DIN';
        font-weight: bold;
        color: #ffffff;
      }
    }
  }
}
</style>
