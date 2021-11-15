<template>
  <div class="map_wrapper">
    <div class="mask"></div>
    <Map2d
      :satelliteMap="satelliteMap"
      :markerList.sync="markerList"
      v-if="!threeDMap"
      @changePlace="changePlace"
    />
    <div class="main-map" v-if="threeDMap">
<!--      <iframe src="http://60.163.192.206:8000/srit3d/default.html" width="100%" height="100%"></iframe>-->
      <ThreeDMap
        :dataList="this.threeDDataList"
        :tipTemplate="this.tipTemplate"
        title="社区"
      />
    </div>
    <div class="switch">
      <div class="button" :class="{'active': iconIndex === 1}" @click="changeMap(1)">卫星地图</div>
      <div class="button" :class="{'active': iconIndex === 2}" @click="changeMap(2)">2D地图</div>
      <div class="button" :class="{'active': iconIndex === 3}" @click="changeMap(3)" >3D地图</div>
    </div>
    <div class="map-legend">
      <p class="legend-title">小区图例</p>
      <ul class="legend-list">
        <li v-for="(item, index) in legendList" :key="index" @click="selectLegend(item)">
          <div class="main-label-wrap">
            <span class="select-rect">
              <span class="selected-inner" v-show="currentLegend === item.value"></span>
            </span>
            {{ item.label }}
          </div>
<!--          <ul v-if="item.children" class="legend-children-list">-->
<!--            <li v-for="(item2, index2) in item.children" :key="index2" @click="selectLegend(item2)">-->
<!--              <div class="main-label-wrap">-->
<!--                <span class="select-rect">-->
<!--                  <span class="selected-inner" v-show="currentLegend === item.value"></span>-->
<!--                </span>-->
<!--                {{ item2.label }}-->
<!--              </div>-->
<!--            </li>-->
<!--          </ul>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import ThreeDMap from './ThreeDMap';
import Map2d from './Map2d';
import { getLocation } from '@/api/Charm/DigitCounty';
export default {
  name: 'CityEvolution',
  components: {
    Map2d,
    // ThreeDMap,
  },
  data() {
    return {
      map: null,
      mapLayer: null,
      markerLayer: null,
      mapDom: null,
      lastDetailMarker: null,
      threeDMap: false,
      iconIndex: 1, // 图层切换按钮
      satelliteMap: true,

      currentLegend: 1,
      legendList: [
        { value: 1, label: '数字村社' },
        // { value: 2, label: '田岙村' },
      ],
      // 这是一个坑，五星没有数据，传荷花小区 得到的是五星村的数据
      lanlat: {
        name: '五星村',
      },
      markerList: {
        type: 'FeatureCollection',
        features: [],
      },
      MapMaker: {},

      threeDDataList: [],
      tipTemplate: {},
    };
  },
  mounted() {
    this.getLocation();
  },
  methods: {
    changeMap(type) {
      this.iconIndex = type;
      if (type === 3) {
        this.threeDMap = true;
      } else if (type === 2){
        this.satelliteMap = false;
        this.threeDMap = false;
      } else {
        this.satelliteMap = true;
        this.threeDMap = false;
      }
    },
    selectLegend(item) {
      this.currentLegend = item.value;
      // this.getLocation(item.label);
    },
    async getLocation() {
      const result = await getLocation().request();
      if (result) {
        this.markerList.features = result.map((item) => {
          const MapLngLat = item.coordinates.split(',');
          return {
            type: 'Feature',
            properties: {
              name: item.sqmc,
              content: item.js,
            },
            geometry: {
              type: 'Point',
              coordinates: [MapLngLat[0], MapLngLat[1]],
            },
          };
        });
        this.initThreeDData(result);
      }
    },
    initThreeDData(data){
      // console.log(data)
      this.threeDDataList = data.map((item) => {
        const MapLngLat = item.coordinates.split(',');
        return {
          x: MapLngLat[0],
          y: MapLngLat[1],
          z: 0,
          社区名称: item.sqmc,
        }
      });
      console.log(this.threeDDataList);
      this.tipTemplate = {
        '社区名称': '社区名称',
      }
      // console.log(this.tipTemplate);
    },
    changePlace(name) {
      this.$emit('changePlace', name);
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
    height: 135rem;
  }
  .map-legend {
    position: absolute;
    z-index: 10;
    top: 90.6rem;
    right: 37%;
    width: 27.4rem;
    // height: 28.2rem;
    height: auto;
    background: url('./img/legend-bg.png') no-repeat 0 0;
    box-sizing: border-box;
    background-size: 100% 100%;
    color: #fff;
    padding: 3rem;
    .legend-title {
      margin: 0;
      font-size: 3.1rem;
    }
    .legend-list {
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 2.6rem;
      line-height: 2.2;
      li {
        .main-label-wrap {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
      }
      .legend-children-list {
        list-style: none;
        padding-left: 2rem;
      }
      .select-rect {
        display: inline-block;
        width: 3rem;
        height: 3rem;
        box-sizing: border-box;
        margin-right: 1.2rem;
        border: 0.3rem solid #9bfcfd;
        border-radius: 0.4rem;
        padding: 0.2rem;
        line-height: 0;
        .selected-inner {
          display: inline-block;
          width: 100%;
          height: 100%;
          background: #fdef8e;
          border-radius: 0.4rem;
        }
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
