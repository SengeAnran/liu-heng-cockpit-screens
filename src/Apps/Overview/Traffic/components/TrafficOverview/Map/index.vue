<template>
  <div>
    <Map>
      <AGeoJSON v-if="activeItem === '长途客运'" key="bus-points" :source="busStation" :geoStyle="{ marker: busStyle }">
        <template v-slot:popup="feature">
          <PointPopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON v-if="activeItem === '岛屿'" key="wharf-points" :source="wharf" :geoStyle="{ marker: wharfStyle }">
        <template v-slot:popup="feature">
          <PointPopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON v-if="activeItem === '码头'" key="island-points" :source="island" :geoStyle="{ marker: islandStyle }">
        <template v-slot:popup="feature">
          <PointPopup :feature="feature" />
        </template>
      </AGeoJSON>
      <template v-if="activeItem === '县道'">
        <AGeoJSON key="line1" :source="line1" :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }">
          <template v-slot:popup="feature">
            <LinePopup :feature="feature" />
          </template>
        </AGeoJSON>
        <AGeoJSON key="line2" :source="line2" :geoStyle="{ polyline: { strokeColor: 'rgb(255, 203, 0)' } }">
          <template v-slot:popup="feature">
            <LinePopup :feature="feature" />
          </template>
        </AGeoJSON>
        <AGeoJSON key="line3" :source="line3" :geoStyle="{ polyline: { strokeColor: 'rgb(255, 75, 215)' } }">
          <template v-slot:popup="feature">
            <LinePopup :feature="feature" />
          </template>
        </AGeoJSON>
        <AGeoJSON key="line4" :source="line4" :geoStyle="{ polyline: { strokeColor: 'rgb(0, 125, 255)' } }">
          <template v-slot:popup="feature">
            <LinePopup :feature="feature" />
          </template>
        </AGeoJSON>
      </template>
    </Map>
    <div class="map-legend">
      <h3>交通运营图例</h3>
      <ul>
        <li
          v-for="(item) in list"
          :key="item"
          @click="change(item)"
          :class="{ active: activeItem === item }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import PointPopup from './PointPopup';
import LinePopup from './LinePopup';
import line1 from './line1.json';
import line2 from './line2.json';
import line3 from './line3.json';
import line4 from './line4.json';
import { wharf, busStation, island } from './data';

export default {
  data() {
    const list = [
      '岛屿',
      '码头',
      '长途客运',
      '县道',
      '公交车',
      // '公交车',
      // '出租车',
      // '码头',
      // '长途客运',
      // '维修厂',
    ];
    return {
      list,
      activeItem: list[0],
      wharf: Object.freeze(wharf),
      busStation: Object.freeze(busStation),
      island: Object.freeze(island),
      line1: Object.freeze(line1),
      line2: Object.freeze(line2),
      line3: Object.freeze(line3),
      line4: Object.freeze(line4),
      wharfStyle: Object.freeze({
        content: '<div style="width: 6rem; height: 6rem;" class="wharf-point-afhwa"></div>',
      }),
      busStyle: Object.freeze({
        content: '<div style="width: 6rem; height: 6rem;" class="bus-point-afhwa"></div>',
      }),
      islandStyle: Object.freeze({
        content: '<div style="width: 6rem; height: 6rem;" class="island-point-afhwa"></div>',
      }),
    };
  },
  methods: {
    change(item) {
      this.activeItem = item;
    },
  },
  components: {
    Map,
    // Line1,
    AGeoJSON,
    LinePopup,
    PointPopup,
  },
};
</script>
<style lang="scss" scoped>
.map-legend {
  width: 27.4rem;
  height: 38.1rem;
  position: absolute;
  left: 332rem;
  top: 92rem;
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
    color: #FFFFFF;
    cursor: pointer;
    &.active {
      &::before {
        background: #FDEF8E;
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
      border: 0.3rem solid #9BFCFD;
      background: rgba(155, 252, 253, 0.3);
    }
  }
}
</style>
<style lang="scss">
.wharf-point-afhwa {
  background: url('./img/wharf.png') no-repeat;
  background-size: 100% 100%;
}
.bus-point-afhwa {
  background: url('./img/bus.png') no-repeat;
  background-size: 100% 100%;
}
.island-point-afhwa {
  background: url('./img/island.png') no-repeat;
  background-size: 100% 100%;
}
</style>
