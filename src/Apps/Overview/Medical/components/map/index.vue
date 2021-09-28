<template>
  <div class="map_wrapper">
    <div class="main-map" ref="mapyiliao" v-show="!threeDMap"></div>
    <div class="toggle-layer" v-show="!threeDMap">
      <h3>医院图例</h3>
      <ul>
        <li v-for="(item, i) in list" :key="`toggle-${i}`">
          <span @click="toggle(item, i)" :class="{ active: currentIndex === i }"></span>
          <span>{{ item.type }}</span>
        </li>
      </ul>
    </div>
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
import hosIcon from '../../images/hospital-icon.png';
import { getHospitalListByCategory, getPlaceInfo, getIsolationPlaceInfo } from '@/api/Overview/Medical/api';
export default {
  name: 'MedicalMap',
  components: {},
  data() {
    return {
      threeDMap: false,
      map: null,
      mapDom: null,
      currentIndex: '',
      list: [
        { type: '全选', key: 'all' },
        { type: '医院', key: 'getHospitalListByCategory' },
        { type: '疫苗接种点', key: 'getPlaceInfo' },
        { type: '隔离点', key: 'getIsolationPlaceInfo' },
      ],
      isPop: false,
      markerMsgList: [
        {
          lat: 29.77227,
          lng: 122.100754,
        },
      ],
      markerList: [],
      infoWindow: {},
      markers1: [],
      markers2: [],
      markers3: [],
    };
  },
  mounted() {
    this.initMap();
    this.getData('all');
  },
  methods: {
    changeMap(type) {
      if (type === 3) {
        this.threeDMap = true;
      } else {
        this.threeDMap = false;
      }
    },
    async getData(category) {
      this.markerMsgList = [
        {
          lng: 122.120087,
          lat: 29.742798,
          name: '普陀医院六横第二分院',
          label: '医院',
          xiangmu: '综合医院',
          address: '浙江省舟山市普陀区六横镇六横路227号',
          jieshao:
            '我们的服务宗旨是诚信为本，为医疗事业作出应有贡献。我们日常开展综合医院等相关业务。欢迎广大病人群众前来舟山市普陀人民医院六横分院。',
          type: 1,
        },
        {
          lng: 122.193911,
          lat: 29.696887,
          name: '中心卫生院',
          label: '医院',
          xiangmu: '综合医院',
          address: '浙江省舟山市普陀区台兴路156号',
          jieshao:
            '以人的健康为中心、家庭为单位、社区为范围、需求为导向，融预防、医疗、保健、康复、健康教育、计划生育技术服务功能等为一体，有效、经济、方便、综合、连续的基层卫生服务',
          type: 1,
        },
      ];
      const res = await getIsolationPlaceInfo().request(); // 隔离点
      res.forEach((item) => {
        if (item.lng && item.lat) {
          this.markerMsgList.push({
            ...item,
            type: 2,
          });
        }
      });
      const res2 = await getPlaceInfo().request(); // 接种点
      res2.forEach((item) => {
        if (item.lng && item.lat) {
          console.log(item);
          this.markerMsgList.push({
            ...item,
            type: 3,
          });
        }
      });
      this.initMarkers();
    },
    initMap() {
      this.mapDom = this.$refs.mapyiliao;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 13,
        center: [122.200254, 29.707613],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      this.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
      this.map.on('click', (e) => {
        if (this.infoWindow.close) {
          this.infoWindow.close();
        }
      });
    },
    addInfoWindow(markerMsg, lnglat) {
      const { lng, lat } = lnglat;
      const html = `<div class='pop-up-box'>
          <h3>${markerMsg.name}</h3>
          <div>
          <div class="name">主营项目：</div>
          <div class="content">${markerMsg.xiangmu}</div>
          </div>
          <div>
          <div class="name">地址：</div>
          <div class="content">${markerMsg.address}</div>
          </div>
          <div>
          <div class="name">简介：</div>
          <div class="content1">${markerMsg.jieshao}</div>
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
    // 隔离点弹框
    addInfoWindow1(markerMsg, lnglat) {
      const { lng, lat } = lnglat;
      const html = `<div class='pop-up-box'>
          <h3>${markerMsg.gldmx}</h3>
          <div>
          <div class="name">地址：</div>
          <div class="content">${markerMsg.dz}</div>
          </div>
          <div>
          <div class="name">床位数：</div>
          <div class="content">${markerMsg.cws}</div>
          </div>
          <div>
          <div class="name">隔离房数：</div>
          <div class="content1">${markerMsg.glfs}</div>
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
    // 接种点弹框
    addInfoWindow2(markerMsg, lnglat) {
      const { lng, lat } = lnglat;
      const html = `<div class='pop-up-box'>
          <h3>${markerMsg.jzdmc}</h3>
          <div>
          <div class="name">地址：</div>
          <div class="content">${markerMsg.dz}</div>
          </div>
          <div>
          <div class="name">接种能力：</div>
          <div class="content">${markerMsg.jznl}</div>
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
    // 加载医院
    initMarkers() {
      var yiyuanIcon = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(70, 70),
        // 图标的取图地址
        image: require('../../images/hospital-icon.png'),
        // 图标所用图片大小
        imageSize: new AMap.Size(70, 70),
        // 图标取图偏移量
        imageOffset: new AMap.Pixel(-9, -3),
      });
      this.markerMsgList.forEach((item) => {
        if (item.type === 1) {
          console.log(item, new AMap.LngLat(item.lng, item.lat));
          const startMarker = new AMap.Marker({
            position: new AMap.LngLat(item.lng, item.lat),
            icon: yiyuanIcon,
            offset: new AMap.Pixel(-13, -30),
          });
          startMarker.on('click', (e) => {
            this.addInfoWindow(item, e.lnglat);
          });
          this.markers1.push(startMarker);
        }
      });
      this.map.add([...this.markers1]);
    },
    // 加载隔离点
    initMarkers1() {
      var geili = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(70, 70),
        // 图标的取图地址
        image: require('../../images/geili.png'),
        // 图标所用图片大小
        imageSize: new AMap.Size(70, 70),
        // 图标取图偏移量
        imageOffset: new AMap.Pixel(-9, -3),
      });
      this.markerMsgList.forEach((item) => {
        if (item.type === 2) {
          console.log(item);
          const startMarker = new AMap.Marker({
            position: new AMap.LngLat(item.lng, item.lat),
            icon: geili,
            offset: new AMap.Pixel(-13, -30),
          });
          console.log(startMarker);
          startMarker.on('click', (e) => {
            this.addInfoWindow1(item, e.lnglat);
          });
          this.markers2.push(startMarker);
        }
      });
      this.map.add([...this.markers2]);
    },
    // 加载接种点
    initMarkers2() {
      var jiezhong = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(70, 70),
        // 图标的取图地址
        image: require('../../images/jiezhong.png'),
        // 图标所用图片大小
        imageSize: new AMap.Size(70, 70),
        // 图标取图偏移量
        imageOffset: new AMap.Pixel(-9, -3),
      });
      this.markerMsgList.forEach((item) => {
        if (item.type === 3) {
          console.log(item);
          const startMarker = new AMap.Marker({
            position: new AMap.LngLat(item.lng, item.lat),
            icon: jiezhong,
            offset: new AMap.Pixel(-13, -30),
          });
          startMarker.on('click', (e) => {
            this.addInfoWindow2(item, e.lnglat);
          });
          this.markers3.push(startMarker);
        }
      });
      this.map.add([...this.markers3]);
    },
    toggle(item, i) {
      console.log(item, i);
      this.currentIndex = i;
      if (item.type === '全选') {
        this.map.remove(this.markers1);
        this.map.remove(this.markers2);
        this.map.remove(this.markers3);
        this.markers1 = [];
        this.markers2 = [];
        this.markers3 = [];
        this.initMarkers();
        this.initMarkers1();
        this.initMarkers2();
      }
      if (item.type === '医院') {
        this.map.remove(this.markers1);
        this.map.remove(this.markers2);
        this.map.remove(this.markers3);
        this.markers1 = [];
        this.markers2 = [];
        this.markers3 = [];
        this.initMarkers();
      }
      if (item.type === '疫苗接种点') {
        this.map.remove(this.markers1);
        this.map.remove(this.markers2);
        this.map.remove(this.markers3);
        this.markers1 = [];
        this.markers2 = [];
        this.markers3 = [];
        this.initMarkers2();
      }
      if (item.type === '隔离点') {
        this.map.remove(this.markers1);
        this.map.remove(this.markers2);
        this.map.remove(this.markers3);
        this.markers1 = [];
        this.markers2 = [];
        this.markers3 = [];
        this.initMarkers1();
      }
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
  .flex {
    display: flex;
  }
  .main-map {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 1350px;
    ::v-deep .custom-marker {
      width: 70px;
      height: 70px;
      background: require('../../images/hospital-icon.png') no-repeat center center;
      background-size: 100% 100%;
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
  .toggle-layer {
    width: 274px;
    height: 360px;
    position: absolute;
    left: 3326px;
    top: 843px;
    //top: 943px;
    background: url('../../images/toggle-bg.png') no-repeat;
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
          background: url('../../images/rect-bg.png') no-repeat;
          background-size: 100% 100%;
          border-radius: 4px;
          margin-right: 20px;
          cursor: pointer;
        }
      }
      .active {
        background: url('../../images/checked-icon.png') no-repeat !important;
      }
    }
  }
  ::v-deep .pop-up-box {
    width: 550px;
    // height: 462px;
    position: absolute;
    left: 2126px;
    top: 503px;
    background: url('../../images/pop-up-bg.png') no-repeat;
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
    .name {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #ffffff;
      height: 50px;
    }
    .content {
      height: 40px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
      overflow: auto;
    }
    .content1 {
      height: 150px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
      overflow: auto;
      margin-bottom: 20px;
    }
    > div {
      width: 100%;
      // margin-bottom: 46px;
      > div {
        width: 100%;
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
.fontName {
  font-size: 50px;
}
</style>
