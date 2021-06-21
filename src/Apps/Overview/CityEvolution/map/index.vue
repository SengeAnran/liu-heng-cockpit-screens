<template>
  <div class="map_wrapper" >
    <div class="mask"></div>
    <div class="main-map" ref="map"></div>
    <div class="swipper">
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
        <div class="item">
          <span>2000</span>
        </div>
        <div class="item">
          <span>2005</span>
        </div>
        <div class="item">
          <span>2010</span>
        </div>
        <div class="item">
          <span>2015</span>
        </div>
      </div>
      <div class="last">
        <span>2020</span>
      </div>
    </div>
  </div>
</template>

<script>
import './mark.scss';
import AMap from 'AMap';
import { getMapData } from '@/api/Overview/CityEvolution/api';
export default {
  name: 'CityEvolution',
  components: {
  },
  data() {
    return {
      map: null,
      mapDom: null,
      markList: [],
      marskLine: '',
      activeIndex: 0,
      timer: null,
      leftMarkMessage: [
        {
          name: '常驻人口',
          count: 2345,
          unit: '人',
          position: [122.1902540000, 29.797613],
        },
        {
          name: '流动人口',
          count: 2345,
          unit: '人',
          position: [122.2002540000, 29.767613],
        },
        {
          name: '户籍人口',
          count: 2345,
          unit: '人',
          position: [122.2202540000, 29.727613],
        },
      ],
      rightMarkMessage: [
        {
          name: '陆地面积',
          count: 2345,
          unit: '平方千米',
          position: [122.0502540000, 29.787613],
        },
        {
          name: 'GDP',
          count: 2345,
          unit: '万元',
          position: [122.0602540000, 29.757613],
        },
        {
          name: '企业数量',
          count: 2345,
          unit: '家',
          position: [122.0682540000, 29.707613],
        },
      ],
    };
  },
  mounted() {
    this.marskLine = this.$refs.line;
    this.initMap();
    this.autoClick();
    this.getData();
  },
  methods: {
    getData() {
      const year = (this.activeIndex * 5 + 2000) + '';
      getMapData().request({ year: year }).then((res) => {
        if (res.length) {
          this.leftMarkMessage[0].count = res[0].czrk;
          this.leftMarkMessage[1].count = res[0].ldrk;
          this.leftMarkMessage[2].count = res[0].hjrk;
          // 陆地面积
          this.rightMarkMessage[0].count = res[0].ldmj;
          this.rightMarkMessage[1].count = res[0].gdp;
          this.rightMarkMessage[2].count = res[0].qysl;
        } else {
          this.leftMarkMessage[0].count = '暂无数据';
          this.leftMarkMessage[1].count = '暂无数据';
          this.leftMarkMessage[2].count = '暂无数据';
          // 陆地面积
          this.rightMarkMessage[0].count = '暂无数据';
          this.rightMarkMessage[1].count = '暂无数据';
          this.rightMarkMessage[2].count = '暂无数据';
        }
        this.markerDownList();
      });
    },
    initMap() {
      this.mapDom = this.$refs.map;
      this.map = new AMap.Map(this.mapDom, {
        resizeEnable: true,
        zoom: 13.4,
        zoomEnable: false,
        center: [122.200254, 29.707613],
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
      }, 5 * 1000);
    },
    paly() {
      if (this.activeIndex >= 4) {
        return;
      }
      this.activeIndex += 1;
      this.getData();
      this.lineTask(this.activeIndex); // 进度条
    },
    makeLeftMarker(message) {
      const content = `
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
        </div>`
      ;
      const marker = new AMap.Marker({
        position: message.position,
        content: content,
      });
      marker.setMap(this.map);
      this.markList.push(marker);
    },
    makeRightMarker(message) {
      const content = `
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
      const marker = new AMap.Marker({
        position: message.position,
        content: content,
      });
      marker.setMap(this.map);
      this.markList.push(marker);
    },
    lineTask(index) {
      this.length = 4;
      this.marskLine.style.width = (1035 / 4) * index + 'px';
    },
    next() {
      clearTimeout(this.timer);
      if (this.activeIndex === 4) {
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
    height: 2070px;
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
}
</style>
<style lang="scss">
</style>
