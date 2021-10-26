<template>
  <div>
    <Map ref="trafficMap">
      <AGeoJSON
        v-if="activeItem === '台台线'"
        key="line4"
        :source="line4"
        :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }"
      >
        <template v-slot:popup="feature">
          <LinePopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON
        v-if="activeItem === '外涨线'"
        key="line1"
        :source="line1"
        :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }"
      >
        <template v-slot:popup="feature">
          <LinePopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON
        v-if="activeItem === '大梅线'"
        key="line2"
        :source="line2"
        :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }"
      >
        <template v-slot:popup="feature">
          <LinePopup :feature="feature" />
        </template>
      </AGeoJSON>
      <AGeoJSON
        v-if="activeItem === '孙干线'"
        key="line3"
        :source="line3"
        :geoStyle="{ polyline: { strokeColor: 'rgb(135, 227, 0)' } }"
      >
        <template v-slot:popup="feature">
          <LinePopup :feature="feature" />
        </template>
      </AGeoJSON>
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
    </Map>
    <div class="map-legend">
      <h3>交通运营图例</h3>
      <ul>
        <li v-for="item in list" :key="item" @click="change(item)" :class="{ active: activeItem === item }">
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
  </div>
</template>
<script>
import Map from '@/components/AMap';
import AGeoJSON from '@/components/AMap/AGeoJSON';
import PointPopup from './PointPopup';
import points from './mock.json';
import points2 from './points2.json';
import LinePopup from '../../TrafficOverview/Map/LinePopup';
// import LinePopup from './LinePopup';
import line1 from './line1.json';
import line2 from './line2.json';
import line3 from './line3.json';
import line4 from './line4.json';
import tunnel from './tunnel.json';
import {
  getStatistics,
} from '@/api/Overview/Traffic';

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
      list,
      statisticsList,
      activeItem: '台台线',
      points: Object.freeze(points),
      points2: Object.freeze(points2),
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
      line1: Object.freeze(line1),
      line2: Object.freeze(line2),
      line3: Object.freeze(line3),
      line4: Object.freeze(line4),
      tunnel: Object.freeze(tunnel),
    };
  },
  mounted() {
    this.getStatistics();
  },
  methods: {
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
    change(item) {
      this.activeItem = item;
    },
    // 交通畅行---公交桥隧---地图线路方法
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
