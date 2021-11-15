<template>
  <div>
    <div class="main-map">
      <Map  :satelliteMap="satelliteMap" v-show="!threeDMap" ref="trafficMap">
        <AGeoJSON
          v-if="activeItem === '隧道'"
          key="tunnel"
          :source="tunnel"
          :geoStyle="{ polyline: { strokeColor: 'rgb(0, 255, 124)' } }"
        >
          <template v-slot:popup="feature">
            <LinePopup :feature="feature" />
          </template>
        </AGeoJSON>
        <AGeoJSON v-if="activeItem === '桥梁'" key="bridge-points" :source="points" :geoStyle="{ marker: bridgeStyle }">
          <template v-slot:popup="feature">
            <PointPopup :feature="feature" />
          </template>
        </AGeoJSON>
        <AGeoJSON
          v-if="activeItem === '公路隐患点'"
          key="pitfalls-points"
          :source="points2"
          :geoStyle="{ marker: pitfallsStyle }"
        >
          <template v-slot:popup="feature">
            <PointPopup :feature="feature" />
          </template>
        </AGeoJSON>
        <AGeoJSON
          v-if="lineKey"
          key="line"
          :source="line"
          :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }"
        >
          <template v-slot:popup="feature">
            <LinePopup :feature="feature" />
          </template>
        </AGeoJSON>
      </Map>
      <div class="map" v-if="threeDMap">
        <!--      <iframe src="http://60.163.192.206:8000/srit3d/default.html" width="100%" height="100%"></iframe>-->
        <ThreeDMap
          :dataList="threeDDataList"
          :tipTemplate="tipTemplate"
          :multiLineList="multiLineList"
          title=""
          :Scale="Scale"
        />
      </div>
      <div class="map-legend">
        <h3>交通运营图例</h3>
        <ul>
          <li v-for="(item, index) in list" :key="item" @click="selectMark(item, index)" :class="{ active: activeItem === item }">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="map-Statistics">
        <div class="item" v-for="(item, index) in statisticsList" :key="index">
          <div class="item-top">{{ item.name }}</div>
          <div class="item-bottom" :style="{ color: item.color }">
            <div class="item-bottom-left bottom-item">
            <span>{{ item.number }}</span
            >{{ item.unit }}
            </div>
            <div class="item-bottom-right bottom-item">
            <span>{{ item.length }}</span
            >{{ item.lengthUnit }}
            </div>
          </div>
        </div>
      </div>
      <div class="switch">
        <div class="button" :class="{'active': iconIndex === 1}" @click="changeMap(1)">卫星地图</div>
        <div class="button" :class="{'active': iconIndex === 2}" @click="changeMap(2)">2D地图</div>
        <div class="button" :class="{'active': iconIndex === 3}" @click="changeMap(3)" >3D地图</div>
      </div>
    </div>

  </div>
