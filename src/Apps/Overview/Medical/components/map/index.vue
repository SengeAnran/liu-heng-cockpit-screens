<template>
  <div class="map_wrapper">
    <div class="main-map"
         ref="map"></div>
    <div class="toggle-layer">
      <h3>医院图例</h3>
      <ul>
        <li v-for="(item,i) in list"
            :key="`toggle-${i}`">
          <span @click="toggle(item,i)"
                :class="{'active':currentIndex===i}"></span>
          <span>{{item.type}}</span>
        </li>
      </ul>
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
      markerMsgList: [],
      markerMsg: {
        yljg: '六横镇医院',
        lxdh: '0574-83307880',
        doctor: 67,
        nurse: 112,
        dz: '浙江省舟山市普陀区六横镇XXXXXX号',
      },
      markerLan: [
        [122.125225, 29.748662], // 镇医院
        [122.12642, 29.74875], // 普陀人民医院六横分院-门诊
        [122.20457, 29.702632], // 台门社区卫生服务站
        [122.168829, 29.685418], // 六横镇苍洞社区卫生站
        [122.122891, 29.747876], // 六横镇j头社区卫生服务室
        [122.143261, 30.105335], // 干览镇卫生院
      ],
      markerList: [],
      markers: [],
      infoWindow: {},
    };
  },
  mounted() {
    this.initMap();
    this.getData('all');
  },
  methods: {
    getData(category) {
      this.markerMsgList = [];
      const apis = { getHospitalListByCategory, getPlaceInfo, getIsolationPlaceInfo };
      const apisArr = [
        getHospitalListByCategory().request(),
        getPlaceInfo().request(),
        getIsolationPlaceInfo().request(),
      ];
      if (category === 'all') {
        Promise.all(apisArr).then((res) => {
          const data = [...res[0], ...res[1], ...res[2]];
          data.map((item) => {
            item.position = [item.lng, item.lat];
          });
          this.markerMsgList = data;
          this.addMarkerOneByOne();
        });
      } else {
        apis[category]()
          .request()
          .then((res) => {
            if (res && res.length) {
              res.map((item) => {
                item.position = [item.lng, item.lat];
              });
              this.markerMsgList = res;
              this.addMarkerOneByOne();
            } else {
              this.markerMsgList = [];
            }
          });
      }
    },
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 13,
        zoomEnable: false,
        center: [122.140462, 29.734471],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
    },
    addInfoWindow(markerMsg, lnglat) {
      const { lng, lat } = lnglat;
      const html = `<div class='pop-up-box'>
          <h3>${markerMsg.jzdmc || markerMsg.gldmx || markerMsg.yymc}</h3>
          <div>
            <label>联系电话：</label><br>
            <span>${markerMsg.dh || '暂无'}<span>
          </div>
          <div class='flex'>
            <div><label>医生人数：</label><br><span>${markerMsg.ysrs || 0}人</span></div>
            <div><label>护士人数：</label><br><span>${markerMsg.hsrs || 0}人</span></div>
          </div>
          <div><label>地址：</label><br><span>${markerMsg.dz}</span></div>
        </div>`;

      var infoWindow = new AMap.InfoWindow({
        isCustom: true, // 使用自定义窗体
        content: html, // 传入 dom 对象，或者 html 字符串
        offset: new AMap.Pixel(760.7, -590),
      });
      this.infoWindow = infoWindow;
      infoWindow.open(this.map, [lng, lat]);
    },
    addMarkerOneByOne() {
      this.markers.map((item) => {
        this.map.remove(item);
      });
      this.markers = [];
      this.markerMsgList.forEach((item) => {
        this.addMarker(item);
      });
    },
    addMarker(item) {
      const marker = new AMap.Marker({
        position: item.position,
        content: "<div class='custom-marker'></div>",
        icon: hosIcon,
      });
      this.map.add(marker);
      marker.on('click', (e) => {
        this.addInfoWindow(item, e.lnglat);
      });
      this.markers.push(marker);
    },
    toggle(item, i) {
      this.map.remove(this.infoWindow);
      this.currentIndex = i;
      this.getData(item.key);
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
    height: 2070px;
    ::v-deep .custom-marker {
      width: 90px;
      height: 90px;
      background: url('../../images/hospital-icon.png') no-repeat center center;
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
