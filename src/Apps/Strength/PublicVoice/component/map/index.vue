<template>
  <div class="map_wrapper">
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
    <div class="switch">
      <div class="button" :class="{'active': iconIndex === 1}" @click="changeMap(1)">卫星地图</div>
      <div class="button" :class="{'active': iconIndex === 2}" @click="changeMap(2)">2D地图</div>
    </div>
  </div>
</template>
<script>
import economicAPI from '@/api/Strength/PublicVoice';
import './item.scss';
import AMap from 'AMap';
export default {
  name: 'MedicalMap',
  components: {},
  data() {
    return {
      iconIndex: 1,
      layers: [],

      map: null,
      mapDom: null,
      data: null,
      title: '最新评论',
      time: '2021-09-28 22:25',
      link: '',
      features: 'width=1800,height=700,left=50,top=200',
      content:
        '百年征程波澜壮阔， 百年初心历久弥坚。在中国共产党成立100周年之际，舟山市税务系统开展“最佳基层党组织”“最佳党支部书记”“最佳共产党员”等“五最佳”评选活动，深入探寻他们的故事，感悟共产党人的初...',
    };
  },
  watch: {
    data(val) {
      val && this.initMap();
    },
  },
  mounted() {
    this.layers =  [
      new AMap.TileLayer.Satellite(),
      new AMap.TileLayer.RoadNet()
    ];
    this.getData();
    // this.initMap();
    window.onresize = () => {
      this.countStyle();
    };
    // document.getElementById('boxWind').addEventListener("click",this.goPage());
  },
  methods: {
    changeMap(type) {
      this.iconIndex = type;
      if (type === 1) {
        this.threeDMap = false;
        this.map.add(this.layers);
      } else {
        this.threeDMap = false;
        this.map.remove(this.layers);
      }
    },
    initMap() {
      this.map = new AMap.Map(this.$refs.map, {
        resizeEnable: true,
        zoom: 13.4,
        zoomEnable: false,
        center: [122.138762, 29.731102],
        viewMode:'3D',
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
      const marker = new AMap.Marker({
        position: [122.180087, 29.702798],
        content: this.boxTemp(),
        offset: new AMap.Pixel(0, 0),
        clickable: true,
      });
      marker.on('click', this.goPage);
      marker.setMap(this.map);
    },
    boxTemp() {
      return `
       <div class="box" id="boxWind">
          <div class="title"> ${this.title}</div>
          <div class="time"> ${this.time}</div>
          <div class="content">
          ${this.content}
          </div>
      </div>`;
    },
    async getData() {
      const data = await economicAPI.getLatelyPublicSentiment();
      if (data) {
        this.time = data.fbsj;
        this.content = data.nrzy;
        this.link = data.ywlj;
      }
      this.initMap();
      this.map.add(this.layers);
      // this.positive = data[0].zmsjs;
      // this.negative = data[0].fmsjs;
      // this.neutral = data[0].zxsjs;
    },
    goPage(){
      console.log('onclick');
      window.open(this.link,'_blank',this.features);
    },
    countStyle() {
      const clientWidth = document.documentElement.clientWidth
      const clientHeight = document.documentElement.clientHeight
      // console.log(document.documentElement);
      // console.log(document.documentElement.clientHeight);
      this.features = 'width=' + clientWidth +
        ',height=' + (parseInt(clientHeight * 0.83)) +
        ',left=' + 0 +
        ',top=' + (parseInt(clientHeight * 0.23));
    },
  },
};
</script>
<style lang="scss" scoped>
//@import './item.scss';
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
  .switch {
    width: 274px;
    height: 360px;
    position: absolute;
    bottom: 48rem;
    right: 200rem;
    display: flex;
    justify-content: space-around;
    z-index: 1000;
    .button{
      width: 114px;
      height: 44px;
      font-size: 24px;
      line-height: 44px;
      text-align: center;
      color: #82e2e4;
      cursor: pointer;
      background: url("./img/mmexport.jpg") no-repeat;
      &.active {
        color: white;
        background: url("./img/mmexport1.jpg") no-repeat;
      }
    }
  }
}
</style>
