<template>
  <div class="map_wrapper">
    <div class="main-map" ref="map"></div>
    <div class="mask"></div>
    <div class="toggle-layer">
      <h3>医院图例</h3>
      <ul>
        <li v-for="(item,i) in list" :key="`toggle-${i}`">
          <span @click="selectMark(item,i)" :class="{'active':currentIndex===i}"></span>
          <span>{{item.type}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap';
import hosIcon from '../images/hospital-icon.png';
import { getSchoolListByCategory } from '@/api/Overview/Education/api';
export default {
  name: 'MedicalMap',
  components: {},
  data() {
    return {
      map: null,
      mapDom: null,
      currentIndex: '',
      markData: [],
      list: [
        { type: '幼儿园' },
        { type: '小学' },
        { type: '初中' },
        { type: '高中' },
      ],
      markers: [],
      infoWindow: {},
    };
  },
  mounted() {
    this.initMap();
    this.getData();
  },
  methods: {
    getData(category = '') {
      getSchoolListByCategory().request({ category: category }).then((res) => {
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
        zoomEnable: true,
        center: new AMap.LngLat(122.200254, 29.707613),
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
          <h3>${markerMsg.xxmc}</h3>
          <div>
            <label>联系电话：</label><br>
            <span>${markerMsg.lxdh || '暂无'}<span>
          </div>
          <div class='flex'>
            <div><label>教职人数：</label><br><span>${markerMsg.jzrs || 0}人</span></div>
            <div><label>学生人数：</label><br><span>${markerMsg.xszs || 0}人</span></div>
          </div>
          <div><label>地址：</label><br><span>${markerMsg.dz}</span></div>
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
      background: url('../images/hospital-icon.png') no-repeat center center;
      background-size: 98% 98%;
      border-radius: 50%;
      z-index: 111;
    }
  }
  .toggle-layer {
    width: 274px;
    height: 360px;
    position: absolute;
    left: 3326px;
    top: 943px;
    background: url('../images/toggle-bg.png') no-repeat;
    background-size: 100% 100%;
    z-index: 1000;
    color: #fff;
    font-size: 26px;
    font-family: Source Han Sans CN;
    padding-left: 42px;
    h3 {
      height: 94px;
      line-height: 94px;
      margin: 0;
    }
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style: none;
      height: 51px;
      line-height: 51px;
      span {
        display: inline-block;
        vertical-align: middle;
        &:nth-child(1) {
          width: 28px;
          height: 28px;
          background: url('../images/rect-bg.png') no-repeat;
          background-size: 100% 100%;
          border-radius: 4px;
          margin-right: 20px;
          cursor: pointer;
        }
      }
      .active {
        background: url('../images/checked-icon.png') no-repeat !important;
      }
    }
  }
  ::v-deep .pop-up-box {
    width: 550px;
    // height: 462px;
    position: absolute;
    left: 2126px;
    top: 503px;
    background: url('../images/pop-up-bg.png') no-repeat;
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
        width: 45%;
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
