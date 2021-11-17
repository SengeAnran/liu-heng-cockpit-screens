<template>
  <div class="map_wrapper" >
    <div class="mask"></div>
    <div class="main-map" ref="map" ></div>
<!--    <div class="main-map" ref="threeDMap" v-show="threeDMap"></div>-->
    <div class="swipper" v-show="!threeDMap" >
      <div class="line" ref="line">
        <div class="line_task_point"></div>
      </div>
      <div class="start"  @click="autoClick"></div>
      <div class="start_title" @click="autoClick">
        开始播放
      </div>
      <div class="end" @click="next"></div>
      <div class="end_title" @click="next">
        往下切换
      </div>
      <div class="line_clum">
        <div class="item" v-for="(item, index) in years" :key="index">
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="last">
        <span>2020</span>
      </div>
    </div>
    <div class="main-map" v-if="threeDMap">
<!--      <iframe src="http://60.163.192.206:8000/srit3d/default.html" width="100%" height="100%"></iframe>-->
      <ThreeDMap/>
    </div>
    <div class="switch">
      <div class="button" :class="{'active': iconIndex === 1}" @click="changeMap(1)">卫星地图</div>
      <div class="button" :class="{'active': iconIndex === 2}" @click="changeMap(2)">2D地图</div>
      <div class="button" :class="{'active': iconIndex === 3}" @click="changeMap(3)" >3D地图</div>
    </div>
  </div>
</template>

