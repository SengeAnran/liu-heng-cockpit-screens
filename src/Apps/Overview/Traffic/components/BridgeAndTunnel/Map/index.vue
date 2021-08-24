<template>
  <div>
    <Map>
      <AGeoJSON v-if="activeItem === '台台线'" key="line4" :source="line4" :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }">
        <template v-slot:popup="feature">
          <LinePopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON v-if="activeItem === '外涨线'" key="line1" :source="line1" :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }">
        <template v-slot:popup="feature">
          <LinePopup :feature="feature" />
        </template>
      </AGeoJSON>
        <AGeoJSON v-if="activeItem === '大梅线'" key="line2" :source="line2" :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }">
        <template v-slot:popup="feature">
          <LinePopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON v-if="activeItem === '孙干线'" key="line3" :source="line3" :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }">
        <template v-slot:popup="feature">
          <LinePopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON v-if="activeItem === '隧道'" key="tunnel" :source="tunnel" :geoStyle="{ polyline: { strokeColor: 'rgb(0, 255, 124)' } }">
        <template v-slot:popup="feature">
          <LinePopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON v-if="activeItem === '桥梁'" key="bus-points" :source="points" :geoStyle="{ marker: markerStyle }">
        <template v-slot:popup="feature">
          <PointPopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON v-if="activeItem === '公路隐患点'" key="bus-points" :source="points2" :geoStyle="{ marker: markerStyle }">
        <template v-slot:popup="feature">
          <PointPopup :feature="feature" />
        </template>
      </AGeoJSON>
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
    <div class="map-Statistics">
      <table>
        <tr v-for="(item, index) in statisticsList" :key="index">
          <td style="width: 10rem">{{item.name}}</td>
          <td style="width: 12rem">{{item.number}}</td>
          <td>{{item.length}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import PointPopup from './PointPopup';
import points from './mock.json';
import points2 from './points2.json';

// import LinePopup from '../../TrafficOverview/Map/LinePopup';
import LinePopup from './LinePopup';
import line1 from './line1.json';
import line2 from './line2.json';
import line3 from './line3.json';
import line4 from './line4.json';
import tunnel from './tunnel.json';

export default {
  data() {
    const list = [
      '台台线',
      '外涨线',
      '大梅线',
      '孙干线',
      '隧道',
      '桥梁',
      '公路隐患点',
    ];
    const statisticsList = [
      {
        name: '县道',
        number: '共4条',
        length: '总长61.991公里',
      },
      {
        name: '村道',
        number: '共90条',
        length: '总长109.683公里',
      },
      {
        name: '隧道',
        number: '共9条',
        length: '总长4217米',
      },
      {
        name: '桥梁',
        number: '共27座',
        length: '总长637.2米',
      },
    ];
    return {
      list,
      statisticsList,
      activeItem: list[0],
      points: Object.freeze(points),
      points2: Object.freeze(points2),
      markerStyle: Object.freeze({
        content: '<div style="width: 2rem; height: 2rem; border: 0.8rem solid #FDF17950; background: #FDF179; background-clip: content-box; border-radius: 50%;"></div>',
        offset: new AMap.Pixel(-18, -18),
      }),
      line1: Object.freeze(line1),
      line2: Object.freeze(line2),
      line3: Object.freeze(line3),
      line4: Object.freeze(line4),
      tunnel: Object.freeze(tunnel),
    };
  },
  methods: {
    change(item) {
      this.activeItem = item;
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
.map-legend {
  width: 27.4rem;
  height: 49.1rem;
  position: absolute;
  left: 332rem;
  top: 81rem;
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
.map-Statistics{
  width: 49rem;
  height: 24.1rem;
  position: absolute;
  left: 208rem;
  top: 106rem;
  background: url('./img/legend.png') no-repeat;
  background-size: 100% 100%;
  padding-left: 4.2rem;
  padding-top: 4rem;
  font-size: 2.6rem;
  color: white;
  tr{
    height: 5rem;
  }
}
</style>
