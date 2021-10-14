<template>
  <div class="map_wrapper">
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
import AMap from 'AMap';
import hosIcon from './img/hospital-icon.png';
export default {
  components: {},
  data() {
    return {
      infoWindow: null,
      threeDMap: false,
    };
  },
  mounted() {
    this.initMap();
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
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 13,
        zooms: [3, 20],
        zoomEnable: true,
        center: [122.138836, 29.730147],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      this.map.on('click', (e) => {
        if (this.infoWindow.close) {
          this.infoWindow.close();
        }
      });
      this.initDrwnduo();
      this.addMarker();
    },
    // 撒点
    addMarker() {
      const item = {
        lng: 122.080898,
        lat: 29.769131,
        name: '棕榈湾地块',
        content: '棕榈湾地块位于六横岛西北侧，该区块三面环山、一面临海，远离居民区，可用陆域面积876亩，水、电、道路、通讯等基础设施配套完善，并可根据项目需要进行供冷、供热；紧邻宁波-舟山双屿门航道，具有优良的深水岸线，可用深水岸线约460米，岸滩稳定，不冻不淤，可以建造30万吨级码头。目前已完成对该区域的整体搬迁、土地征用等政策处理工作，并完成了海堤及工作船码头建设、部分开山爆破、场地回填等前期工作。重点引进：油气综合储运、船用低硫燃料油生产、清洁能源生产等项目。',
      };
      const marker = new AMap.Marker({
        position: [item.lng, item.lat],
        content: "<div class='custom-marker'></div>",
        icon: hosIcon,
      });
      this.map.add(marker);
      marker.on('click', (e) => {
        this.addInfoWindow(item, e.lnglat);
      });
    },
    // 地图或多边形
    initDrwnduo() {
      const item = {
        name: '小郭巨一期',
        content: '小郭巨一期围垦工程已经完工，围垦总面积7000亩，新增岸线2.2公里，水深在8-15米之间。六横发展海上风电项目及创建风电机组制造基地的时机和条件都非常成熟，已建成普陀6#海上风电场2区项目，且已经并网运行。国电在六横小郭巨区域建设的占地100亩的陆上组装基地及2000吨级的配套码头基本闲置，可作为华东海上风机运行维护母港的选址。 目前已落地的浙能液化天然气（LNG）接收站项目选址在该区块。',
      };
      var polygonArr = [
        [122.114742, 29.702105],
        [122.110933, 29.71803],
        [122.097833, 29.720723],
        [122.077454, 29.704801],
      ];
      var polygon = new AMap.Polygon({
        map: this.map,
        path: polygonArr,
        strokeColor: '#FF33FF',
        strokeOpacity: 0.2,
        strokeWeight: 3,
        fillColor: '#1791fc',
        fillOpacity: 0.35,
      });
      // polygon.on('click', this.addInfoWindow);
      polygon.on('click', (e) => {
        this.addInfoWindow(item, e.lnglat);
      });
    },
    addInfoWindow(markerMsg, lnglat) {
      console.log(markerMsg);
      const { lng, lat } = lnglat;
      const html = `<div class='pop-up-box'>
          <h3>${markerMsg.name}</h3>
          <p style="font-size: 2rem">${markerMsg.content}</p>
        </div>`;
      const infoWindow = new AMap.InfoWindow({
        isCustom: true, // 使用自定义窗体
        content: html, // 传入 dom 对象，或者 html 字符串
        offset: new AMap.Pixel(760.7, -590),
      });
      this.infoWindow = infoWindow;
      infoWindow.open(this.map, [lng, lat]);
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
  .main-map {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 1350px;
    ::v-deep .custom-marker {
      width: 90px;
      height: 90px;
      background: url('./img/hospital-icon.png') no-repeat center center;
      background-size: 98% 98%;
      border-radius: 50%;
      z-index: 111;
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
  }
}
</style>