<script>
import ThreeDMap from './ThreeDMap';
import './mark.scss';
import AMap from 'AMap';
import { getAreaStatisticsByYear } from '@/api/Overview/CityEvolution/api';
export default {
  name: 'CityEvolution',
  components: {
    ThreeDMap,
  },
  data() {
    return {
      threeDMap: false,
      iconIndex: 1,
      layers: [],

      years: [2015, 2016, 2017, 2018, 2019],
      map: null,
      mapDom: null,
      markList: [],
      marskLine: '',
      activeIndex: 0,
      timer: null,
      leftMarkMessage: [
        {
          name: '工业生产总值',
          count: 2345,
          unit: '亿元',
          position: [122.1202540000, 29.777613],
        },
        {
          name: '旅游收入',
          count: 2345,
          unit: '亿元',
          position: [122.1202540000, 29.737613],
        },
        {
          name: '户籍人口',
          count: 2345,
          unit: '人',
          position: [122.1502540000, 29.707613],
        },
      ],
      rightMarkMessage: [
        {
          name: '陆地面积',
          count: 2345,
          unit: '平方千米',
          position: [122.1100000000, 29.767613],
        },
        {
          name: 'GDP',
          count: 2345,
          unit: '亿元',
          position: [122.1100000000, 29.730613],
        },
        {
          name: '财政总收入',
          count: 2345,
          unit: '亿元',
          position: [122.136267, 29.701412],
        },
      ],
    };
  },
  mounted() {
    this.marskLine = this.$refs.line;
    this.layers =  [
      new AMap.TileLayer.Satellite(),
      new AMap.TileLayer.RoadNet()
    ];
    this.initMap();
    this.map.add(this.layers);
    this.autoClick();
    this.getData();
  },
  methods: {
    changeMap(type) {
      this.iconIndex = type;
      if (type === 1) {
        this.marskLine = this.$refs.line;
        this.initMap();
        this.threeDMap = false;
        this.map.add(this.layers);
        this.autoClick();
        this.getData();
      } else if( type === 3) {
        this.threeDMap = true;
      } else {
        this.marskLine = this.$refs.line;
        this.initMap();
        this.threeDMap = false;
        this.map.remove(this.layers);
        this.autoClick();
        this.getData();
      }
    },
    getData() {
      const year = (this.activeIndex < this.years.length) ? (this.years[this.activeIndex]) : (this.years[this.activeIndex - 1] + 1);
      getAreaStatisticsByYear().request({ year: year }).then((res) => {
        this.leftMarkMessage[0].count = res.gysczz || '暂无数据';
        this.leftMarkMessage[1].count = res.lysr || '暂无数据';
        this.leftMarkMessage[2].count = res.hjrk || '暂无数据';
        // 陆地面积
        this.rightMarkMessage[0].count = res.ldmj || '暂无数据';
        this.rightMarkMessage[1].count = res.gdp || '暂无数据';
        if (!res.gdp) {
          this.rightMarkMessage[1].unit = '';
        } else {
          this.rightMarkMessage[1].unit = '亿元';
        }
        this.rightMarkMessage[2].count = res.czzsr || '暂无数据';
        this.markerDownList();
      });
    },
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 13,
        zooms: [3, 20],
        zoomEnable: true,
        center: [122.138836, 29.730147],
        // layers: [
        //   new AMap.TileLayer.Satellite(),
        //   new AMap.TileLayer.RoadNet(),
        // ],
        mapStyle: 'amap://styles/fd920fcbd2be012ec26b3d6f90c39f09',
      });
    },
    markerDownList() {
      this.markList.forEach((item) => {
        this.map.remove(item);
      });
      this.markList = [];
      this.leftMarkMessage.forEach((item) => {
        this.makeLeftMarker(item);
      });
      this.rightMarkMessage.forEach((item) => {
        this.makeRightMarker(item);
      });
    },
    autoClick() {
      this.activeIndex = 0;
      this.lineTask(this.activeIndex); // 进度条
      this.autoPlay();
    },
    autoPlay() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.paly();
        this.autoPlay();
      }, 3 * 1000);
    },
    paly() {
      if (this.activeIndex >= this.years.length) {
        this.activeIndex = -1;
        // return;
      }
      this.activeIndex += 1;
      this.getData();
      this.lineTask(this.activeIndex); // 进度条
    },
    markLeftContent(message) {
      return `
        <div class='mark_wrapper_left'>
          <img class='mark_img_bg' src="${require('./img/mark_left.png')}" style=''></img>
          <div class='mark_address'>六横</div>
          <div class='mark_title'>${message.name}</div>
          <div class='mark_count'>
            <span>${message.count}</span>
            <span class='unit'>
              ${message.unit}
            </span>
          </div>
        </div>`;
    },
    makeLeftMarker(message) {
      const content = this.markLeftContent(message);
      const marker = new AMap.Marker({
        position: message.position,
        offset: new AMap.Pixel(-890, 0),
        content: content,
      });
      marker.setMap(this.map);
      this.markList.push(marker);
    },
    markRightContent(message) {
      return `
        <div class='mark_wrapper_right'>
          <img class='mark_img_bg' src="${require('./img/mark_right.png')}" style=''></img>
          <div class='mark_address'>六横</div>
          <div class='mark_title'>${message.name}</div>
          <div class='mark_count'>
            <span>${message.count}</span>
            <span class='unit'>
              ${message.unit}
            </span>
          </div>
        </div>`
      ;
    },
    makeRightMarker(message) {
      const content = this.markRightContent(message);
      const marker = new AMap.Marker({
        position: message.position,
        offset: new AMap.Pixel(0, 0),
        content: content,
      });
      marker.setMap(this.map);
      this.markList.push(marker);
    },
    lineTask(index) {
      this.marskLine.style.width = (1035 / this.years.length) * index + 'px';
    },
    next() {
      clearTimeout(this.timer);
      if (this.activeIndex === this.years.length) {
        this.activeIndex = 0;
        this.lineTask(this.activeIndex); // 进度条
      } else {
        this.activeIndex += 1;
        this.lineTask(this.activeIndex); // 进度条
      }
      this.getData();
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
    height: 1350px;
  }
  .swipper {
    width: 1400px;
    height: 140px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    background: url('./img/map_swrapper.png') no-repeat;
    background-size: 100% 100%;
    z-index: 9999999;
    .line {
      width: 1035px;
      height: 4px;
      position: absolute;
      top: 39px;
      left: 183px;
      background: #77FFFF;
      .line_task_point {
        position: absolute;
        top: -11px;
        right: -10px;
        height: 25px;
        width: 25px;
        background: url('./img/now.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .start {
      height: 25px;
      width: 25px;
      background: url('./img/start.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: 110px;
      top: 30%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
    .end {
      height: 25px;
      width: 25px;
      background: url('./img/end.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      right: 90px;
      top: 30%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
    .start_title {
      height: 25px;
      background-size: 100% 100%;
      position: absolute;
      left: 112px;
      top: 50%;
      font-size: 18px;
      transform: translate(-50%, -50%);
      color: white;
      cursor: pointer;
      z-index: 10000000;
    }
    .end_title {
      height: 25px;
      background-size: 100% 100%;
      position: absolute;
      right: 42px;
      top: 50%;
      font-size: 18px;
      transform: translate(-50%, -50%);
      color: white;
      cursor: pointer;
    }
    .line_clum {
      width: 1035px;
      height: 30px;
      position: absolute;
      top: 70px;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      .item {
        flex: 1;
        text-anchor: left;
        height: 100%;
        color: white;
        span {
          font-size: 18px;
          position: relative;
          color: white;
          left: -20px;
        }
      }
    }
    .last {
      position: absolute;
      width: 50px;
      top: 70px;
      right: 160px;
      transform: translate(0%, -50%);
      font-size: 18px;
      color: white;
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
