<template>
  <div>
    <Map>
      <AGeoJSON key="bus-points" :source="points" :geoStyle="{ marker: markerStyle }">
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
  </div>
</template>
<script>
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import PointPopup from './PointPopup';
import points from './mock.json';

export default {
  data() {
    const list = [
      '公交车',
      '出租车',
      '码头',
      '长途客运',
      '维修厂',
    ];
    return {
      list,
      activeItem: list[0],
      points: Object.freeze(points),
      markerStyle: Object.freeze({
        content: '<div style="width: 2rem; height: 2rem; border: 0.8rem solid #FDF17950; background: #FDF179; background-clip: content-box; border-radius: 50%;"></div>',
        offset: new AMap.Pixel(-18, -18),
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
    AGeoJSON,
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
