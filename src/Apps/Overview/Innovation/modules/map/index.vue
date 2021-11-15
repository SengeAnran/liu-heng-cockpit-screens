<template>
  <div class="map_wrapper">
    <div class="main-map" ref="map"></div>
    <div class="main-map" v-if="threeDMap">
      <!--      <iframe src="http://60.163.192.206:8000/srit3d/default.html" width="100%" height="100%"></iframe>-->
      <ThreeDMap
        :dataList="this.threeDDataList"
        :tipTemplate="this.tipTemplate"
        title=""
        :Scale="4.5"
      />
    </div>
    <div class="switch">
      <div class="button" :class="{'active': iconIndex === 1}" @click="changeMap(1)">卫星地图</div>
      <div class="button" :class="{'active': iconIndex === 2}" @click="changeMap(2)">2D地图</div>
      <div class="button" :class="{'active': iconIndex === 3}" @click="changeMap(3)" >3D地图</div>
    </div>
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

      threeDMap: false,
      iconIndex: 1, // 图层切换按钮,
      layers: [],

      threeDDataList: [],
      tipTemplate: {},
    };
  },
  mounted() {
    this.layers =  [
      new AMap.TileLayer.Satellite(),
      new AMap.TileLayer.RoadNet()
    ];
    this.initMap();
    this.map.add(this.layers);
    this.getData();
  },
  methods: {
    changeMap(type) {
      this.iconIndex = type;
      if (type === 1) {
        this.threeDMap = false;
        this.map.add(this.layers);
      } else if( type === 3) {
        this.threeDMap = true;
      } else {
        this.threeDMap = false;
        this.map.remove(this.layers);
      }
    },
    getData() {
      getCompanyList()
        .request()
        .then((res) => {
          console.log(res);
          const filterRes = res.filter((item) => item.lng && item.lat);
          this.markData = filterRes;
          this.markDown();
          this.initThreeDData(res);
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
        zoom: 13,
        zoomEnable: true,
        center: [122.138836, 29.730147],
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
    initThreeDData(data){
      // console.log(data)
      if (data) {
        this.threeDDataList = data.map((item) => {
          return {
            x: item.lng,
            y: item.lat,
            z: 0,
            企业名称: item.gsmc,
            人才数量: item.rcsl,
            拥有专利发明: item.yyzlfmsl,
          }
        });
        // console.log(this.threeDDataList);
        this.tipTemplate = {
          '企业名称': '企业名称',
          '人才数量': '人才数量',
          '拥有专利发明': '拥有专利发明',
        }
      }
      // console.log(this.threeDDataList);
      // console.log(this.tipTemplate);
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
    height: 1354px;
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
  .switch {
    width: 374px;
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
