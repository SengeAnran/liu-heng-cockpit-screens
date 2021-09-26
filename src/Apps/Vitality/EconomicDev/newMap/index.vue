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
// import './mark.scss';
// import { partyConstruct } from '@/api/Charm/PartyConstruction';
import AMap from 'AMap';
export default {
  name: 'CityEvolution',
  components: {},
  data() {
    return {
      map: null,
      mapLayer: null,
      markerLayer: null,
      mapDom: null,
      currentLegend: 0,
      lastDetailMarker: null,
      threeDMap: false,
      markers1: [],
      markersList: [
        {
          name: '浙江东鹏船舶修造有限公司',
          lng: 122.13133333,
          lat: 29.77483333,
          content: '',
        },
        {
          name: '国电电力浙江舟山海上风电开发有限公司',
          lng: 122.061068,
          lat: 29.71412,
        },
        {
          name: '浙能港口运营管理有限公司',
          lng: 122.141133,
          lat: 29.74077,
        },
        {
          name: '中奥能源集团有限公司',
          lng: 122.131369,
          lat: 29.774304,
        },
        {
          name: '舟山市佳尔灵仪表有限公司',
          lng: 122.141511,
          lat: 29.730321,
        },
        {
          name: '舟山市龙山船厂有限公司',
          lng: 122.074999,
          lat: 29.771508,
        },
        {
          name: '舟山市普陀宏基水产有限公司',
          lng: 122.203593,
          lat: 29.695359,
        },
        {
          name: '舟山市普陀区舟港水产有限公司',
          lng: 122.091261,
          lat: 29.775102,
        },
        {
          name: '舟山市鑫亚船舶修造有限公司',
          lng: 122.115647,
          lat: 29.784643,
        },
        {
          name: '舟山市中电建水务有限公司',
          lng: 122.131721,
          lat: 29.73797,
        },
        {
          name: '舟山天达环保建材有限公司',
          lng: 122.138118,
          lat: 29.744008,
        },
        {
          name: '舟山远东齿轮有限责任公司',
          lng: 122.163031,
          lat: 29.699512,
        },
        {
          name: '舟山中远海运重工企业',
          lng: 122.093609,
          lat: 29.775638,
        },
      ],
    };
  },
  mounted() {
    this.initMap();
    this.initMakers();
  },
  methods: {
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 13,
        zooms: [3, 16],
        center: [122.147672, 29.72111],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
    },
    // 地图撒点
    initMakers() {
      var yiyuanIcon = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(70, 70),
        // 图标的取图地址
        image: require('./img/jingji.png'),
        // 图标所用图片大小
        imageSize: new AMap.Size(70, 70),
        // 图标取图偏移量
        imageOffset: new AMap.Pixel(-9, -3),
      });
      this.markersList.forEach((item) => {
        const startMarker = new AMap.Marker({
          position: new AMap.LngLat(item.lng, item.lat),
          icon: yiyuanIcon,
          offset: new AMap.Pixel(-13, -30),
        });
        this.markers1.push(startMarker);
      });
      this.map.add([...this.markers1]);
    },
  },
};
</script>
<style lang="scss">
@import './mark.scss';
</style>
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
  .main-map {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 135rem;
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