</template>
<script>
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import PointPopup from './PointPopup';
import LinePopup from '../../TrafficOverview/Map/LinePopup';
import {
  getStatistics,
} from '@/api/Overview/Traffic';
import {
  getLocationList,
  getLocationInfo,
} from '@/api/IndexItem';
export default {
  data() {
    const list = ['台台线', '外涨线', '大梅线', '孙干线', '隧道', '桥梁', '公路隐患点'];
    const statisticsList = [
      {
        name: '县道',
        number: '4',
        length: '61.991',
        unit: '条',
        lengthUnit: '公里',
        color: '#7DF5E9',
      },
      {
        name: '隧道',
        number: '9',
        length: '4217',
        unit: '条',
        lengthUnit: '米',
        color: '#7DF5E9',
      },
      {
        name: '村道',
        number: '90',
        length: '109.683',
        unit: '条',
        lengthUnit: '公里',
        color: '#87B3FA',
      },
      {
        name: '桥梁',
        number: '27',
        length: '637.2',
        unit: '条',
        lengthUnit: '米',
        color: '#87B3FA',
      },
    ];
    return {
      threeDMap: false,
      iconIndex: 1, // 图层切换按钮
      satelliteMap: true,

      threeDDataList: [],
      multiLineList: [],
      tipTemplate: {},
      Scale: 37.7,

      list,
      statisticsList,
      activeItem: '',
      activeItem1: list[0],
      lineKey: false,
      lineName: {
        台台线: true,
        外涨线: true,
        大梅线: true,
        孙干线: true,
        隧道: false,
        桥梁: false,
        公路隐患点: false,
      },
      markerStyle: Object.freeze({
        content:
          '<div style="width: 2rem; height: 2rem; border: 0.8rem solid #FDF17950; background: #FDF179; background-clip: content-box; border-radius: 50%;"></div>',
        offset: new AMap.Pixel(-18, -18),
      }),
      bridgeStyle: Object.freeze({
        content: '<div style="width: 6rem; height: 6rem;" class="bridge-point-afhwa"></div>',
      }),
      pitfallsStyle: Object.freeze({
        content: '<div style="width: 6rem; height: 6rem;" class="pitfalls-point-afhwa"></div>',
      }),
      line: {},
      tunnel: {},
      points: {},
      points2: {},
    };
  },
  mounted() {
    this.getStatistics();
    this.getClassDate();
  },
  methods: {
    changeMap(type) {
      this.iconIndex = type;
      if (type === 3) {
        this.threeDMap = true;
      } else if (type === 2) {
        this.satelliteMap = false;
        this.threeDMap = false;
      } else {
        this.satelliteMap = true;
        this.threeDMap = false;
      }
    },
    // 公路桥隧
    async getStatistics() {
      const res = await getStatistics();
      res.forEach((item) => {
        if (item.type === '桥梁') {
          this.statisticsList[3].number = item.count;
          this.statisticsList[3].length = parseFloat(item.length);
          // this.bridgeStatistics.unit = item.unit;
        } else if (item.type === '隧道') {
          this.statisticsList[1].number = item.count;
          this.statisticsList[1].length = parseFloat(item.length);
          // this.tunnelStatistics.unit = item.unit;
        } else if (item.type === '县道') {
          this.statisticsList[0].number = item.count;
          this.statisticsList[0].length = parseFloat(item.length);
          // this.tunnelStatistics.unit = item.unit;
        } else {
          this.statisticsList[2].number = item.count;
          this.statisticsList[2].length = parseFloat(item.length);
          // this.tunnelStatistics.unit = item.unit;
        }
      });
    },
    // 获得图例弹窗数据
    async getClassDate() {
      const res = await getLocationList({ type: '公路桥隧' }).request();
      this.list = res;
      this.selectMark(res[0], 0);
    },
    selectMark(item, index) {
      this.activeItem1 = item;
      this.threeDDataList = [];
      this.multiLineList = [];
      this.getData(item);
    },
    async getData(item) {
      const res = await getLocationInfo({ type: item }).request();
      const data = {
        type: 'FeatureCollection',
        features: [],
      };
      res.map((item) => {
        data.features.push({
          type: 'Feature',
          properties: {
            name: item.locationName,
          },
          geometry: {
            type: item.geoType,
            // type: 'MultiLineString',
            coordinates: JSON.parse(item.geoCoord),
          },
        });
      });
      console.log(data);
      switch (this.activeItem1) {
        case '隧道': {
          this.tunnel = data;
          this.lineKey = false;
          break;
        }
        case '桥梁': {
          this.points = data;
          this.lineKey = false;
          break;
        }
        case '公路隐患点': {
          this.points2 = data;
          this.lineKey = false;
          break;
        }
        default: this.line = data; this.lineKey = true;
      }
      this.activeItem = item;
      this.initThreeDData(res);
      console.log(this.lineName[this.activeItem]);
      // console.log(this.line);
      // this.markDown();
    },
    // 交通畅行---公交桥隧---地图线路方法
    initThreeDData(data){
      // console.log(data)
      this.Scale =data.length > 1? 1.3:37.7
      if (data) {
        data.forEach((item,index) => {
          const MapLngLat = JSON.parse(item.geoCoord);
          let listItem = {}
          let tipTemplates = {}
          item.popupList.forEach((item2) => {
            listItem[item2.title] = item2.value;
            tipTemplates[item2.title] = item2.title;
          })
          if ( index === 0) {
            this.tipTemplate = {
              '地点名称': '地点名称',
              ...tipTemplates,
            };
          }
          if (item.geoType === 'MultiLineString') {
            this.multiLineList.push({
              points: MapLngLat,
              地点名称: item.locationName,
              ...listItem,
            });
          } else {
            this.threeDDataList.push({
              x: MapLngLat[0],
              y: MapLngLat[1],
              z: 0,
              地点名称: item.locationName,
              ...listItem,
            });
          }
        });
      }
      console.log(this.multiLineList);
      console.log(this.tipTemplate);
    },
  },
  components: {
    Map,
    AGeoJSON,
    LinePopup,
    PointPopup,
  },
};
</script>
<style lang="scss" scoped>
.main-map {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 135rem;
  .map {
    &::after {
      position: absolute;
      content: ' ';
      top: 0;
      left: 0;
      width: 100%;
      height: 207rem;
      pointer-events: none;
      background: url('./img/mask_bg.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
.map-legend {
  width: 27.4rem;
  height: 49.1rem;
  position: absolute;
  left: 332rem;
  top: 77rem;
  background: url('./img/legend.png') no-repeat;
  background-size: 100% 100%;
  padding-left: 4.2rem;
  h3 {
    margin: 3rem 0 0 0;
    color: #fff;
    font-size: 2.8rem;
    font-family: Source Han Sans CN;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    height: 6rem;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 5rem;
    font-size: 2.6rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    cursor: pointer;
    &.active {
      &::before {
        background: #fdef8e;
        background-clip: content-box;
      }
    }
    &::before {
      position: absolute;
      left: 0;
      box-sizing: border-box;
      content: ' ';
      width: 2.7rem;
      height: 2.7rem;
      padding: 0.3rem;
      border-radius: 0.4rem;
      border: 0.3rem solid #9bfcfd;
      background: rgba(155, 252, 253, 0.3);
    }
  }
}
.switch {
  width: 374px;
  height: 360px;
  position: absolute;
  top: 128rem;
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
.map-Statistics {
  width: 705px;
  height: 299px;
  position: absolute;
  left: 2063px;
  top: 1000px;
  background: url('./img/zpsjbj.png') no-repeat;
  background-size: 100% 100%;
  padding-left: 4.2rem;
  padding-top: 4rem;
  font-size: 2.6rem;
  color: white;
  display: flex;
  flex-flow: wrap;
  .item {
    height: 147px;
    width: 45%;

    padding-left: 30px;
    .item-top {
      font-size: 32px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #ffffff;
      position: relative;
      &::before {
        position: absolute;
        content: ' ';
        top: 50%;
        left: -30px;
        transform: translateY(-50%);
        width: 22px;
        height: 17px;
        background: url('./img/sjtb.png');
        background-size: 100% 100%;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50px;
        display: block;
        width: 257px;
        height: 1px;
        background: #82e2e4;
        opacity: 0.3;
      }
    }
    .item-bottom {
      width: 257px;
      display: flex;
      height: 46px;
      line-height: 87px;
      justify-content: space-between;
      .bottom-item {
        //width: 50%;
        span {
          font-size: 32px;
          font-family: Oswald;
          display: inline-block;
          margin: 0 4px;
          font-weight: 500;
        }
      }
      .item-bottom-left {
        width: 29%;
      }
      .item-bottom-right {
      }
    }
  }
  //tr{
  //  height: 5rem;
  //}
}
</style>
<style lang="scss">
.bridge-point-afhwa {
  background: url('./img/ql.svg') no-repeat;
  background-size: 100% 100%;
}
.wharf-point-afhwa {
  background: url('./img/mt.png') no-repeat;
  background-size: 100% 100%;
}
.pitfalls-point-afhwa {
  background: url('./img/yhd.png') no-repeat;
  background-size: 100% 100%;
}
</style>
