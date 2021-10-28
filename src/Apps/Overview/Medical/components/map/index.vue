<template>
  <div class="map_wrapper">
    <div class="mask"></div>
    <Map2d :activeItem="activeItem" v-show="!threeDMap"/>
    <div class="main-map" v-show="threeDMap">
      <iframe src="http://60.163.192.206:8000/srit3d/default.html" width="100%" height="100%"></iframe>
    </div>
    <div class="switch">
      <div class="button" :class="{ active: !threeDMap }" @click="changeMap(2)">2D地图</div>
      <div class="button" :class="{ active: threeDMap }" @click="changeMap(3)">3D地图</div>
    </div>
    <div class="map-legend">
      <p class="legend-title">医院图例</p>
      <ul class="legend-list">
        <li v-for="(item, index) in list" :key="index" @click="selectMark(item)">
          <div class="main-label-wrap">
            <span class="select-rect">
              <span class="selected-inner" v-show="activeItem === item"></span>
            </span>
            {{ item }}
          </div>
          <ul v-if="item.children" class="legend-children-list">
            <li v-for="(item2, index2) in item.children" :key="index2" @click="selectMark(item2)">
              <div class="main-label-wrap">
                <span class="select-rect">
                  <span class="selected-inner" v-show="activeItem === item"></span>
                </span>
                {{ item2.label }}
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Map2d from './Map2d';
import {
  getLocationList,
} from '@/api/IndexItem';
export default {
  name: 'CityEvolution',
  components: {
    Map2d,
  },
  data() {
    return {
      list: [],
      map: null,
      mapLayer: null,
      markerLayer: null,
      mapDom: null,
      currentLegend: 1,
      lastDetailMarker: null,
      threeDMap: false,
      activeItem: '',
    };
  },
  mounted() {
    this.getClassDate();
  },
  methods: {
    changeMap(type) {
      if (type === 3) {
        this.threeDMap = true;
      } else {
        this.threeDMap = false;
      }
    },
    // 获得图例弹窗数
    async getClassDate() {
      const res = await getLocationList({ type: '医疗' }).request();
      this.list = res;
      this.selectMark(res[0], 0);
    },
    selectMark(item, index) {
      this.activeItem = item;
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
  .map-legend {
    position: absolute;
    z-index: 10;
    top: 98.6rem;
    right: 37%;
    width: 32.4rem;
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
}
</style>
