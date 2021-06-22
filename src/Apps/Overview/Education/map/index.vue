<template>
  <div class="map_wrapper">
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
    <div class="toggle-layer">
      <h3>医院图例</h3>
      <ul>
        <li v-for="(item,i) in list"
            :key="`toggle-${i}`">
          <span @click="toggle(i)"
                :class="{'active':currentIndex===i}"></span>
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap';
import hosIcon from '../images/hospital-icon.png';
export default {
  name: 'MedicalMap',
  components: {},
  data() {
    return {
      map: null,
      mapDom: null,
      currentIndex: '',
      list: ['小学', '初中', '高中'],
      isPop: false,
      markerMsg: {
        name: '六横镇医院',
        phone: '0574-83307880',
        doctor: 67,
        nurse: 112,
        address: '浙江省舟山市普陀区六横镇XXXXXX号',
      },
      markerLan: [
        [22.125225, 29.748662], // 镇医院
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
  },
  methods: {
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 14,
        zooms: [3, 16],
        center: [122.200254, 29.707613],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      this.addMarker(this.markerLan);
    },
    addInfoWindow() {
      const markerMsg = this.markerMsg;
      const html =
        `<div class='pop-up-box'><h3>${markerMsg.name}</h3><div><label>联系电话：</label><br><span>${markerMsg.phone}<span></div><div class='flex'><div><label>医生人数：</label><br><span>${markerMsg.doctor}人</span></div><div><label>护士人数：</label><br><span>${markerMsg.nurse}人</span></div></div><div><label>地址：</label><br><span>${markerMsg.address}</span></div></div>`;

      var infoWindow = new AMap.InfoWindow({
        isCustom: true, // 使用自定义窗体
        content: html, // 传入 dom 对象，或者 html 字符串
        offset: new AMap.Pixel(2600, 0),
      });
      this.infoWindow = infoWindow;
    },
    addMarker(markerList) {
      const markers = [];
      for (let i = 0; i < markerList.length; i++) {
        const element = markerList[i];
        const marker = new AMap.Marker({
          position: element,
          content: "<div class='custom-marker'></div>",
          icon: hosIcon,
        });
        marker.on('click', (e) => {
          const { lng, lat } = e.lnglat;
          this.infoWindow.open(this.map, [lng, lat]);
        });
        AMap.event.addListener(marker, 'click', function () {
          console.log('dsdfsdf');
        });
        markers.push(marker);
      }
      this.markers = markers;
      this.map.add(markers);
    },
    toggle(i) {
      this.currentIndex = i;
      if (i === 0) {
        // 全选
        this.markerList = this.markerLan;
      } else if (i === 1) {
        // 医院
        this.markerList = this.markerLan.slice(0, 2);
      } else if (i === 2) {
        // 卫生院
        this.markerList = this.markerLan.slice(2);
      }
      this.map.remove(this.markers);
      this.addMarker(this.markerList);
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
    position: absolute;
    left: 2126px;
    top: 503px;
    background: url('../images/pop-up-bg.png') no-repeat;
    background-size: 100% 100%;
    padding-left: 53px;
    padding-right: 53px;
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
        width: 50%;
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
